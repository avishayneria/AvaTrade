import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ICharacter, IPlanet} from '../interfaces/interfaces';

@Injectable()
export class DataService {

  peopleUrl = 'https://swapi.co/api/people/';
  planetsUrl = 'https://swapi.co/api/planets/';

  constructor(private http: HttpClient) { }

  public getCharacters(): Observable<ICharacter[]> {
    return this.http.get<ICharacter[]>(this.peopleUrl)
      .map(data => {
        data['results'].map(item => {
          this.http.get(item.homeworld).subscribe(planet => {
            item.homeworld = planet;
          });
        })
        return data['results'];
      });
  }

  public getPlanets(): Observable<IPlanet[]> {
    return this.http.get<IPlanet[]>(this.planetsUrl)
      .map(data => {
        return data['results'];
      });
  }
}
