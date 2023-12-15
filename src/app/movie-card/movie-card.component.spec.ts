import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieService } from '../services/movie.service';
import { MovieCardComponent } from './movie-card.component';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieCardComponent],
      imports: [MatCardModule, MatButtonModule, BrowserAnimationsModule],
      providers: [MovieService],
    });

    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
  });




});
