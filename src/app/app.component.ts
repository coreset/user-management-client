import { Component } from '@angular/core';
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
export class AppComponent {
  title = 'user-management-client';

  checkboxvalue: boolean = false;
  constructor(private readonly primegnConfig: PrimeNGConfig) {
    this.primegnConfig.ripple = true;
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

}
