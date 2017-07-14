import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './cart.component';
import { HeroesComponent }      from './items.component';
import { HeroDetailComponent }  from './item-detail.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: '', component: HeroesComponent },
  { path: 'cart', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'catalog', component: HeroesComponent },
  { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
