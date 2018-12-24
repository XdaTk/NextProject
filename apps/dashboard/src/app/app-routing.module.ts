import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LayoutBaseComponent, LayoutComponent } from '@next/ui';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      { path: 'empty', children: [] }
    ]
  },
  {
    path: '',
    component: LayoutBaseComponent,
    children: [
      { path: '', loadChildren: './auth/auth.module#AuthModule' },
      { path: '', loadChildren: './error/error.module#ErrorModule' },
      { path: '**', redirectTo: '/404?message=Invalid route' }
    ]
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(
  routes
);
