import { Component, Input } from '@angular/core';
import { Shop } from '../../../models/shop.model';
import { ManagersService } from '../../../services/managers.service';
import { Manager } from '../../../models/manager.model';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css']
})
export class ShopComponent {
    @Input() assigned: boolean = false;
    @Input() shop: Shop;

    constructor(private managersService: ManagersService) {}

    onAddShop() {
        this.managersService.addShop(this.shop);
    }

    onRemoveShop() {
        this.managersService.removeShop(this.shop);
    }
}
