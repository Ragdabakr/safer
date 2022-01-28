import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { map } from 'rxjs/operators';

interface createUserProfileData{
    name: string;
    gender: string;
    birthplace: string;
    birthday: Date;
    livesin: string;
    occupation: string;
    phoneNumber: number;
    phoneCode: any;
    photo: string,
    about: string;
}
interface editUserProfileData{
    name: string;
    email: string;
    phone: string;
    address: string;
}
interface createDataUser{
    name: string;
    email: string;
     role: string;
    password:string;
    passwordConfirmation:string;
}
interface editDataUser{
    name: string;
    email: string;
    phone: string;
    address: string;
}
interface deletedId {
    id: string;
}
interface editId {
    id: string;
}
interface activateUser{
    active:boolean;
}

@Injectable({
    providedIn: 'root'
})


export class UserService {

    constructor(private http: HttpClient) { }

    public getCountries(): Observable<any> {
        return this.http.get('/api/v1/lookups/countries');
    }

   

    public companyAccountInfo(data): Observable<any> {
        debugger;
        return this.http.post('/api/v1/users/companyAccountInfo', {data});
    }

    public  editCompanyDataForm(data ,id): Observable<any> {
        debugger;
        return this.http.patch(`/api/v1/users/companyAccountInfo/${id}`, {data });
    }

    public companyAccountImage(data ,id): Observable<any> {
        debugger;
        return this.http.post('/api/v1/users/companyAccountImage', {data ,id});
    }



    public getCompanyAccount(): Observable<any> {
        debugger;
        return this.http.get('/api/v1/users/companyAccountInfo');
    }

    public  createSocialForm(data): Observable<any> {
        debugger;
        return this.http.post('/api/v1/users/create-social', {data});
    }


    public sendAccountImage(image: string): Observable<any> {
        debugger;
        return this.http.post('/api/v1/image/upload-single-image', { image }, {
            reportProgress: true,
            observe: 'events'
        });
    }

    public getUsers(): Observable<any> {
        return this.http.get('/api/v1/users');
    }
    public getUser(id:any): Observable<any> {
        return this.http.get(`/api/v1/users/getUser/${id}`);
    }
    public deleteUser(deleteId: deletedId): Observable<any> {
        debugger;
        return this.http.delete(`/api/v1/users/${deleteId}`);
    }
    public updateUserProfile(data: editUserProfileData, editId: editId ): Observable<any> {
        debugger;
        return this.http.patch(`/api/v1/users/${editId}`, {data});
      }

    
      public createUserForm(data: createDataUser ): Observable<any> {
        return this.http.post('/api/v1/users/signup', {data});
      }
      public editUserForm(data: editDataUser , id: editId ): Observable<any> {
        return this.http.patch(`/api/v1/users/${id}`, {data});
      }
      public activateUser(data: activateUser , id: editId ): Observable<any> {
        return this.http.patch(`/api/v1/users/${id}`, {data});
      }

      public deleteNotification(id:any): Observable<any> {
        debugger;
        return this.http.delete(`/api/v1/users/deleteNotification/${id}` );
    }

    }