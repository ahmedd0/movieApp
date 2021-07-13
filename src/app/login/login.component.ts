import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  singinError: any;
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.pattern('^[A-Z][a-zA-z0-9]{4,10}$'),
      Validators.required,
    ]),
  });
  login() {
    if (this.loginForm.valid) {
      this._AuthService.login(this.loginForm.value).subscribe((response) => {
        if (response.message == 'success') {
          localStorage.setItem('token', response.token);
          this._AuthService.setCurrentUser();
          this._Router.navigate(['/home']);
        } else {
          alert('USER NOT EXIST');
        }
      });
    }
  }
  ngOnInit(): void {}
}
