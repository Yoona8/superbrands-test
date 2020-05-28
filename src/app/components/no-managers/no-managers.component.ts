import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-no-managers',
    templateUrl: './no-managers.component.html',
    styleUrls: ['./no-managers.component.css']
})
export class NoManagersComponent {
    @Output() addButtonClicked = new EventEmitter<any>();

    onAddClick() {
        this.addButtonClicked.emit();
    }
}
