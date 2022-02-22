import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})


export class RoleService {

    constructor(private http: HttpClient) { }

    public createrole(data:any): Observable<any> {
        debugger;
      return this.http.post('/api/v1/roles', { data });
    }

    public getroles(): Observable<any> {
        debugger;
      return this.http.get('/api/v1/roles');
    }
    public updaterole(id:any , data): Observable<any> {
        debugger;
        return this.http.patch(`/api/v1/roles/${id}` , {data});
    }
    public getroleById(id:any): Observable<any> {
        debugger;
        return this.http.get(`/api/v1/roles/${id}`);
    }
    public deleterole(name:any): Observable<any> {
        debugger;
        return this.http.delete(`/api/v1/roles/${name}`);
    }

    public addpermissions(id:any , data:any): Observable<any> {
        debugger;
      return this.http.post(`/api/v1/roles/add-permissions/${id}`, { data });
    }

    

}