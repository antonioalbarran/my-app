import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export default class LoginComponent {
  //baseURl = "https://tools.albarran.com.mx/api/microservices/auth/nomina/sign-in";
  usuario = {
    nomina: '',
    password: ''
  };

  constructor(private service: AuthService, private router: Router) {   }
  login() {
    this.service.login(this.usuario.nomina, this.usuario.password).subscribe({
      next: (usuario) => {
        //console.log(usuario);
        //localStorage.setItem('id_user', usuario.id.toString());
        //localStorage.setItem('token', usuario.jsonToken);
        //localStorage.setItem('username', usuario.username);
        //localStorage.setItem('sucurales', usuario.sucursales);
        this.router.navigate(['/']);
        //window.location.href = 'home';
      },
      error: (error) => {
        alert("Usuario o contraseña incorrecto");
        console.error(error);
      }
    });

  }
}
