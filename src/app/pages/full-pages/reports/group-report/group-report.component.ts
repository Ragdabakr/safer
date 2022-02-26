import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'app/shared/services/booking.service';
import { TourService } from 'app/shared/services/tour.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-group-report',
  templateUrl: './group-report.component.html',
  styleUrls: ['./group-report.component.scss'],

})
export class GroupReportComponent implements OnInit {
  t:any;
  cols: { field: string; header: string; }[];
  tourId: any;
  tour: any;
  costDialog: boolean  = false;
  bookings = [];
  travellerInfo=[];
  a:any;
  tours: any;
  bookingsNumber: any;
  totalBookings: any;
  totalEarings: number;
  costForm: any;
  costs = [];
  totalTourCosts: number = 0;
  bookingsPayment: any;
  paymentArray = [];
  closedTours = [];
  totalTravellers =[];
  totalRemaining: number;


  constructor( private tourService:TourService,private router: Router  ,private toastr:ToastrService, private route: ActivatedRoute , private bookingService:BookingService,) { }

  ngOnInit() {
        this.tourId = this.route.snapshot.paramMap.get('groupId');
        this.tourService.getTourById(this.tourId).subscribe((data) =>{
          this.tour = data.data.doc;
          this.bookings = data.data.doc.bookings;
         // console.log("this.bookings" , this.bookings);
          this.bookingsNumber =  data.data.doc.bookings.length;
          const travellerInfoArray =  this.bookings.map((info) => {
           this.travellerInfo = info.travellerInfo;
          // console.log("this.travellerInfo999" , this.travellerInfo);

          
           var i;
           var totalRceivedAmount = 0;
           var totalRemainingAmount = 0 ;
           for (i = 0; i < this.bookings.length; i++) {
               totalRceivedAmount += this.bookings[i].paymentInfo.receivedAmount;
               this.totalEarings = totalRceivedAmount;

               totalRemainingAmount += this.bookings[i].paymentInfo.remainingAmount;
               this.totalRemaining = totalRemainingAmount;
           }
              return totalRceivedAmount;return totalRemainingAmount;
           });
          // console.log("travellerInfoArray" , travellerInfoArray);
        });
       this.getTours();
       this.getCosts();
       this.getPaymentWay();
       
       this.costForm = new FormGroup(
        {
                    account: new FormControl('', [
                        Validators.required,
                    ]),
                    note: new FormControl('', [
                        Validators.required,
                    ]),
                    cost: new FormControl('', [
                        Validators.required,
                    ]),
                
              
              }
            );
       
  }


  getCosts(){
    // Get Tours Hotels
    this.tourId = this.route.snapshot.paramMap.get('groupId');
    this.tourService.getTourById(this.tourId).subscribe((data) =>{
          this.costs = data.data.doc.costs;
      
          var i;
          var total = 0;
          for (i = 0; i <  this.costs.length; i++) {
              total += this.costs[i].cost;
              this.totalTourCosts = total;
             // console.log('totalTourCosts >>>', this.totalTourCosts);
          }
          return total;

        
      }, function (err) {
          console.log(err);
      });

   
     
}

getPaymentWay(){
  // Get Tours Hotels
  this.tourId = this.route.snapshot.paramMap.get('groupId');
  this.tourService.getTourById(this.tourId).subscribe((data) =>{
        this.bookingsPayment =  data.data.doc.bookings;
        //console.log(' this.bookingsPayment >>>',  this.bookingsPayment);        
    var x;
    var paymentWay = []  ;
    for (x = 0; x < this.bookingsPayment.length; x++) {
      paymentWay.push(this.bookingsPayment[x]);
       this.paymentArray  =  paymentWay.filter(a=> a.paymentInfo.orderStatus ==="حجز بدون دفع" );
       // console.log('paymentWay f9>>>', paymentWay);
       // console.log(' this.paymentArray >>>',  this.paymentArray );
    }
    return paymentWay;

    }, function (err) {
        console.log(err);
    });

 
   
}

 

  // Get Tours
getTours(){
  this.tourService.getTours().subscribe(
    res =>{
      let data = res['data'];
      this.tours = data.docs.reverse();
      this.closedTours = data.docs.reverse().filter(a=> a.open === 'false');
      // this.totalTours = this.tours.length;
      },
      err =>{
      console.log(err);
    }
  )
}

  detailsGroup(tour){
    this.router.navigate(['content-pages/register'], { relativeTo: this.route.parent });
  }

  addCost(){
    this.costDialog = true;
  }

  submitNewCost(costForm){
    if (this.costForm.invalid) {
      this.toastr.error('الرجاء التأكد من ملئ جميع الحقول المطلوبة ');
      this.validateAllFormFields( this.costForm); // Triger postForm validation
    }

    this.tourService.createCost(this.tourId ,this.costForm.value).subscribe(
      res =>{
        this.costForm.reset();
        this.toastr.success('تم اضافة التكلفة بنجاح ');
        this.getCosts();
        
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

deleteCost(cost){
  console.log("costsss" ,cost);
  this.tourService.deleteCost(this.tourId,cost._id).subscribe(
    res =>{
      this.toastr.success('تم حذف التكلفة بنجاح ');
      this.getCosts();
    },
    err =>{
    console.log(err);
  }
)};


//DisableTour
closeTour(){
 
    this.tourService.closeTour(this.tourId , this.tour).subscribe(
      res =>{
        this.toastr.success(' تم اغلاق الرحلة بنجاح');
        this.getTours();
        },
        err =>{
        console.log(err);
      }
    )
  
}
}
