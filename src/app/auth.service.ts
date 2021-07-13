import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('token') !== null) {
      this.currentUser.next(localStorage.getItem('token'));
    }
  }
  register(formData: any): Observable<any> {
    return this._HttpClient.post(
      'https://routeegypt.herokuapp.com/signup',
      formData
    );
  }
  login(formData: any): Observable<any> {
    return this._HttpClient.post(
      'https://routeegypt.herokuapp.com/signin',
      formData
    );
  }
  logOut() {
    localStorage.removeItem('token');
    this.currentUser.next(null);
  }
  setCurrentUser() {
    this.currentUser.next(localStorage.getItem('token'));
  }
}
