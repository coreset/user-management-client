import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginSuccessComponent } from './pages/login-success/login-success.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login-success', component: LoginSuccessComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  //{ path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
