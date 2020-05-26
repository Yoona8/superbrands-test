import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManagersComponent } from './components/managers/managers.component';
import { ButtonAddComponent } from './components/shared/button-add/button-add.component';
import { ButtonCheckComponent } from './components/shared/button-check/button-check.component';
import { ShopsComponent } from './components/shops/shops.component';
import { ManagerComponent } from './components/shared/manager/manager.component';
import { ButtonDeleteComponent } from './components/shared/button-delete/button-delete.component';
import { AlertComponent } from './components/shared/alert/alert.component';
import { ShopComponent } from './components/shared/shop/shop.component';
import { ButtonMoveComponent } from './components/shared/button-move/button-move.component';
import { ButtonRemoveComponent } from './components/shared/button-remove/button-remove.component';

@NgModule({
    declarations: [
        AppComponent,
        ManagersComponent,
        ButtonAddComponent,
        ButtonCheckComponent,
        ButtonDeleteComponent,
        ButtonMoveComponent,
        ButtonRemoveComponent,
        ShopsComponent,
        ManagerComponent,
        AlertComponent,
        ShopComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
