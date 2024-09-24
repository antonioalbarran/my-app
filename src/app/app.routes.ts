import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            {
                path: 'home',
                loadComponent: () => import('./business/home/home.component'),title: 'Hola',
                canActivate: [AuthGuard]
            },
            {
                path: 'listaPrecios',
                loadComponent: () => import('./business/lista-precios/lista-precios.component'),
                canActivate: [AuthGuard]
            },
            {
                path: 'ordenesDeServicio',
                loadComponent: () => import('./business/ordenes-de-servicio/ordenes-de-servicio.component'),
                canActivate: [AuthGuard]
            },
            {
                path: 'ordeneDeServicio/:id_sucursal/:orden',
                loadComponent: () => import('./business/ordenes-de-servicio/orden-de-servicio/orden-de-servicio.component'),
                canActivate: [AuthGuard]
            }

        ],
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadComponent: () => import('./business/login/login.component'),
        canActivate: [AuthenticatedGuard]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
   
];
