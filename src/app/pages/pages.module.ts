import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MoleculesModule } from '../components/molecules/molecules.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent
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
