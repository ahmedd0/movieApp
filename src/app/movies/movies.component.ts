import { Component, Input, OnInit } from '@angular/core';
import { TrendingService } from './../trending.service';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: [],
})
export class MoviesComponent implements OnInit {
  loader: boolean = true;
  start: number = 0;
  end: number = 7;
  totalPageNum: any;
  currentPages: any;
  pagesArr: any;
  subscription = new Subscription();
  currentPage: any;
  constructor(private _TrendingService: TrendingService) {}
  trendingMovies: any[] = [];

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
  getAllMedia(pageNum: number) {
    this.subscription = this._TrendingService
      .getAllMedia('movie', pageNum)
      .subscribe((data) => {
        this.trendingMovies = data.results;
        this.totalPageNum = data.total_pages;
        this.currentPage = data?.page;
        window.scrollTo(0, 0);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
