import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

interface ILoginForm {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(
   private readonly loginService: LoginService,
   private readonly router: Router,
  ){}

  formSubmitted(value: ILoginForm) {
    console.log("values from Login components :::", value);
    this.onLogin(value);
  }

  onLogin({username, password}: ILoginForm) {
    this.loginService.login(username, password).subscribe({
      next: () => {
        console.log('Login successfull');
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.log('Login failed', err);
      }
    })

  }

}
