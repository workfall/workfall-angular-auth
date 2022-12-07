import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MoviesComponent } from './movies.component';


@NgModule({
  declarations: [
    DetailsComponent,
    MoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule
  ]
})
export class MoviesModule { }
