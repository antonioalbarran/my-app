import { Component, Input } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() userName: string|undefined;
  //userName: string|undefined;
  //title = 'Albarran';
  @Input() title: string|undefined;

  cantidadDeMensajes = 0;
  cantidadDeAlertas = 0;

  constructor(private service: AuthService) {}

  ngOnInit() {
    this.userName  = this.service.getName();
    //this.title = 'Algo';
  } 
}
