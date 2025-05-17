import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  public loading: boolean = false;
  public successMessage: string = '';
  public errorMessage: string = '';

  constructor(
    private readonly loginService: LoginService,
  ) { }

  ngOnInit(): void {
  }

  formSubmitted(email: string) {
    this.onForgotPassword(email);
  }

  onForgotPassword(email: string) {
    this.loading = true;
    this.loginService.forgotPassword(email).subscribe({
      next: () => {
        this.loading = false;
        this.successMessage = 'Reset link sent. Check your email.';
        console.log(this.successMessage);
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = 'Failed to send reset link.';
        console.log(this.errorMessage);
      }
    });
  }

}
