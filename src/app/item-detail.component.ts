import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Item }        from './item';
import { HeroService } from './item.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: [ './item-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  item: Item;
  itemsToCart: any;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(item => this.item = item);
  }

  add(name: string): void {
    this.heroService.create(name)
      .then(item => {
        this.itemsToCart.push(item);
      });
  }
}
