import { Injectable } from '@angular/core';
import { Movie } from "../models/movie.model";
import { Observable } from 'rxjs/Observable';
import { movies } from "../examples";
import { Observer } from 'rxjs/Observer';

@Injectable()
export class MovieService {

  private movies;

  constructor() { }

  getMovies(){
    this.movies= movies.map((movie)=> {
  return new Movie(
      movie.Id,
      movie.Name,
      movie.Director,
      movie.ImageUrl,
      movie.Duration,
      new Date (movie.RealeaseDate),
      movie.Genres
    );
 });  
    return new Observable((o: Observer<any>) => {

      o.next(this.movies);
      return o.complete();
    });
}
  searchMovies(term): Observable<Movie[]> {
    const foundMovies = this.movies.filter((movie: Movie) => {
      return movie.Name.toLocaleLowerCase().includes(term.toLocaleLowerCase());
    });

    if (foundMovies.length === 0) {
      return Observable.throw(term);
    }
    return Observable.of(foundMovies);
  }

}
