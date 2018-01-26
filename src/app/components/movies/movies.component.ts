import { Component, OnInit } from '@angular/core';
import { MovieService } from "../../SharedModule/services/movie.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  private movies;

  constructor(private movieService: MovieService) { }

  ngOnInit() {

    this.movieService.getMovies().subscribe(data => {
      this.movies = data;
    });

  }

}
