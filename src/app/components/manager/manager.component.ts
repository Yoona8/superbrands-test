import { Component, OnInit } from '@angular/core';
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
            this._manager = this.managersService.getManager(params['id']);
        });

        console.log(this._manager);
    }

    get manager() {
        return this._manager;
    }
}
