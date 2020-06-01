import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-button-move',
    templateUrl: './button-move.component.html',
    styleUrls: ['./button-move.component.css']
})
export class ButtonMoveComponent {
    @Output() moveButtonClicked = new EventEmitter<any>();

    onMoveClick() {
        this.moveButtonClicked.emit();
    }
}
