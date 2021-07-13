import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TrendingService } from './trending.service';
@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  movies = new BehaviorSubject(null);
  TvShows = new BehaviorSubject(null);

  constructor(private _TrendingService: TrendingService) {
    this.getMovies('movie', 1);
    this.getTvs('tv', 1);
    console.log('object');
  }
  getMovies(mediaType: any, pageNum: any) {
    this._TrendingService.getAllMedia(mediaType, pageNum).subscribe((e) => {
      this.movies.next(e);
    });
  }
  getTvs(mediaType: any, pageNum: any) {
    this._TrendingService.getAllMedia(mediaType, pageNum).subscribe((e) => {
      this.TvShows.next(e);
    });
  }
  updateMovies(pageNum: any) {
    this.getMovies('movie', pageNum);
  }
  updateTvs(pageNum: any) {
    this.getTvs('tv', pageNum);
  }
}
