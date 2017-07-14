import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/catalog" class="btn btn-default" routerLinkActive="active">
      <i class="fa fa-list-ol" aria-hidden="true"></i> Catalog
      </a>
      <a routerLink="/cart" class="btn btn-default" routerLinkActive="active">
      <i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart
      </a>
    </nav>
    
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Store';
}
