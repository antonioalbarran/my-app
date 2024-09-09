import { Component, OnInit, } from '@angular/core';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
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
  
  
  productos: any[] = [];
  productosAMostrar: any[] = [];

  conIVA = true;
  bntIVAText="Con IVA";
  conServicios = true;
  bntServiciosText="Con Servicios";
  conExistencia = false;
  bntExistenciaText="Con Existencia";
  cantidadDeLlantas = 1;
  unaLlanta = true;
  dosLlantas = false;
  tresLlantas = false;
  cuatroLlantas = false;

  constructor(private service: AuthService,private listaPreciosService: ListaPreciosService) {}

  //productos$ = this.listaPreciosService.getAllProducts(this.service.getToken()??'',44);

  ngOnInit(): void {
    this.listaPreciosService.getProduct().subscribe(productos => {
      this.productos = productos||[];
      this.productosAMostrar = productos.map((producto) => this.calculaPrecio(producto))||[];
    })
  }
  bnt_iva(){
    this.conIVA = !this.conIVA
    console.log(this.conIVA?"bnt_iva activado":"bnt_iva desactivado");
    this.bntIVAText = this.conIVA?"Con IVA":"Sin IVA";
    this.productosAMostrar = this.productos.filter((producto) => this.tieneExistencia(producto)).map((producto) => this.calculaPrecio(producto));
  }
  bnt_servicios(){
    this.conServicios = !this.conServicios
    console.log(this.conServicios?"bnt_servicios activado":"bnt_servicios desactivado");
    this.bntServiciosText = this.conServicios?"Con Servicios":"Sin Servicios";
    this.productosAMostrar =  this.productos.filter((producto) => this.tieneExistencia(producto)).map((producto) => this.calculaPrecio(producto));
  }
  bnt_existencia(){
    this.conExistencia = !this.conExistencia
    console.log(this.conExistencia?"bnt_existencia activado":"bnt_existencia desactivado");
    this.bntExistenciaText = this.conExistencia?"Con Existencia":"Sin Existencia";
    this.productosAMostrar = this.productos.filter((producto) => this.tieneExistencia(producto)).map((producto) => this.calculaPrecio(producto));
  }

  bnt_llantas(cantdadeLlantas: number){
    console.log(cantdadeLlantas);
    switch(cantdadeLlantas){
      case 1:
        this.unaLlanta = true;
        this.dosLlantas = false;
        this.tresLlantas = false;
        this.cuatroLlantas = false;
        this.cantidadDeLlantas = 1;
        break;
      case 2:
        this.unaLlanta = false;
        this.dosLlantas = true;
        this.tresLlantas = false;
        this.cuatroLlantas = false;
        this.cantidadDeLlantas = 2;
        break;
      case 3:
        this.unaLlanta = false;
        this.dosLlantas = false;
        this.tresLlantas = true;
        this.cuatroLlantas = false;
        this.cantidadDeLlantas = 3;
        break;
      case 4:
        this.unaLlanta = false;
        this.dosLlantas = false;
        this.tresLlantas = false;
        this.cuatroLlantas = true;
        this.cantidadDeLlantas = 4;
        break;
    }
    this.productosAMostrar = this.productos.filter((producto) => this.tieneExistencia(producto)).map((producto) => this.calculaPrecio(producto));
  }

  calculaPrecio(producto: any){
    console.log(this.conServicios);
    
    if(this.isLlanta(producto)){
      producto.precio_max = (producto.precio_base + this.precioServicio())*this.cantidadDeLlantas;
      producto.precio = (producto.precio_25 + this.precioServicio())*this.cantidadDeLlantas;
      producto.precio_intel = (producto.precio_inter + this.precioServicio())*this.cantidadDeLlantas;
      producto.precio_3 = (producto.precio_3_meses + this.precioServicio())*this.cantidadDeLlantas;
    }else{
      producto.precio_max = producto.precio_base;
      producto.precio = producto.precio_25;
      producto.precio_intel = producto.precio_inter;
      producto.precio_3 = producto.precio_3_meses;
    }

    if(this.conIVA){
      producto.precio_max = producto.precio_max*1.16;
      producto.precio = producto.precio*1.16;
      producto.precio_intel = producto.precio_inter*1.16;
      producto.precio_3 = producto.precio_3*1.16;
    }

    return producto;
  }

  precioServicio(){
    return this.conServicios ? 200 : 0
  }
  tieneExistencia(producto: any) {
    if(this.conExistencia){
      return producto.cantidad>0  
    }
    return true;
  }

  isLlanta(producto: any): boolean {
    console.log(producto.id_linea);
    if(producto.id_linea == 5 ||
      producto.id_linea == 8 ||
      producto.id_linea == 9 ||
      producto.id_linea == 10 ||
      producto.id_linea == 11
    ){
      return true;
    }
    return false;  
  }

  txt_ancho(ancho: string, alto: HTMLInputElement){
    let aux =parseInt(ancho.replace('.',''));
    if(ancho.replace('.','').length>=3){
      alto.focus();
    }
  }

  txt_alto(alto: string,rin: HTMLInputElement) {
    let aux =parseInt(alto.replace('.',''));
    if(aux < 15 && alto.replace('.','').length>=3){
      rin.focus();
    }
    if(aux >= 15 && alto.replace('.','').length>=2){
      rin.focus();
    }
  }

  txt_rin(rin: string) {
    //filtrar por medida
  }
  actualizar(){}
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
