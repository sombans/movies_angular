import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MoviesComponent } from './components/movies/movies.component';


const appRoutes: Routes = [
  
  { path: 'movies', component: MoviesComponent },
  { path: '', component: MoviesComponent },
]
 
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
