import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.scss']
})
export class LoginSuccessComponent implements OnInit {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const accessToken = params['token'];
      const refreshToken = params['refreshToken'];
      if (accessToken && refreshToken) {
        this.authService.setAccessToken(accessToken);
        this.authService.setRefreshToken(refreshToken);
        this.router.navigate(['/dashboard']);
      } else {
        console.log("Issue :", "accessToken and refreshToken not received !" );
      }
    })
  }

}
