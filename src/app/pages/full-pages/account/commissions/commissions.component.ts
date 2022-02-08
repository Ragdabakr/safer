
import { Component, OnInit } from '@angular/core';
import { CommissionService } from 'app/shared/services/commission.service';
import { CompanyService } from 'app/shared/services/company.service';
import { ExportToCsv } from 'export-to-csv-file';


@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.component.html',
  styleUrls: ['./commissions.component.scss']
})
export class CommissionsComponent implements OnInit {

  totalDebitNumber=0;
  totalCreditNumber=0;
  commissions: any;

  constructor( private companyServices: CompanyService ,private commissionService:CommissionService) { }

  ngOnInit() {
    this.getCompanies();
  }



  getCompanies(){
    this.commissionService.getCommissions().subscribe({
      next: response => {
          this.commissions = response.data.docs;
          for (let i = 0; i < this.commissions.length; i++) {
            this.totalDebitNumber += parseInt(this.commissions[i].debit);
            }
            for (let i = 0; i < this.commissions.length; i++) {
              this.totalCreditNumber += parseInt(this.commissions[i].credit);
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
    title: 'تقرير العمولات',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    headers: ['name' ,'type' ,'debit' ,'credit' ,'notes','PINCompanyCode' ,'createdAt' ] 
  };
 
const csvExporter = new ExportToCsv(options);
 
csvExporter.generateCsv(this.commissions);
}




}
