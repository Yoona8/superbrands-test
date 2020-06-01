import { Injectable } from '@angular/core';
import { Manager } from '../models/manager.model';
// @ts-ignore
import * as managersData from '../../mocks/managers.json';

@Injectable({providedIn: 'root'})
export class ManagersService {
    private managers: Array<Manager> = managersData.default;
    private currentManager: Manager;

    getManagers() {
        return this.managers.slice();
    }

    setManager(id: string) {
        this.currentManager = this.managers.find((manager) => manager.id === id);
    }

    getManager() {
        return this.currentManager;
    }

    addShop(shop) {
        if (!this.currentManager) {
            return;
        }

        shop.managerId = this.currentManager.id;

        if(this.currentManager.shops) {
            this.currentManager.shops.push(shop);
        } else {
            this.currentManager.shops = [shop];
        }
    }
}
