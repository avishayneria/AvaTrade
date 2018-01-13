import {Component, EventEmitter, Input, Output} from '@angular/core';
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
            <span>hair color: <span [ngStyle]="{'color': characterInfo.hair_color}">{{characterInfo.hair_color}}</span></span>
            <span>skin color: <span [ngStyle]="{'color': characterInfo.skin_color}">{{characterInfo.skin_color}}</span></span>
            <span>eye color: <span [ngStyle]="{'color': characterInfo.eye_color}">{{characterInfo.eye_color}}</span></span>
            <span>birth year: {{characterInfo.birth_year}}</span>
            <span>gender: {{characterInfo.gender}}</span>
          </div>
        </div>
      </div>
    </div>
  `
})
export class StarWarsCharacterInfoComponent {
  @Input() characterInfo: ICharacter;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  public closeCharacterInfoModal(): void {
    this.closeModal.emit();
  }
}
