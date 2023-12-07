// movie-card.component.ts
import { Component, Input } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
removeFromWatchlist(_t4: Movie) {
throw new Error('Method not implemented.');
}
addToWatchlist(_t4: Movie) {
throw new Error('Method not implemented.');
}
  @Input() movies: Movie[] = [];

  constructor(private movieService: MovieService) {
    this.getMovies();

  }

  private getMovies(): void {
    this.movies = this.movieService.getMovies();
  }

}


