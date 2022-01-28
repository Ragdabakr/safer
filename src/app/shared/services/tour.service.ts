import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { map } from 'rxjs/operators';

interface createBus {
    busNumber: string;
    brand: string;
    maxPassengerSize: number;
    size: string;
    color: string;
}


interface editBusData{
    busNumber: string;
    brand: string;
    maxPassengerSize: number;
    size: string;
    color: string;
}
interface createHotel {
    name: string;
    phone: number;
    city: string;
    address: string;
}
interface editHotelData {
    name: string;
    phone: number;
    city: string;
    address: string;
}
interface deletedId {
    id: string;
}
interface editId {
    id: string;
}
interface tourId {
    tourId: any;
}

@Injectable({
    providedIn: 'root'
})


export class TourService {

    constructor(private http: HttpClient) { }

    public getCountries(): Observable<any> {
        return this.http.get('/api/v1/lookups/countries');
    }


    public sendProfileImage(image: string): Observable<any> {
        debugger;
        return this.http.post('/api/v1/image/upload-single-image', { image }, {
            reportProgress: true,
            observe: 'events'
        });
    }

    //Buses Section

    public getBuses(): Observable<any> {
        debugger;
        return this.http.get('/api/v1/buses');
    }
    public createBus(data: createBus): Observable<any> {
        debugger;
        return this.http.post('/api/v1/buses', { data });
    }
    public deleteBus(deleteId: deletedId): Observable<any> {
        debugger;
        return this.http.delete(`/api/v1/buses/${deleteId}`);
    }
    public updateBus(data: editBusData, editId: editId): Observable<any> {
        debugger;
        return this.http.patch(`/api/v1/buses/${editId}`, { data });
    }
    //HotelsSection

    public getHotels(): Observable<any> {
        return this.http.get('/api/v1/hotels');
    }
    public createHotel(data: createHotel): Observable<any> {
        debugger;
        return this.http.post('/api/v1/hotels', { data });
    }
    public deleteHotel(deleteId: deletedId): Observable<any> {
        debugger;
        return this.http.delete(`/api/v1/hotels/${deleteId}`);
    }
    public updateHotel(data: editHotelData, editId: editId): Observable<any> {
        debugger;
        return this.http.patch(`/api/v1/hotels/${editId}`, { data });
    }


      //CostsSection

      public getCostss(): Observable<any> {
        return this.http.get('/api/v1/tours/costs');
    }
    public createCost(tourId ,data): Observable<any> {
        debugger;
        return this.http.post(`/api/v1/tours/costs/${tourId}`, { data });
    }
    public deleteCost(tourId, costId): Observable<any> {
        debugger;
        return this.http.delete(`/api/v1/tours/costs/${tourId}/${costId}`);
    }
    public updateCost(data: editHotelData, editId: editId): Observable<any> {
        debugger;
        return this.http.patch(`/api/v1/tours/costs/${editId}`, { data });
    }
      //GuidesSection

      public getGuides(): Observable<any> {
        return this.http.get('/api/v1/guides');
    }

   //ToursSection

    public createTour(data:any): Observable<any> {
        debugger;
      return this.http.post('/api/v1/tours', { data });
    }
    public getTours(): Observable<any> {
        return this.http.get('/api/v1/tours');
    }
    public getTourById(id:any): Observable<any> {
        debugger;
        return this.http.get(`/api/v1/tours/${id}`);
    }
    public editTour(id:any , data): Observable<any> {
        debugger;
        return this.http.patch(`/api/v1/tours/${id}` , {data});
    }

    
    public editTourInformation(id:any , data , guideId): Observable<any> {
        debugger;
        return this.http.patch(`/api/v1/tours/tourInformation/${id}` , {data , guideId});
    }
    public editDate(id:any , date , dateId): Observable<any> {
        debugger;
        return this.http.patch(`/api/v1/tours/tourdate/${id}` , {date , dateId});
    }

    public deleteDate(id:any ,  dateId): Observable<any> {
        debugger;
        return this.http.post(`/api/v1/tours/deleteTourdate/${id}` , { dateId});
    }

    public addNewDate(id:any , date): Observable<any> {
        debugger;
        return this.http.post(`/api/v1/tours/addTourdate/${id}` , {date});
    }

    public editLocation(id:any , location , locationId): Observable<any> {
        debugger;
        return this.http.patch(`/api/v1/tours/tripLocations/${id}` , {location , locationId});
    }

    public addTourTripLocations(id:any , tripLocation): Observable<any> {
        debugger;
        return this.http.post(`/api/v1/tours/addTripLocations/${id}` , {tripLocation});
    }

    public deleteTripLocation(id:any ,  locationId): Observable<any> {
        debugger;
        return this.http.post(`/api/v1/tours/deleteTripLocations/${id}` , { locationId});
    }

    public deleteTourImage(id:any ,  imageId): Observable<any> {
        debugger;
        return this.http.post(`/api/v1/tours/deleteTourImage/${id}` , { imageId});
    }
   
    public addTourImage(id:any , data): Observable<any> {
        debugger;
        return this.http.post(`/api/v1/tours/addTourImage/${id}` , {data});
    } 

    public updateTourCoverImage(id:any , data): Observable<any> {
        debugger;
        return this.http.post(`/api/v1/tours/updateTourCoverImage/${id}` , {data});
    } 

    public enableTour(id:any , data): Observable<any> {
        debugger;
        return this.http.patch(`/api/v1/tours/enableTour/${id}` , {data});
    }
    public disableTour(id:any , data): Observable<any> {
        debugger;
        return this.http.patch(`/api/v1/tours/disableTour/${id}` , {data});
    }

    public closeTour(id:any, data ): Observable<any> {
        debugger;
        return this.http.patch(`/api/v1/tours/closeTour/${id}` , {data});
    }



    // Reports Status
    public tourTypeStatus(): Observable<any> {
        return this.http.get('/api/v1/tours/tour-type-stats');
    }
    public tourMonthlyStatus(year:any): Observable<any> {
        return this.http.get(`/api/v1/tours/monthly-plan/${year}`);
    }

    public tourWeeklyStatus(year:any): Observable<any> {
        return this.http.get(`/api/v1/tours/weekly-plan/${year}`);
    }

    public tourCompletedStatus(): Observable<any> {
        return this.http.get('/api/v1/tours/tour-completed-stats');
    }

    public tourDiffcultyStatus(): Observable<any> {
        return this.http.get('/api/v1/tours/tour-diffculty-stats');
    }


    
}
