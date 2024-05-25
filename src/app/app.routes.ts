import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaPreciosComponent } from './lista-precios/lista-precios.component';
import { LoginComponent } from './login/login.component';
import { OrdenComponent } from './ordenes/orden/orden.component';
import { OrdenesComponent } from './ordenes/ordenes.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'listaPrecios', component: ListaPreciosComponent },
    { path: 'ordenes', component: OrdenesComponent },
    { path: 'orden/:orden', component: OrdenComponent },/*
    { path: 'traspasos', component: ListaPreciosComponent },
    { path: 'compras', component: ListaPreciosComponent },
    { path: 'gastos', component: ListaPreciosComponent },
    { path: 'creditoycobranza', component: ListaPreciosComponent },
    { path: 'reportes', component: ListaPreciosComponent },
    { path: 'serviciodeemergencia', component: ListaPreciosComponent },
    { path: 'corte', component: ListaPreciosComponent },*/
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
