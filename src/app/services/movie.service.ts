import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private watchlist: Movie[] = [];

  private movies: Movie[] = [
    {
      title: 'Tenet',
      description: 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
      rating: 7.8,
      duration: '2h 30min',
      genre: 'Action, Sci-Fi',
      releaseDate: '3 September 2020',
      trailerLink: 'https://www.youtube.com/watch?v=LdOM0x0XDMo',
      imageUrl: 'path/to/tenet-image.jpg',
    },
    {
      title: 'Spider-Man: Into the Spider-Verse',
      description: 'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.',
      rating: 8.4,
      duration: '1h 57min',
      genre: 'Action, Animation, Adventure',
      releaseDate: '14 December 2018',
      trailerLink: 'https://www.youtube.com/watch?v=tg52up16eq0',
      imageUrl: 'path/to/spider-man-image.jpg',
    },
    {
      title: 'Knives Out',
      description: 'A detective investigates the death of a patriarch of an eccentric, combative family.',
      rating: 7.9,
      duration: '2h 10min',
      genre: 'Comedy, Crime, Drama',
      releaseDate: '27 November 2019',
      trailerLink: 'https://www.youtube.com/watch?v=qGqiHJTsRkQ',
      imageUrl: 'path/to/knives-out-image.jpg',
    },
    {
      title: 'Guardians of the Galaxy',
      description: 'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.',
      rating: 8.0,
      duration: '2h 1min',
      genre: 'Action, Adventure, Comedy',
      releaseDate: '1 August 2014',
      trailerLink: 'https://www.youtube.com/watch?v=d96cjJhvlMA',
      imageUrl: 'path/to/guardians-of-the-galaxy-image.jpg',
    },
    {
      title: 'Avengers: Age of Ultron',
      description: 'When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it\'s up to Earth\'s mightiest heroes to stop the villainous Ultron from enacting his terrible plan.',
      rating: 7.3,
      duration: '2h 21min',
      genre: 'Action, Adventure, Sci-Fi',
      releaseDate: '1 May 2015',
      trailerLink: 'https://www.youtube.com/watch?v=tmeOjFno6Do',
      imageUrl: 'path/to/avengers-age-of-ultron-image.jpg',
    },
  ];

  getMovies(): Movie[] {
    return this.movies;
  }

  isInWatchlist(movie: Movie): boolean {
    return this.watchlist.some((m) => m.title === movie.title);
  }

  addToWatchlist(movie: Movie): void {
    if (!this.isInWatchlist(movie)) {
      this.watchlist.push(movie);
      this.updateLocalStorage();
    }
  }

  removeFromWatchlist(movie: Movie): void {
    this.watchlist = this.watchlist.filter((m) => m.title !== movie.title);
    this.updateLocalStorage();
  }

  private updateLocalStorage(): void {
    localStorage.setItem('watchlist', JSON.stringify(this.watchlist));
  }
}
