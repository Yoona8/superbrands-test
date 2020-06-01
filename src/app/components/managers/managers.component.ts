import { Component, OnDestroy, OnInit } from '@angular/core';
import { ManagersService } from '../../services/managers.service';
import { Manager } from '../../models/manager.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-managers',
    templateUrl: './managers.component.html',
    styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit, OnDestroy {
    private _activeManagers: Array<Manager> = [];
    private _currentManager: Manager;
    private _managersChanged: Subscription;

    constructor(
        private managersService: ManagersService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this._activeManagers = this.managersService.getManagers();

        this._managersChanged = this.managersService.managersChanged.subscribe((managers) => {
            this._activeManagers = managers;

            if (this._activeManagers.length === 0) {
                this.router.navigate([''], {skipLocationChange: true});
            }

            this._currentManager = this.managersService.getManager();

            if (this._currentManager) {
                this.router.navigate([this.managersService.getManager().id], {skipLocationChange: true});
            }
        });
    }

    ngOnDestroy(): void {
        this._managersChanged.unsubscribe();
    }

    get activeManagers() {
        return this._activeManagers;
    }

    onAddManager() {
        this._currentManager = this.managersService.addManager();

        if (this._currentManager) {
            this.router.navigate([this._currentManager.id], {skipLocationChange: true});
        }
    }
}
