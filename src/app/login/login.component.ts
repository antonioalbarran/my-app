import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  baseURl = "https://tools.albarran.com.mx/api/microservices/auth/nomina/sign-in";
  usuario = {
    nomina: '',
    password: ''
  };

  constructor(private service: LoginService, private router: Router) {   }
  login() {
    this.service.login(this.usuario).subscribe({
      next: (usuario) => {
        console.log(usuario);
        localStorage.setItem('id_user', usuario.id.toString());
        localStorage.setItem('token', usuario.jsonToken);
        localStorage.setItem('username', usuario.username);
        //localStorage.setItem('sucurales', usuario.sucursales);
        this.router.navigate(['/home']);
        //window.location.href = 'home';
      },
      error: (error) => {
        alert("Usuario o contraseña incorrecto");
        console.error(error);
      }
    });

  }
}
