import { Component, Input } from '@angular/core';
import { Shop } from '../../../models/shop.model';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css']
})
export class ShopComponent {
    @Input() assigned: boolean = false;
    @Input() shop: Shop;
}
