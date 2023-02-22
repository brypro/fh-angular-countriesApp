import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent {
  term: string = '';
  error: boolean = false;
  countries: Country[] = [];

  searchCapital(term: string) {
    // make the search term the current term
    this.term = term;
    // search for the country
    this.countryService.searchCapital(this.term).subscribe({
      // if the country is found, give the countries variable the value of the found countries
      next: (countries) => {
        this.error = false;
        this.countries = countries;
      },
      // if the country is not found, return an error message
      error: (err) => {
        this.error = true;
        this.countries = [];
      },
    });
  }

  suggestion($event: string) {
    this.error = false;
    // TODO: create suggestions
  }

  constructor(private countryService: CountryService) {}
}
