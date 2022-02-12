import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})


export class BondService {

    constructor(private http: HttpClient) { }

    public createNewBond(data:any): Observable<any> {
        debugger;
      return this.http.post('/api/v1/Bondes', { data });
    }

    public getBondes(): Observable<any> {
        debugger;
      return this.http.get('/api/v1/Bondes');
    }
    public getBondeInvoice(id:any): Observable<any> {
        debugger;
      return this.http.get(`/api/v1/Bondes/invoices/${id}`);
    }
    public updateBond( data ,id:any): Observable<any> {
        debugger;
        return this.http.patch(`/api/v1/Bondes/${id}` , {data});
    }
    public getBondById(id:any): Observable<any> {
        debugger;
        return this.http.get(`/api/v1/Bondes/${id}`);
    }
    public deleteBond(id:any): Observable<any> {
        debugger;
        return this.http.delete(`/api/v1/Bondes/${id}`);
    }
    public deleteBondes(): Observable<any> {
        debugger;
        return this.http.delete(`/api/v1/Bondes`);
    }

    public addpermissions(id:any , data:any): Observable<any> {
        debugger;
      return this.http.post(`/api/v1/roles/add-permissions/${id}`, { data });
    }

    

}