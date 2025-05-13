import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { DialogComponent } from './dialog/dialog.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ButtonComponent } from './button/button.component';
import { InputTextComponent } from './input-text/input-text.component';
import { ToastComponent } from './toast/toast.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { CardComponent } from './card/card.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from 'src/app/shared/modules/primeng.module';
import { InputFieldComponent } from './input-field/input-field.component';



@NgModule({
  declarations: [
    TableComponent,
    DialogComponent,
    DropdownComponent,
    ButtonComponent,
    InputTextComponent,
    ToastComponent,
    CheckboxComponent,
    RadioButtonComponent,
    CardComponent,
    ProgressSpinnerComponent,
    InputFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    PrimeNgModule,
  ],
  exports: [
    TableComponent,
    DialogComponent,
    DropdownComponent,
    ButtonComponent,
    InputTextComponent,
    ToastComponent,
    CheckboxComponent,
    RadioButtonComponent,
    CardComponent,
    ProgressSpinnerComponent,
    InputFieldComponent
  ]
})
export class AtomsModule { }
