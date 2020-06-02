import { Component, Input } from '@angular/core';
import { ButtonAbstractComponent } from '../button-abstract/button-abstract.component';

@Component({
    selector: 'app-button-add',
    templateUrl: './button-add.component.html',
    styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent extends ButtonAbstractComponent {
    @Input() label: string;
    @Input() isLabelShowing: boolean = false;
}
