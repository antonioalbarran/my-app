import { Component, inject } from '@angular/core';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { LoginService } from '../login/login.service';
import { ListaPreciosService } from './lista-precios.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-lista-precios',
  standalone: true,
  imports: [SidebarComponent,NavbarComponent,CommonModule],
  templateUrl: './lista-precios.component.html',
  styleUrl: './lista-precios.component.css'
})
export default class ListaPreciosComponent {
  userName  = 'Antonio Reynoso';
  title = 'Lista de Precios';
  private token = '';
  productos = [];
  constructor(private service: AuthService,private listaPreciosService: ListaPreciosService) {
     
  }
  
  productos$ = this.listaPreciosService.getAllProducts(this.service.getToken()??'',44);
  

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
