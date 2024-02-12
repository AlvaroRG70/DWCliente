
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PeliculasService {

  private apiUrl = 'https://api.themoviedb.org/3/movie';
  private apiKey = '665eddc29536d1ffc4e5fdace47ae8c7';

  constructor(private http: HttpClient) { }

  getTopRated() {
    const url = `${this.apiUrl}/top_rated?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getPopularMovies() {
    const url = `${this.apiUrl}/popular?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getFilm(movie_id: number) {
    const url = `${this.apiUrl}/${movie_id}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
}
