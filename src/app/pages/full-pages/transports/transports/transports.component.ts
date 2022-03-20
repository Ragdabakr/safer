
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/shared/auth/auth.service';
import { TourService } from 'app/shared/services/tour.service';
import { ExportToCsv } from 'export-to-csv-file';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transports',
  templateUrl: './transports.component.html',
  styleUrls: ['./transports.component.scss']
})
export class TransportsComponent implements OnInit {
  hotels = [];
  cols: { field: string; header: string; }[];
  dataForm: FormGroup;
  editHotelDialog: boolean;
  hotelId: any;
  hotelForm: FormGroup;
  transportForm: FormGroup;
  buses: any;
  transports: any;
  transportId: any;
  user: any;

  constructor( private tourService: TourService,private authService:AuthService ,private toastr:ToastrService ) { }

  ngOnInit() {
    this.user =this.authService.getUser();  
  this.getBuses();
        this.cols = [
          { field: 'name', header: 'اسم الفندق ' },
          { field: 'phone', header: 'الهاتف' },
          { field: 'city', header: ' المدينة' },
      ];
    
  

   this.dataForm = new FormGroup(
    {
                busNumber: new FormControl('', [
                    Validators.required,
                ]),
                brand: new FormControl('', [
                    Validators.required,
                ]),
                maxPassengerSize: new FormControl('', [
                    Validators.required,
                ]),
                size : new FormControl('', [
                  Validators.required,
                ]),
                color : new FormControl('', [
                  Validators.required,
                ]),
          
          }
        );

        this.transportForm = new FormGroup(
              {
                busNumber: new FormControl('', [
                  Validators.required,
              ]),
              brand: new FormControl('', [
                  Validators.required,
              ]),
              maxPassengerSize: new FormControl('', [
                  Validators.required,
              ]),
              size : new FormControl('', [
                Validators.required,
              ]),
              color : new FormControl('', [
                Validators.required,
              ]),
                
                }
              );
  }

  getBuses(){
          // Get Tours Hotels
          this.tourService.getBuses().subscribe({
            next: response => {
                this.transports = response.data.docs;
            },
            error: err => {
                console.log(err);
            }
        });
  }

  submitNewTransport(transportForm){
    if (this.transportForm.invalid) {
      this.toastr.error('الرجاء التأكد من ملئ جميع الحقول المطلوبة ');
      this.validateAllFormFields(this.transportForm); // Triger postForm validation
    }

    this.tourService.createBus(transportForm.value).subscribe(
      res =>{
        this.transportForm.reset();
        this.toastr.success('تم اضافة السيارة بنجاح ');
        this.getBuses();
        this.transportForm.reset();
        },
        err =>{
        console.log(err);
      }
    )
  }


  editTransport(transport){
  this.editHotelDialog = true;
  this.updateTransport(transport);
}

updateTransport(transport){
  this.transportId = transport._id;
  this.dataForm.patchValue({
    brand: transport.brand,
    size: transport.size,
    color: transport.color,
    maxPassengerSize: transport.maxPassengerSize,
    busNumber: transport.busNumber
  })
}
editTransportButton(dataForm){
  if (this.dataForm.invalid) {
    this.toastr.error('الرجاء التأكد من ملئ جميع الحقول المطلوبة ');
    this.validateAllFormFields(this.dataForm); // Triger postForm validation
  }

  this.tourService.updateBus(dataForm.value , this.transportId ).subscribe(
    res =>{
      this.editHotelDialog = false;
      this.toastr.success('تم التعديل السيارة بنجاح ');
      this.getBuses();
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
    title: 'تقرير التنقلات',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    headers: ['busNumber','size','brand','color','maxPassengerSize'] 
  };
 
const csvExporter = new ExportToCsv(options);
 
csvExporter.generateCsv(this.transports);
}

}
