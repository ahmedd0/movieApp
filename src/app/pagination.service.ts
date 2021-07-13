import { Injectable } from '@angular/core';
import { TrendingService } from './trending.service';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  totalPageNum: any;
  currentPages: any;
  pagesArr: any;
  media: any;
  getpagesArr(total: any): any {
    let arr: any[] = Array(total);
    let arr2: any[] = [];
    for (let i: number = 0; i < arr.length; i++) {
      arr2[i] = i + 1;
    }
    this.pagesArr = arr2;
    return arr2;
  }

  nextPage(mediaType: any, getAllMedia: any, start: number, end: number) {
    if (start < this.pagesArr.length) start = start + 1;
    end = end + 1;
    getAllMedia(mediaType, start + 1);
    return [start, end];
  }
  prevPage(mediaType: any, getAllMedia: any, start: any, end: any) {
    if (start > 0) {
      start = start - 1;
      end = end - 1;
      getAllMedia(mediaType, end - 1);
    }
    return [start, end];
  }
  showPage(mediaType: any, i: any, getAllMedia: any) {
    getAllMedia(mediaType, i.pageNum);

    window.scrollTo(0, 0);
  }
  constructor(private _TrendingService: TrendingService) {}
}
