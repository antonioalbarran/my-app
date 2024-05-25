import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlLogin = "http://it.albarran.com.mx/endpoint/api/auth/nomina/sign-in";
  private urlMe = "http://it.albarran.com.mx/endpoint/api/auth/me";

  constructor(private http: HttpClient) { }

  login(data: any): Observable<usuario> {
    //console.log(data);
    const headers = {'Content-Type': 'application/json'};
    const body = JSON.stringify(data);
    return this.http.post<usuario>(this.urlLogin, body,{'headers':headers})
  }
 /**
  * name
  */
 public me(token: string): Observable<usuario> {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  return this.http.get<usuario>(this.urlMe,{'headers':headers})
 }
}
