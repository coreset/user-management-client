import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { MoleculesModule } from '../components/molecules/molecules.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginSuccessComponent } from './auth/login-success/login-success.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './auth/register/register.component';
import { VerifyIdentifierComponent } from './auth/verify-identifier/verify-identifier.component';
import { LayoutModule } from '../components/layout/layout.module';
import { UserListComponent } from './dashboard/user-list/user-list.component';
import { UserFormComponent } from './dashboard/user-form/user-form.component';
import { RoleListComponent } from './dashboard/role-list/role-list.component';
import { PermissionListComponent } from './dashboard/permission-list/permission-list.component';
import { PermissionFormComponent } from './dashboard/permission-form/permission-form.component';
import { RoleFormComponent } from './dashboard/role-form/role-form.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginSuccessComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    VerifyIdentifierComponent,
    UserListComponent,
    UserFormComponent,
    RoleListComponent,
    PermissionListComponent,
    PermissionFormComponent,
    RoleFormComponent
  ],
  imports: [
    CommonModule,
    MoleculesModule,
    LayoutModule,
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
