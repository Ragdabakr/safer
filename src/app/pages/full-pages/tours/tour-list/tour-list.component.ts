
import { Component, OnInit } from '@angular/core';

//import { UserService } from '../../../providers/user.service/user.service';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
// import { AuthService } from '../../../providers/auth.service/AuthService';
// import { User } from '../../../model/user.model';
import { TourService } from '../../../../shared/services/tour.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ExportToCsv } from 'export-to-csv-file';
import { AuthService } from 'app/shared/auth/auth.service';




@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  providers: [NgbCarouselConfig],  // add NgbCarouselConfig to the component providers
  styleUrls: ['./tour-list.component.scss']
})
export class TourListComponent implements OnInit {

  // users:Tours[];
  // selectedUser: Tours;
  cols: { field: string; header: string; }[];
  totalUsers: number;
  length:any;
  newUser: boolean;
  displayDialog: boolean;
  userDialog: boolean;
  submitted:any;
  errors:any;
  userTypes = [
    { user_type_name:'مستخدم',user_type_code:'مستخدم'},
    { user_type_name:'مشرف',user_type_code:'مشرف'},
  ];
  tour: any;
  editUserForm: any;
  newUserDialog: boolean;
  createUserForm: any;
  loggedUser: string;
  createCustomerForm: any;
  tours =  [];
  totalTours: any;
  detailsTourDialog;
  lat: number ;
  lng: number ;
  coordinates: any;
  center: any;
  zoom:any;
  tourImages: [];
  user: any;

  

  constructor(
    private tourService:TourService,
    private fb: FormBuilder,
    private toastr:ToastrService ,
    private authService:AuthService ,
) { }


  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.getTours();
    this.cols = [
      { field: 'name', header: 'اسم الرحلة' },
      { field: 'type', header: ' نوع الرحلة' },
      { field: 'duration', header: ' المدة' },
      { field: 'difficulty', header: 'الصعوبة' },
      { field: 'price', header: 'السعر ' },
      { field: 'priceDiscount', header: 'التخفيض' },
  ];


  }
// Get Tours
getTours(){
    this.tourService.getTours().subscribe(
      res =>{
        let data = res['data'];
        this.tours = data.docs.reverse();
        // this.totalTours = this.tours.length;
        console.log('tours >>>',data.docs);
        },
        err =>{
        console.log(err);
      }
    )
  }

  // Tours Details
  detailsTour(tour){
    this.detailsTourDialog = true;
    this.tour = tour;
    this.tourImages= tour.imgaes;
    this.lat= Number(this.tour.tripLocations[0].coordinates[1]);
    this.lng= Number(this.tour.tripLocations[0].coordinates[0]);
    this.center = this.lat  + ',' + this.lng;
    // this.getTours();
  }
  hideTourDatails() {
    this.detailsTourDialog = false;
    this.getTours();
  }

  // // update userform with user values
editTour(tour) {
  // this.tour = tour;
  setTimeout(() => {
     window.location.href = `/full-layout/full-pages/editTour/${tour.id}`;
   }, 1000);
}

//Enable Tour 
enableTour(tour){

  if(tour){
    const tourId = tour.id;
    this.tourService.enableTour(tourId ,tour).subscribe(
      res =>{
        this.toastr.success(' تم تفعيل الرحلة بنجاح');
        this.getTours();
        },
        err =>{
        console.log(err);
      }
    )
  }
 
}

//DisableTour
disableTour(tour){
  if(tour){
    const tourId = tour.id;
    this.tourService.disableTour(tourId ,tour).subscribe(
      res =>{
        this.toastr.success(' تم الغاء الرحلة بنجاح');
        this.getTours();
        },
        err =>{
        console.log(err);
      }
    )
  }
}

//Create new tour
createNewTour(){
  setTimeout(() => {
    window.location.href = `/full-layout/full-pages/createTour`;
  }, 1000);
}

//Export cvs
exportCSV(){
  const options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    showTitle: true,
    title: 'My Tours CSV',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    headers: ['name', 'type', 'duration' ,'active' ,'difficulty','price' ,'priceDiscount','guides','tripLocations' , 'startLocation'] 
  };
 
const csvExporter = new ExportToCsv(options);
 
csvExporter.generateCsv(this.tours);
}

}