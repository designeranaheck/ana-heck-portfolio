import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    title: 'Ana Heck · Sênior Product Designer',
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./features/portfolio/portfolio').then((m) => m.Portfolio),
    title: 'Portfolio · Ana Heck',
  },
  { path: 'sobre', pathMatch: 'full', redirectTo: '' },
  { path: 'projetos', pathMatch: 'full', redirectTo: 'portfolio' },
  { path: 'artigos', pathMatch: 'full', redirectTo: 'portfolio' },
  {
    path: 'artigos/:slug',
    loadComponent: () => import('./features/artigos/artigo/artigo').then((m) => m.Artigo),
  },
  { path: '**', redirectTo: '' },
];
