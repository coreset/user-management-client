import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {

 @Input() placeholder: string = '';
 private _text: string = '';
 @Input()
 get text() {
   return this._text;
 }
 @Output() textChange = new EventEmitter<string>();

 // float label
 @Input() label: string | undefined;

 // for icon
 @Input() iconName: string | undefined;
 @Input() iconSide: string = 'left';

 set text(value: string) {
   if(this._text !== value) {
     this._text = value;
     this.textChange.emit(value);
   }
 }

}
