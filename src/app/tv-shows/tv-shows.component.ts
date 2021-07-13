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
  getpagesArr(total: any): any {
    let arr: any[] = Array(total);
    let arr2: any[] = [];
    for (let i: number = 0; i < arr.length; i++) {
      arr2[i] = i + 1;
    }
    this.pagesArr = arr2;
  }
  getAllMedia(pageNum: any) {
    this.subscription = this._TrendingService
      .getAllMedia('tv', pageNum)
      .subscribe((data) => {
        this.trendingTvShows = data.results;
        this.totalPageNum = data.total_pages;
        this.getpagesArr(this.totalPageNum);
        this.currentPages = this.pagesArr.slice(this.start, this.end);
      });
  }
  nextPage() {
    if (this.start < this.pagesArr.length) this.start = this.start + 1;
    this.end = this.end + 1;
    this.getAllMedia(this.start + 1);
    console.log(this.start + 1);
  }
  prevPage() {
    if (this.start > 0) {
      this.start = this.start - 1;
      this.end = this.end - 1;
      this.getAllMedia(this.end - 1);
    }
  }
  showPage(i: any) {
    this.getAllMedia(i.pageNum);

    window.scrollTo(0, 0);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()

  }
}
