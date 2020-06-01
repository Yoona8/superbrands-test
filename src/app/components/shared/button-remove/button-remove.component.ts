import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-button-remove',
    templateUrl: './button-remove.component.html',
    styleUrls: ['./button-remove.component.css']
})
export class ButtonRemoveComponent {
    @Output() removeButtonClicked = new EventEmitter<any>();

    onRemoveClick() {
        this.removeButtonClicked.emit();
    }
}
