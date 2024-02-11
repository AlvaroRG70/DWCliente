import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  apiUrlPopular = 'https://api.themoviedb.org/3/movie/popular?api_key=665eddc29536d1ffc4e5fdace47ae8c7';
  apiUrlTopRated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=665eddc29536d1ffc4e5fdace47ae8c7'
  apiKey = '665eddc29536d1ffc4e5fdace47ae8c7';

  constructor(private http: HttpClient) { }

  getPopularMovies3() {
    const url = `${this.apiUrlPopular}&api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getTopRated() {
    const url = `${this.apiUrlTopRated}&api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getPopularMovies() {
    const url = `${this.apiUrlPopular}&api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  
}
