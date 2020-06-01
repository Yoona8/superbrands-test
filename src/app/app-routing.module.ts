import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NoManagersComponent } from './components/no-managers/no-managers.component';
import { ManagerComponent } from './components/manager/manager.component';

const appRoutes: Routes = [
    { path: '', component: NoManagersComponent },
    { path: ':id', component: ManagerComponent },
    { path: '**', component: NoManagersComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
