import { Component, inject } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { LoginService } from '../login/login.service';
import { ListaPreciosService } from './lista-precios.service';

@Component({
  selector: 'app-lista-precios',
  standalone: true,
  imports: [SidebarComponent,NavbarComponent,CommonModule],
  templateUrl: './lista-precios.component.html',
  styleUrl: './lista-precios.component.css'
})
export class ListaPreciosComponent {
  userName  = 'Antonio Reynoso';
  title = 'Lista de Precios';
  private token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vaXQuYWxiYXJyYW4uY29tLm14L2VuZHBvaW50L2FwaS9hdXRoL25vbWluYS9zaWduLWluIiwiaWF0IjoxNzE1MjgyNzQ1LCJleHAiOjE3MTUyOTM1NDUsIm5iZiI6MTcxNTI4Mjc0NSwianRpIjoiY3VKMjhPN2t3MDZsWDVvcSIsInN1YiI6IjQ1NiIsInBydiI6ImY5ODVjYWVmNzkyYmExM2Q5Yjc3ZTMwODk4MTcyYTlhZTQ5YjBkNGUifQ.2F4KWp7ODz8UHpemwJoGOFuvDNmwLk2SJxlKufZ2Q-E';

  private readonly productsSvc = inject(ListaPreciosService);

  productos$ = this.productsSvc.getAllProducts(this.token,44);

  getClassCSS(id_clasificacion: number) {
    switch (id_clasificacion) {
      case 4:
        return 'bg-primary text-white';
      case 3:
        return 'bg-warning text-dark';
      case 2:
        return 'bg-danger text-white';
      case 1:
        return 'bg-secondary text-white';
      default:
        return 'bg-light text-dark';
    }
  }
}
