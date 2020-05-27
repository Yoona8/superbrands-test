import { Component, OnInit } from '@angular/core';
import { ShopsService } from '../../services/shops.service';
import { Shop } from '../../models/shop.model';

@Component({
    selector: 'app-shops',
    templateUrl: './shops.component.html',
    styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {
    private _shops: Array<Shop>;

    constructor(private shopsService: ShopsService) {}

    ngOnInit(): void {
        this._shops = this.shopsService.getShops();
    }

    get unassignedShops() {
        return this._shops.filter((shop) => !shop.managerId);
    }
}
