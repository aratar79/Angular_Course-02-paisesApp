import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private baseUri = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {

    const url = `${this.baseUri}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino: string): Observable<Country[]> {

    const url = `${this.baseUri}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisByAlpha(id: string): Observable<Country[]> {
    // In April 2022 apirest returns an array instead of an object.
    const url = `${this.baseUri}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }

  buscarPaisByregion(termino: string): Observable<Country[]> {

    const url = `${this.baseUri}/region/${termino}`;
    return this.http.get<Country[]>(url);
  }

}
