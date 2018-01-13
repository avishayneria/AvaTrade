import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICharacter} from '../../../interfaces/interfaces';

@Component({
  selector: 'star-wars-character-info',
  styleUrls: ['./star-wars-character-info.component.scss'],
  template: `
    <div class="star-wars-character-info-modal">
      <div class="star-wars-character-info-modal__container">
        <i class="star-wars-character-info-modal__close-icon fa fa-close" (click)="closeCharacterInfoModal()"></i>
        <div class="star-wars-character-info-modal__description">
          {{characterInfo.name}} comes from {{characterInfo.homeworld.name}}.<br>
          {{characterInfo.name}} is Human.
        </div>
        <div class="star-wars-character-info-modal__additional-info">
          <div class="star-wars-character-info-modal__additional-info__header">
            Additional Information:
          </div>
          <div class="star-wars-character-info-modal__additional-info__content">
            <span>Height: {{characterInfo.height}}</span>
            <span>mass: {{characterInfo.mass}}</span>
            <span>hair color: {{characterInfo.hair_color}}</span>
            <span>skin color: {{characterInfo.skin_color}}</span>
            <span>eye color: {{characterInfo.eye_color}}</span>
            <span>birth year: {{characterInfo.birth_year}}</span>
            <span>gender: {{characterInfo.gender}}</span>
          </div>
        </div>
      </div>
    </div>
  `
})
export class StarWarsCharacterInfoComponent implements OnInit {
  @Input() characterInfo: ICharacter;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('this.characterInfo', this.characterInfo);
  }

  public closeCharacterInfoModal(): void {
    this.closeModal.emit(true);
  }
}
