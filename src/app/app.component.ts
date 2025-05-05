import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
import { AboutComponent } from './Components/about/about.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { not } from 'rxjs/internal/util/not';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { CustomDirective } from './Directives/custom.directive';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavBarComponent,
    FooterComponent,
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(public router: Router) {}

  hideNavAndFooter() {
    const hiddenRoutes = ['/login', '/register'];
    return hiddenRoutes.includes(this.router.url);
  }
}
