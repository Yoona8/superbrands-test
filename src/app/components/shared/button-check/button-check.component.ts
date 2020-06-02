import { Component } from '@angular/core';
import { ButtonAbstractComponent } from '../button-abstract/button-abstract.component';

@Component({
    selector: 'app-button-check',
    templateUrl: './button-check.component.html',
    styleUrls: ['./button-check.component.css']
})
export class ButtonCheckComponent extends ButtonAbstractComponent {}
