import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MoviesComponent } from './movies.component';
import { CarouselModule } from 'ng-carousel-cdk';


@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule,
    CarouselModule
  ]
})
export class MoviesModule { }
