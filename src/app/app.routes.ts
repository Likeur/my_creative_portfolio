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
        loadComponent: () => import('./pages/workpage/workpage.component'),
        children: [
            {
                path:'Rdctechcommunities',
                title: 'Rdctechcommunities',
                loadComponent: () => import('./pages/workpage/workpage.component'),
            },
            {
                path:'Animate',
                title: 'Animate',
                loadComponent: () => import('./pages/workpage/workpage.component'),
            },
            {
                path:'Design_graphique',
                title: 'Design Graphiqe',
                loadComponent: () => import('./pages/workpage/workpage.component'),
            },
        ]
    },
    {
        path:'service',
        title: 'Service',
        loadComponent: () => import('./pages/servicepage/servicepage.component')
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
