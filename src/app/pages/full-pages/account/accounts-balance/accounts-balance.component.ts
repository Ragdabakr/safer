import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/shared/auth/auth.service';
import { CompanyService } from 'app/shared/services/company.service';
import { ExportToCsv } from 'export-to-csv-file';


@Component({
  selector: 'app-accounts-balance',
  templateUrl: './accounts-balance.component.html',
  styleUrls: ['./accounts-balance.component.scss']
})
export class AccountsBalanceComponent implements OnInit {
  companies: any;
  totalDebitNumber=0;
  totalCreditNumber=0;
  user: string;

  constructor(private authService : AuthService ,  private companyServices: CompanyService) { }

  ngOnInit() {
    this.getCompanies();
    this.user = this.authService.getUser();
  
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

exportCSV(){
  const options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    showTitle: true,
    title: 'تقرير  الحسابات',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    headers: ['name' ,'type' ,'debit' ,'credit' ,'notes','PINCompanyCode' ,'createdAt' ] 
  };
 
const csvExporter = new ExportToCsv(options);
 
csvExporter.generateCsv(this.companies);
}






}
