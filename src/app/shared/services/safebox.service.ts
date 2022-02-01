import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})


export class SafeboxService {

    constructor(private http: HttpClient) { }

    public createNewSafebox(data:any): Observable<any> {
        debugger;
      return this.http.post('/api/v1/safeboxes', { data });
    }

    public getSafeboxes(): Observable<any> {
        debugger;
      return this.http.get('/api/v1/safeboxes');
    }
    public updateSafebox( data ,id:any): Observable<any> {
        debugger;
        return this.http.patch(`/api/v1/safeboxes/${id}` , {data});
    }
    public getsafeboxById(id:any): Observable<any> {
        debugger;
        return this.http.get(`/api/v1/safeboxes/${id}`);
    }
    public deleteSafebox(id:any): Observable<any> {
        debugger;
        return this.http.delete(`/api/v1/safeboxes/${id}`);
    }
    public deleteSafeboxes(): Observable<any> {
        debugger;
        return this.http.delete(`/api/v1/safeboxes`);
    }

    public addpermissions(id:any , data:any): Observable<any> {
        debugger;
      return this.http.post(`/api/v1/roles/add-permissions/${id}`, { data });
    }

    

}