
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/shared/auth/auth.service';
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
  user: string;

  constructor( private authService : AuthService ,private companyServices: CompanyService ,private commissionService:CommissionService) { }

  ngOnInit() {
    this.getCompanies();
    this.user = this.authService.getUser();
  }



  getCompanies(){
    this.commissionService.getCommissions().subscribe({
      next: response => {
          this.commissions = response.data.docs.reverse();
          for (let i = 0; i < this.commissions.length; i++) {
            this.totalDebitNumber += this.commissions[i].debit;
            }
            for (let i = 0; i < this.commissions.length; i++) {
              this.totalCreditNumber += this.commissions[i].credit;
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
   // useKeysAsHeaders: true,
    headers: ['وصف الحركة' ,'الملاحظات' ,'مدين' ,'دائن','تاريخ الانشاء' ,'الموظف' ] 
  };
 
const csvExporter = new ExportToCsv(options);
var data = this.commissions.map(u => ({name:u.name ,description:u.description,debit:u.debit ,credit:u.credit ,createdAt:u.createdAt ,user:u.user}));
csvExporter.generateCsv(data);

}




}
