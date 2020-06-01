import { Injectable } from '@angular/core';
import { Manager } from '../models/manager.model';
// @ts-ignore
import * as managersData from '../../mocks/managers.json';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ManagersService {
    public managersChanged = new Subject<Manager[]>();
    private _managers: Array<Manager> = managersData.default;
    private _activeManagers: Array<Manager> = [];
    private _currentManager: Manager;

    getManagers() {
        return this._activeManagers;
    }

    setManager(id: string) {
        this._currentManager = this._activeManagers.find((manager) => manager.id === id);
    }

    getManager() {
        return this._currentManager;
    }

    addManager() {
        if (this._managers.length === 0) {
            return;
        }

        const addedManager = this._managers.shift();
        this._activeManagers.push(addedManager);
        this._currentManager = addedManager;

        return this._currentManager;
    }

    removeManager(manager) {
        const index = this._activeManagers.findIndex((item) => item === manager);

        if (index > 0) {
            this._currentManager = this._activeManagers[index - 1];
        } else {
            this._currentManager = this._activeManagers[index + 1];
        }

        if (manager.shops) {
            manager.shops.forEach((shop) => shop.managerId = null);
        }

        this._activeManagers.splice(index, 1);
        this._managers.push(manager);
        this.managersChanged.next(this._activeManagers);
    }

    addShop(shop) {
        if (!this._currentManager) {
            return;
        }

        shop.managerId = this._currentManager.id;

        if(this._currentManager.shops) {
            this._currentManager.shops.push(shop);
        } else {
            this._currentManager.shops = [shop];
        }
    }

    removeShop(shop) {
        shop.managerId = null;

        const shopIndex = this._currentManager.shops.findIndex((item) => item === shop);

        this._currentManager.shops.splice(shopIndex, 1);
    }
}
