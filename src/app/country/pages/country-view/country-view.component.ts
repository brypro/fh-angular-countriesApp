import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styles: [],
})
export class CountryViewComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  // This code gets the id from the route params and then uses it to get the country from the countryService.
  // The country is then logged to the console.

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        tap((params) => console.log('params', params)), // log the params
        map((params) => params['id']), // get the id from the route params
        tap((id) => console.log('id', id)), // log the id
        switchMap((id) => this.countryService.getCountryByAlpha(id)), // get the country by id
        tap((country) => console.log('country', country)) // log the country to the console
      )
      .subscribe();
  }
}
