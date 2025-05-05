import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  FormsModule,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  userlogged = new EventEmitter();

  loginForm = new FormGroup({
    userName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  login() {
    if (this.loginForm.valid) {
      this.userlogged.emit(this.loginForm.value);
      sessionStorage.setItem('token', 'true'); // Simulate a successful login
      this.loginForm.reset();
      this.router.navigate(['/']);
    }
  }
}
