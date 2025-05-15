import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true
    }
  ]
})
export class InputFieldComponent implements ControlValueAccessor, Validator {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() pattern: string | RegExp | null = null;
  @Input() minLength: number | null = null;
  @Input() maxLength: number | null = null;
  @Input() min: number | null = null;
  @Input() max: number | null = null;
  @Input() errorMessages: { [key: string]: string } = {};

  // Use AbstractControl instead of FormControl for broader compatibility
  private _control: AbstractControl = new FormControl('');
  @Input()
  set control(ctrl: AbstractControl | null) {
    this._control = ctrl || new FormControl('');
  }
  get control(): AbstractControl {
    return this._control;
  }


  value: any = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  // Track if the user has visited the control
  hasVisited = false;
  // Track if we should show errors regardless of focus state
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

  onInputChange(event: any) {
    this.value = event.target.value;
    this.onChange(this.value);
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

    if (this.pattern && control.value) {
      const regex = typeof this.pattern === 'string' ? new RegExp(this.pattern) : this.pattern;
      if (!regex.test(control.value)) {
        errors.pattern = true;
      }
    }

    if (this.minLength !== null && control.value && control.value.length < this.minLength) {
      errors.minlength = { requiredLength: this.minLength, actualLength: control.value.length };
    }

    if (this.maxLength !== null && control.value && control.value.length > this.maxLength) {
      errors.maxlength = { requiredLength: this.maxLength, actualLength: control.value.length };
    }

    if (this.min !== null && control.value && parseFloat(control.value) < this.min) {
      errors.min = { min: this.min, actual: control.value };
    }

    if (this.max !== null && control.value && parseFloat(control.value) > this.max) {
      errors.max = { max: this.max, actual: control.value };
    }
    console.log("errors :::", errors, this.minLength);
    return Object.keys(errors).length > 0 ? errors : null;
  }

  getErrors(): string[] {
    console.log(">>>",this.control.errors ? Object.keys(this.control.errors) : []);
    return this.control.errors ? Object.keys(this.control.errors) : [];
  }

  getErrorMessage(errorKey: string): string {
    const defaultMessages: { [key: string]: string } = {
      required: 'This field is required',
      pattern: 'Invalid format',
      minlength: `Minimum length is ${this.minLength}`,
      maxlength: `Maximum length is ${this.maxLength}`,
      min: `Minimum value is ${this.min}`,
      max: `Maximum value is ${this.max}`
    };

    return this.errorMessages[errorKey] || defaultMessages[errorKey] || 'Invalid field';
  }


  shouldShowError(): boolean {
    // Condition 3: Keep showing if we've forced errors to stay visible
    if (this.forceShowErrors) {
      return this.control.invalid;
    }

    // Condition 1: Show when exiting focus (blur) if invalid
    if (!this.control.dirty && this.control.touched) {
      return this.control.invalid;
    }

    // Condition 2: Only show after blur if first visit and changing
    if (this.control.dirty && !this.hasVisited) {
      return false;
    }

    // Default case: show if invalid and either touched or dirty
    return this.control.invalid && (this.control.touched || this.control.dirty);
  }

  markAsTouched() {
    this.hasVisited = true;
    this.control.markAsTouched();
    // Condition 3: Once errors are shown, keep them visible until fixed
    if (this.control.invalid) {
      this.forceShowErrors = true;
    }
  }
}
