import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})


export class HotelService {

    constructor(private http: HttpClient) { }
    public createHotelBooking(data:any ,travellers): Observable<any> {
        debugger;
      return this.http.post('/api/v1/hotels/booking', { data ,travellers});
    }
    public getHotelsList(): Observable<any> {
        debugger;
      return this.http.get('/api/v1/hotels/booked');
    }
public createHotelInvoice(data:any ): Observable<any> {
    debugger;
  return this.http.post('/api/v1/hotels/invoice', { data});
}
public getInvoiceById(id:any): Observable<any> {
    debugger;
    return this.http.get(`/api/v1/hotels/invoice/${id}`);
}
public cancelHotel(data:any): Observable<any> {
        debugger;
      return this.http.post('/api/v1/hotels/cancelBooking', { data});
}
public getHotels(): Observable<any> {
    return this.http.get('/api/v1/hotels');
}

}