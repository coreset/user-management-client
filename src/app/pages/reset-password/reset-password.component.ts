import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly loginService: LoginService
  ) { }

  skipChangePassword: boolean = true;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const resetToken = params['token'];
      const userId = params['id'];
      if (resetToken && userId) {
        // call api that get for accessToken and refreshToken
        this.loginService.validateForgotPassword(resetToken, userId).subscribe({
          next: (res: any) => {
            this.router.navigate(['/change-password'], {
              queryParams: { skipChangePassword: this.skipChangePassword }
            });
            console.log('validate forgot password ');

          },
          error: (err) => {
            console.log('validate forgot password error', err.message);
          }
        })
      } else {
        console.log("Issue :", "accessToken and refreshToken not received !" );
      }
    })
  }

}
