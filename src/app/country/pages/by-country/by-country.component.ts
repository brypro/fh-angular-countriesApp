import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryComponent {
  term: string = '';
  error: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggestions: boolean = false;

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

  suggestion(term: string) {
    this.error = false;
    if (term.length === 0) return;
    this.term = term;
    this.countryService
      .searchCountry(term, this.countryService.setCustomParams('name,ccn3'))
      .subscribe({
        next: (countries) => {
          this.suggestedCountries = countries.splice(0, 5);
        },
      });
    this.showSuggestions = true;
  }

  searchSuggested(term: string) {
    this.searchCountry(term);
    this.suggestedCountries = [];
    this.showSuggestions = false;
  }

  constructor(private countryService: CountryService) {}
}
