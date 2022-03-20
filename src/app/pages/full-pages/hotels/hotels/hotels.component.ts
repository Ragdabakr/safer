import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TourService } from 'app/shared/services/tour.service';
import { ToastrService } from 'ngx-toastr';
import * as intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import { AuthService } from 'app/shared/auth/auth.service';
import { ExportToCsv } from 'export-to-csv-file';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  hotels = [];
  cols: { field: string; header: string; }[];
  dataForm: FormGroup;
  editHotelDialog: boolean;
  hotelId: any;
  hotelForm: FormGroup;
  user: any;

  constructor( private tourService: TourService,private toastr:ToastrService, private authService:AuthService , ) { }

  ngOnInit() {
    this.user =this.authService.getUser();
    const input = document.querySelector("#phone");  
  this.getHotels();
        this.cols = [
          { field: 'name', header: 'اسم الفندق ' },
          { field: 'phone', header: 'الهاتف' },
          { field: 'city', header: ' المدينة' },
      ];
    
  

   this.dataForm = new FormGroup(
    {
                name: new FormControl('', [
                    Validators.required,
                ]),
                phone: new FormControl('', [
                    Validators.required,
                ]),
                city: new FormControl('', [
                    Validators.required,
                ]),
                address : new FormControl('', [
                  Validators.required,
                ]),
          
          }
        );

        this.hotelForm = new FormGroup(
          {
                      name: new FormControl('', [
                          Validators.required,
                      ]),
                      phone: new FormControl('', [
                          Validators.required,
                      ]),
                      city: new FormControl('', [
                          Validators.required,
                      ]),
                      address : new FormControl('', [
                        Validators.required,
                      ]),
                
                }
              );
  }

  getHotels(){
          // Get Tours Hotels
          this.tourService.getHotels().subscribe({
            next: response => {
                this.hotels = response.data.docs;
                console.log("hotels >>>" ,this.hotels);
            },
            error: err => {
                console.log(err);
            }
        });
  }

  submitNewHotel(hotelForm){
    if (this.hotelForm.invalid) {
      this.toastr.error('الرجاء التأكد من ملئ جميع الحقول المطلوبة ');
      this.validateAllFormFields(this.hotelForm); // Triger postForm validation
    }

    this.tourService.createHotel(hotelForm.value).subscribe(
      res =>{
        this.hotelForm.reset();
        this.toastr.success('تم اضافة الفندق بنجاح ');
        this.getHotels();
        this.hotelForm.reset();
        },
        err =>{
        console.log(err);
      }
    )
  }


editHotel(hotel){
  this.editHotelDialog = true;
  this.updateHotel(hotel);
}

updateHotel(hotel){
  this.hotelId = hotel._id;
  this.dataForm.patchValue({
    name: hotel.name,
    phone: hotel.phone,
    city: hotel.city,
    address: hotel.address
  })
}
editHotelButton(dataForm){
  if (this.dataForm.invalid) {
    this.toastr.error('الرجاء التأكد من ملئ جميع الحقول المطلوبة ');
    this.validateAllFormFields(this.dataForm); // Triger postForm validation
  }

  this.tourService.updateHotel(dataForm.value , this.hotelId ).subscribe(
    res =>{
      this.toastr.success('تم اضافة الفندق بنجاح ');
      this.getHotels();
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
    title: 'تقرير الفنادق',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    headers: ['name','phone','city','address'  ] 
  };
 
const csvExporter = new ExportToCsv(options);
 
csvExporter.generateCsv(this.hotels);
}


}
