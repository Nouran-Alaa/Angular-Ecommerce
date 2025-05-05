import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ProductsComponent } from './Components/products/products.component';
import { AuthGuard } from './auth.guard'; // import your guard

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    title: 'Home',
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard],
    title: 'Products',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./Components/about/about.component').then(
        (c) => c.AboutComponent
      ),
    canActivate: [AuthGuard],
    title: 'About',
  },

  { path: 'login', component: LoginComponent, title: 'LogIn' },
  { path: 'register', component: RegisterComponent, title: 'Register' },

  { path: '**', component: NotFoundComponent, title: 'ERROR 404' },
];
