import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons(numberOfElement: number, page: number): Observable<any> {
    const offset = (numberOfElement * page) - numberOfElement;
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${numberOfElement}&offset=${offset}`);;
  }

  getPokemon(url: string): Observable<any> {
    return this.http.get(url);
  }

}
