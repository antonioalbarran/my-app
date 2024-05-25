import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ListaPreciosService {
  private readonly http = inject(HttpClient);

  private urlListaDePrecios = 'http://it.albarran.com.mx/endpoint/api/productos/v1/lista-precios?idSucursal=';

  getAllProducts(token: string,id_sucursal: number): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    this.urlListaDePrecios = this.urlListaDePrecios + id_sucursal
    return this.http.get<any>(this.urlListaDePrecios,{'headers':headers})
  }
}
