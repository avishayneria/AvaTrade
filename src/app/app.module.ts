import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {DataService} from '../services/data.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app.routing';
import { StarWarsCharactersComponent } from './components/star-wars-characters/star-wars-characters.component';
import { StarWarsPlanetsComponent } from './components/star-wars-planets/star-wars-planets.component';
import { StarWarsCharacterInfoComponent } from './components/star-wars-character-info/star-wars-character-info.component';

@NgModule({
  declarations: [
    AppComponent,
    StarWarsCharactersComponent,
    StarWarsPlanetsComponent,
    StarWarsCharacterInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
