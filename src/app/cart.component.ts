import { Component, OnInit, Input } from '@angular/core';

import { Item }        from './item';
import { HeroService } from './item.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './cart.component.html',
  styleUrls: [ './cart.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Item[] = [];

  @Input() itemsToCart: any;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }
}
