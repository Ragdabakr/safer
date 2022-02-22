import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'app/shared/services/company.service';
import { FlightTicketsService } from 'app/shared/services/flightTickets.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ExportToCsv } from 'export-to-csv-file';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'app/shared/auth/auth.service';

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
  totalCredit: number;
  refundFlightTickets;
  fairFlightTickets;
  user: any;

  constructor(private authService : AuthService ,private flightTicketsService :FlightTicketsService  , private companyService: CompanyService , private sanitizer: DomSanitizer) { }

  ngOnInit() {
   this.getCompanies();
   this.user = this.authService.getUser();
   //this.getAirlines();

   this.form = new FormGroup({
    'selectedOptions': new FormControl([]),
  });
  }

  onTicketTypeSelected(event){

    this.companyService.getcompanies().subscribe({
      next: response => {
        const x =  event.target.value.slice(2);
        //console.log("x3 >>> " , x.slice(1));
       // console.log("event.target.value >>> " , event.target.value);
          this.companies = response.data.docs;
          this.company =  this.companies.filter(a => a.name  === x.slice(1)  );
          for (let i = 0; i < this.company.length; i++) {
          this.reportArray = this.company[i].companyReport.reverse();
         // console.log("this.reportArray>>> " , this.reportArray);
          this.chosenCompany=this.company[i];
          this.totalCredit = this.chosenCompany.debit - this.chosenCompany.credit;
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
            console.log(" companiesName >>> " ,  this.companiesName);
            this.companyReports = this.companies[i].companyReport;
            console.log(" this.companyReports33 >>> " ,  this.companyReports);
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
