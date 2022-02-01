
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeboxService } from 'app/shared/services/safebox.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-safe-box',
  templateUrl: './safe-box.component.html',
  styleUrls: ['./safe-box.component.scss']
})
export class SafeBoxComponent implements OnInit {

  hotels = [];
  cols: { field: string; header: string; }[];
  dataForm: FormGroup;
  editHotelDialog: boolean;
  hotelId: any;
  safeboxForm: FormGroup;
  safeboxes: any;

  constructor( private SafeboxService: SafeboxService,private toastr:ToastrService ) { }

  ngOnInit() {
  this.getSafeboxes();
        this.cols = [
          { field: 'name', header: 'اسم الفندق ' },
          { field: 'phone', header: 'الهاتف' },
          { field: 'city', header: ' المدينة' },
      ];
    
  

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
                this.safeboxes = response.data.docs;
                console.log("safeboxes >>>" ,this.safeboxes);
            },
            error: err => {
                console.log(err);
            }
        });
  }

  submitNewSafeBox(safeboxForm){
    if (this.safeboxForm.invalid) {
      this.toastr.error('الرجاء التأكد من ملئ جميع الحقول المطلوبة ');
      this.validateAllFormFields(this.safeboxForm); // Triger postForm validation
    }

    this.SafeboxService.createNewSafebox(safeboxForm.value).subscribe(
      res =>{
        this.safeboxForm.reset();
        this.toastr.success('تم الاضافة بنجاح ');
        this.getSafeboxes();
        this.safeboxForm.reset();
        },
        (error: HttpErrorResponse) =>{
          console.log("error" , error);
          // if(error.error.message === 'You do not have permission to perform this action'){
          //     this.toastr.error(' ليس لديك صلاحية إضافة رحلة جديدة');
          //    }
          //  if(error.error.errors.title === "Invalid  name!"){
          //     this.toastr.error(' هذا الوصف  مستخدم من قبل');
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
    date: safebox.date,
    description: safebox.description,
    credit: safebox.credit,
    indebted: safebox.indebted
  })
}
editSafeboxButton(dataForm){
  if (this.dataForm.invalid) {
    this.toastr.error('الرجاء التأكد من ملئ جميع الحقول المطلوبة ');
    this.validateAllFormFields(this.dataForm); // Triger postForm validation
  }

  this.SafeboxService.updateSafebox(dataForm.value , this.hotelId ).subscribe(
    res =>{
      this.toastr.success('تم التعديل  بنجاح ');
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
      this.toastr.success('تم الحذف  بنجاح ');
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

}
