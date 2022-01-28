import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../shared/auth/auth.service';

@Component({
    selector: 'app-forgot-password-page',
    templateUrl: './forgot-password-page.component.html',
    styleUrls: ['./forgot-password-page.component.scss']
})

export class ForgotPasswordPageComponent {
    @ViewChild('f') forogtPasswordForm: NgForm;
    authForm = new FormGroup(
        {
            email: new FormControl(
                '',
                [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(40),
                    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
                ]
            )

        }
    );
    token: any;

    constructor(private router: Router, private authService: AuthService, private toastr:ToastrService ,
        private route: ActivatedRoute) { }

    // On reset click, reset form fields
    onReset() {
        this.forogtPasswordForm.reset();
    }

    // On login link click
    onLogin() {
        this.router.navigate(['login'], { relativeTo: this.route.parent });
    }

    // On registration link click
    onRegister() {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    }
    // On submit link click
    onSubmit() {
        if (this.authForm.invalid) {
            return;
        }
        console.log(this.authForm.value);
        this.authService.forgotPassword(this.authForm.value).subscribe((data) =>{
         
                this.toastr.success('تم ارسال رابط استعادة كلمة المرور الي الايميل');
            },
                (error: HttpErrorResponse) =>{
                    
                    if(error.error.message === "There is no user with email address."){
                        this.toastr.error('لا يوجد في سجلاتنا مستخدم بهذا الايميل');
                    }
                
           
        });
    }
}