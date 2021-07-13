import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TrendingService } from './../trending.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  subscription = new Subscription();
  constructor(private _TrendingService: TrendingService) {}
  trendingMovies: any[] = [];
  trendingTvShows: any[] = [];
  loader: boolean = true;
  @Input() item: any;
  ngOnInit(): void {
    this.subscription = this._TrendingService
      .getTrending('all')
      .subscribe((data) => {
        this.trendingMovies = data.results.filter((media: any) => {
          return media.media_type == 'movie';
        });
        this.trendingTvShows = data.results.filter((media: any) => {
          return media.media_type == 'tv';
        });
      });
    setTimeout(() => {
      this.loader = false;
    }, 400);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
