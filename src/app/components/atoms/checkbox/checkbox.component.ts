import { Component, Input, Output, EventEmitter } from '@angular/core';
import { isEqual } from 'lodash';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  // For standalone checkbox
  @Input() label: string = '';
  @Output() checkedChange = new EventEmitter<any>();
  private _checked: boolean | string[] = true;

  // For grouped checkboxes
  @Input() name: string = '';       // Group identifier
  @Input() value: any = null;       // Value when part of a group

  @Input()
  get checked(): boolean | string[] {
    return this._checked;
  }

  set checked(value: boolean | string[]) {
    if (this.name) {
    // Handle group checkboxs
      if(!isEqual(this._checked, value)){
        this._checked = value as string[];
        this.checkedChange.emit(value);
      }
    } else {
    // Handle standalone checkbox logic
      if (this._checked !== value) {
        this._checked = value as boolean;
        this.checkedChange.emit(value);
      }
    }
  }
}
