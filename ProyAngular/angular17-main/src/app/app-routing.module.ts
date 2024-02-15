import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  
import { WatchlistComponent } from './watchlist/watchlist.component';  

import { FilmComponent } from './film/film.component'; 
import { BuscadorComponent } from './buscador/buscador.component'; 




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'film/:id', component: FilmComponent },
  { path: 'buscador', component: BuscadorComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
