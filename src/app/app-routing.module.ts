import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


// declare app routes (as Router in React)
const routes: Routes = [
  // default route when app initialize
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // '/heroes' path renders HeroesComponent 
  { path: 'heroes', component: HeroesComponent },
  // '/dashboard' renderds DashboardComponent
  { path: 'dashboard', component: DashboardComponent },
  // '/hero/:id' renders Hero Detail View
  { path: 'detail/:id', component: HeroDetailComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
