import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orden-de-servicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orden-de-servicio.component.html',
  styleUrl: './orden-de-servicio.component.css'
})
export default class OrdenDeServicioComponent implements OnInit {
  orden!: number;
  id_sucursal!: number;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.orden = Number(this.route.snapshot.paramMap.get('orden'));
    this.id_sucursal = Number(this.route.snapshot.paramMap.get('id_sucursal'));
  }
}
