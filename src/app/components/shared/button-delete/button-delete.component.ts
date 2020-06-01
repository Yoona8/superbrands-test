import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-button-delete',
    templateUrl: './button-delete.component.html',
    styleUrls: ['./button-delete.component.css']
})
export class ButtonDeleteComponent {
    @Output() deleteButtonClicked = new EventEmitter<any>();

    onDeleteClick() {
        this.deleteButtonClicked.emit();
    }
}
