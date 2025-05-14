import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MoleculesModule } from '../components/molecules/molecules.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginSuccessComponent } from './login-success/login-success.component';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    LoginSuccessComponent
  ],
  imports: [
    CommonModule,
    MoleculesModule,
    HttpClientModule,
  ],
  exports: [
    LoginComponent
  ],
  providers: [
  ]
})
export class PagesModule { }
