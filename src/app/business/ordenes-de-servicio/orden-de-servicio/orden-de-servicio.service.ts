import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '@envs/environment';
@Injectable({
    providedIn: 'root'
})

export class OrdenDeServicioService {
    private readonly http = inject(HttpClient);
    private urlOrdenDeServicio = `${environment.API_URL}/v1/orden-contenido`;

    constructor() { }

    getOrden(token: string,no_orden: number,id_sucursal: number): Observable<any[]> {

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        this.urlOrdenDeServicio = this.urlOrdenDeServicio + '/' + no_orden + '/' + id_sucursal
        console.log(this.urlOrdenDeServicio);
        const orden = this.http.get<any[]>(this.urlOrdenDeServicio,{'headers':headers});
        return orden;
    }
}
