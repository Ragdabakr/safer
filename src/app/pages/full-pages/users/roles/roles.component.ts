
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoleService } from 'app/shared/services/role.service';
import { ToastrService } from 'ngx-toastr';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

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
  // Prevent panel toggle code
  public beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === '2') {
      $event.preventDefault();
    }
    if ($event.panelId === '3' && $event.nextState === false) {
      $event.preventDefault();
    }
  };


  constructor( private roleServices: RoleService,private toastr:ToastrService ) { }

  ngOnInit() {
  this.getroles();
        this.cols = [
          { field: 'name', header: 'نوع الوظيفة' },
      ];
    
  

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
                addUser: new FormControl(''),
                editUser: new FormControl(''),
                activeUser: new FormControl(''),
              }),
              settingPermissions: new FormGroup({
                addPartner: new FormControl(''),
                addFlightTickets: new FormControl(''),
                addHotel: new FormControl(''),
                addTour:new FormControl(''),
                addVisa:new FormControl(''),
                addCompany:new FormControl(''),
              
                activePartner: new FormControl(''),
                activeFlightTickets: new FormControl(''),
                activeHotel: new FormControl(''),
                activeTour:new FormControl(''),
                activeVisa:new FormControl(''),
                activeCompany:new FormControl(''),
              
                editPartner: new FormControl(''),
                editFlightTickets: new FormControl(''),
                editHotel: new FormControl(''),
                editour:new FormControl(''),
                ediVisa:new FormControl(''),
                editCompany:new FormControl(''),
              
                allPartners: new FormControl(''),
                allFlightTickets: new FormControl(''),
                allHotels: new FormControl(''),
                allTours:new FormControl(''),
                allVisas:new FormControl(''),
                allCompanies:new FormControl(''),
                
               backup: new FormControl(''),
              }),

              dashboardPermissions:new FormGroup({
                tours: new FormControl(''),
                reports: new FormControl(''),
                flightTickets: new FormControl(''),
                hotels: new FormControl(''),
                companies: new FormControl(''),
                users: new FormControl(''),
                accountStatement:new FormControl(''),
              }),
             sidebarPermissions:new FormGroup({
                tours: new FormControl(''),
                reports: new FormControl(''),
                flightTickets: new FormControl(''),
                hotels: new FormControl(''),
                transports: new FormControl(''),
                users: new FormControl(''),
                accounting: new FormControl(''),
                companies: new FormControl(''),
              }),
             reportPermissions:new FormGroup({
                toursProfits: new FormControl(''),
                companyProfits: new FormControl(''),
                flightTicketsProfits: new FormControl(''),
                hotelsProfits: new FormControl(''),
                visaProfits: new FormControl(''),
                tourProfits: new FormControl(''),
                tourReport: new FormControl(''),
                accountingReport: new FormControl(''),
                
        
              }),
            
            }
          );


  }

  getroles(){
          // Get Tours roles
          this.roleServices.getroles().subscribe({
            next: response => {
                this.roles = response.data.docs;
                // console.log("roles >>>" ,this.roles);
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
      activeUser: role.userPermissions.activeUser,
    },
    settingPermissions:{
      addPartner:role.settingPermissions.addPartner,
      addFlightTickets:role.settingPermissions.addFlightTickets,
      addHotel:role.settingPermissions.addHotel,
      addTour:role.settingPermissions.addTour,
      addVisa:role.settingPermissions.addVisa,
      addCompany:role.settingPermissions.addCompany,
    
      activePartner: role.settingPermissions.activePartner,
      activeFlightTickets: role.settingPermissions.activeFlightTickets,
      activeHotel: role.settingPermissions.activeHotel,
      activeTour:role.settingPermissions.activeTour,
      activeVisa:role.settingPermissions.activeVisa,
      activeCompany:role.settingPermissions.activeCompany,
    
      editPartner: role.settingPermissions.editPatner,
      editFlightTickets: role.settingPermissions.editFlightTickets,
      editHotel:role.settingPermissions.editHotel,
      editour:role.settingPermissions.editour,
      ediVisa:role.settingPermissions.ediVisa,
      editCompany:role.settingPermissions.editCompany,
    
      allPartners: role.settingPermissions.allPartners,
      allFlightTickets: role.settingPermissions.allFlightTickets,
      allHotels: role.settingPermissions.allHotels,
      allTours:role.settingPermissions.allTours,
      allVisas:role.settingPermissions.allVisas,
      allCompanies:role.settingPermissions.allCompanies,
      
     backup: role.settingPermissions.backup,
    },

    dashboardPermissions:{
      tours: role.dashboardPermissions.tours,
      reports: role.dashboardPermissions.reports,
      flightTickets: role.dashboardPermissions.flightTickets,
      hotels: role.dashboardPermissions.hotels,
      companies: role.dashboardPermissions.companies,
      users: role.dashboardPermissions.users,
      accountStatement:role.dashboardPermissions.accountStatement,
    },
   sidebarPermissions:{
      tours: role.sidebarPermissions.tours,
      reports: role.sidebarPermissions.reports,
      flightTickets: role.sidebarPermissions.flightTickets,
      hotels: role.sidebarPermissions.hotels,
      transports: role.sidebarPermissions.transports,
      users: role.sidebarPermissions.users,
      accounting: role.sidebarPermissions.accounting,
      companies: role.sidebarPermissions.companies,
    },
   reportPermissions:{
      toursProfits: role.reportPermissions.toursProfits,
      companyProfits: role.reportPermissions.companyProfits,
      flightTicketsProfits: role.reportPermissions.flightTicketsProfits,
      hotelsProfits: role.reportPermissions.hotelsProfits,
      visaProfits:role.reportPermissions.visaProfits,
      tourProfits: role.reportPermissions.tourProfits,
      tourReport: role.reportPermissions.tourReport,
      accountingReport: role.reportPermissions.accountingReport,
   },


});

}
addPermissionsButton(permissionForm){
  // console.log("permissionForm22" , permissionForm.value);
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

