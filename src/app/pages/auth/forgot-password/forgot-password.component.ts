import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

enum NotifyType {
  URL= 'url',
  CODE= 'code',
}

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
    private readonly authService: AuthService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
  }

  formSubmitted({email, type}: {email: string, type: NotifyType}) {
    this.onForgotPassword(email, type);
  }

  onForgotPassword(email: string, type: NotifyType) {
    console.log("type:::", type);
    this.loading = true;
    this.authService.forgotPassword(email, type).subscribe({
      next: () => {
        this.loading = false;
        this.successMessage = 'Reset link sent. Check your email.';
        if (type === NotifyType.CODE) {
          this.router.navigate(['/verify-identifier'], {
                queryParams: { email , type }
          });

        }
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
