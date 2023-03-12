import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private _url: string = 'https://restcountries.com/v3.1';

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this._url}/name/${term}`;
    return this.http.get<Country[]>(url);
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this._url}/capital/${term}`;
    return this.http.get<Country[]>(url);
  }

  searchRegion(term: string): Observable<Country[]> {
    const url = `${this._url}/region/${term}`;
    return this.http.get<Country[]>(url);
  }

  getCountryByAlpha(id: string): Observable<Country[]> {
    const url = `${this._url}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }

  constructor(private http: HttpClient) {}
}
