import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  term: string = '';
  error: boolean = false;
  countries: Country[] = [];

  searchCountry(term: string) {
    // make the search term the current term
    this.term = term;
    // search for the country
    this.countryService.searchCountry(this.term).subscribe({
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

    // This is the same as the above code block but is deprecated
    // .subscribe(
    //   (countries) => {
    //     this.error = false;
    //     this.countries = countries;
    //   },
    //   (err) => {
    //     this.error = true;
    //     this.countries = [];
    //   }
    // );
  }

  suggestion($event: string) {
    this.error = false;
    // TODO: create suggestions
  }

  constructor(private countryService: CountryService) {}
}
