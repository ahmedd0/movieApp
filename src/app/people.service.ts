import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private http: HttpClient) {}
  getPeople(pageNumber: any): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/person/popular?api_key=254baee6670813a56bf9cd7f5351deea&language=en-US&page=${pageNumber}`
    );
  }
}
