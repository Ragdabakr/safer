import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})


export class VisaService {

    constructor(private http: HttpClient) { }

    // public createflightTicket(data:any): Observable<any> {
    //     debugger;
    //   return this.http.post('/api/v1/flightTickets', { data });
    // }

    // public getflightTickets(): Observable<any> {
    //     debugger;
    //   return this.http.get('/api/v1/flightTickets');
    // }
    // public updateflightTicket(id:any , data): Observable<any> {
    //     debugger;
    //     return this.http.patch(`/api/v1/flightTickets/${id}` , {data});
    // }
    // public getflightTicketById(id:any): Observable<any> {
    //     debugger;
    //     return this.http.get(`/api/v1/flightTickets/${id}`);
    // }
    // public deleteflightTicket(id:any): Observable<any> {
    //     debugger;
    //     return this.http.delete(`/api/v1/flightTickets/${id}`);
    // }


    
    public createVisaBooking(data:any ,travellers): Observable<any> {
        debugger;
      return this.http.post('/api/v1/visa/booking', { data ,travellers});
    }
    public getVisasList(): Observable<any> {
        debugger;
      return this.http.get('/api/v1/visa/booked');
    }

//     public getflightTicketsBooking(): Observable<any> {
//         debugger;
//       return this.http.get('/api/v1/booking/flightTickets');
//     }
//     public updateflightTicketBooking(id:any , data): Observable<any> {
//         debugger;
//         return this.http.patch(`/api/v1/booking/flightTickets/${id}` , {data});
//     }
//     public getflightTicketByIdBooking(id:any): Observable<any> {
//         debugger;
//         return this.http.get(`/api/v1/booking/flightTickets/${id}`);
//     }
//     public deleteflightTicketBooking(id:any): Observable<any> {
//         debugger;
//         return this.http.delete(`/api/v1/booking/flightTickets/${id}`);
//     }






//    public refundflightTicketBooking(data : any): Observable<any> {
//     debugger;
//     return this.http.post('/api/v1/flightTickets/refundFlightTicket', {data});
// }




public createVisaInvoice(data:any ): Observable<any> {
    debugger;
  return this.http.post('/api/v1/visa/invoice', { data});
}
public getInvoiceById(id:any): Observable<any> {
    debugger;
    return this.http.get(`/api/v1/visa/invoice/${id}`);
}
public cancelVisa(data:any): Observable<any> {
        debugger;
      return this.http.post('/api/v1/visa/cancelBooking', { data});
}
// public getflightTicketInvoices(): Observable<any> {
//     debugger;
//   return this.http.get('/api/v1/flightTickets/invoice');
// }





    

}