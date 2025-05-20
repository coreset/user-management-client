import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

enum NotifyType {
  URL= 'url',
  CODE= 'code',
}

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss']
})
export class ForgotPasswordFormComponent implements OnInit {


  @Input() loading: boolean = false;
  @Input() formErrors: { [key: string]: string } = {};
  @Output() formSubmitted = new EventEmitter<{email: string, type: NotifyType}>();

  forgotPasswordForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      type: ['url', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      this.formSubmitted.emit({
        email: this.forgotPasswordForm.value.email,
        type: this.forgotPasswordForm.value.type,
      });
    }
  }

}
