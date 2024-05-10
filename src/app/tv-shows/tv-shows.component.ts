import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrendingService } from './../trending.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss'],
})
export class TvShowsComponent implements OnInit {
  trendingTvShows: any[] = [];
  loader: boolean = true;
  start: number = 0;
  end: number = 7;
  totalPageNum: any;
  currentPages: any;
  pagesArr: any;

  @Input() item: any;
  subscription = new Subscription();

  constructor(private _TrendingService: TrendingService) {}

  ngOnInit(): void {
    this.getAllMedia(1);
    setTimeout(() => {
      this.loader = false;
    }, 400);
  }

  getAllMedia(pageNum: any) {
    this.subscription = this._TrendingService
      .getAllMedia('tv', pageNum)
      .subscribe((data) => {
        this.trendingTvShows = data.results;
        this.totalPageNum = data.total_pages;
        window.scrollTo(0, 0);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
