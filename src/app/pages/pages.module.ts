import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MoleculesModule } from '../components/molecules/molecules.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { ChangePasswordComponent } from './change-password/change-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    LoginSuccessComponent,
    ChangePasswordComponent
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
