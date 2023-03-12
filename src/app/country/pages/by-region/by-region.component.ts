import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class ByRegionComponent {
  countries: Country[] = [];
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  activeRegion: string = '';

  activateRegion(region: string) {
    if (region === this.activeRegion) {
      return;
    }
    this.activeRegion = region;
    this.countries = [];
    this.countryService.searchRegion(region).subscribe((countries) => {
      this.countries = countries;
    });
  }

  constructor(private countryService: CountryService) {}
}
