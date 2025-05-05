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
  selector: 'app-register',
  imports: [FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private router: Router) {}

  userRegistered = new EventEmitter();

  registerForm = new FormGroup({
    userName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  register() {
    if (this.registerForm.valid) {
      this.userRegistered.emit(this.registerForm.value);
      this.registerForm.reset();
      this.router.navigate(['/login']);
    }
  }
}
