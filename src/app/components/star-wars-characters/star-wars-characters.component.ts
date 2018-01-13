import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/data.service';
import {ICharacter} from '../../../interfaces/interfaces';

@Component({
  selector: 'star-wars-characters',
  styleUrls: ['./star-wars-characters.component.scss'],
  template: `
    <div class="star-wars-characters">
      <header class="star-wars-characters__header">Star Wars Characters</header>
      <div class="star-wars-characters__info">
        <div class="star-wars-characters__columns">
          <div class="star-wars-characters__columns__name">Name</div>
          <a href="/star-wars-planets" class="star-wars-characters__columns__planet">Home Planet</a>
        </div>
        <div class="star-wars-characters__rows" *ngFor="let character of characters">
          <div class="star-wars-characters__rows__name"
               (click)="openCharacterInfoModal(character)">
            {{character.name}}
          </div>
          <div class="star-wars-characters__rows__planet">{{character.homeworld.name}}</div>
        </div>
      </div>
    </div>
    <star-wars-character-info
      *ngIf="selectedCharacter"
      [characterInfo]="selectedCharacter"
      (closeModal)="selectedCharacter = null">
    </star-wars-character-info>
  `
})
export class StarWarsCharactersComponent implements OnInit {

  public characters: ICharacter[];
  public selectedCharacter: ICharacter;
  constructor(private dataService: DataService) {
    this.characters = [];
  }

  ngOnInit() {
    this.dataService.getCharacters().subscribe(data => {
      this.characters = data;
    });
  }

  public openCharacterInfoModal(character: ICharacter): void {
    this.selectedCharacter = character;
  }
}
