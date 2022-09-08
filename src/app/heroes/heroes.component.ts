//// constroller


import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  // empty array
  heroes: Hero[] = [];

  // declare heroService
  constructor(private heroService: HeroService) { }

  // when initialize declare new local function getHeroes
  ngOnInit(): void {
    this.getHeroes();
  }

  // especify local variable and call getHeroes from heroService
  // then subscribe to that in case may be changes
  // and fill previous empty array heroes with our data returnes from previous functions
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  // CREATE add hero
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  // DELETE hero
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}