import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'app/shared/auth/auth.service';
import { CompanyService } from 'app/shared/services/company.service';
import { ExportToCsv } from 'export-to-csv-file';
import { PrimeNGConfig } from 'primeng/api';


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

  constructor(private authService : AuthService ,  private companyServices: CompanyService , private config: PrimeNGConfig,private translateService: TranslateService,) { }

  ngOnInit() {
    this.getCompanies();
    this.user = this.authService.getUser();
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

  getCompanies(){
    this.companyServices.getcompanies().subscribe({
      next: response => {
          this.companies = response.data.docs;
          this.companies.forEach(company => company.createdAt = new Date(company.createdAt));
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
   // useKeysAsHeaders: true,
    headers: ['رقم الحساب' ,'تاريخ الانشاء' ,'اسم الحساب' ,'نوع العميل' ,'المدين','الدائن' ] 
  };
 
const csvExporter = new ExportToCsv(options);
var data = this.companies.map(u => ({PINCompanyCode:u.PINCompanyCode ,createdAt:u.createdAt ,name:u.name,type:u.type,debit:u.debit ,credit:u.credit}));
csvExporter.generateCsv(data);
}






}
