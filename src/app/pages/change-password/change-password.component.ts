import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private readonly router: Router
  ) { }

  ngOnInit(): void {
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

}
