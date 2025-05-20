import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

interface IVerifyCodeForm {
  code: string;
  email: string;
}

@Component({
  selector: 'app-verify-identifier',
  templateUrl: './verify-identifier.component.html',
  styleUrls: ['./verify-identifier.component.scss']
})
export class VerifyIdentifierComponent implements OnInit {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly authService: AuthService,
  ) { }

  skipChangePassword: boolean = true;

  /* For code verify should show form to enter the code
   * */
  showVerifyCodeForm: boolean = false;

  /* Identifier for code verification
   * should send email value to from for display and add to form data
   * */
  email: string= '';

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const resetToken = params['token'];
      const userId = params['id'];
      const type = params['type'];
      const email = params['email'];

      console.log('resetToken:', resetToken, 'userId', userId, 'type:', type, 'email:', email );

      if (resetToken && userId) {
        // call api that get for accessToken and refreshToken
        this.authService.verifyIdentifier(resetToken, userId).subscribe({
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
      } else if (type && email) {
          this.showVerifyCodeForm = true;
          this.email = email;

      } else {
        console.log("Issue :", "accessToken and refreshToken not received !" );
      }
    })
  }

  onVerifyCode (values: IVerifyCodeForm ) {
    console.log("values ::", values);
    this.authService.verifyIdentifier(values.code, values.email).subscribe({
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
  }

}
