import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManagersComponent } from './components/managers/managers.component';
import { ButtonAddComponent } from './components/shared/button-add/button-add.component';
import { ButtonCheckComponent } from './components/shared/button-check/button-check.component';

@NgModule({
    declarations: [
        AppComponent,
        ManagersComponent,
        ButtonAddComponent,
        ButtonCheckComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
