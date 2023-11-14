import { Component } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent {
  countries: string[] = [];
  newCountry: string = '';

  addCountry() {
    if (this.newCountry.trim() !== '') {
      this.countries.push(this.newCountry);
      this.newCountry = '';
    }
  }

}


