import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() userName: string|undefined;
  @Input() title: string|undefined;

  cantidadDeMensajes = 0;
  cantidadDeAlertas = 0;

  constructor() { }

}
