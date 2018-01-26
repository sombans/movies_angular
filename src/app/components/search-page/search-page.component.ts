import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../SharedModule/services/movie.service';
import { Movie } from '../../SharedModule/models/movie.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  private movies: Movie[];
  private term;

  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    let term = this.route.snapshot.paramMap.get('term');
    this.movieService.searchMovies(term).subscribe(data => {
      this.movies = data;
      this.term = term;
    }, (term) => {
      alert('There are no movies with searched term: ' + term);
      this.router.navigate(['movies']);
    });

  }

}
