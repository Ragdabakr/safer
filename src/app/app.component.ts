import { Component, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

    subscription: Subscription;
    language:any;
    textDir: string = 'rtl';
    constructor(private router: Router , private translate: TranslateService) {
      
//find browser language
        this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
        {
          if(event.lang == 'ar')
          {
            this.textDir = 'rtl';
          } 
          else
          {
            this.textDir = 'ltr';
          }
        });
    }

    ngOnInit() {
        this.subscription = this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd)
            )
            .subscribe(() => window.scrollTo(0, 0));

            
    }

   

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    recieveLang(lang){
       this.language = lang;
       console.log("langapp" , this.language);
    }


}