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

  searchCountry(arg0: string) {
    this.countryService.searchCountry(this.term).subscribe({
      next: (countries) => {
        this.error = false;
        this.countries = countries;
      },
      error: (err) => {
        this.error = true;
        this.countries = [];
      },
    });

    // .subscribe( // This is the same as the above code block but is deprecated
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

  constructor(private countryService: CountryService) {}
}
