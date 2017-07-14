import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Item }                from './item';
import { HeroService }         from './item.service';

import { MyFilterPipe } from './pipes/instockPipe';  

@Component({
  selector: 'my-heroes',
  templateUrl: './items.component.html',
  styleUrls: [ './items.component.css' ]
})
export class HeroesComponent implements OnInit {
  heroes: Item[];
  itemsToCart: any[] = [];
  selectedHero: Item;
  instock: any = false;

  constructor(
    private heroService: HeroService,
    private router: Router) { }

  getHeroes(): void {
    this.heroService
        .getHeroes()
        .then(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    this.heroService.create(name)
      .then(item => {
        this.itemsToCart.push(item);
      });
  }

  delete(hero: Item): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Item): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
