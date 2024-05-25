import { Component, inject } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { OrdenesService } from './ordenes.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [SidebarComponent,NavbarComponent,CommonModule,RouterModule],
  templateUrl: './ordenes.component.html',
  styleUrl: './ordenes.component.css'
})
export class OrdenesComponent {
  private token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vaXQuYWxiYXJyYW4uY29tLm14L2VuZHBvaW50L2FwaS9hdXRoL25vbWluYS9zaWduLWluIiwiaWF0IjoxNzE1MjgyNzQ1LCJleHAiOjE3MTUyOTM1NDUsIm5iZiI6MTcxNTI4Mjc0NSwianRpIjoiY3VKMjhPN2t3MDZsWDVvcSIsInN1YiI6IjQ1NiIsInBydiI6ImY5ODVjYWVmNzkyYmExM2Q5Yjc3ZTMwODk4MTcyYTlhZTQ5YjBkNGUifQ.2F4KWp7ODz8UHpemwJoGOFuvDNmwLk2SJxlKufZ2Q-E';
  userName  = '';
  title = 'Ordenes de Servicio';

  private readonly ordenesSvc = inject(OrdenesService);

  ordenes$ = this.ordenesSvc.getAllOrdenes(this.token,44);
}
