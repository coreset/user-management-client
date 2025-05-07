import { Component } from '@angular/core';

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

    cities: City[];

    selectedCity: City | undefined;

    constructor() {
        this.cities = [
            {name: 'New York', code: 'NY', inactive: false},
            {name: 'Rome', code: 'RM', inactive: true},
            {name: 'London', code: 'LDN', inactive: false},
            {name: 'Istanbul', code: 'IST', inactive: true},
            {name: 'Paris', code: 'PRS', inactive: false}
        ];

        //this.selectedCity = undefined;
    }
}
