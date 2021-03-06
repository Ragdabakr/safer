import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'app/shared/auth/auth.service';
import { BudgetService } from 'app/shared/services/budget.service';
import { TourService } from 'app/shared/services/tour.service';

@Component({
  selector: 'app-groups-report',
  templateUrl: './groups-report.component.html',
  styleUrls: ['./groups-report.component.scss']
})
export class GroupsReportComponent implements OnInit {
  cols: { field: string; header: string; }[];
  t: any;
  currentJustify = 'start';
  currentOrientation = 'horizontal';
  tours: any;
  completedTours: any;
  innerTours: any;
  outerTours: any;
  cancelledTours: any;
  latest3Tours: any;
  totalTours: any;
  detailsTourDialog: boolean =false;
  closedTours = [];
  toursSeats: any;
  user: any;
  tourBudget: any;
  totalCredit: number;
  totalDebit: number;
  totalTourCost: number;



  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'bar') {
      $event.preventDefault();
    }
  };

  constructor(private authService:AuthService, private budgetService :BudgetService ,private tourService:TourService,private router: Router  , private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTours();
    this.getGroupsBudget();
    this.user = this.authService.getUser();
  }
    // Get Tours
    getTours(){
      this.tourService.getTours().subscribe(
        res =>{
          let data = res['data'];
          this.tours = data.docs.filter(a=> a.active === true && a.open === true).reverse();
          // this.toursSeats =  this.tours.bookings.filter(a=> a.orderStatus ==="الغاء الحجز").length;
          this.completedTours = data.docs.filter(a=> a.completed === true).length;
          this.closedTours = data.docs.filter(a=> a.open === false).reverse();
          this.innerTours = data.docs.filter(a=> a.type === "داخلي").length;
          this.outerTours = data.docs.filter(a=> a.type === "دولي").length;
          this.cancelledTours = data.docs.filter(a=> a.active === false)
          this.latest3Tours = this.tours.slice(Math.max(this.tours.length - 3, 0));
          this.totalTours = this.tours.length;
          },
          err =>{
          console.log(err);
        }
      )
    }

  // Get Budgets
  getGroupsBudget(){
    this.budgetService.getBudgetes().subscribe(
      res =>{
        let data = res['data'];
        this.tourBudget= data.docs.filter(a=> a.name === 'الجروبات السياحية');
         var totalCredit = 0;
         var totalDebit = 0;
         var totalTourCost = 0;
          for (let i = 0; i <  this.tourBudget.length; i++) {
            totalCredit += parseInt(this.tourBudget[i].totalReceivedAmount);
            totalDebit += parseInt(this.tourBudget[i].totalRemainingAmount);
            totalTourCost += parseInt(this.tourBudget[i].tourCost);
            this.totalCredit= totalCredit;
            this.totalDebit= totalDebit;
            this.totalTourCost= totalTourCost;
          }
        },
        err =>{
        console.log(err);
      }
    )
  }


 // Tours Details
 detailsGroup(tour){
   //window.location.href = `/groupReport/${tour.id}`;
  this.router.navigate([`/full-layout/full-pages/groupReport/${tour.id}`]);
  this.tours = tour;
}
hideTourDatails() {
  this.detailsTourDialog = false;
  this.getTours();
}


}


