import { Component } from '@angular/core';
import { ButtonAbstractComponent } from '../button-abstract/button-abstract.component';

@Component({
    selector: 'app-button-move',
    templateUrl: './button-move.component.html',
    styleUrls: ['./button-move.component.css']
})
export class ButtonMoveComponent extends ButtonAbstractComponent {}
