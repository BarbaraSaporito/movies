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

  @Input() movies: Movie[] = [];

  constructor(private movieService: MovieService) {
    this.getMovies();

  }

  private getMovies(): void {
    this.movies = this.movieService.getMovies();
  }

  isOnWatchlist(movie: Movie): boolean {
    return this.movieService.isInWatchlist(movie);
  }

  addToWatchlist(movie: Movie): void {
    this.movieService.addToWatchlist(movie);
  }

  removeFromWatchlist(movie: Movie): void {
    this.movieService.removeFromWatchlist(movie);
  }



}


