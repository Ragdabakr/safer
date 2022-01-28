import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})


export class InvoiceService {

    constructor(private http: HttpClient) { }

    public createInvoice(data:any): Observable<any> {
        debugger;
      return this.http.post('/api/v1/invoices', { data });
    }

    public getInvoices(): Observable<any> {
        debugger;
      return this.http.get('/api/v1/invoices');
    }
    public editInvoice(id:any , data): Observable<any> {
        debugger;
        return this.http.patch(`/api/v1/invoices/${id}` , {data});
    }
    public getInvoiceById(id:any): Observable<any> {
        debugger;
        return this.http.get(`/api/v1/invoices/${id}`);
    }
    public deleteInvoice(id:any): Observable<any> {
        debugger;
        return this.http.delete(`/api/v1/invoices/${id}`);
    }


    public getFlightInvoiceById(id:any): Observable<any> {
        debugger;
        return this.http.get(`/api/v1/invoices/f/${id}`);
    }
    public getFlightTicketsInvoices(): Observable<any> {
        debugger;
      return this.http.get('/api/v1/invoices/f');
    }
   

    

}