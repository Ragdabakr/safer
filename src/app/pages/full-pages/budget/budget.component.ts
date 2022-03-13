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
  visaBudget: any;
  visaCommBudget: any;
  totalDebitVisa: number=0;
  totalCreditVisa: number=0;
  totalCreditCommVisa: number=0;
  visaRefundCommBudget: any;
  totalCreditRefundCommVisa: number=0;
  bondsBudget: any;
  totalExchangeDebit: number=0;
  totalExchangeCredit: number=0;
  receiptBudget: any;
  totalReceiptDebit: number =0;
  totalReceiptCredit: number=0;
  hotelsBudget: any;
  totalHotelCredit: number =0;
  commHotelBudget: any;
  totalCommHotelCredit: number=0;
  totalCommHotelDebit: number=0;
  totalHotelDebit: number=0;
  refundCommHotelBudget: any;
  totalRefundCommHotelCredit: number =0;
  totalRefundCommHotelDebit: number = 0;
  totalSafeboxCredit: number;
  totalSafeboxDebit: number;
  safeboxBudget: any;

  constructor(private budgetService:BudgetService , private authService:AuthService) { }

  ngOnInit() {
    this.getGroupsBudget();
    this.getFlightTicketsBudget();
    this.getVisaBudget();
    this.getBondsBudget();
    this.getHotelsBudget();
    this.getSafeboxBudget();
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

  getVisaBudget(){
    this.budgetService.getBudgetes().subscribe(
      res =>{
        let data = res['data'];
          this.visaBudget= data.docs.filter(a=> a.name === 'حجوزات التأشيرات');
          var totalCreditVisa = 0;
          var totalDebitVisa = 0;
           for (let i = 0; i <  this.visaBudget.length; i++) {
            totalCreditVisa += parseInt(this.visaBudget[i].totalReceivedAmount);
            totalDebitVisa += parseInt(this.visaBudget[i].totalRemainingAmount);
             this.totalCreditVisa= totalCreditVisa;
             this.totalDebitVisa= totalDebitVisa;

           }

           this.visaCommBudget= data.docs.filter(a=> a.name === 'عمولات  حجوزات التأشيرات');
           var totalCreditCommVisa = 0;
            for (let i = 0; i <  this.visaCommBudget.length; i++) {
              totalCreditCommVisa += parseInt(this.visaCommBudget[i].totalReceivedAmount);
              this.totalCreditCommVisa= totalCreditCommVisa;
            }
              this.visaRefundCommBudget= data.docs.filter(a=> a.name === 'استرجاع عمولات حجز التأشيرات');
              var totalCreditRefundCommVisa = 0;
  
             for (let i = 0; i <  this.visaRefundCommBudget.length; i++) {
              totalCreditRefundCommVisa += parseInt(this.visaRefundCommBudget[i].totalRemainingAmount);
               this.totalCreditRefundCommVisa= totalCreditRefundCommVisa;
             }
        },
        err =>{
        console.log(err);
      }
    )
  }

  getBondsBudget(){
    this.budgetService.getBudgetes().subscribe(
      res =>{
        let data = res['data'];
        this.bondsBudget= data.docs.filter(a=> a.name === 'مجموع سندات الصرف');
         var totalExchangeCredit = 0;
         var totalExchangeDebit = 0;
          for (let i = 0; i <  this.bondsBudget.length; i++) {
            totalExchangeCredit += parseInt(this.bondsBudget[i].totalReceivedAmount);
            totalExchangeDebit += parseInt(this.bondsBudget[i].totalRemainingAmount);
            this.totalExchangeCredit= totalExchangeCredit;
            this.totalExchangeDebit= totalExchangeDebit;
        }

        this.receiptBudget= data.docs.filter(a=> a.name === 'مجموع سندات القبض');
         var totalReceiptCredit = 0;
         var totalReceiptDebit = 0;
          for (let i = 0; i <  this.receiptBudget.length; i++) {
            totalReceiptCredit += parseInt(this.receiptBudget[i].totalReceivedAmount);
            totalReceiptDebit += parseInt(this.receiptBudget[i].totalRemainingAmount);
            this.totalReceiptCredit= totalReceiptCredit;
            this.totalReceiptDebit= totalReceiptDebit;
          }
        },
        err =>{
        console.log(err);
      }
    )
  }

  getHotelsBudget(){
    this.budgetService.getBudgetes().subscribe(
      res =>{
        let data = res['data'];
        this.hotelsBudget= data.docs.filter(a=> a.name === 'حجوزات الفنادق');
         var totalHotelCredit = 0;
         var totalHotelDebit = 0;
          for (let i = 0; i <  this.hotelsBudget.length; i++) {
            totalHotelCredit += parseInt(this.hotelsBudget[i].totalReceivedAmount);
            totalHotelDebit += parseInt(this.hotelsBudget[i].totalRemainingAmount);
            this.totalHotelCredit= totalHotelCredit;
            this.totalHotelDebit= totalHotelDebit;
        }

        this.commHotelBudget= data.docs.filter(a=> a.name === 'عمولات  حجوزات الفنادق');
         var totalCommHotelCredit = 0;
         var totalCommHotelDebit = 0;
          for (let i = 0; i <  this.commHotelBudget.length; i++) {
            totalCommHotelCredit += parseInt(this.commHotelBudget[i].totalReceivedAmount);
            totalCommHotelDebit += parseInt(this.commHotelBudget[i].totalRemainingAmount);
            this.totalCommHotelCredit= totalCommHotelCredit;
            this.totalCommHotelDebit= totalCommHotelDebit;
          }

          
          this.refundCommHotelBudget= data.docs.filter(a=> a.name === 'استرجاع عمولات حجز فندقي');
          var totalRefundCommHotelCredit = 0;
          var totalRefundCommHotelDebit = 0;
           for (let i = 0; i <  this.refundCommHotelBudget.length; i++) {
            totalRefundCommHotelCredit += parseInt(this.refundCommHotelBudget[i].totalReceivedAmount);
            totalRefundCommHotelDebit += parseInt(this.refundCommHotelBudget[i].totalRemainingAmount);
             this.totalRefundCommHotelCredit= totalRefundCommHotelCredit;
             this.totalRefundCommHotelDebit= totalRefundCommHotelDebit;
           }
        },
        err =>{
        console.log(err);
      }
    )
  }

  getSafeboxBudget(){
    this.budgetService.getBudgetes().subscribe(
      res =>{
        let data = res['data'];
        this.safeboxBudget= data.docs.filter(a=> a.name === 'رصيد الخزنة');
         var totalSafeboxCredit = 0;
         var totalSafeboxDebit = 0;
          for (let i = 0; i <  this.safeboxBudget.length; i++) {
            totalSafeboxCredit += parseInt(this.safeboxBudget[i].totalReceivedAmount);
            totalSafeboxDebit += parseInt(this.safeboxBudget[i].totalRemainingAmount);
            this.totalSafeboxCredit= totalSafeboxCredit;
            this.totalSafeboxDebit= totalSafeboxDebit;
        }
        },
        err =>{
        console.log(err);
      }
    )
  }

}
