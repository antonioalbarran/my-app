import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private LOGIN_URL = 'http://localhost:8082/auth/login';
  private urlLogin = "http://it.albarran.com.mx/endpoint/api/auth/nomina/sign-in";
  private urlMe = "http://it.albarran.com.mx/endpoint/api/auth/me";
  private tokenKey = 'authToken';

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(nomina: string, password: string): Observable<any>{
    //console.log(nomina, password);
    return this.httpClient.post<any>(this.urlLogin, {nomina, password}).pipe(
      tap(response => {
        if(response.jsonToken){
          //console.log(response.jsonToken);
          this.setToken(response.jsonToken);
          this.setName(response.username);
          //this.setName(this.getName());
        }
      })
    )
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  public getToken(): string | null {
    if(typeof window !== 'undefined'){
      return localStorage.getItem(this.tokenKey);
    }else {
      return null;
    }
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    //console.log("token",token);
    if(!token){
      return false;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000;
    return Date.now() < exp;
  }

  logout(): void{
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }
  getName(): string {
    const token = this.getToken();
    if(!token){
      return '';
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    //console.log(payload);
    //return payload.nombre;
    return localStorage.getItem("name")??"";
  }

  private setName(name: string): void {
    localStorage.setItem("name", name);
  }
}
