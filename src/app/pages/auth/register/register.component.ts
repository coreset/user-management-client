import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

interface IRegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loading: boolean = false;
  formError: string = '';

  constructor(
    private readonly authService: AuthService,
  ) { }

  formSubmitted(form: IRegisterForm) {
    this.loading = true;
    console.log("error before", this.formError);
    this.authService.signup(form).subscribe({
      next: (res: any) => {
        this.loading = false;
        console.log('register::', res);

      },
      error: (err: any) => {
        this.loading = false;
        if (err.status === 409) {
          this.formError = 'Email already exists.';
          console.log("error", this.formError);
        } else {
          this.formError = 'Something went wrong. Please try again.';
        }
      }
    })
    // call the api
  }

  formErrorChange(value: string) {
    this.formError = value;
    console.log("error change", this.formError);
  }

  ngOnInit(): void {
  }

}
