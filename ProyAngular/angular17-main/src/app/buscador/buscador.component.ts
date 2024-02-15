import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})

export class BuscadorComponent {
  query: string = '';
  peliculas: any[] = [];

  constructor(private peliculasService: PeliculasService) { }

  buscarPeliculas(): void {
    if (this.query.trim()) {
      this.peliculasService.buscarPeliculas(this.query).subscribe(
        (data: any) => {
          this.peliculas = data.results;
        },
        (error) => {
          console.error('Error al buscar películas:', error);
        }
      );
    }
  }
}

