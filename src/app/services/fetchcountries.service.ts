import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Countries } from '../models/countries';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private countriesUrl = 'assets/countries.json';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Countries[]> {
    return this.http.get<Countries[]>('http://localhost:3000/countries');
  }
}