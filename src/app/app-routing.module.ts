import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreweryBeersComponent } from './brewery-beers/brewery-beers.component';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'beers',
    pathMatch: 'full'
  },
  {
    path: 'beers',
    component: BreweryBeersComponent
  },
  {
    path: 'about',
    component: BreweryAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
