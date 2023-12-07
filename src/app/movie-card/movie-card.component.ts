// movie-card.component.ts
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Movie } from '../interfaces/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() movie!: Movie;

  constructor(private movieService: MovieService, private sanitizer: DomSanitizer) {}

  get isOnWatchlist(): boolean {
    // Check if the movie is in the watchlist
    return this.movieService.isInWatchlist(this.movie);
  }

  addToWatchlist(): void {
    // Add the movie to the watchlist
    this.movieService.addToWatchlist(this.movie);
  }

  removeFromWatchlist(): void {
    // Remove the movie from the watchlist
    this.movieService.removeFromWatchlist(this.movie);
  }

  getTrailerUrl(): SafeResourceUrl {
    // Sanitize the YouTube video URL for embedding
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailerLink);
  }
}
