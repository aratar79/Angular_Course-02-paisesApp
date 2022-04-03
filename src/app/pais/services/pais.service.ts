import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private baseUri = 'https://restcountries.com/v3.1/';

  // is valid as property, method, or getter
  // private simpleParams = new HttpParams()
  //   .set('fields', 'flags,name,capital,population');
  get simpleParams() {
    return new HttpParams().set('fields', 'flags,name,capital,population,cca2');
  }


  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {

    const url = `${this.baseUri}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.simpleParams });
  }

  buscarCapital(termino: string): Observable<Country[]> {

    const url = `${this.baseUri}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.simpleParams });
  }

  getPaisByAlpha(id: string): Observable<Country[]> {
    // In April 2022 apirest returns an array instead of an object.
    const url = `${this.baseUri}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }

  buscarPaisByregion(termino: string): Observable<Country[]> {

    const url = `${this.baseUri}/region/${termino}`;
    return this.http.get<Country[]>(url, { params: this.simpleParams });
  }

}
