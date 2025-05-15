import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface IChangePassword {
  oldPassword: string;
  newPassword: string;
}

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss']
})
export class ChangePasswordFormComponent implements OnInit {

  @Input() loading: boolean = false;
  @Input() formErrors: { [key: string]: string } = {};
  @Output() formSubmitted = new EventEmitter<IChangePassword>();

  changePasswordForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
  ) {
    this.changePasswordForm = this.fb.group({
      oldPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      newPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmNewPassword: ['', [Validators.required]],
    }, { validators: this.passwordsMatchValidator });
  }

  passwordsMatchValidator(form: FormGroup) {
    const newPassword = form.get('newPassword');
    const confirmNewPassword = form.get('confirmNewPassword');

    if (!newPassword || !confirmNewPassword) return null;

    if (newPassword.value !== confirmNewPassword.value) {
      confirmNewPassword.setErrors({ passwordMismatch: true });
    } else {
      // Important: Only clear the error if it's currently set to passwordMismatch
      if (confirmNewPassword.hasError('passwordMismatch')) {
        confirmNewPassword.setErrors(null);
      }
    }

    return null; // group-level validator doesn't need to return an error now
  }

  onSubmit() {
    if (this.changePasswordForm.valid) {
      console.log("click on submit",this.changePasswordForm.valid, this.changePasswordForm.value);
      this.formSubmitted.emit(this.changePasswordForm.value as IChangePassword);
    }
  }

  ngOnInit(): void {
  }
}
