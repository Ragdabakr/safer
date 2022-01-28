
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoleService } from 'app/shared/services/role.service';
import { ToastrService } from 'ngx-toastr';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { CompanyService } from 'app/shared/services/company.service';
@Component({
  selector: 'app-travel-agents',
  templateUrl: './travel-agents.component.html',
  styleUrls: ['./travel-agents.component.scss']
})
export class TravelAgentsComponent implements OnInit {
  roles = [' مورد تذكرة' ,  'مورد فيزا' ,  'عملاء مسافرين' ,'مورد فيزا وتذكرة' , 'مورد فندق' ,];
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
  // Prevent panel toggle code
  public beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === '2') {
      $event.preventDefault();
    }
    if ($event.panelId === '3' && $event.nextState === false) {
      $event.preventDefault();
    }
  };


  constructor( private roleServices: RoleService,private toastr:ToastrService, private companyServices: CompanyService, ) { }

  ngOnInit() {
  this.getCompanies();

   this.companyForm = new FormGroup(
         {
          name: new FormControl('', [
              Validators.required,
          ]),
          accountName: new FormControl(''),
          type: new FormControl('', [
            Validators.required,
        ]),
          credit: new FormControl(' '),
          debit: new FormControl(' '),
          notes: new FormControl(''),
          phone: new FormControl(''),
          email: new FormControl(''),
          PINCompanyCode: new FormControl(''),
          
          }
        );
  }

  getCompanies(){
          this.companyServices.getcompanies().subscribe({
            next: response => {
                this.companies = response.data.docs;
            },
            error: err => {
                console.log(err);
            }
        });
  }

  submitNewCompany(companyForm){
    this.companyServices.createcompany(companyForm.value).subscribe(
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
    const rndInt = Math.floor(Math.random() * 3000) + 1
    this.rndInt = rndInt;
    console.log( this.rndInt);
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
  this.companyForm.patchValue({
  name:company.name,
  type:company.type,
  phone: company.phone,
  email: company.email,
  debit: company.debit,
  credit: company.credit,
  notes: company.notes,
  accountName: company.accountName,
  PINCompanyCode: company.PINCompanyCode,
 }); 
}
updateCompanyButton(companyForm){
  if (this.companyForm.invalid) {
    this.toastr.error('الرجاء التأكد من ملئ جميع الحقول المطلوبة ');
    this.validateAllFormFields(this.companyForm); // Triger postForm validation
  }else{

  this.companyServices.updatecompany(this.companyId , companyForm.value ).subscribe(
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
  this.companyServices.deletecompany(companyId ).subscribe(
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

