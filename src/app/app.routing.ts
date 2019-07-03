import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BeautyComponent } from './beauty/beauty.component';
import { BeautyDetailComponent } from './beauty-detail/beauty-detail.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'beauties',
    component: BeautyComponent
  },
  {
    path: 'beauties/:id',
    component: BeautyDetailComponent
  },
  {
  path: 'admin',
        component: AdminComponent,
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
