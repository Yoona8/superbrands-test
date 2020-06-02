import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-button-check',
    templateUrl: './button-check.component.html',
    styleUrls: ['./button-check.component.css']
})
export class ButtonCheckComponent {
    @Output() checkButtonClicked = new EventEmitter<any>();

    onCheckClick() {
        this.checkButtonClicked.emit();
    }
}
