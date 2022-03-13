import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'app/shared/auth/auth.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { TourService } from 'app/shared/services/tour.service';
import { UserService } from 'app/shared/services/user.service';
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
    currency : ['', [Validators.required]],
    
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

  constructor( private userService:UserService,private tourService:TourService,private fb: FormBuilder, private authService:AuthService, private router: Router, private toastr:NotificationService) { }


  ngOnInit() {
    this.userId = this.authService.getUserId();
    this.getUser();
    this.getCompanyAccount();
    this.tourService.getCountries().subscribe((data) =>{
      this.countries = data.map(a => a.name);
    });
  }

    // ---------------- Get User---------------
  getUser(){
    this.authService.getUserById(this.userId).subscribe((data) =>{
      this.user = data.data.doc;
      this.patchFormValues();
      });
  }

// ---------------- Get Company account info----------------

  getCompanyAccount(){
    this.userService.getCompanyAccount().subscribe((data) =>{
      this.companyAccount = data.data.docs;
      this.accountCompanyId = this.companyAccount[0]._id;
      this.patchFormValues();
      this.patchImage();
      });
  }

// ---------------- Patch Form values----------------

  patchFormValues(){
      this.userForm.patchValue({
      name : this.companyAccount[0].name,
      email :  this.companyAccount[0].email,
      phone :  this.companyAccount[0].phone,
      address :  this.companyAccount[0].address,
      currency :  this.companyAccount[0].currency,
     });
  }

  // ---------------- Add Company account info----------------

  onSubmiInfoForm() {
    if (this.userForm.invalid) {
      this.toastr.error('الرجاء ملئ جميع الحقول المطلوبة');
        return;
    }
    this.userService.companyAccountInfo(this.userForm.value).subscribe(
        res =>{
              this.getCompanyAccount();
              this.toastr.success("تم تحديث بيانات الشركة");
        },
        err => {
            console.log(err);
            if (!err.status) {
                this.userForm.setErrors({ noConnection: true });
                this.toastr.error(" هناك خطأ ما");
            } else {
                this.toastr.error("هناك خطأ ما");
                this.userForm.setErrors({ unknownError: true });
            }
        }
    );
} 

  // ---------------- Edit Company account info----------------

 onEditInfoForm(userForm ){
  this.editUserForm = userForm.value;
  const editData= {
    name : userForm.value.name,
    email :  userForm.value.email,
    phone :  userForm.value.phone,
    address :  userForm.value.address,
    currency :  userForm.value.currency,
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


// ---------------- Upload Image ----------------

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
                this.imageForm.patchValue({
                    imageCover: this.selectedFile
                });
            }).catch(err => console.log(err));
        }
    }
// ----------------Add Company Account Image ---------------
  onSubmitImage() {
    if (!this.selectedFile ||!this.accountCompanyId ) {
      this.toastr.error('الرجاء انشاء حساب اولا');
    }
    this.userService.companyAccountImage( this.selectedFile , this.accountCompanyId).subscribe({
        next: response => {
              this.toastr.success('تم تحديث صورة الشركة');
        },
        error: err => {
            if (!err.status) {
                this.userForm.setErrors({ noConnection: true });
                this.toastr.error(' هناك خطأ ما');
            } else {
                this.toastr.error('هناك خطأ ما');
                this.userForm.setErrors({ unknownError: true });
            }
        }
    });
} 

// ----------------Update Company account image----------------
patchImage(){
  this.imageForm.patchValue({
  imageCover : this.companyAccount[0].imageCover,
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
