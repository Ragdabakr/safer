import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/shared/auth/auth.service';
import { TourService } from 'app/shared/services/tour.service';
import { UserService } from 'app/shared/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userId: any;
  user: any;
  languages: any;
  openGeneralData: boolean;
  editUserForm: any;
  openInfoData: boolean;
  countries: any;
  gender = [
    { name:'أنثي'},
    { name:'ذكر'},
    
  ];
  languagess = [
    { name:'عربي'},
    { name:'انجليزي'},
    { name:'الماني'},
    { name:'فرنساوي'},
    { name:'ايطالي'},
    { name:'روسي'},
    { name:'هندي'},
    { name:'اسباني'},
    { name:'صيني'},
    { name:'ياباني'},
    
  ];
  openSocialData: boolean;

  constructor(
    private userService:UserService,
    private tourService:TourService,
    private authService:AuthService,
    private router: Router,
    private fb: FormBuilder, 
    private toastr:ToastrService) { }


    // Update User Form
    userForm = this.fb.group ({
      name : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      role : ['', [Validators.required]],
      email: ['', [Validators.required , Validators.email]],
      
      });


      infoForm = new FormGroup(
        {
          bio: new FormControl(
                '',
                [
                    Validators.required,
                    Validators.minLength(10),
                    Validators.maxLength(200),
                ]
            ),
            birthDate: new FormControl('', [
              Validators.required,
          ]),
            phone: new FormControl('', [
                Validators.required,
            ]),
            languages: new FormControl('', [
              Validators.required,
          ]),
            country: new FormControl('', [
                Validators.required,
            ]),
            gender: new FormControl('', [
              Validators.required,
          ]),
      
        } 
      );

      socialForm = new FormGroup(
        {
            facebook: new FormControl('', [
            
          ]),
            instagram: new FormControl('', [
                
            ]),
            linkdin: new FormControl('', [
             
          ]),
           twitter: new FormControl('', [
                
            ]),
        } 
      );

  ngOnInit() {
    this.userId = this.authService.getUserId();
    this.getUser();
    this.tourService.getCountries().subscribe((data) =>{
      this.countries = data.map(a => a.name);
    });
  }

  getUser(){
    this.authService.getUserById(this.userId).subscribe((data) =>{
      this.user = data.data.doc;
      this.patchFormValues();
      this.patchInfoFormValues(this.user);
      this.patchSocialFormValues(this.user);
      this.languages = this.user.profile.languages.map(a => a.language);
      });
      
  }

  patchFormValues(){
      this.userForm.patchValue({
      name : this.user.name,
      role :  this.user.role,
      email :  this.user.email,
     });

  }
  patchInfoFormValues(user){
    this.infoForm.patchValue({
    birthDate : this.user.profile.birthDate,
    bio : this.user.profile.bio,
    country : this.user.profile.country,
    phone : this.user.profile.phone,
    gender : this.user.profile.gender,
    // languages : this.user.profile.languages,
   });
  }

   patchSocialFormValues(user){
    this.socialForm.patchValue({
    facebook : this.user.social.facebook,
    twitter : this.user.social.twitter,
    instagram : this.user.social.instagram,
    linkdin : this.user.social.linkdin,
   });
  }

  editGeneralData(){
    this.openGeneralData = true;
  }
    // // Submit Edit user Form
submitEdituserForm(userForm ){
  this.editUserForm = userForm.value;
  const editData= {
     name :  this.editUserForm.name,
     phone : this.editUserForm.phone,
     address : this.editUserForm.address,
     email: this.editUserForm.email,
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

  editInfoData(){
    this.openInfoData = true;
  }
  
  // On change Password link click
//   onSubmiInfoForm() {
//     if (this.infoForm.invalid) {
//       this.toastr.error('الرجاء ملئ جميع الحقول المطلوبة');
//         return;
//     }
//     this.userService.createUserProfile(this.infoForm.value).subscribe({
//         next: response => {
//               this.toastr.success('تم تحديث بيانات المستخدم');
//               this.openInfoData = false;
//               this.getUser();
//         },
//         error: err => {
//             console.log(err);
//             if (!err.status) {
//                 this.infoForm.setErrors({ noConnection: true });
//                 this.toastr.error(' هناك خطأ ما');
//             } else {
//                 this.toastr.error('هناك خطأ ما');
//                 this.infoForm.setErrors({ unknownError: true });
//             }
//         }
//     });
// } 

editSocialData(){
  this.openSocialData = true;
}

  // On submit social link click
  onSubmSocialForm() {
    this.userService.createSocialForm(this.socialForm.value).subscribe({
        next: response => {
              this.toastr.success('تم اضافة  حسابات السوشيال ميديا');
              this.openSocialData = false;
              this.getUser();
        },
        error: err => {
            console.log(err);
            if (!err.status) {
                this.socialForm.setErrors({ noConnection: true });
                this.toastr.error(' هناك خطأ ما');
            } else {
                this.toastr.error('هناك خطأ ما');
                this.socialForm.setErrors({ unknownError: true });
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



  get hasLangugesError() {
    return (
        this.infoForm.get('languages').touched &&
        this.infoForm.get('languages').errors &&
        this.infoForm.get('languages').errors.required
    )
}

get hasCountryError(){
  return (
    this.infoForm.get('country').touched &&
    this.infoForm.get('country').errors &&
    this.infoForm.get('country').errors.required
)
}

get hasGenderError(){
  return (
    this.infoForm.get('gender').touched &&
    this.infoForm.get('gender').errors &&
    this.infoForm.get('gender').errors.required
)
}

}
