import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})


export class OrdenesService {
  private readonly http = inject(HttpClient);
  private urlListaDePrecios = 'http://it.albarran.com.mx/endpoint/api/ordenes/v1?idSucursal=44&id_placa=1';
  getAllOrdenes(token: string,id_sucursal: number): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    //this.urlListaDePrecios = this.urlListaDePrecios + id_sucursal
    return this.http.get<any>(this.urlListaDePrecios,{'headers':headers})
  }
}
