
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoleService } from 'app/shared/services/role.service';
import { ToastrService } from 'ngx-toastr';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'app/shared/auth/auth.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  roles = [];
  cols: { field: string; header: string; }[];
  dataForm: FormGroup;
  editRoleDialog: boolean;
  roleId: any;
  roleForm: FormGroup;
  addPermissionsRoleDialog: boolean;

  //Acoordion
  acc: any;
  permissionForm: FormGroup;
  userApp: any;
  // Prevent panel toggle code
  public beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === '2') {
      $event.preventDefault();
    }
    if ($event.panelId === '3' && $event.nextState === false) {
      $event.preventDefault();
    }
  };


  constructor( private roleServices: RoleService,private toastr:ToastrService, private authService:AuthService ) { }

  ngOnInit() {
   this.getroles();
   this.userApp =this.authService.getUser();
   this.roleForm = new FormGroup(
         {
          name: new FormControl('', [
              Validators.required,
          ]),
          
          }
        );

    this.permissionForm = new FormGroup(
            {
              userPermissions: new FormGroup({
                addUser: new FormControl(false),
                editUser: new FormControl(false),
                deleteUser: new FormControl(false),
              }),
              settingPermissions: new FormGroup({
                addVisa: new FormControl(false),
                addFlightTickets: new FormControl(false),
                addHotel: new FormControl(false),
                addTour:new FormControl(false),
                addCompany:new FormControl(false),
              }),
              dashboardPermissions:new FormGroup({
                bookTour:new FormControl(false),
                bookVisa:new FormControl(false),
                addCompany:new FormControl(false),
                bookFlightTickets:new FormControl(false),
                bookHotel: new FormControl(false),
              }),
             sidebarPermissions:new FormGroup({
                tours: new FormControl(false),
                reports: new FormControl(false),
                flightTickets: new FormControl(false),
                hotels: new FormControl(false),
                users: new FormControl(false),
                safeBox: new FormControl(false),
                companies: new FormControl(false),
                accountStatement:new FormControl(false),
                visas: new FormControl(false),
              }),
             reportPermissions:new FormGroup({
                tourReport: new FormControl(false),
                accountingReport: new FormControl(false),
              }),
            
            }
          );


  }

  getroles(){
          // Get Tours roles
          this.roleServices.getroles().subscribe({
            next: response => {
                this.roles = response.data.docs;
                console.log("roles >>>" ,this.roles);
            },
            error: err => {
                console.log(err);
            }
        });
  }

  submitNewrole(roleForm){

    this.roleServices.createrole(roleForm.value).subscribe(
      res =>{
        this.roleForm.reset();
        this.toastr.success('تم اضافة الوظيفة بنجاح ');
        this.getroles();
        this.roleForm.reset();
        },
        err =>{
        console.log(err);
      }
    )
  }


editRole(role){
  this.editRoleDialog = true;
  this.updaterole(role);
}

updaterole(role){
  this.roleId = role._id;
  this.dataForm.patchValue({
    name: role.name,
  })
}
editRoleButton(dataForm){
  if (this.dataForm.invalid) {
    this.toastr.error('الرجاء التأكد من ملئ جميع الحقول المطلوبة ');
    this.validateAllFormFields(this.dataForm); // Triger postForm validation
  }

  this.roleServices.updaterole(this.roleId , dataForm.value ).subscribe(
    res =>{
      this.toastr.success('تم تحديث الوظيفة بنجاح ');
      this.editRoleDialog = false;
      this.getroles();
      },
      err =>{
      console.log(err);
    }
  )
}


openPermissions(role){
  this.addPermissionsRoleDialog = true;
  this.roleId = role._id;
  this.updatePermissionForm(role);
}


updatePermissionForm(role){
  // console.log("rol001" , role);
  this.permissionForm.patchValue({
    userPermissions: {
      addUser: role.userPermissions.addUser,
      editUser: role.userPermissions.editUser,
      deleteUser: role.userPermissions.deleteUser,
    },
    settingPermissions:{
      addVisa: role.settingPermissions.addVisa,
      addFlightTickets:role.settingPermissions.addFlightTickets,
      addHotel: role.settingPermissions.addHotel,
      addTour:role.settingPermissions.addTour,
      addCompany:role.settingPermissions.addCompany,
  
    },

    dashboardPermissions:{
      bookTour:role.dashboardPermissions.bookTour,
      bookVisa:role.dashboardPermissions.bookVisa,
      addCompany:role.dashboardPermissions.addCompany,
      bookFlightTickets:role.dashboardPermissions.bookFlightTickets,
      bookHotel: role.dashboardPermissions.bookHotel,
    },
   sidebarPermissions:{
    tours: role.sidebarPermissions.tours,
    reports: role.sidebarPermissions.reports,
    flightTickets: role.sidebarPermissions.flightTickets,
    hotels: role.sidebarPermissions.hotels,
    users: role.sidebarPermissions.users,
    safeBox: role.sidebarPermissions.safeBox,
    companies: role.sidebarPermissions.companies,
    accountStatement:role.sidebarPermissions.accountStatement,
    visas: role.sidebarPermissions.visas,
    },
   reportPermissions:{
    tourReport: role.reportPermissions.tourReport,
     accountingReport: role.reportPermissions.accountingReport,
   },

});
console.log("permissionForm >>>>" , this.permissionForm.value)
}
addPermissionsButton(permissionForm){
  console.log("permissionForm22" , permissionForm.value);
  this.roleServices.addpermissions(this.roleId , permissionForm.value ).subscribe(
    res =>{
      this.toastr.success('تم تحديث صلاحيات الوظيفة بنجاح ');
      this.addPermissionsRoleDialog  = false;
      this.getroles();
      },
      err =>{
      console.log(err);
    }
  )
}

deleteRole(role){
  const roleId = role._id;
  this.roleServices.deleterole(roleId).subscribe(
    res =>{
      this.toastr.success('تم التحديث بنجاح ');
      this.getroles();
      },
      err =>{
      console.log(err);
    }
  )
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

