import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<any> {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  searchCountry(value: string): Observable<any> {
    return this.http.get('https://restcountries.com/v3.1/name/'+value);
  }

  getCountriesByCode(value: string[]): Observable<any> {
    return this.http.get('https://restcountries.com/v3.1/alpha?codes='+value.toString());
  }

}