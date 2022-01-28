import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'app/shared/auth/auth.service';
import { TourService } from 'app/shared/services/tour.service';
import { UserService } from 'app/shared/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
const URL = 'http://localhost:3000/api/v1/image/upload-image';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  
//Upload single images
 uploader: FileUploader = new FileUploader({
      url: URL,
      isHTML5: true
  });
  response: string;
  uploadedFile: File;
  fileAvalable: boolean;
  selectedFile: any;
  progress: boolean;
  fileUploadProgress: string;


  userForm = this.fb.group ({
    name : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    email: ['', [Validators.required , Validators.email]],
    phone : ['', [Validators.required]],
    address : ['', [Validators.required]],
    
    });

  authForm = new FormGroup(
    {
      passwordCurrent: new FormControl(
            '',
            [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(20),
            ]
        ),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20)
      ]),
        passwordConfirmation: new FormControl('', [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(20)
        ]),

    } 
);

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

   
imageForm = new FormGroup(
  {
      imageCover: new FormControl('')

  }
);

  t: any;
  currentJustify = 'start';
  currentOrientation = 'vertical';
  userId: any;
  userName: string;
  userEmail: string;
  userRole: string;

  submitted: boolean;
  editUserForm: any;
  user: any;
  countries = [];
  companyAccount: any;
  accountCompanyId: any;


  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'pill') {
      $event.preventDefault();
    }
  };

  constructor( private userService:UserService,private tourService:TourService,private fb: FormBuilder, private authService:AuthService, private router: Router, private toastr:ToastrService) { }


  ngOnInit() {
    this.userId = this.authService.getUserId();
    this.getUser();
    this.getCompanyAccount();
    this.tourService.getCountries().subscribe((data) =>{
      this.countries = data.map(a => a.name);
    });
  }

  getUser(){
    this.authService.getUserById(this.userId).subscribe((data) =>{
      this.user = data.data.doc;
      this.patchFormValues();
      });
  }

  getCompanyAccount(){
    this.userService.getCompanyAccount().subscribe((data) =>{
      debugger;
      this.companyAccount = data.data.docs;
      this.accountCompanyId = this.companyAccount[0]._id;
      this.patchFormValues();
      this.patchImage();
      });
  }

  patchFormValues(){
      this.userForm.patchValue({
      name : this.companyAccount[0].name,
      email :  this.companyAccount[0].email,
      phone :  this.companyAccount[0].phone,
      address :  this.companyAccount[0].address,
     });

  }

  // // Submit Edit user Form
  onEditInfoForm(userForm ){
  this.editUserForm = userForm.value;
  const editData= {
    name : userForm.value.name,
    email :  userForm.value.email,
    phone :  userForm.value.phone,
    address :  userForm.value.address,
  }
  this.submitted = true;
    if (userForm.invalid) {
      this.validateAllFormFields(this.userForm); // Triger userForm validation
      this.toastr.error('الرجاء ملئ جميع الحقول المطلوبة');
    } else {
       this.userService.editCompanyDataForm(editData , this.accountCompanyId).subscribe((data) =>{
       this.getCompanyAccount();
       this.toastr.success('تم تعديل معلومات الحساب بنجاح');
    }),
    err =>{
      this.toastr.error(' لم يتم تعديل الحساب  ');
       console.log(err);
     }
    }
  }



  // On change Password link click
  onSubmit() {
    if (this.authForm.invalid) {
      this.toastr.error('الرجاء ملئ جميع الحقول المطلوبة');
        return;
    }
    if (this.authForm.value.password !== this.authForm.value.passwordConfirmation) {
      this.toastr.error('تأكيد كلمة المرور لا يطابق كلمة المرور الجديدة');
        return;
    }
    console.log(this.authForm.value);
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




  // On change Password link click
  onSubmiInfoForm() {
    if (this.userForm.invalid) {
      this.toastr.error('الرجاء ملئ جميع الحقول المطلوبة');
        return;
    }
    console.log(this.userForm.value);
    this.userService.companyAccountInfo(this.userForm.value).subscribe({
        next: response => {
          console.log("response999" , response);
              this.toastr.success('تم تحديث بيانات الشركة');
        },
        error: err => {
            console.log(err);
            if (!err.status) {
                this.infoForm.setErrors({ noConnection: true });
                this.toastr.error(' هناك خطأ ما');
            } else {
                this.toastr.error('هناك خطأ ما');
                this.infoForm.setErrors({ unknownError: true });
            }
        }
    });
} 

  // On submit social link click
  onSubmSocialForm() {
    this.userService.createSocialForm(this.socialForm.value).subscribe({
        next: response => {
              this.toastr.success('تم اضافة  حسابات السوشيال ميديا');
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


      // Image upload  ReadAsBase64

      ReadAsBase64(file): Promise<any> {
        const reader = new FileReader();
        const fileValue = new Promise((resolve, reject) => {
            reader.addEventListener('load', () => {
                resolve(reader.result);
            });

            reader.addEventListener('error', (event) => {
                reject(event);
            });
            reader.readAsDataURL(file);
        });
        return fileValue;
    }

    //upload single image

    OnFileSelect(event) {

        const file: File = event[0];
        this.uploadedFile = file;
        const sizeImage = file.size;
        if (sizeImage > 10000000) {
            this.fileAvalable = false;
            alert('File is too big!');
            const fileImage = '';
            this.progress = false;
            this.ReadAsBase64(fileImage).then(result => {
                this.selectedFile = result;
            }).catch(err => console.log(err));
        } else {
            this.ReadAsBase64(file).then(result => {
                this.selectedFile = result;
                 console.log('ccc', this.selectedFile);
                 console.log('xx989x', this.imageForm);
                this.imageForm.patchValue({
                    imageCover: this.selectedFile
                });
                 console.log('xxx', this.imageForm);
            }).catch(err => console.log(err));
        }

    }

      // On change Password link click
  onSubmitImage() {
    if (this.imageForm.invalid) {
      this.toastr.error('الرجاء ملئ جميع الحقول المطلوبة');
        return;
    }
    this.userService.companyAccountImage( this.selectedFile , this.accountCompanyId).subscribe({
        next: response => {
              this.toastr.success('تم تحديث صورة الشركة');
        },
        error: err => {
            console.log(err);
            if (!err.status) {
                this.infoForm.setErrors({ noConnection: true });
                this.toastr.error(' هناك خطأ ما');
            } else {
                this.toastr.error('هناك خطأ ما');
                this.infoForm.setErrors({ unknownError: true });
            }
        }
    });
} 

patchImage(){
  this.imageForm.patchValue({
  imageCover : this.companyAccount[0].imageCover,

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
