
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeboxService } from 'app/shared/services/safebox.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { ExportToCsv } from 'export-to-csv-file';
import { BondService } from 'app/shared/services/bond.service';
import { CompanyService } from 'app/shared/services/company.service';
import { AuthService } from 'app/shared/auth/auth.service';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-bonds',
  templateUrl: './bonds.component.html',
  styleUrls: ['./bonds.component.scss']
})
export class BondsComponent implements OnInit {

  hotels = [];
  cols: { field: string; header: string; }[];
  dataForm: FormGroup;
  editHotelDialog: boolean;
  hotelId: any;
  bondForm: FormGroup;
  safeboxes: any;
  bonds: any;
  companies: any;
  types= [ "سند صرف","سند قبض"]
  num: number;
  user: any;
  length;


  constructor( private authService : AuthService ,private config: PrimeNGConfig,private translateService: TranslateService,private bondService: BondService,private toastr:ToastrService , private companyService: CompanyService,) { }

  ngOnInit() {
  this.getBonds();
  this.getCompanies();
  this.user = this.authService.getUser();

        this.bondForm = new FormGroup(
          {
            number: new FormControl(''),
         
          accountName: new FormControl('', [
              Validators.required,
          ]),
          amount : new FormControl('', [
            Validators.required,
          ]),
          type : new FormControl('', [
            Validators.required,
          ]),
          notes : new FormControl('', [
            Validators.required,
          ]),
                
                }
              );
              this.config.setTranslation({
                dateIs: "التاريخ",
                dateIsNot: "جميع التواريخ ما عدا",
                dateBefore: "جميع النتائج قبل هذا التاريخ",
                dateAfter: "جميع النتائج بعد هذا التاريخ",
                clear: "الغاء",
                apply: "تنفيذ",
                matchAll: "جميع النتائج",
                matchAny: "بعض النتائج ",
                addRule: "تاريخ جديد",
                removeRule: "حذف التاريخ",
                //translations
            });
            this.translateService.setDefaultLang('en');
                }
            
                translate(lang: string) {
                  this.translateService.use(lang);
                  this.translateService.get('primeng').subscribe(res => this.config.setTranslation(res));
                }
  getCompanies(){
    this.companyService.getcompanies().subscribe({
      next: response => {
          this.companies = response.data.docs;
      },

      error: err => {
          console.log(err);
      }
  });
}

  getBonds(){
          // Get Tours Hotels
          this.bondService.getBondes().subscribe({
            next: response => {
                this.bonds = response.data.docs;
                this.bonds.forEach(bond => bond.createdAt = new Date(bond.createdAt));
            },
            error: err => {
                console.log(err);
            }
        });
  }

  submitNewBond(bondForm){
    if (this.bondForm.invalid) {
      this.toastr.error('الرجاء التأكد من ملئ جميع الحقول المطلوبة ');
      this.validateAllFormFields(this.bondForm); // Triger postForm validation
    }
    const min = 0;
    const max =55555;
   this.num =  Math.floor(Math.random() * (max - min + 1)) + min;
   this.num.toString().padStart(5, "0");
   //  console.log( " this.num",this.num);
   
    this.bondForm.patchValue({
     number:this.num
   });
 
    this.bondService.createNewBond(bondForm.value).subscribe(
      res =>{
        this.bondForm.reset();
        this.toastr.success('تم الاضافة بنجاح ');
        this.getBonds();
        this.bondForm.reset();
        },
        (error: HttpErrorResponse) =>{
          console.log("error" , error);
          if(error.error.message === 'You do not have permission to perform this action'){
              this.toastr.error(' ليس لديك صلاحية إضافة رحلة جديدة');
             }
          })
        }


editBond(bond){
  this.editHotelDialog = true;
  this.updateBond(bond);
}

updateBond(bond){
  this.hotelId = bond._id;
  this.dataForm.patchValue({
    title: bond.title,
    date: bond.date,
    description: bond.description,
    credit: bond.credit,
    indebted: bond.indebted
  })
}
editBondButton(dataForm){
  if (this.dataForm.invalid) {
    this.toastr.error('الرجاء التأكد من ملئ جميع الحقول المطلوبة ');
    this.validateAllFormFields(this.dataForm); // Triger postForm validation
  }

  this.bondService.updateBond(dataForm.value , this.hotelId ).subscribe(
    res =>{
      this.toastr.success('تم التعديل  بنجاح ');
      this.editHotelDialog = false;
      this.getBonds();

      },
      err =>{
      console.log(err);
    }
  )
}

deleteBonds(bond){
  this.bondService.deleteBond( bond).subscribe(
    res =>{
      this.toastr.success('تم الحذف  بنجاح ');
      this.editHotelDialog = false;
      this.getBonds();

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

exportCSV(){
  const options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    showTitle: true,
    title: 'تقرير  السندات',
    useTextFile: false,
    useBom: true,
    headers: ['نوع السند','رقم السند','قيمة السند','التاريخ','الوصف','اسم الحساب' ] 
  };
 
const csvExporter = new ExportToCsv(options);
var data = this.bonds.map(u => ({type:u.type ,number:u.number ,amount:u.amount,createdAt:u.createdAt,notes:u.notes ,accountType:u.accountName.name }));
csvExporter.generateCsv(data);
}

}
