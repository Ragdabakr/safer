
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoleService } from 'app/shared/services/role.service';
import { ToastrService } from 'ngx-toastr';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { FlightTicketsService } from 'app/shared/services/flightTickets.service';
import { CompanyService } from 'app/shared/services/company.service';



@Component({
  selector: 'app-flight-tickets',
  templateUrl: './flight-tickets.component.html',
  styleUrls: ['./flight-tickets.component.scss']
})
export class FlightTicketsComponent implements OnInit {

  roles = [  'دائن', ' مدين'];
  cols: { field: string; header: string; }[];
  dataForm: FormGroup;
  editRoleDialog: boolean;
  roleId: any;
  companyForm: FormGroup;
  addPermissionsRoleDialog: boolean;

  //Acoordion
  acc: any;
  permissionForm: FormGroup;
  companies: any;
  addUpdateCompanyeDialog: boolean;
  companyId: any;
  rndInt: number;
  travelAdentCompanyForm: FormGroup;
  // Prevent panel toggle code
  public beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === '2') {
      $event.preventDefault();
    }
    if ($event.panelId === '3' && $event.nextState === false) {
      $event.preventDefault();
    }
  };


  constructor( private roleServices: RoleService,private toastr:ToastrService, private companyServices: CompanyService,private flightTicketsService:FlightTicketsService ) { }

  ngOnInit() {
  this.getCompanies();
        this.cols = [
        
      ];

   this.companyForm = new FormGroup(
         {
          name: new FormControl('', [
              Validators.required,
          ]),
          companyComm: new FormControl('', [
            Validators.required,
        ]),
        ourComm: new FormControl('', [
          Validators.required,
        ]),
          delegateComm: new FormControl('', [
            Validators.required,
        ]),
          type: new FormControl('', [
            Validators.required,
        ]),
          incoming: new FormControl(''),
          outgoing: new FormControl(''),
          notes: new FormControl(''),
          phone: new FormControl(''),
          email: new FormControl(''),
          PINCompanyCode: new FormControl('', [
            Validators.required,
        ]),
          
          });


          this.travelAdentCompanyForm = new FormGroup(
            {
             name: new FormControl('', [
                 Validators.required,
             ]),
             companyComm: new FormControl('', [
               Validators.required,
           ]),
           ourComm: new FormControl('', [
             Validators.required,
           ]),
             delegateComm: new FormControl('', [
               Validators.required,
           ]),
             type: new FormControl('', [
               Validators.required,
           ]),
             incoming: new FormControl(''),
             outgoing: new FormControl(''),
             notes: new FormControl(''),
             phone: new FormControl(''),
             email: new FormControl(''),
             PINCompanyCode: new FormControl('', [
               Validators.required,
           ]),
             
             });      

          this.companyForm.get('incoming').setValue(0);
          this.companyForm.get('outgoing').setValue(0);
  }

  getCompanies(){
          this.flightTicketsService.getflightTickets().subscribe({
            next: response => {
                this.companies = response.data.docs;
            },
            error: err => {
                console.log(err);
            }
        });
  }

  submitNewCompany(companyForm){

    this.flightTicketsService.createflightTicket(companyForm.value).subscribe(
      res =>{
        this.companyForm.reset();
        this.toastr.success('تم الاضافة بنجاح ');
        this.getCompanies();
        this.companyForm.reset();
        },
        err =>{
        console.log(err);
      }
    )
  }

  randomInteger() {
    const rndInt = Math.floor(Math.random() * 10000) + 1
    this.rndInt = rndInt;
    this.companyForm.patchValue({
      PINCompanyCode: this.rndInt
    });

  }

openUpdateCompany(company){
  this.addUpdateCompanyeDialog = true;
  this.companyId = company._id;
  this.updateCompanyForm(company);
}


updateCompanyForm(company){
  this.travelAdentCompanyForm.patchValue({
  name:company.name,
  type:company.type,
  phone: company.phone,
  email: company.email,
  accountName: company.accountName,
  PINCompanyCode: company.PINCompanyCode,
  companyComm: company.companyComm,
  delegateComm: company.delegateComm,
  ourComm: company.ourComm,
 }); 
}
updateCompanyButton(travelAdentCompanyForm){
  if (this.travelAdentCompanyForm.invalid) {
    this.toastr.error('الرجاء التأكد من ملئ جميع الحقول المطلوبة ');
    this.validateAllFormFields(this.travelAdentCompanyForm); // Triger postForm validation
  }else{

  this.flightTicketsService.updateflightTicket(this.companyId , travelAdentCompanyForm.value ).subscribe(
    res =>{
      this.companyForm.reset();
      this.toastr.success('تم التحديث بنجاح ');
      this.addUpdateCompanyeDialog = false;
      this.getCompanies();
      },
      err =>{
      console.log(err);
    }

  )
  }
}

deleteCompany(company){
  const companyId = company._id;
  this.flightTicketsService.deleteflightTicket(companyId ).subscribe(
    res =>{
      this.toastr.success('تم التحديث بنجاح ');
      this.getCompanies();
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

