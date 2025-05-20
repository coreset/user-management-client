import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface IVerifyCodeForm {
  code: string;
  email: string;
}

@Component({
  selector: 'app-verify-code-form',
  templateUrl: './verify-code-form.component.html',
  styleUrls: ['./verify-code-form.component.scss']
})
export class VerifyCodeFormComponent implements OnInit {

  @Output() formSubmitted = new EventEmitter<IVerifyCodeForm>();
  private _email: string= '';
  @Input()
  set email (value: string) {
    this._email = value;
    if (this.verifyCodeForm) {
      this.verifyCodeForm.patchValue({email: value});
    }
  }
  get email(): string {
    return this._email;
  }

  verifyCodeForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.verifyCodeForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      code: ['', [Validators.required, Validators.maxLength(8)]],
    });
  }

  ngOnInit(): void {
    // Set initial email value if it's provided
    //if (this._email) {
    //  this.verifyCodeForm.patchValue({ email: this._email });
    //}
  }

  onSubmit() {
    if (this.verifyCodeForm.valid) {
      this.formSubmitted.emit(this.verifyCodeForm.value as IVerifyCodeForm);
    }
  }

}
