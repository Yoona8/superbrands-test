import { Component } from '@angular/core';
import { ButtonAbstractComponent } from '../button-abstract/button-abstract.component';

@Component({
    selector: 'app-button-delete',
    templateUrl: './button-delete.component.html',
    styleUrls: ['./button-delete.component.css']
})
export class ButtonDeleteComponent extends ButtonAbstractComponent {}
