import { Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  AbstractControl,
  ValidationErrors,
  FormControl,
  Validator
} from '@angular/forms';

@Component({
  selector: 'app-radio-field',
  templateUrl: './radio-field.component.html',
  styleUrls: ['./radio-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioFieldComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => RadioFieldComponent),
      multi: true
    }
  ]
})
export class RadioFieldComponent implements ControlValueAccessor, Validator {
  @Input() label: string = '';
  @Input() options: { label: string; value: any }[] = [];
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() errorMessages: { [key: string]: string } = {};

  private _control: AbstractControl = new FormControl('');
  @Input()
  set control(ctrl: AbstractControl | null) {
    this._control = ctrl || new FormControl('');
  }
  get control(): AbstractControl {
    return this._control;
  }

  value: any;
  onChange = (_: any) => {};
  onTouched = () => {};

  forceShowErrors = false;

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onSelect(value: any) {
    this.value = value;
    this.onChange(value);
    this.onTouched();

    if (this.control.valid) {
      this.forceShowErrors = false;
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const errors: any = {};
    if (this.required && !control.value) {
      errors.required = true;
    }
    return Object.keys(errors).length > 0 ? errors : null;
  }

  getErrors(): string[] {
    return this.control.errors ? Object.keys(this.control.errors) : [];
  }

  getErrorMessage(errorKey: string): string {
    const defaultMessages: { [key: string]: string } = {
      required: 'Please select an option'
    };
    return this.errorMessages[errorKey] || defaultMessages[errorKey] || 'Invalid selection';
  }

  shouldShowError(): boolean {
    return this.forceShowErrors || (this.control.invalid && (this.control.touched || this.control.dirty));
  }

  markAsTouched() {
    this.control.markAsTouched();
    if (this.control.invalid) {
      this.forceShowErrors = true;
    }
  }
}
