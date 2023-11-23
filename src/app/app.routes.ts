import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'home',
        title: 'Likeur off',
        loadComponent: () => import('./pages/home-page/home-page.component')
    },
    {
        path:'work',
        title: 'Work',
        loadComponent: () => import('./pages/workpage/workpage.component')
    },
    {
        path:'contact',
        title: 'contact',
        loadComponent: () => import('./pages/contactpage/contactpage.component')
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch: 'full'
    },
];
