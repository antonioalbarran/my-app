import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '@envs/environment';
@Injectable({
    providedIn: 'root'
})

export class OrdenesDeServicioService {
    private readonly http = inject(HttpClient);
    private urlOrdenesDeServicio = `${environment.API_URL}/v1/ordenes`;
    constructor() { }

    getFirst500Order(token: string): Observable<any[]> {

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        const ordenes = this.http.get<any[]>(this.urlOrdenesDeServicio,{'headers':headers});
        return ordenes;
    }

}
