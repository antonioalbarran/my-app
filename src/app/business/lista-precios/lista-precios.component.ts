import { Component, OnInit, inject } from '@angular/core';
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
export default class ListaPreciosComponent implements OnInit {
  //userName  = 'Antonio Reynoso';
  //title = 'Lista de Precios';
  //private token = '';
  productos: any[] = [];

  conIVA = true;
  bntIVAText="Con IVA";
  conServicios = true;
  bntServiciosText="Con Servicios";
  conExistencia = false;
  bntExistenciaText="Con Existencia";
  unaLlanta = true;
  dosLlantas = false;
  tresLlantas = false;
  cuatroLlantas = false;

  constructor(private service: AuthService,private listaPreciosService: ListaPreciosService) {}

  //productos$ = this.listaPreciosService.getAllProducts(this.service.getToken()??'',44);

  ngOnInit(): void {
    this.listaPreciosService.getProduct().subscribe(productos => {
      this.productos = productos||[];
    })
  }
  bnt_iva(){
    this.conIVA = !this.conIVA
    console.log(this.conIVA?"bnt_iva activado":"bnt_iva desactivado");
    this.bntIVAText = this.conIVA?"Con IVA":"Sin IVA";
    this.productos.map(producto => {
      if(this.conIVA){
        producto.precio_max = producto.precio_base * 1.16;
        producto.precio = producto.precio_25 * 1.16;
        producto.precio_intel = producto.precio_inter * 1.16;
        producto.precio_3 = producto.precio_3_meses * 1.16;
      }else{
        producto.precio_max = producto.precio_base;
        producto.precio = producto.precio_25;
        producto.precio_intel = producto.precio_inter;
        producto.precio_3 = producto.precio_3_meses;
      }
    })
  }
  bnt_servicios(){
    this.conServicios = !this.conServicios
    console.log(this.conServicios?"bnt_servicios activado":"bnt_servicios desactivado");
    this.bntServiciosText = this.conServicios?"Con Servicios":"Sin Servicios";
  }
  bnt_existencia(){
    this.conExistencia = !this.conExistencia
    console.log(this.conExistencia?"bnt_existencia activado":"bnt_existencia desactivado");
    this.bntExistenciaText = this.conExistencia?"Con Existencia":"Sin Existencia";
  }

  bnt_llantas(cantdadeLlantas: number){
    console.log(cantdadeLlantas);
    switch(cantdadeLlantas){
      case 1:
        this.unaLlanta = true;
        this.dosLlantas = false;
        this.tresLlantas = false;
        this.cuatroLlantas = false;
        break;
      case 2:
        this.unaLlanta = false;
        this.dosLlantas = true;
        this.tresLlantas = false;
        this.cuatroLlantas = false;
        break;
      case 3:
        this.unaLlanta = false;
        this.dosLlantas = false;
        this.tresLlantas = true;
        this.cuatroLlantas = false;
        break;
      case 4:
        this.unaLlanta = false;
        this.dosLlantas = false;
        this.tresLlantas = false;
        this.cuatroLlantas = true;
        break;
    }
  }

  calculaPrecio(producto: any){
    return producto;
  }

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
