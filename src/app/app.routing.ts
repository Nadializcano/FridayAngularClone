import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BeautyComponent } from './beauty/beauty.component';
import { BeautyDetailComponent } from './beauty-detail/beauty-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'beauty',
    component: BeautyComponent
  },
  {
    path: 'beauties/:id',
    component: BeautyDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
