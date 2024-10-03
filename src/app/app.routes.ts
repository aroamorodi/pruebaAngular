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
  path: 'error',
  loadComponent: () => import('../components/Errores/Errores.component').then(m => m.ErroresComponent)
},
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}];
