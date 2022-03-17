import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'app/shared/services/company.service';
import { FlightTicketsService } from 'app/shared/services/flightTickets.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ExportToCsv } from 'export-to-csv-file';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'app/shared/auth/auth.service';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  companies: any;
  companyReports = [];
  companiesName = [];
  form: FormGroup;
  selectedOpts: any;
  reportArray=[];
  company: any;
  chosenCompany: any;
  totalCredit: number =0;
  refundFlightTickets;
  fairFlightTickets;
  user: any;
  totalDebit: number = 0;

  constructor(private authService : AuthService ,private config: PrimeNGConfig,private translateService: TranslateService,private flightTicketsService :FlightTicketsService  , private companyService: CompanyService , private sanitizer: DomSanitizer) { }

  ngOnInit() {
   this.getCompanies();
   this.user = this.authService.getUser();
   //this.getAirlines();

   this.form = new FormGroup({
    'selectedOptions': new FormControl([]),
  });

  this.config.setTranslation({
    dateIs: "التاريخ",
    dateIsNot: "جميع التواريخ ما عدا",
    dateBefore: "جميع النتائج قبل هذا التاريخ",
    dateAfter: "جميع النتائج بعد هذا التاريخ",
    clear: "الغاء",
    apply: "تنفيذ",
    matchAll: "جميع النتائج",
    matchAny: "بعض النتائج ",
    addRule: "تاريخ جديد",
    removeRule: "حذف التاريخ",
    //translations
});
this.translateService.setDefaultLang('en');
    }

    translate(lang: string) {
      this.translateService.use(lang);
      this.translateService.get('primeng').subscribe(res => this.config.setTranslation(res));
  }

  onTicketTypeSelected(event){
    this.companyService.getcompanies().subscribe({
      next: response => {
        const x =  event.target.value.slice(2);
          this.companies = response.data.docs;
          this.company =  this.companies.filter(a => a.name  === x.slice(1)  );
          
          for (let i = 0; i < this.company.length; i++) {
          this.reportArray = this.company[i].companyReport.reverse();
          console.log("this.reportArray" , this.reportArray);
          this.reportArray.forEach(report => report.createdAt = new Date(report.createdAt));
          for (let i = 0; i < this.reportArray.length; i++) {
          this.totalCredit += this.reportArray[i].credit;
          console.log("this.totalCredit" , this.totalCredit);
          this.totalDebit +=this.reportArray[i].debit;
          console.log("this.totalDebit" , this.totalDebit);
          //this.chosenCompany=this.company[i];
          }
          }
      },
      error: err => {
          console.log(err);
      }
    });
  }

  getCompanies(){
    this.companyService.getcompanies().subscribe({
      next: response => {
          this.companies = response.data.docs;
          for (let i = 0; i < this.companies.length; i++) {
            const airliness = this.companies[i].name;
            this.companiesName.push(airliness);
            this.companyReports = this.companies[i].companyReport;
            }
      },
      error: err => {
          console.log(err);
      }
  });
}


exportCSV(){
  const options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    showTitle: true,
    title: 'تقرير حساب الشركة',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    headers: ['name','debit','credit','user','createdAt' ,'description'  ] 
  };
 
const csvExporter = new ExportToCsv(options);
 
csvExporter.generateCsv(this.reportArray);
}

}
