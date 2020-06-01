import { Injectable } from '@angular/core';
import { Manager } from '../models/manager.model';
// @ts-ignore
import * as managersData from '../../mocks/managers.json';

@Injectable({providedIn: 'root'})
export class ManagersService {
    private managers: Array<Manager> = managersData.default;

    getManagers() {
        return this.managers.slice();
    }

    getManager(id: string) {
        return this.managers.find((manager) => manager.id === id);
    }
}
