import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/shared/auth/auth.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { TourService } from 'app/shared/services/tour.service';
import { UserService } from 'app/shared/services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userId: any;
  user: any;
  editUserForm: any;
  openGeneralData: boolean;


  constructor(
    private userService:UserService,
    private tourService:TourService,
    private authService:AuthService,
    private router: Router,
    private fb: FormBuilder, 
    private toastr:NotificationService) { }


    // Update User Form
    userForm = this.fb.group ({
      name : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      role : ['',],
      email: ['', [Validators.required , Validators.email]],
      });

    authForm = new FormGroup(
        {
          passwordCurrent: new FormControl(
                '',
                [
                    Validators.required,
                   
                ]
            ),
            password: new FormControl('', [
              Validators.required,
              Validators.minLength(6),
          ]),
            passwordConfirmation: new FormControl('', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(20)
            ]),
    
        } 
    );

  ngOnInit() {
    this.userId = this.authService.getUserId();
    this.getUser();
  }
     // ---------------- Get user----------------

  getUser(){
    this.authService.getUserById(this.userId).subscribe((data) =>{
      this.user = data.data.doc;
      this.patchFormValues();
      });
  }
 // ---------------- Patch user data----------------
  patchFormValues(){
      this.userForm.patchValue({
      name : this.user.name,
      role :  this.user.role.name,
      email :  this.user.email,
     });

  }
   // ---------------- Edit user data----------------
editGeneralData(){
    this.openGeneralData = true;
  }
submitEdituserForm(userForm ){
  this.editUserForm = userForm.value;
  const editData= {
     name :  this.editUserForm.name,
     phone : this.editUserForm.phone,
     address : this.editUserForm.address,
     email: this.editUserForm.email,
     role: this.editUserForm.role.name,
  }
    if (userForm.invalid) {
      this.validateAllFormFields(this.userForm); // Triger userForm validation
      this.toastr.error('الرجاء ملئ جميع الحقول المطلوبة');
    } else {
       this.userService.editUserForm(editData , this.userId).subscribe((data) =>{
       this.toastr.success('تم تعديل معلومات الحساب بنجاح');
       this.openGeneralData = false;
       this.getUser();
    }),
    err =>{
      this.toastr.error(' لم يتم تعديل المستخدم  ');
       console.log(err);
     }
    }
  }

// ---------------- On change user password----------------
   onSubmit() {
    if (this.authForm.invalid) {
      this.toastr.error('الرجاء ملئ جميع الحقول المطلوبة');
        return;
    }
    if (this.authForm.value.password !== this.authForm.value.passwordConfirmation) {
      this.toastr.error('تأكيد كلمة المرور لا يطابق كلمة المرور الجديدة');
        return;
    }
    this.authService.updateMyPassword(this.authForm.value).subscribe({
        next: response => {
              this.toastr.success('تم تحديث كلمة المرور');
              this.router.navigate(['/content-pages/login']);
        },
        error: err => {
            console.log(err);
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

    // To validate all form fields, we need to iterate throughout all form controls:
validateAllFormFields(formGroup: FormGroup) {
  Object.keys(formGroup.controls).forEach(field => {
    const control = formGroup.get(field);
    if (control instanceof FormControl) {
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {
      this.validateAllFormFields(control);
    }
  });
  }


}
