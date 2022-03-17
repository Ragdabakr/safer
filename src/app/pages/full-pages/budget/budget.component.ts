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
  totalCredit: number=0;
  totalDebit: number=0;
  totalTourCost: number=0;
  user: any;
  totalCreditFlightTickets: number=0;
  flightTicketBudget: any;
  flightTicketCommBudget: any;
  totalCreditCommFlightTickets: number=0;
  totalDebitFlightTickets: number=0;
  flightTicketRefundCommBudget: any;
  totalCreditRefundCommFlightTickets: number =0;
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
  totalSafeboxCredit: number = 0;
  totalSafeboxDebit: number=0;
  safeboxBudget: any;
  companyBudget: any;
  totalCompanyCredit: number=0;
  totalCompanyDebit: number=0;

  constructor(private budgetService:BudgetService , private authService:AuthService) { }

  ngOnInit() {
    this.getGroupsBudget();
    this.getFlightTicketsBudget();
    this.getVisaBudget();
    this.getBondsBudget();
    this.getHotelsBudget();
    this.getSafeboxBudget();
    this.companiesBudget();
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
             totalCreditFlightTickets += this.flightTicketBudget[i].totalReceivedAmount;
             totalDebitFlightTickets += this.flightTicketBudget[i].totalRemainingAmount;
             this.totalCreditFlightTickets= totalCreditFlightTickets;
             this.totalDebitFlightTickets= totalDebitFlightTickets;
           }
           this.flightTicketCommBudget= data.docs.filter(a=> a.name === 'عمولات تذاكر الطيران');
           var totalCreditCommFlightTickets = 0;
 
            for (let i = 0; i <  this.flightTicketCommBudget.length; i++) {
              totalCreditCommFlightTickets += this.flightTicketCommBudget[i].totalReceivedAmount;
              this.totalCreditCommFlightTickets= totalCreditCommFlightTickets;
            }

            this.flightTicketRefundCommBudget= data.docs.filter(a=> a.name === 'استرجاع عمولات حجز الطيران');
            var totalCreditRefundCommFlightTickets = 0;
  
             for (let i = 0; i <  this.flightTicketRefundCommBudget.length; i++) {
               totalCreditRefundCommFlightTickets += this.flightTicketRefundCommBudget[i].totalRemainingAmount;
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
            totalCreditVisa += this.visaBudget[i].totalReceivedAmount;
            totalDebitVisa += this.visaBudget[i].totalRemainingAmount;
             this.totalCreditVisa= totalCreditVisa;
             this.totalDebitVisa= totalDebitVisa;

           }

           this.visaCommBudget= data.docs.filter(a=> a.name === 'عمولات  حجوزات التأشيرات');
           var totalCreditCommVisa = 0;
            for (let i = 0; i <  this.visaCommBudget.length; i++) {
              totalCreditCommVisa += this.visaCommBudget[i].totalReceivedAmount;
              this.totalCreditCommVisa= totalCreditCommVisa;
            }
              this.visaRefundCommBudget= data.docs.filter(a=> a.name === 'استرجاع عمولات حجز التأشيرات');
              var totalCreditRefundCommVisa = 0;
  
             for (let i = 0; i <  this.visaRefundCommBudget.length; i++) {
              totalCreditRefundCommVisa += this.visaRefundCommBudget[i].totalRemainingAmount;
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
            totalExchangeCredit += this.bondsBudget[i].totalReceivedAmount;
            totalExchangeDebit += this.bondsBudget[i].totalRemainingAmount;
            this.totalExchangeCredit= totalExchangeCredit;
            this.totalExchangeDebit= totalExchangeDebit;
        }

        this.receiptBudget= data.docs.filter(a=> a.name === 'مجموع سندات القبض');
         var totalReceiptCredit = 0;
         var totalReceiptDebit = 0;
          for (let i = 0; i <  this.receiptBudget.length; i++) {
            totalReceiptCredit += this.receiptBudget[i].totalReceivedAmount;
            totalReceiptDebit += this.receiptBudget[i].totalRemainingAmount;
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
            totalHotelCredit += this.hotelsBudget[i].totalReceivedAmount;
            totalHotelDebit += this.hotelsBudget[i].totalRemainingAmount;
            this.totalHotelCredit= totalHotelCredit;
            this.totalHotelDebit= totalHotelDebit;
        }

        this.commHotelBudget= data.docs.filter(a=> a.name === 'عمولات  حجوزات الفنادق');
         var totalCommHotelCredit = 0;
         var totalCommHotelDebit = 0;
          for (let i = 0; i <  this.commHotelBudget.length; i++) {
            totalCommHotelCredit += this.commHotelBudget[i].totalReceivedAmount;
            totalCommHotelDebit += this.commHotelBudget[i].totalRemainingAmount;
            this.totalCommHotelCredit= totalCommHotelCredit;
            this.totalCommHotelDebit= totalCommHotelDebit;
          }

          
          this.refundCommHotelBudget= data.docs.filter(a=> a.name === 'استرجاع عمولات حجز فندقي');
          var totalRefundCommHotelCredit = 0;
          var totalRefundCommHotelDebit = 0;
           for (let i = 0; i <  this.refundCommHotelBudget.length; i++) {
            totalRefundCommHotelCredit += this.refundCommHotelBudget[i].totalReceivedAmount;
            totalRefundCommHotelDebit += this.refundCommHotelBudget[i].totalRemainingAmount;
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
            totalSafeboxCredit += this.safeboxBudget[i].totalReceivedAmount;
            totalSafeboxDebit += this.safeboxBudget[i].totalRemainingAmount;
            this.totalSafeboxCredit= totalSafeboxCredit;
            this.totalSafeboxDebit= totalSafeboxDebit;
        }
        },
        err =>{
        console.log(err);
      }
    )
  }

  companiesBudget(){
    this.budgetService.getBudgetes().subscribe(
      res =>{
        let data = res['data'];
        this.companyBudget= data.docs.filter(a=> a.name === 'أرصدة الحسابات');
         var totalCompanyCredit = 0;
         var totalCompanyDebit = 0;
          for (let i = 0; i <  this.companyBudget.length; i++) {
            totalCompanyCredit += this.companyBudget[i].totalRemainingAmount;
            totalCompanyDebit += this.companyBudget[i].totalReceivedAmount;
            this.totalCompanyCredit= totalCompanyCredit;
            this.totalCompanyDebit= totalCompanyDebit;
            console.log("totalCompanyCredit" , totalCompanyCredit);
            console.log("totalCompanyDebit" , totalCompanyDebit);
          }
        },
        err =>{
        console.log(err);
      }
    )
  }

}
