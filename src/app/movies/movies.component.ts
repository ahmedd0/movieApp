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
        console.log(this.trendingMovies);
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
    console.log(i.pageNum);
    this.getAllMedia(i.pageNum);

    window.scrollTo(0, 0);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
