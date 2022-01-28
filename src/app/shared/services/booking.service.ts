import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})


export class BookingService {

    constructor(private http: HttpClient) { }

    public createBooking(data:any): Observable<any> {
        debugger;
      return this.http.post('/api/v1/bookings', { data });
    }

    public getBookings(): Observable<any> {
        debugger;
      return this.http.get('/api/v1/bookings');
    }
    public editBooking(id:any , data ,payment): Observable<any> {
        debugger;
        return this.http.patch(`/api/v1/bookings/${id}` , {data, payment});
    }

    public editPaymentBooking(id:any , data , bookingData): Observable<any> {
        debugger;
        return this.http.patch(`/api/v1/bookings/${id}` , {data , bookingData });
    }
    public deleteBooking(id:any ,tourId): Observable<any> {
        debugger;
        return this.http.delete(`/api/v1/bookings/${id}/tours/${tourId}`);
    }
    public updateTourCompleted(id:any , data): Observable<any> {
        debugger;
        return this.http.patch(`/api/v1/tours/${id}` , {data});
    }
    public bookingMonthlyStatus(year:any): Observable<any> {
        return this.http.get(`/api/v1/bookings/monthly-plan/${year}`);
    }
    public bookingWeeklyStatus(): Observable<any> {
        return this.http.get('/api/v1/bookings/weekly-plan/week');
    }
    public  getRemainingSeatsPlan(): Observable<any> {
        return this.http.get('/api/v1/bookings/remaining-Seats-Plan/seats');
    }
  

}
