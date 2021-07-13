import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  singupError: any;

  constructor(private _AuthService: AuthService, private _Router: Router) {}
  regiserForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(8),
    ]),
    last_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(8),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.pattern('^[A-Z][a-zA-z0-9]{4,10}$'),
      Validators.required,
    ]),
  });
  ngOnInit(): void {}
  register() {
    if (this.regiserForm.valid) {
      this._AuthService
        .register(this.regiserForm.value)
        .subscribe((response) => {
          console.log(response.message);

          if (response.message == 'success') {
            this._Router.navigate(['/login']);
          } else {
            this.singupError = response.message;
          }
        });
    } else {
      alert('Form Not Valid');
    }
  }
}
