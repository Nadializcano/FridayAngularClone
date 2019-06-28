import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BeautyComponent } from './beauty/beauty.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'beauty',
    component: BeautyComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
