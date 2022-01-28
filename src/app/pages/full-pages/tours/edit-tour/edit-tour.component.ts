import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { TourService } from 'app/shared/services/tour.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'app/shared/services/user.service';
const URL = 'http://localhost:3000/api/v1/image/upload-image';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-tour',
  templateUrl: './edit-tour.component.html',
  styleUrls: ['./edit-tour.component.scss']
})
export class EditTourComponent implements OnInit {
  tourId: any;
  tour: any;
  dataForm: FormGroup;
  data: any;
  buses: any[];
  hotels: any[];
  allGuides: any[];
  difficulty = ['easy', 'medium', 'difficult'];
  Tourtype = ['International', 'Domestic'];
  tourGuides: any;
    //Alert
    error: boolean = false;
    alert: string;
    successAlert: string;
    success: boolean = false;
  dateForm: FormGroup;
  startDatesArray: any;
  length:any;
  date: any;
  dateId: any;
  editdate: boolean;
  idDate: any;
  addDate: boolean;
  myEditDate: any;
  addNew: boolean;
  locationForm: FormGroup;
  allLocations: any;
  idLocation: any;
  controls:any;
  locationArray: FormArray;
  editTripLocations: boolean;
  singleLocation: any;
  AddTripLocations: boolean;
 
  //Upload single images
  uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });

  //upload multiple images
  myFiles = [];
  selectedImageFile: any;
  selectedImages: any;

  //Upload single image
  response: string;
  uploadedFile: File;
  fileAvalable: boolean;
  selectedFile: any;
  progress: boolean;
  fileUploadProgress: string;
  imageForm: FormGroup;


  constructor(
    private tourService:TourService,
    private fb: FormBuilder,
    private toastr:ToastrService ,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.tourId = this.route.snapshot.paramMap.get('tourId');
    this.tourService.getTourById(this.tourId).subscribe((tour) => {
      this.tour = tour.data.doc;
      console.log("singleTour" , this.tour);
      this.editTourForm(this.tour);
    });

            // Get Users
            this.userService.getUsers().subscribe({
              next: response => {
                  this.data = response.data.docs;
              },
              error: err => {
                  console.log(err);
              }
          });
          // Get Tours Buses
          this.tourService.getBuses().subscribe({
              next: response => {
                  this.buses = response.data.docs.map((i) => { i.busData = i.brand + ' ' + i.color + ' ' + i.busNumber; return i; });
                  console.log(this.buses);
              },
              error: err => {
                  console.log(err);
              }
          });
          // Get Tours Hotels
          this.tourService.getHotels().subscribe({
              next: response => {
                  this.hotels = response.data.docs;
              },
              error: err => {
                  console.log(err);
              }
          });
  
          // Get Tours Guides 
          this.userService.getUsers().subscribe({
              next: response => {
                  const result = response.data.docs;
                  this.allGuides = result.filter(x => x.role === 'مرشد سياحي');
                  console.log('guides<<<',this.allGuides );
              },
              error: err => {
                  console.log(err);
              }
          });

    this.dataForm = new FormGroup(
      {
          name: new FormControl('', [
              Validators.required,
              Validators.minLength(5)
          ]),
          duration: new FormControl('', [
              Validators.required,
          ]),
          maxGroupSize: new FormControl('', [
              Validators.required,
          ]),
          difficulty: new FormControl('', [
              Validators.required,
          ]),
          type: new FormControl('', [
              Validators.required,
          ]),
          guides: new FormControl(''),
          adultPrice: new FormControl('', [
            Validators.required,
        ]),
        childPrice: new FormControl('', [
            Validators.required,
        ]),
        infantPrice: new FormControl('', [
            Validators.required,
        ]),
          description: new FormControl('', [
              Validators.required,
              Validators.minLength(9),
              Validators.maxLength(500),
          ]),
          startDates: new FormArray([this.addStartDates()]),
          // tripLocations: new FormArray([this.addLocations()]),
         
          // startLocation: new FormGroup(
          //     {
          //         // GeoJSON
          //         description: new FormControl('', [
          //             Validators.required,
          //         ]),
          //         day: new FormControl('', [
          //             Validators.required,
          //         ]),
          //         address: new FormControl('', [
          //             Validators.required,
          //         ]),
          //         latitude : new FormControl('', [
          //             Validators.required,
          //         ]),
          //         longitude: new FormControl('', [
          //             Validators.required,
          //         ]),
          //         coordinates: new FormArray([]),
          //         type: new FormControl('Point')

          //     }),

      });

      this.locationForm = this.fb.group({
        tripLocations: this.fb.array([this.addLocations()]),
    });

    }

getTour(){
  this.tourService.getTourById(this.tourId).subscribe((tour) => {
    this.tour = tour.data.doc;
  });
}

//edit tour information part
// COPY tour data to dataForm
  editTourForm(tour){
    this.dataForm.patchValue({
      name : tour.name,
      duration : tour.duration,
      maxGroupSize : tour.maxGroupSize,
      difficulty : tour.difficulty,
      type : tour.type,
      adultPrice : tour.adultPrice,
      childPrice : tour.childPrice,
      infantPrice : tour.infantPrice,
      description : tour.description
     });
     


     //patch startdates array value
    this.dataForm.setControl('startDates' , this.fb.array(tour.startDates  || []));

    //patch locations array value
    //  this.dataForm.setControl('tripLocations' , this.fb.array(tour.tripLocations || []));
     console.log("copy tour to dataform" ,this.dataForm );
    }




    // Edit Dates
    editDateButton(date) {
      this.myEditDate = date.date;
      this.dateId = date._id;
      this.editdate = true;
    }
  
    cancelEditDateForm(){
      this.editdate = false;
    }
    submitEditDateForm(date :string) {
      if(date){
      this.tourService.editDate(this.tourId , date , this.dateId ).subscribe(() => {
        this.editdate = false;
        this.toastr.success('تم تحديث تواريخ الرحلة بنجاح');
        this.getTour();
       });
      }else{
        this.toastr.error('الرجاء ادخال التاريخ');
      }
    }
    // Srtart dates Array
     addNewSDate(): void {
      const startDates = this.dataForm.controls.startDates as FormArray;
      this.startDatesArray = startDates.value;
      startDates.push(this.addStartDates());
      this.addNew = true;
  }
    addStartDates(): FormGroup {
        return this.fb.group({
            date: ['', [Validators.required]],
        });
    }
    
    cancelDateButton(){
      this.addNew = false;
    }
    submitAddDateForm(date){
      if(date){
      this.tourService.addNewDate(this.tourId , date ).subscribe(() => {
        this.toastr.success('تم اضافة تاريخ للرحلة بنجاح');
        this.addNew = false;
        this.getTour();
        });
      }else{
        this.toastr.error('الرجاء ادخال التاريخ');
      }
    }
    removeDateButton(date) {
      this.idDate = date._id;
      this.tourService.deleteDate(this.tourId ,  this.idDate ).subscribe(
        () => {
            this.toastr.success('تم تحديث تواريخ الرحلة بنجاح');
            this.getTour();
        },
        (error) => {
          console.log(error);
          }
      )
    };


editTourInformation(dataForm){

  if (dataForm.invalid) {
      this.validateAllFormFields(this.dataForm); // Triger dataForm validation
      this.toastr.error('الرجاء ملئ جميع الحقول المطلوبة');
  } else {


  this.tourService.editTourInformation(this.tour.id , dataForm.value  , dataForm.value.guides).subscribe((data) =>{
    window.scroll(0, 0); // scroll to top of page;
    this.toastr.success('تم تحديث معلومات الرحلة بنجاح');
    this.getTour();
},
    (error: HttpErrorResponse) =>{
        if(error.error.errors[0].title === "Invalid tour name!"){
            this.toastr.error(' اسم الرحلة مستخدم من قبل');
        }
  });
   }  
  }


  // Add Tour Trip Locations
  
    // Locations Array

    addNewTripLocation(){
      this.AddTripLocations = true;
    }

    addLocationButtonClick(): void {
      const tripLocations = this.dataForm.controls.tripLocations as FormArray;
      this.allLocations = tripLocations.value;
      console.log(this.allLocations);
      tripLocations.push(this.addLocations());
  }
  addLocations(): FormGroup {
      return this.fb.group({
          type: ['Point'],
          description: ['', [Validators.required]],
          latitude : [''],
          longitude: [''],
          address: ['', [Validators.required]],
          day: ['', [Validators.required]],
          coordinates: new FormArray([]),
      });

     
  }

  addLocationButton(locationForm){
    if (locationForm.invalid) {
      this.validateAllFormFields(this.locationForm); // Triger locationForm validation
      this.toastr.error('الرجاء التأكد من ملئ جميع الحقول المطلوبة');
  } else {
  this.tourService.addTourTripLocations(this.tour.id , locationForm.value ).subscribe((data) =>{
  this.toastr.success('تم تحديث ايام الرحلة بنجاح');
  this.AddTripLocations = false;
  this.getTour();

  });
   } 

  }
  cancelAddTripLocations(){
    this.AddTripLocations = false;
  }

  // edit trip location array 

     editLocation(location){
      this.idLocation = location._id;
      this.singleLocation = location;
      this.editTripLocations = true;
      this.locationForm.patchValue({
        tripLocations: [{
        type: this.singleLocation.type,
        longitude: this.singleLocation.coordinates[0],
        latitude: this.singleLocation.coordinates[1],
        day: this.singleLocation.day,
        address: this.singleLocation.address,
        description: this.singleLocation.description,
      
      }],
       });
    }
  
    cancelEditTripLocations(){
      this.editTripLocations = false;
    }
    editLocationButton(locationForm) {
      if (locationForm.invalid) {
        this.validateAllFormFields(this.locationForm); // Triger locationForm validation
        this.toastr.error('الرجاء التأكد من ملئ جميع الحقول المطلوبة');
    } else {
      this.tourService.editLocation(this.tourId , locationForm.value , this.idLocation ).subscribe(() => {
        this.toastr.success('تم تحديث أيام الرحلة بنجاح');
        this.editTripLocations = false;
        this.getTour();
       });
      }
    }

    removeLocationButton(location) {
      this.idLocation = location._id;
      this.tourService.deleteTripLocation(this.tourId ,  this.idLocation ).subscribe(
        () => {
            this.toastr.success('تم تحديث ايام الرحلة بنجاح');
            this.getTour();
        },
        (error) => {
          console.log(error);
          }
      )
    };


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

  // validate Select input 
      get hasDifficultyError() {
        return (
            this.dataForm.get('difficulty').touched &&
            this.dataForm.get('difficulty').errors &&
            this.dataForm.get('difficulty').errors.required
        )
    }
  get hasGuidesError() {
    return (
        this.dataForm.get('guides').touched &&
        this.dataForm.get('guides').errors &&
        this.dataForm.get('guides').errors.required
    )
}
get hasBusesError() {
    return (
        this.dataForm.controls["buses"].touched &&
        this.dataForm.get('buses').errors &&
        this.dataForm.get('buses').errors.required
    )
}
get hasHotelsError() {
    return (
        this.dataForm.get('hotels').touched &&
        this.dataForm.get('hotels').errors &&
        this.dataForm.get('hotels').errors.required
    )
}


    // Image upload  ReadAsBase64

    ReadAsBase64(file): Promise<any> {
      const reader = new FileReader();
      const fileValue = new Promise((resolve, reject) => {
          reader.addEventListener('load', () => {
              resolve(reader.result);
          });

          reader.addEventListener('error', (event) => {
              reject(event);
          });
          reader.readAsDataURL(file);
      });
      return fileValue;
  }

  //upload single image

  OnFileSelect(event) {

      const file: File = event[0];
      this.uploadedFile = file;
      const sizeImage = file.size;
      if (sizeImage > 10000000) {
          this.fileAvalable = false;
          alert('File is too big!');
          const fileImage = '';
          this.progress = false;
          this.ReadAsBase64(fileImage).then(result => {
              this.selectedFile = result;
          }).catch(err => console.log(err));
      } else {
          this.ReadAsBase64(file).then(result => {
              this.selectedFile = result;
          }).catch(err => console.log(err));
      }

  }
  //upload multiple images

  onFileChange(event) {
      this.selectedImages = event.target.files;
      for (var i = 0; i < event.target.files.length; i++) {
          //console.log('size', event.target.files[i].size);
          // if (event.target.files[i].size > 1000000000000) {
          //     this.fileAvalable = false;
          //     alert('File is too big!');
          // } else {
              this.ReadAsBase64(event.target.files[i]).then(result => {
                  this.selectedImageFile = result;
                  console.log(" this.selectedImageFile>>" ,  this.selectedImageFile);
                  this.myFiles.push(this.selectedImageFile);
              });
          // }
      }

  }

  //delete upload image
  removeImage(image) {
    const imageId = image._id;
    this.tourService.deleteTourImage(this.tourId ,  imageId).subscribe(
      () => {
          this.toastr.success('تم تحديث صور الرحلة بنجاح');
          this.getTour();
      },
      (error) => {
        console.log(error);
        }
    )
  }

  imageUpload(){
    const data = {
      images: this.myFiles,
  }
  this.tourService.addTourImage(this.tourId ,  data).subscribe(
    () => {
        this.toastr.success('تم تحديث صور الرحلة بنجاح');
        this.myFiles=[];
        this.getTour();
    },
    (error) => {
      console.log(error);
      });
  }

  uploadSingleImage(){
    const data = {
      imageCover: this.selectedFile,
  }
  this.tourService.updateTourCoverImage(this.tourId ,  data).subscribe(
    () => {
        this.selectedFile="";
        this.toastr.success('تم تحديث صور الرحلة بنجاح');
        this.getTour();
    },
    (error) => {
      console.log(error);
      alert('الرجاء اختيار صورة أخري لان حجم الملف كبير');
      }
  )
  }

  //delete upload image
  removeUploadImage(image) {
    this.myFiles.splice(image, 1); 
}

}
