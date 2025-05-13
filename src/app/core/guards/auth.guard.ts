import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from 'src/app/pages/login/login.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: LoginService, private router: Router) {}

  canActivate(): boolean {
    if (this.auth.getAccessToken()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
