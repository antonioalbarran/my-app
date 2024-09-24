import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export default class LoginComponent {

  usuario = {
    nomina: '',
    password: ''
  };

  constructor(private service: AuthService, private router: Router) {   }
  login() {
    this.service.login(this.usuario.nomina, this.usuario.password).subscribe({
      next: (response) => {
        console.log(response);
        const token = response.token;
        console.log("LoginComponent token: " + token);
        const payload = JSON.parse(atob(token.split('.')[1]));
        console.log("LoginComponent payload:" + payload);
        const roles = payload.authorities;
        if(true){//segun el rol

        }
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
