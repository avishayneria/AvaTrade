import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/data.service';
import {IPlanet} from '../../../interfaces/interfaces';

@Component({
  selector: 'star-wars-planets',
  styleUrls: ['./star-wars-planets.component.scss'],
  template: `
    <div class="star-wars-planets">
      <header class="star-wars-planets__header">Star Wars planets</header>
      <div class="star-wars-planets__info">
        <div class="star-wars-planets__columns">
          <div class="star-wars-planets__columns__name">Name</div>
          <div class="star-wars-planets__columns__terrain">Terrain</div>
          <div class="star-wars-planets__columns__population">Population</div>
        </div>
        <div class="star-wars-planets__rows" *ngFor="let planet of planets">
          <div class="star-wars-planets__rows__name">{{planet.name}}</div>
          <div class="star-wars-planets__rows__terrain">{{planet.terrain}}</div>
          <div class="star-wars-planets__rows__population">{{planet.population}}</div>
        </div>
      </div>
    </div>
  `
})
export class StarWarsPlanetsComponent implements OnInit {

  public planets: IPlanet[];

  constructor(private dataService: DataService) {
    this.planets = [];
  }

  ngOnInit() {
    this.dataService.getPlanets().subscribe(data => {
      this.planets = data;
    });
  }

}
