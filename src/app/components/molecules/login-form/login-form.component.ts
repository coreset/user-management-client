import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface ILoginForm {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  ngOnInit(): void {
  }

  // get form error from backend from login page
  @Input() loading = false;
  @Input() formErrors: { [key: string]: string } = {};

  // send form submit values to login page.
  @Output() formSubmitted = new EventEmitter<ILoginForm>();

  loginForm: FormGroup;

  constructor( private fb: FormBuilder ) {
    this.loginForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.formSubmitted.emit(this.loginForm.value as ILoginForm);
    }
  }
}
