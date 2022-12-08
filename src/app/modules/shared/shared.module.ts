import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { LightboxModule } from 'ngx-lightbox';
import { HttpClientModule } from '@angular/common/http';

const COMPONENTS_FOR_EXPORT = [
  MovieCardComponent,
  NavBarComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS_FOR_EXPORT
  ],
  imports: [
    CommonModule,
    RouterModule,
    LightboxModule,
    HttpClientModule
  ],
  exports: [
    ...COMPONENTS_FOR_EXPORT
  ]
})
export class SharedModule { }
