import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})


export class CommissionService {

    constructor(private http: HttpClient) { }

    public createCommission(data:any): Observable<any> {
        debugger;
      return this.http.post('/api/v1/commission', { data });
    }

    public getCommissions(): Observable<any> {
        debugger;
      return this.http.get('/api/v1/commission');
    }
    public updateCommission(id:any , data): Observable<any> {
        debugger;
        return this.http.patch(`/api/v1/commission/${id}` , {data});
    }
    public getCommissionById(id:any): Observable<any> {
        debugger;
        return this.http.get(`/api/v1/commission/${id}`);
    }
    public deleteCommission(id:any): Observable<any> {
        debugger;
        return this.http.delete(`/api/v1/commission/${id}`);
    }

    // public addpermissions(id:any , data:any): Observable<any> {
    //     debugger;
    //   return this.http.post(`/api/v1/companies/add-permissions/${id}`, { data });
    // }

    

}