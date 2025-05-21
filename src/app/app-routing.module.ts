import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { ChangePasswordComponent } from './pages/auth/change-password/change-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { LoginSuccessComponent } from './pages/auth/login-success/login-success.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { VerifyIdentifierComponent } from './pages/auth/verify-identifier/verify-identifier.component';
import { RegisterComponent } from './pages/auth/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login-success', component: LoginSuccessComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-identifier', component: VerifyIdentifierComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  //{ path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
