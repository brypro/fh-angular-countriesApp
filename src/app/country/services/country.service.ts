import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private _url: string = 'https://restcountries.com/v3.1';
  get searchParams() {
    return new HttpParams().set('fields', 'name,capital,ccn3,region,flags');
  }

  setCustomParams(fields: string) {
    return new HttpParams().set('fields', fields);
  }

  searchCountry(
    term: string,
    customParam: HttpParams = this.searchParams
  ): Observable<Country[]> {
    const url = `${this._url}/name/${term}`;
    return this.http.get<Country[]>(url, { params: customParam });
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this._url}/capital/${term}`;
    return this.http.get<Country[]>(url, { params: this.searchParams });
  }

  searchRegion(term: string): Observable<Country[]> {
    const url = `${this._url}/region/${term}`;
    return this.http.get<Country[]>(url, { params: this.searchParams });
  }

  getCountryByAlpha(id: string): Observable<Country[]> {
    const url = `${this._url}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }

  constructor(private http: HttpClient) {}
}
