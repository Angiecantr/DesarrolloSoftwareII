import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  private http = inject(HttpClient);
  private baseUrl = 'https://swapi.dev/api';

  constructor() { }

  getPersonajes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/people/`);
  }
}

