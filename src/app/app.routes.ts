import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    title: 'home',
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
];
