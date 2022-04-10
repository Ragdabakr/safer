
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
// import { AuthService } from '../../../providers/auth.service/AuthService';
// import { User } from '../../../model/user.model';
import { TourService } from '../../../../shared/services/tour.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'app/shared/services/user.service';
import { ExportToCsv } from 'export-to-csv-file';
import { RoleService } from 'app/shared/services/role.service';
import { AuthService } from 'app/shared/auth/auth.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  cols: { field: string; header: string; }[];
  totalUsers: number;
  length:any;
  newUser: boolean;
  displayDialog: boolean;
  userDialog: boolean;
  submitted:any;
  errors:any;
  editUserForm: any;
  newUserDialog: boolean;
  createUserForm: any;
  loggedUser: string;
  createCustomerForm: any;
  users =  [];
  totalTours: any;
  user: any;
  roles = [];
  rolesArray: any;
  userApp: string;



  constructor(
    private userService:UserService,
    private fb: FormBuilder,
    private toastr:ToastrService ,
    private roleServices: RoleService,
    private authService:AuthService ,
) { }

    // Create New User Form
    newUserForm = this.fb.group ({
      name : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      role : ['', [Validators.required]],
      email: ['', [Validators.required , Validators.email]],
      passwordConfirmation: ['',[Validators.required, Validators.minLength(8)]],
      password: ['',[Validators.required, Validators.minLength(8)]],
  
    });

   // Update User Form
  userForm = this.fb.group ({
    name : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    role : ['', [Validators.required]],
    email: ['', [Validators.required , Validators.email]],

  });


  ngOnInit(): void {
    this.getUsers();
    this.userApp =this.authService.getUser();
    this.getRoles();
  }

//Get tRoles
getRoles(){
  this.roleServices.getroles().subscribe(
    res =>{
      let data = res['data'];
      this.roles = data.docs;
      },
      err =>{
        this.toastr.error('يوجد خطأ ما');
    }
  )
}

// Get Users
getUsers(){
    this.userService.getUsers().subscribe(
      res =>{
        let data = res['data'];
        this.users = data.docs.filter(a=> a.role !== null).reverse();
        this.totalUsers= this.users.length;
        },
        err =>{
          this.toastr.error('يوجد خطأ ما');
      }
    )
  }


// // update userform with user values
editUser(user) {
  this.user = user;
  this.userDialog = true;
  this.userForm.patchValue({
    name : user.name,
    role : user.role.name,
    email : user.email,
   });
 //  console.log('userform',this.userForm);
}
hideDialog() {
  this.userDialog = false;
  this.submitted = false;
}

// // map userform with new data
mapValues() {
 this.user.name = this.userForm.value.name;
 this.user.role = this.userForm.value.role;
 this.user.email = this.userForm.value.username;
}
// // Submit Edit user Form
submitEdituserForm(userForm ,userId){
  this.editUserForm = userForm.value;
  const editData= {
     name :  this.editUserForm.name,
     role : this.editUserForm.role,
     email: this.editUserForm.email,
  }
  this.submitted = true;
    if (userForm.invalid) {
      this.validateAllFormFields(this.userForm); // Triger userForm validation
      this.toastr.error('الرجاء ملئ جميع الحقول المطلوبة');
    } else {
       this.userService.editUserForm(editData , userId).subscribe((data) =>{
       this.userDialog = false;
       this.getUsers();
       this.toastr.success('تم تعديل المستخدم بنجاح');
    },
    (error: HttpErrorResponse) =>{
     if(error.error === 'You do not have permission to perform this action'){
      this.toastr.error('ليس لديك صلاحية التعديل علي المستخدمين');
      this.userDialog = false;
     }
    }),
    err =>{
      this.toastr.error(' لم يتم تعديل المستخدم');
     }
    }
  }


  createNewUser(){
    this.newUserDialog = true;
    this.getUsers();
  }
  hideUserDialog() {
    this.newUserDialog = false;
    this.getUsers();
  }

// Submit Create user Form
  submitCreateUserForm(newUserForm){
  this.createUserForm = newUserForm.value;
  const createDataUser= {
     name :  this.createUserForm.name,
     email : this.createUserForm.email,
     role : this.createUserForm.role,
     password : this.createUserForm.password,
     passwordConfirmation:this.createUserForm.passwordConfirmation,
  }

  this.submitted = true;
    if (newUserForm.invalid) {
      this.validateAllFormFields(this.newUserForm); // Triger userForm validation
      this.toastr.error('الرجاء ملئ جميع الحقول المطلوبة');
    }
     else {
       this.userService.createUserForm(createDataUser).subscribe((data) =>{
       this.newUserDialog = false;
       this.newUserForm.reset();
       this.toastr.success('تم اضافة المستخدم بنجاح');
       this.getUsers();
       },
       (error: HttpErrorResponse) =>{
       // console.log("error >>>>" ,error);
      if(error.error === 'This email belongs to another user'){
      this.toastr.error(' الايميل مستخدم من قبل');
    }
      if(error.error === 'You do not have permission to perform this action'){
        this.toastr.error('ليس لديك صلاحية انشاء مستخدم جديد');
        this.newUserDialog = false;
     }
       if(error.error === 'This name belongs to another user'){
        this.toastr.error('الاسم غير متاح الرجاء اختيار اسم اخر');
       }

    });
  
  }
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

//Export csv
  exportCSV(){
    const options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'الموظفين',
      useTextFile: false,
      useBom: true,
     // useKeysAsHeaders: true,
      headers: ['الاسم', 'البريد الالكتروني', 'الصلاحيات' ,'التفعيل'] 
    };
   
  const csvExporter = new ExportToCsv(options);
  var data = this.users.map(u => ({ name: u.name,email:u.email ,role:u.role.name ,active:u.active}));
  csvExporter.generateCsv(data);
  }

//   // Disable & Enable user

//   // Disable User
  disableUser(userId){
   const userData ={
      active : false 
   }
   this.userService.activateUser(userData , userId).subscribe((data) =>{
   this.getUsers();
    this.toastr.success('تم تعديل  بنجاح');
   },
   (error: HttpErrorResponse) =>{
  if(error.error === 'You do not have permission to perform this action'){
  this.toastr.error('ليس لديك صلاحية الغاء تفعيل مستخدم');
  this.getUsers();
  }

  });
    err =>{
      this.toastr.error(' لم يتم تعديل المستخدم');
      }
    }

//Enable user
  enableUser(userId){
    const userData ={
       active : true 
    }
    this.userService.activateUser(userData,userId).subscribe((data) =>{
      this.getUsers();
     this.toastr.success('تم تعديل المستخدم بنجاح');
       } ,
      (error: HttpErrorResponse) =>{
        if(error.error=== 'You do not have permission to perform this action'){
        this.toastr.error('ليس لديك صلاحية  تفعيل مستخدم');
        this.getUsers();
      }
      });
     err =>{
      this.toastr.error(' لم يتم تعديل المستخدم'); 
       }
     }

}