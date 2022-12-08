import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/app/services/api.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movieInfo: Movie | undefined;

  @Output() emitViewImageEvent = new EventEmitter();

  handleViewImage() {
    this.emitViewImageEvent.emit();
  }
}
