import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieRoutingModule } from './movie.routing.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieComponent } from './movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailComponent,
    MovieComponent,
    AddMovieComponent],
  imports: [
    CommonModule, MovieRoutingModule,
    ReactiveFormsModule
  ]
})
export class MovieModule { }
