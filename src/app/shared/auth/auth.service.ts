import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { map } from 'rxjs/operators';


interface SignupCredentials {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}
interface SigninCredentials {
    password: string;
    email: string;
}
interface forgotpasswordCredentials {
    email: string;
}
interface resetpasswordCredentials {
    password: string;
    passwordConfirmation: string;
}

// data will found when we decode token
class DecodedToken {
    exp = 0;
    username = '';
}


@Injectable()
export class AuthService {
    private decodedToken;
    token: string;

    constructor(private http: HttpClient) {
        this.decodedToken =
            JSON.parse(localStorage.getItem('app_meta')) || new DecodedToken();
    }

    private decodeToken(token) {
        // const base64Url = token.split('.')[1];
        // const base64 = base64Url.replace('-', '+').replace('_', '/');
    
        // return JSON.parse(window.atob(base64));
     // to appear arabic data
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    }

    // save decoded token to localstorge to can use user in our app
    public saveToken(token: string): string {
        this.decodedToken = this.decodeToken(token);
        localStorage.setItem('app_auth', token);
        localStorage.setItem('app_meta', JSON.stringify(this.decodedToken));

        return token;
    }
    // if time now < token time is auth
    private getExpiration() {
        return moment.unix(this.decodedToken.exp);
    }


   SignUp(credentials: SignupCredentials): Observable<any> {
        debugger;
        return this.http.post('api/v1/users/signup', credentials);
    }

   SignIn(credentials: SigninCredentials) {
        debugger;
        return this.http.post('api/v1/users/login', credentials)
       .pipe(map((token: string) => this.saveToken(token)));
    }
    forgotPassword(data: forgotpasswordCredentials): Observable<any> {
        debugger;
        return this.http.post('api/v1/users/forgotPassword', data);
    }
    ResetPassword(data: resetpasswordCredentials , token :any , email:string): Observable<any> {
        debugger;
        return this.http.patch('api/v1/users/resetPassword', { data, token, email });
    }
    public logout() {
        localStorage.removeItem('app_auth'); // Remove localStorge
        localStorage.removeItem('app_meta');

        this.decodedToken = new DecodedToken(); // Reset to decodedtoken
    }
    // check if user is auth
    public isAuthenticated(): boolean {
        return moment().isBefore(this.getExpiration());
    }

      // Get user username
      public getUser(): string {
        return this.decodedToken;
    }

    // Get user username
    public getUserName(): string {
        return this.decodedToken.name;
    }

    // Get user userId
    public getUserId(): string {
        return this.decodedToken.id;
    }

     // Get user userId
     public getUserEmail(): string {
        return this.decodedToken.email;
    }

    // Get user userId
      public getUserRole(): string {
        return this.decodedToken.role;
    }

    // Get auth token to header http
    public getAuthToken(): string {
        return localStorage.getItem('app_auth');
    }

    // Get user username
    public getUserById(id: any): Observable<any> {
        return this.http.get(`api/v1/users/${id}`, id);
    }


     // update user password
     public updateMyPassword(data: any): Observable<any> {
         debugger;
        return this.http.patch('api/v1/users/updateMyPassword' , {data});
    }

}

