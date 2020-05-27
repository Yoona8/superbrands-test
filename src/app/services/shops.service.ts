import { Injectable } from '@angular/core';
import { Shop } from '../models/shop.model';
// @ts-ignore
import * as shopsData from '../../mocks/shops.json';

@Injectable({providedIn: 'root'})
export class ShopsService {
    private shops: Array<Shop> = shopsData.default;

    getShops() {
        console.log(this.shops[0].id);
        return this.shops.slice();
    }
}
