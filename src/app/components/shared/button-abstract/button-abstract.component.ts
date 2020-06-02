import { EventEmitter, Output } from '@angular/core';

export class ButtonAbstractComponent {
    @Output() buttonClicked = new EventEmitter<any>();

    onClick() {
        this.buttonClicked.emit();
    }
}
