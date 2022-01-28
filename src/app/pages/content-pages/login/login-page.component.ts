import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../shared/auth/auth.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {

    @ViewChild('f') loginForm: NgForm;
    authForm = new FormGroup(
        {
            email: new FormControl(
                '',
                [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(80),
                    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
                ]
            ),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(40)
            ]),

        } 
    );
    token: any;
    
    constructor(private router: Router, private authService: AuthService, private toastr:ToastrService ,
        private route: ActivatedRoute) { }

    // On submit button click    
    onReset() {
        this.loginForm.reset();
    }
    // On Forgot password link click
    onForgotPassword() {
        this.router.navigate(['content-pages/forgotpassword'], { relativeTo: this.route.parent });
    }
    // On registration link click
    onRegister() {
        this.router.navigate(['content-pages/register'], { relativeTo: this.route.parent });
    }
    // On login link click
    onSubmit() {
        if (this.authForm.invalid) {
            return;
        }
        console.log(this.authForm.value);
        this.authService.SignIn(this.authForm.value).subscribe({
            next: response => {
                if (response === null){
                    this.toastr.error('الايميل أو كلمة المرور غير صحيحة');
                  }
                this.token = response;
                localStorage.setItem('loggedUser',JSON.stringify(this.token));
                const userToken = localStorage.setItem('token', this.token);
                this.router.navigate(['/full-layout/dashboard/dashboard1']);
            },
            error: err => {
                console.log(err);
                this.router.navigate(['/content-pages/login']);
                if (!err.status) {
                    this.authForm.setErrors({ noConnection: true });
                    this.toastr.error('معلومات الدخول غير صحيحة');
                } else {
                    this.toastr.error('معلومات الدخول غير صحيحة');
                    this.authForm.setErrors({ unknownError: true });
                }
            }
        });
    }
}


