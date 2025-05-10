import {
  Component,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  ContentChild,
} from '@angular/core';

interface IItem {
    name: string,
    code: string,
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  @Input() items: IItem[] = [];
  @Input() placeholder: string = '';
  @Input() showClear: boolean = false;
  @Input() filter: boolean = false;
  @Input()
  get selected(): IItem {
    return this._selectedItem;
  }
  @Output() selectedChange = new EventEmitter<IItem>();
  private _selectedItem!: IItem;

  // Template inputs for customize
  @ContentChild('selectedItem', { static: false }) selectedItemTemplate!: TemplateRef<any>;
  @ContentChild('item', { static: false }) itemTemplate!: TemplateRef<any>;

  set selected(value:IItem) {
    if(this._selectedItem !== value) {
      this._selectedItem = value;
      this.selectedChange.emit(value);
    }
  }

}
