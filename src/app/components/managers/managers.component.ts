import { Component, OnInit } from '@angular/core';
import { ManagersService } from '../../services/managers.service';
import { Manager } from '../../models/manager.model';

@Component({
    selector: 'app-managers',
    templateUrl: './managers.component.html',
    styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit {
    private _managers: Array<Manager>;
    private _activeManagers: Array<Manager> = [];

    constructor(private managersService: ManagersService) {}

    ngOnInit(): void {
        this._managers = this.managersService.getManagers().slice();
    }

    get activeManagers() {
        return this._activeManagers;
    }

    onAddManager() {
        if (this._managers.length === 0) {
            return;
        }

        this._activeManagers.push(this._managers.shift());
    }
}
