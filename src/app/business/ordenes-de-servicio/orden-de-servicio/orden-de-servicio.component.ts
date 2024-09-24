import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { OrdenDeServicioService } from './orden-de-servicio.service';

@Component({
  selector: 'app-orden-de-servicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orden-de-servicio.component.html',
  styleUrl: './orden-de-servicio.component.css'
})
export default class OrdenDeServicioComponent implements OnInit {
  orden_contenido: any[] = [];
  no_orden!: number;
  id_sucursal!: number;
  constructor(private service: AuthService, private ordenDeServicioService: OrdenDeServicioService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap);
    this.no_orden = Number(this.route.snapshot.paramMap.get('orden'));
    this.id_sucursal = Number(this.route.snapshot.paramMap.get('id_sucursal'));

    this.ordenDeServicioService
      .getOrden(this.service.getToken() || '', this.id_sucursal, this.no_orden)
      .subscribe((orden) => {
        console.log(orden);
        this.orden_contenido = orden;
      });
  }
}
