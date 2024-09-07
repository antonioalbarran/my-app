import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

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
    this.urlListaDePrecios = this.urlListaDePrecios + id_sucursal;
    //console.log(this.urlListaDePrecios);
    //return this.http.get<any>(this.urlListaDePrecios,{'headers':headers})
    return new Observable();
  }

  getProduct(): Observable<any[]> {
    const producto=[
        {nombre:"Llanta 205 70 R14 BRAVURIS 5HM BARUM",
          codigo:"05E0916O",
          precio_max:1845,
          precio:1384,
          precio_intel:1273,
          precio_3:1384,

          precio_base:1845,
          precio_25:1384,
          precio_iter:1273,
          precio_3_meses:1384,

          existencia:0,
          red:4,
          promocion:"",
          codigo_albarran:"970 414 30",
          id_line:5,
          id_clasificacion:2
        }
      ];
      return of(producto);
  }
}
