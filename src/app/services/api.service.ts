import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type Movie = {
  image: string,
  rank: number,
  title: string,
  rating: number,
  id: string,
  year: number,
  thumbnail: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'https://imdb-top-100-movies.p.rapidapi.com/premiummovies';

  constructor(
    private http: HttpClient
  ) { }

  getMoviesList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiURL)
  }
}
