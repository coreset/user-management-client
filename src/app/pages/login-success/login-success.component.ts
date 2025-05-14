import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.scss']
})
export class LoginSuccessComponent implements OnInit {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const accessToken = params['token'];
      const refreshToken = params['refreshToken'];
      if (accessToken && refreshToken) {
        this.loginService.setAccessToken(accessToken);
        this.loginService.setRefreshToken(refreshToken);
        this.router.navigate(['/dashboard']);
      } else {
        console.log("Issue :", "accessToken and refreshToken not received !" );
      }
    })
  }

}
