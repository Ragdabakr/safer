

import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'app/shared/services/user.service';
import { ExportToCsv } from 'export-to-csv-file';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.scss']
})
export class GuidesComponent implements OnInit {

  // users:Tours[];
  // selectedUser: Tours;
  cols: { field: string; header: string; }[];
  totalUsers: number;
  length:any;
  newUser: boolean;
  displayDialog: boolean;
  userDialog: boolean;
  submitted:any;
  errors:any;
  roles = [
    { role_name:'مرشد سياحي'},
  ];

  editUserForm: any;
  newUserDialog: boolean;
  createUserForm: any;
  loggedUser: string;
  createCustomerForm: any;
  users =  [];
  totalTours: any;
  user: any;



  constructor(
    private userService:UserService,
    private fb: FormBuilder,
    private toastr:ToastrService ,
) { }

   // Update User Form
  userForm = this.fb.group ({
    name : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    role : ['', [Validators.required]],
    email: ['', [Validators.required , Validators.email]],

  });

  // Create New User Form
  newUserForm = this.fb.group ({
    name : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    role : ['', [Validators.required]],
    email: ['', [Validators.required , Validators.email]],
    passwordConfirmation: ['',[Validators.required, Validators.minLength(8)]],
    password: ['',[Validators.required, Validators.minLength(8)]],

  });



  ngOnInit(): void {
    this.getUsers();

    //this.loggedUser = this.authService.getUserName();
    //console.log( 'loggedUser >>',this.loggedUser);
    this.cols = [
      { field: 'name', header: 'اسم المستخدم ' },
      { field: 'email', header: ' الايميل' },
      { field: 'role', header: ' نوع المستخدم' },
      { field: 'active', header: 'حالة المستخدم' },
  ];


  }
// Get Users
getUsers(){
    this.userService.getUsers().subscribe(
      res =>{
        let data = res['data'];
        this.users = data.docs.filter(a => a.role === "مرشد سياحي");
        this.totalUsers= this.users.length;
        },
        err =>{
        console.log(err);
      }
    )
  }


// // update userform with user values
editUser(user) {
  console.log("user",user);
  this.user = user;
  this.userDialog = true;
  this.userForm.patchValue({
    name : user.name,
    role : user.role,
    email : user.email,
   });
   console.log('userform',this.userForm);
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
    //  userId :   userId ,
     name :  this.editUserForm.name,
     phone : this.editUserForm.phone,
     address : this.editUserForm.address,
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
    }),
    err =>{
      this.toastr.error(' لم يتم تعديل المستخدم  ');
       console.log(err);
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

//   // Submit Create user Form
  submitCreateUserForm(newUserForm){
  //console.log('newUserForm >>>',newUserForm.value);
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
    } else {
       this.userService.createUserForm(createDataUser).subscribe((data) =>{
       this.newUserDialog = false;
       this.toastr.success('تم اضافة المستخدم بنجاح');
       this.getUsers();
       },
       (error: HttpErrorResponse) =>{
       if(error.error.error === 'Email already exist'){
        this.toastr.error(' الايميل مستخدم من قبل');
       }
       if(error.error.error.code === '23505'){
        this.toastr.error('  اسم المستخدم مستخدم من قبل ');
       }
    }),
    err =>{
      // this.toastr.error(' لم يتم اضافة المستخدم  ');
       console.log("error>>>>",err);
     }
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


  exportCSV(){
    const options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'My Awesome CSV',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      headers: ['name', 'email', 'role' ,'active'] 
    };
   
  const csvExporter = new ExportToCsv(options);
   
  csvExporter.generateCsv(this.users);
  }

//   // Disable & Enable user

//   // Disable User
  disableUser(userId){
    console.log('userId' ,userId);
   const userData ={
      active : false 
   }
   this.userService.activateUser(userData , userId).subscribe((data) =>{
   this.getUsers();
    this.toastr.success('تم تعديل  بنجاح');
   }),
    err =>{
      this.toastr.error(' لم يتم تعديل المستخدم');
        console.log(err);
      }
    }

//   //Enable user
  enableUser(userId){
    //console.log('userId >>>' , userId);
    const userData ={
       active : true 
    }
    this.userService.activateUser(userData,userId).subscribe((data) =>{
      this.getUsers();
     this.toastr.success('تم تعديل المستخدم بنجاح');
    }),
     err =>{
      this.toastr.error(' لم يتم تعديل المستخدم');
         console.log(err);
       }
     }



}