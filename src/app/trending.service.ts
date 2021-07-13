import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrendingService {
  constructor(private http: HttpClient) {}
  apiKey: string = '254baee6670813a56bf9cd7f5351deea';
  getTrending(type: string): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/trending/${type}/day?api_key=${this.apiKey} `
    );
  }
  getAllMedia(media: any, page: any): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/${media}?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
    );
  }
  getMediaDetials(media: any, id: any): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/${media}/${id}?api_key=${this.apiKey}&language=en-US`
    );
  }
}
