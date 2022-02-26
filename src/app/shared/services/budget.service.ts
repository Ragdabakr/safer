import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})


export class BudgetService {

    constructor(private http: HttpClient) { }


    public getBudgetes(): Observable<any> {
        debugger;
        return this.http.get('/api/v1/budget');
    }
    public createBudget(data: any): Observable<any> {
        debugger;
        return this.http.post('/api/v1/budget', { data });
    }
    public deleteBudget(deleteId: any): Observable<any> {
        debugger;
        return this.http.delete(`/api/v1/budget/${deleteId}`);
    }
    public updateBudget(data: any, editId: any): Observable<any> {
        debugger;
        return this.http.patch(`/api/v1/budget/${editId}`, { data });
    }


    
}
