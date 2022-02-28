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

  constructor(private budgetService:BudgetService , private authService:AuthService) { }

  ngOnInit() {
    this.getGroupsBudget();
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

}
