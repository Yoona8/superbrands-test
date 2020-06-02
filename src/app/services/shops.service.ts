import { Injectable } from '@angular/core';
import { Shop } from '../models/shop.model';
// @ts-ignore
import * as shopsData from '../../mocks/shops.json';

@Injectable({providedIn: 'root'})
export class ShopsService {
    private _shops: Array<Shop> = shopsData.default;

    getShops() {
        return this._shops.slice();
    }

    getManagerIdsWithShopIds() {
        const managerIdsWithShopIds = [];

        this._shops.forEach((shop) => {
            if (shop.managerId) {
                const managerIdShopId = {
                    managerId: shop.managerId,
                    shopId: shop.id
                };

                managerIdsWithShopIds.push(managerIdShopId);
            }
        });

        return managerIdsWithShopIds;
    }
}
