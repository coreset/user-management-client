import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';

interface City {
    name: string,
    code: string,
    inactive: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'user-management-client';

  myForm: FormGroup;

  checkboxvalue: boolean = false;
  constructor(private readonly primegnConfig: PrimeNGConfig,
             private fb: FormBuilder) {
    this.primegnConfig.ripple = true;
    this.myForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      age: ['', [Validators.min(18), Validators.max(99)]]
    });
  }

  handleClick():void{
    console.log("button layer clicked ! ");


  }

  selectedValues: string[] = ["val2"];

  dropdownItems = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
  ];

  selectedDropdownItem: any ;


  // for input text component
  inputtext: string = '';
  floatlabel: string = 'testing float';

  iconName: string = 'search';
  iconSide: string = 'right'

  username: string = '';

  // form group

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form submitted:', this.myForm.value);
    }
  }

  getFormControl(name: string): FormControl {
    return this.myForm.get(name) as FormControl;
  }




}
