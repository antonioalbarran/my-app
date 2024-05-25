import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-orden',
  standalone: true,
  imports: [SidebarComponent,NavbarComponent,CommonModule],
  templateUrl: './orden.component.html',
  styleUrl: './orden.component.css'
})
export class OrdenComponent {
  private token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vaXQuYWxiYXJyYW4uY29tLm14L2VuZHBvaW50L2FwaS9hdXRoL25vbWluYS9zaWduLWluIiwiaWF0IjoxNzE1MjgyNzQ1LCJleHAiOjE3MTUyOTM1NDUsIm5iZiI6MTcxNTI4Mjc0NSwianRpIjoiY3VKMjhPN2t3MDZsWDVvcSIsInN1YiI6IjQ1NiIsInBydiI6ImY5ODVjYWVmNzkyYmExM2Q5Yjc3ZTMwODk4MTcyYTlhZTQ5YjBkNGUifQ.2F4KWp7ODz8UHpemwJoGOFuvDNmwLk2SJxlKufZ2Q-E';
  userName  = '';
  title = 'Orden de servicio # 456789';
}
