import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Manager } from '../../models/manager.model';
import { ManagersService } from '../../services/managers.service';

@Component({
    selector: 'app-manager',
    templateUrl: './manager.component.html',
    styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
    private _manager: Manager;

    constructor(
        private route: ActivatedRoute,
        private managersService: ManagersService
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.managersService.setManager(params['id']);
            this._manager = this.managersService.getManager();
        });
    }

    get manager() {
        return this._manager;
    }

    onRemoveManager() {
        this.managersService.removeManager(this._manager);
    }
}
