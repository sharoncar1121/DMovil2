import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'post-firestore-page',
    loadComponent: () => import('./pages/ui/post-firestore-page/post-firestore-page.page').then( m => m.PostFirestorePagePage)
  },
  {
    path: 'post-service',
    loadComponent: () => import('./pages/ui/post-service/post-service.page').then( m => m.PostServicePage)
  },
];
