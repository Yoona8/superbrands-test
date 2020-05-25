import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManagersComponent } from './components/managers/managers.component';
import { ButtonAddComponent } from './components/shared/button-add/button-add.component';

@NgModule({
    declarations: [
        AppComponent,
        ManagersComponent,
        ButtonAddComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
