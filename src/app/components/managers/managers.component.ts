import { Component, OnInit } from '@angular/core';
import { ManagersService } from '../../services/managers.service';
import { Manager } from '../../models/manager.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-managers',
    templateUrl: './managers.component.html',
    styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit {
    private _managers: Array<Manager>;
    private _activeManagers: Array<Manager> = [];

    constructor(
        private managersService: ManagersService,
        private router: Router
    ) {}

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

        const addedManager = this._managers.shift();
        this._activeManagers.push(addedManager);
        this.router.navigate([addedManager.id], { skipLocationChange: true });
    }
}
