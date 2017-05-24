import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit { 

    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroes = this.heroService.getHeroes().slice(1,5);
            //.then(heroes => this.heroes = heroes.slice(1, 5));
    }
}