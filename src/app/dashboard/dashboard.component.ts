import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { fromEvent, scan } from 'rxjs';

// let count:number = 0
fromEvent(document, 'click')
    .pipe(scan((count) => count + 1, 0 ))
    .subscribe((count) => console.log(`Clicked ${++count} times`))

// document.addEventListener('click', ()=> console.log('clicked!')

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  // declare empty heroes array of interfaces  
  heroes: Hero[] = [];

  // subscritbe privately as heroService type interface HeroService
  constructor(private heroService: HeroService) { }

  // when initialize the class/component heroService call function getHeroes who subscribe ( as then in Express/React ) wait to getHeroes() response and once ready callback heroes receive the response and apply first 5 heroes of the array returned and everyting goes inside heroes array declared top above
  ngOnInit(): void {
    this.heroService.getHeroes()
        .subscribe( heroes => this.heroes = heroes.slice(1, 5))
  }




}
