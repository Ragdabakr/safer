import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'app/shared/services/company.service';


@Component({
  selector: 'app-accounts-balance',
  templateUrl: './accounts-balance.component.html',
  styleUrls: ['./accounts-balance.component.scss']
})
export class AccountsBalanceComponent implements OnInit {
  companies: any;
  totalDebitNumber=0;
  totalCreditNumber=0;

  constructor( private companyServices: CompanyService) { }

  ngOnInit() {
    this.getCompanies();
  }



  getCompanies(){
    this.companyServices.getcompanies().subscribe({
      next: response => {
          this.companies = response.data.docs;
          for (let i = 0; i < this.companies.length; i++) {
            this.totalDebitNumber += parseInt(this.companies[i].debit);
            }
            for (let i = 0; i < this.companies.length; i++) {
              this.totalCreditNumber += parseInt(this.companies[i].credit);
              }
      },
      error: err => {
          console.log(err);
      }
  });
};





}
