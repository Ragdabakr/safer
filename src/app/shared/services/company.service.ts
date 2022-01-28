import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})


export class CompanyService {

    constructor(private http: HttpClient) { }

    public createcompany(data:any): Observable<any> {
        debugger;
      return this.http.post('/api/v1/companies', { data });
    }

    public getcompanies(): Observable<any> {
        debugger;
      return this.http.get('/api/v1/companies');
    }
    public updatecompany(id:any , data): Observable<any> {
        debugger;
        return this.http.patch(`/api/v1/companies/${id}` , {data});
    }
    public getcompanyById(id:any): Observable<any> {
        debugger;
        return this.http.get(`/api/v1/companies/${id}`);
    }
    public deletecompany(id:any): Observable<any> {
        debugger;
        return this.http.delete(`/api/v1/companies/${id}`);
    }

    // public addpermissions(id:any , data:any): Observable<any> {
    //     debugger;
    //   return this.http.post(`/api/v1/companies/add-permissions/${id}`, { data });
    // }

    

}