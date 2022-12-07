import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from "@angular/material/button";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

const IMPORTS_TO_BE_EXPORTED = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
  MatDividerModule
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...IMPORTS_TO_BE_EXPORTED
  ],
  exports: [
    ...IMPORTS_TO_BE_EXPORTED
  ]
})
export class MaterialModule { }
