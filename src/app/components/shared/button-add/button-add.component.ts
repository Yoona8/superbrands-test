import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-button-add',
    templateUrl: './button-add.component.html',
    styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent {
    @Input() label: string;
    @Input() isLabelShowing: boolean = false;
    @Output() addButtonClicked = new EventEmitter<any>();

    onAddClick() {
        this.addButtonClicked.emit();
    }
}
