
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeboxService } from 'app/shared/services/safebox.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { ExportToCsv } from 'export-to-csv-file';
import { AuthService } from 'app/shared/auth/auth.service';
import { DatePipe } from '@angular/common';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-safe-box',
  templateUrl: './safe-box.component.html',
  styleUrls: ['./safe-box.component.scss'],
  providers: [DatePipe]
})
export class SafeBoxComponent implements OnInit {

  hotels = [];
  cols: { field: string; header: string; }[];
  dataForm: FormGroup;
  editHotelDialog: boolean;
  hotelId: any;
  safeboxForm: FormGroup;
  safeboxes: any;
  user: any;

  constructor(private authService:AuthService ,private config: PrimeNGConfig,private translateService: TranslateService,private datePipe: DatePipe, private SafeboxService: SafeboxService,private toastr:ToastrService ) { }

  ngOnInit() {
  this.getSafeboxes();
  this.user = this.authService.getUser();
   this.dataForm = new FormGroup(
    {
                title: new FormControl('', [
                    Validators.required,
                ]),
              
                date: new FormControl('', [
                    Validators.required,
                ]),
                description : new FormControl('', [
                  Validators.required,
                ]),
                indebted : new FormControl('', [
                  
                ]),
                credit : new FormControl('', [
                
                ]),
          
          }
        );

        this.safeboxForm = new FormGroup(
          {
            title: new FormControl('', [
              Validators.required,
          ]),
         
          date: new FormControl('', [
              Validators.required,
          ]),
          description : new FormControl('', [
            Validators.required,
          ]),
          indebted : new FormControl('', [
            Validators.required,
          ]),
          credit : new FormControl('', [
            Validators.required,
          ]),
                
                }
              );
  }

  getSafeboxes(){
          // Get Tours Hotels
          this.SafeboxService.getSafeboxes().subscribe({
            next: response => {
                this.safeboxes = response.data.docs.reverse();
                this.safeboxes.forEach(safebox => safebox.createdAt = new Date(safebox.createdAt));
            },
            error: err => {
                console.log(err);
            }
        });
        this.config.setTranslation({
          dateIs: "??????????????",
          dateIsNot: "???????? ???????????????? ???? ??????",
          dateBefore: "???????? ?????????????? ?????? ?????? ??????????????",
          dateAfter: "???????? ?????????????? ?????? ?????? ??????????????",
          clear: "??????????",
          apply: "??????????",
          matchAll: "???????? ??????????????",
          matchAny: "?????? ?????????????? ",
          addRule: "?????????? ????????",
          removeRule: "?????? ??????????????",
          //translations
      });
      this.translateService.setDefaultLang('en');
          }
          translate(lang: string) {
            this.translateService.use(lang);
            this.translateService.get('primeng').subscribe(res => this.config.setTranslation(res));
        }
      

  submitNewSafeBox(safeboxForm){
    if (this.safeboxForm.invalid) {
      this.toastr.error('???????????? ???????????? ???? ?????? ???????? ???????????? ???????????????? ');
      this.validateAllFormFields(this.safeboxForm); // Triger postForm validation
    }

    this.SafeboxService.createNewSafebox(safeboxForm.value).subscribe(
      res =>{
        this.safeboxForm.reset();
        this.toastr.success('???? ?????????????? ?????????? ');
        this.getSafeboxes();
        this.safeboxForm.reset();
        },
        (error: HttpErrorResponse) =>{
          console.log("error" , error);
          // if(error.error.message === 'You do not have permission to perform this action'){
          //     this.toastr.error(' ?????? ???????? ???????????? ?????????? ???????? ??????????');
          //    }
          //  if(error.error.errors.title === "Invalid  name!"){
          //     this.toastr.error(' ?????? ??????????  ???????????? ???? ??????');
          // }
            }
    )
  }


editSafebox(safebox){
  this.editHotelDialog = true;
  this.updateSafebox(safebox);
}

updateSafebox(safebox){
  this.hotelId = safebox._id;
  this.dataForm.patchValue({
    title: safebox.title,
    description: safebox.description,
    credit: safebox.credit,
    indebted: safebox.indebted,
    date: this.datePipe.transform(safebox.date, 'dd-MM-yyyy'),
  })
}
editSafeboxButton(dataForm){
  if (this.dataForm.invalid) {
    this.toastr.error('???????????? ???????????? ???? ?????? ???????? ???????????? ???????????????? ');
    this.validateAllFormFields(this.dataForm); // Triger postForm validation
  }

  this.SafeboxService.updateSafebox(dataForm.value , this.hotelId ).subscribe(
    res =>{
      this.toastr.success('???? ??????????????  ?????????? ');
      this.editHotelDialog = false;
      this.getSafeboxes();

      },
      err =>{
      console.log(err);
    }
  )
}

deleteSafeboxes(){
  this.SafeboxService.deleteSafeboxes( ).subscribe(
    res =>{
      this.toastr.success('???? ??????????  ?????????? ');
      this.editHotelDialog = false;
      this.getSafeboxes();

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
    title: '??????????  ????????????',
    useTextFile: false,
    useBom: true,
    headers: ['?????? ????????????','??????????????','??????????' , '????????'  ,'????????'] 
  };
 
const csvExporter = new ExportToCsv(options);
 
var data = this.safeboxes.map(u => ({title:u.title ,createdAt:u.createdAt,description:u.description ,indebted:u.indebted,credit:u.credit }));
csvExporter.generateCsv(data);
}

}
