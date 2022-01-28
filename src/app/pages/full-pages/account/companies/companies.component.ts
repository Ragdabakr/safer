import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'app/shared/services/company.service';
import { FlightTicketsService } from 'app/shared/services/flightTickets.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  companies: any;
  companyReports = [];
  airlineCompanies = [];
  airlines =[];
  airlineArray =[];
  companiesName = [];
  airlineName: string;
  form: FormGroup;
  selectedOpts: any;
  reportArray=[];
  company: any;
  chosenCompany: any;
  totalCredit: number;
  refundFlightTickets;
  fairFlightTickets;

  constructor(private flightTicketsService :FlightTicketsService  , private companyService: CompanyService) { }

  ngOnInit() {
   this.getCompanies();
   //this.getAirlines();

   this.form = new FormGroup({
    'selectedOptions': new FormControl([]),
  });
  }

  onTicketTypeSelected(event){

    this.companyService.getcompanies().subscribe({
      next: response => {
        const x =  event.target.value.slice(2);
        console.log("x3 >>> " , x.slice(1));
        this.airlineName = '"'+ x.slice(1) +'"' ;
        console.log("event.target.value >>> " , event.target.value);
        console.log("airlineName >>> " , this.airlineName);
          this.companies = response.data.docs;
          console.log("this.companies >>> " , this.companies);
          this.company =  this.companies.filter(a => a.name  === x.slice(1)  );
          console.log("this.company >>> " , this.company);
          for (let i = 0; i < this.company.length; i++) {
          this.reportArray = this.company[i].companyReport;
          console.log("this.reportArray>>> " , this.reportArray);
          this.chosenCompany=this.company[i];
          this.totalCredit = this.chosenCompany.incoming - this.chosenCompany.outgoing;
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

  getAirlines(){
    this.flightTicketsService.getflightTickets().subscribe({
      next: response => {
          this.airlineCompanies = response.data.docs;
          console.log("companieskk >>> " , this.airlineCompanies);
          for (let i = 0; i < this.airlineCompanies.length; i++) {
            //  const airliness = this.airlineCompanies[i].name;
            // this.airlines.push(airliness);
            // console.log(" this.airlines mm >>> " ,  this.airlines);
            }
      },
      error: err => {
          console.log(err);
      }
  });
}

}
