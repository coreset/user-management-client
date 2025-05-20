/**
 * ChangePasswordComponent
 * ----------------------
 * This component is responsible for displaying and editing change password information form.
 *
 * Used in:
 * - Router
 *
 * Use for:
 * display "ChangePasswordFormComponent" as page.
 * when child form submitted here call change password api
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

interface IChangePassword {
  oldPassword: string;
  newPassword: string;
}

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) { }

  skipChangePassword: boolean = false; // By default not showing skip change password button


  ngOnInit(): void {
    // Get skip-change-password button if it is from reset password component
    this.route.queryParams.subscribe(params => {
      this.skipChangePassword = params['skipChangePassword'] === 'true';
    })
  }

  isChangingPassword: boolean = false;
  formError: {[key:string]:string} = {};


  formSubmitted(value: IChangePassword) {
    console.log('oldPassword::', value.oldPassword, 'newPassword::', value.newPassword);
    this.onChangePassword(value);
  }

  onChangePassword(value: IChangePassword):void {
    this.loginService.changePassword(value).subscribe({
      next: (res: any) => {
        console.log("Onchange Password Change:", res.message);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.log("Onchange Password error", err);
      }
    })
  }

  onSkipPasswordChangeDetected(value: boolean) {
    this.router.navigate(['/dashboard']);
  }

}
