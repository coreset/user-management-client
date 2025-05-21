import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AtomsModule } from '../atoms/atoms.module';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { ForgotPasswordFormComponent } from './forgot-password-form/forgot-password-form.component';
import { VerifyCodeFormComponent } from './verify-code-form/verify-code-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    ChangePasswordFormComponent,
    ForgotPasswordFormComponent,
    VerifyCodeFormComponent,
    RegisterFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AtomsModule
  ],
  exports: [
    LoginFormComponent,
    ChangePasswordFormComponent,
    ForgotPasswordFormComponent,
    VerifyCodeFormComponent,
    RegisterFormComponent,
  ]

})
export class MoleculesModule { }
