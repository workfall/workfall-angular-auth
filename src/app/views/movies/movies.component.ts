import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent, CarouselConfig } from 'ng-carousel-cdk';
import { Lightbox } from 'ngx-lightbox';
import { ApiService, Movie } from 'src/app/services/api.service';

export type Album = {
  src: string,
  caption: string,
  thumb: string,
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  config: CarouselConfig<Movie> = {
    items: [],
  };

  @ViewChild(CarouselComponent)
  carouselRef!: CarouselComponent;
  albums: Album[] = [];
  currentIndex!: number;
  loading: boolean = false;

  constructor(
    private _lightbox: Lightbox,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.getMovies();
  }

  open(): void {
    // open lightbox
    this._lightbox.open(this.albums, this.currentIndex);
  }

  handleSlideChange(i: any) {
    // console.log('i', i);
    this.currentIndex = i;
  }

  getMovies() {
    this.loading = true;
    this.apiService.getMoviesList().subscribe(res => {
      this.config.items = res;
      this.config.items.forEach(item => {
        this.albums.push({
          src: item.image,
          caption: item.title,
          thumb: item.thumbnail
        })
      })
      this.loading = false;
    })
  }
}
