import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG Modules
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  imports: [
    CommonModule,

    TableModule,
    DialogModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    CheckboxModule,
    RadioButtonModule,
    CardModule,
    ProgressSpinnerModule,
    RippleModule,


  ],
  exports: [
    TableModule,
    DialogModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    CheckboxModule,
    RadioButtonModule,
    CardModule,
    ProgressSpinnerModule,
    RippleModule,
  ]
})
export class PrimeNgModule {}
