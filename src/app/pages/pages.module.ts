import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { MoleculesModule } from '../components/molecules/molecules.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginSuccessComponent } from './auth/login-success/login-success.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './auth/register/register.component';
import { VerifyIdentifierComponent } from './auth/verify-identifier/verify-identifier.component';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    LoginSuccessComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    VerifyIdentifierComponent
  ],
  imports: [
    CommonModule,
    MoleculesModule,
    HttpClientModule,
  ],
  exports: [
    LoginComponent,
    ChangePasswordComponent,
  ],
  providers: [
  ]
})
export class PagesModule { }
