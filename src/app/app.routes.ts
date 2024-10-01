import { Routes } from '@angular/router';

export const routes: Routes = [ {
  path: 'home',
  loadComponent: () => import('../components/homePage/homePage.component').then(m => m.HomePageComponent),
},
{
  path: 'user/:id',
  loadComponent: () => import('../components/Usuario/Usuario.component').then(m => m.UsuarioComponent)
},
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}];
