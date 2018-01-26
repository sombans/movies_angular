import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieService } from './SharedModule/services/movie.service';
import { MovieRowComponent } from './components/movie-row/movie-row.component';
import { SearchModule } from './SharedModule/module/search/search.module';
import { SharedModule } from "./SharedModule/module/shared/shared.module";
import { FormsModule } from '@angular/forms';
import { SearchPageComponent } from './components/search-page/search-page.component';

const appRoutes: Routes = [
  
  { path: 'movies', component: MoviesComponent },
  { path: '', component: MoviesComponent },
  { path: 'search/:term', component: SearchPageComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MoviesComponent,
    MovieRowComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SearchModule,
    SharedModule,
    FormsModule,
  ],

  exports: [
    RouterModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
