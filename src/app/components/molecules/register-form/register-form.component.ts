import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


interface IRegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  registerForm: FormGroup;
  @Input() loading: boolean = false;
  @Input() formError: string = '';
  @Output() formErrorChange = new EventEmitter<string>();
  @Output() formSubmitted = new EventEmitter<IRegisterForm>();

  constructor(
    private readonly fb: FormBuilder,
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(20) ]],
      lastName: ['', [Validators.required, Validators.maxLength(20) ]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$') ]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20) ]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    }, {
      validators: this.passwordsMatchValidator
    })

    this.registerForm.get('email')?.valueChanges.subscribe(value => {
      this.formError = '';
      this.formErrorChange.emit(this.formError);
    });
    //this.registerForm.valueChanges.subscribe((formValue: any) => {
    //  console.log('Form changed:', formValue);
    //});
  }

  passwordsMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (!password || !confirmPassword) return null;

    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    } else {
      // Important: Only clear the error if it's currently set to passwordMismatch
      if (confirmPassword.hasError('passwordMismatch')) {
        confirmPassword.setErrors(null);
      }
    }

    return null; // group-level validator doesn't need to return an error now
  }


  onSubmit(): void {
    if (this.registerForm.valid) {
      const { firstName, lastName, email, password } = this.registerForm.value;
      const formValues: IRegisterForm = { firstName, lastName, email, password };
      this.formSubmitted.emit(formValues);
    }
  }

}
