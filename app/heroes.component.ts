import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";
import { HeroService } from './hero.service';



@Component({
    selector: 'my-heroes',
    template:`
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
export class HeroesComponent implements OnInit {
  ngOnInit(): void {
    this.getHeroes();
  }
	selectedHero : Hero;
  heroes : Hero[];
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }


}


