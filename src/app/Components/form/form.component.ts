import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormsModule,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Output() prodAdded = new EventEmitter();

  myProdForm = new FormGroup({
    prodName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    prodDesc: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
    ]),
    prodImg: new FormControl(null, [
      Validators.required,
      Validators.pattern('^(https?:\\/\\/).+'),
    ]),
    prodRate: new FormControl(null, [
      Validators.min(1),
      Validators.max(5),
      Validators.required,
    ]),
  });

  addProduct() {
    this.prodAdded.emit(this.myProdForm.value);
    this.myProdForm.reset();
  }
}
