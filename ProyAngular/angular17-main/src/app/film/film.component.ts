import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  movie_id: number = 0;
  movie: any;

  constructor(private http: HttpClient, private peliculaService: PeliculasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movie_id = +params['id'];
      this.peliculaService.getFilm(this.movie_id).subscribe((data: any) => {
        this.movie = data;
      });
    });
  }
}
