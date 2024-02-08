import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CochesComponent } from './coches/coches.component';
import { HomeComponent } from './home/home.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { FilmComponent } from './film/film.component';

@NgModule({
  declarations: [
    AppComponent,
    CochesComponent,
    HomeComponent,
    WatchlistComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
