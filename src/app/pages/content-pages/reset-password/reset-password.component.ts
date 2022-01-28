

import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/auth/auth.service';
import { MatchPassword } from '../match-password';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
    @ViewChild('f') registerForm: NgForm;
    authForm = new FormGroup(
        {
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(20)
            ]),
            passwordConfirmation: new FormControl('', [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(40)
            ])
        },
        { validators: [this.matchPassword.validate] }
    );
    token: any;
    email: any;

    constructor(
        private matchPassword: MatchPassword,
        private authService: AuthService,
        private activatedRoute: ActivatedRoute,
        private toastr:ToastrService ,
    ) { }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(
            (param: any) => {
                this.email = param['email'];
                this.token = param['token'];
            });
    }

    //  On submit click, reset field value
    onSubmits() {
        this.registerForm.reset();
    }
    onSubmit() {
        if (this.authForm.invalid) {
            return;
        }

        this.authService.ResetPassword(this.authForm.value , this.token , this.email).subscribe((data) =>{
                // Navigate to some other route
                window.location.href = '/content-pages/login';
            }
        ,
            (error: HttpErrorResponse) =>{
                if(error.error.message === "Token is invalid or has expired"){
                    this.toastr.error('لقد انتهت صلاحية الرابط');
                }
            }
        )};
}



