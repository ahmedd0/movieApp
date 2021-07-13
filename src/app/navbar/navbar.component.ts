import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isUser: boolean = false;
  constructor(private _AuthService: AuthService, private _Router: Router) {
    this._AuthService.currentUser.subscribe(() => {
      if (this._AuthService.currentUser.getValue()) {
        this.isUser = true;
      }
    });
  }
  logOut() {
    this._AuthService.logOut();
    this._AuthService.currentUser.subscribe(() => {
      if (this._AuthService.currentUser.getValue() == null) {
        this._Router.navigate(['/home']);
        this.isUser = false;
      }
    });
  }

  ngOnInit(): void {}
}
