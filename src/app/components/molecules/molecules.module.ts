import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AtomsModule } from '../atoms/atoms.module';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';



@NgModule({
  declarations: [
    LoginFormComponent,
    ChangePasswordFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AtomsModule
  ],
  exports: [
    LoginFormComponent,
    ChangePasswordFormComponent
  ]

})
export class MoleculesModule { }
