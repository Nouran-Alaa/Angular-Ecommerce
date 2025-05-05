import { Component } from '@angular/core';
import { CustomDirective } from '../../Directives/custom.directive';

@Component({
  selector: 'app-home',
  imports: [CustomDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
