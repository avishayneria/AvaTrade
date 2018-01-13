import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StarWarsCharactersComponent} from './components/star-wars-characters/star-wars-characters.component';
import {StarWarsPlanetsComponent} from './components/star-wars-planets/star-wars-planets.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'star-wars-characters',
  },
  {
    path: 'star-wars-characters',
    component: StarWarsCharactersComponent
  },
  {
    path: 'star-wars-planets',
    component: StarWarsPlanetsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
