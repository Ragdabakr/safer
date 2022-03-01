import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/shared/auth/auth.service';
import { BudgetService } from 'app/shared/services/budget.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  tourBudget: any;
  totalCredit: number;
  totalDebit: number;
  totalTourCost: number;
  user: any;
  totalCreditFlightTickets: number;
  flightTicketBudget: any;
  flightTicketCommBudget: any;
  totalCreditCommFlightTickets: number;
  totalDebitFlightTickets: number;
  flightTicketRefundCommBudget: any;
  totalCreditRefundCommFlightTickets: number;

  constructor(private budgetService:BudgetService , private authService:AuthService) { }

  ngOnInit() {
    this.getGroupsBudget();
    this.getFlightTicketsBudget();
    this.user = this.authService.getUser();
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
            this.totalTourCost=totalTourCost;
          }
        },
        err =>{
        console.log(err);
      }
    )
  }

  getFlightTicketsBudget(){
    this.budgetService.getBudgetes().subscribe(
      res =>{
        let data = res['data'];
  
          this.flightTicketBudget= data.docs.filter(a=> a.name === 'حجوزات تذاكر الطيران');
          var totalCreditFlightTickets = 0;
          var totalDebitFlightTickets = 0;

           for (let i = 0; i <  this.flightTicketBudget.length; i++) {
             totalCreditFlightTickets += parseInt(this.flightTicketBudget[i].totalReceivedAmount);
             totalDebitFlightTickets += parseInt(this.flightTicketBudget[i].totalRemainingAmount);
             this.totalCreditFlightTickets= totalCreditFlightTickets;
             this.totalDebitFlightTickets= totalDebitFlightTickets;

           }

           this.flightTicketCommBudget= data.docs.filter(a=> a.name === 'عمولات تذاكر الطيران');
           var totalCreditCommFlightTickets = 0;
 
            for (let i = 0; i <  this.flightTicketCommBudget.length; i++) {
              totalCreditCommFlightTickets += parseInt(this.flightTicketCommBudget[i].totalReceivedAmount);
              this.totalCreditCommFlightTickets= totalCreditCommFlightTickets;
            }

            this.flightTicketRefundCommBudget= data.docs.filter(a=> a.name === 'استرجاع عمولات حجز الطيران');
            var totalCreditRefundCommFlightTickets = 0;
  
             for (let i = 0; i <  this.flightTicketRefundCommBudget.length; i++) {
               totalCreditRefundCommFlightTickets += parseInt(this.flightTicketRefundCommBudget[i].totalRemainingAmount);
               this.totalCreditRefundCommFlightTickets= totalCreditRefundCommFlightTickets;
             }
            
           
        },
        err =>{
        console.log(err);
      }
    )
  }

}
