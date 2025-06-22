import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { ChangePasswordComponent } from './pages/auth/change-password/change-password.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { LoginSuccessComponent } from './pages/auth/login-success/login-success.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { VerifyIdentifierComponent } from './pages/auth/verify-identifier/verify-identifier.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { UserListComponent } from './pages/dashboard/user-list/user-list.component';
import { UserFormComponent } from './pages/dashboard/user-form/user-form.component';
import { RoleListComponent } from './pages/dashboard/role-list/role-list.component';
import { RoleFormComponent } from './pages/dashboard/role-form/role-form.component';
import { PermissionListComponent } from './pages/dashboard/permission-list/permission-list.component';
import { PermissionFormComponent } from './pages/dashboard/permission-form/permission-form.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login-success', component: LoginSuccessComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-identifier', component: VerifyIdentifierComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: 'users', component: UserListComponent },
      { path: 'users/new', component: UserFormComponent },
      { path: 'users/:id/edit', component: UserFormComponent },

      { path: 'roles', component: RoleListComponent },
      { path: 'roles/new', component: RoleFormComponent },
      { path: 'roles/:id/edit', component: RoleFormComponent },

      { path: 'permissions', component: PermissionListComponent },
      { path: 'permissions/new', component: PermissionFormComponent },
      { path: 'permissions/:id/edit', component: PermissionFormComponent },
    ]
  },
  //{ path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
