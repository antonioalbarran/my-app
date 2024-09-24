import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private urlLogin = "http://it.albarran.com.mx/endpoint/api/auth/nomina/sign-in";
  //private urlMe = "http://it.albarran.com.mx/endpoint/api/auth/me";

  private LOGIN_URL = 'http://localhost:4300/v1/auth/login';
  private tokenKey = 'authToken';

  private REFRESH_URL = 'http://localhost:4300/v1/auth/refresh';
  private refreshtokenKey = 'refreshToken';

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(nomina: string, password: string): Observable<any>{
    //console.log(nomina, password);
    return this.httpClient.post<any>(this.LOGIN_URL, {nomina, password}).pipe(
      tap(response => {
        if(response.token){
          console.log(response.token);
          this.setToken(response.token);
          this.setRefreshToken(response.refreshToken);
          this.setName(response.username);
          this.autoRefreshToken();
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

  private setRefreshToken(token: string): void {
    localStorage.setItem(this.refreshtokenKey, token);
  }

  public getRefreshToken(): string | null {
    if(typeof window !== 'undefined'){
      return localStorage.getItem(this.refreshtokenKey);
    }else {
      return null;
    }
  }

  refreshToken(): Observable<any>{
    const refreshToken = this.getRefreshToken();
    return this.httpClient.post<any>(this.REFRESH_URL, {refreshToken}).pipe(
     tap(response => {
       if(response.jsonToken){
         this.setToken(response.token);
         this.setRefreshToken(response.refreshToken );
         this.autoRefreshToken();
       }
     }) 
    )
  }

  autoRefreshToken(){
    const token = this.getToken();
    if(!token || token === null || token === "undefined"){
      console.log("no hay token");
      return;
    }
    console.log("token",token);
    const payload = JSON.parse(atob(token.split('.')[1]));
    console.log("payload",payload);
    const exp = payload.exp * 1000;
    
    const timeout = exp - Date.now()- (60*1000);
    setTimeout(() => {
      this.refreshToken().subscribe();
    }, timeout);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    //console.log("token",token);
    if(!token || token === null || token === "undefined"){
      return false;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    //console.log("payload",payload);
    const exp = payload.exp * 1000;
    return Date.now() < exp;
  }

  logout(): void{
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.refreshtokenKey);
    this.router.navigate(['/login']);
  }
  getName(): string {
    const token = this.getToken();
    if(!token || token === null || token === "undefined"){
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
