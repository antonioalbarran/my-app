import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { OrdenesDeServicioService } from './ordenes-de-servicio.service';

@Component({
  selector: 'app-ordenes-de-servicio',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './ordenes-de-servicio.component.html',
  styleUrl: './ordenes-de-servicio.component.css',
})
export default class OrdenesDeServicioComponent implements OnInit {
  
  ordenes: any[] = [];
  constructor(
    private service: AuthService,
    private ordenesDeServicioService: OrdenesDeServicioService
  ) {}

  ngOnInit(): void {
    this.ordenesDeServicioService
      .getFirst500Order(this.service.getToken() || '')
      .subscribe((ordenes) => {
        this.ordenes = ordenes || [];
      });
  }
}
