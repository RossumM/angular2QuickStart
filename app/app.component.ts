import { Component } from '@angular/core';
import {Hero} from "./hero";

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
    selector: 'my-app',
    template:`
  <h1>{{title}}</h1>
<my-hero-detail [hero]="selectedHero"></my-hero-detail>
  <h2>My Heroes</h2>
<ul class="heroes">
    <!-- each hero goes here -->
    <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>
  `
})
export class AppComponent {
	selectedHero : Hero;
	title = "tour of heroes";
  heroes = HEROES;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}


