import { Component, Output, EventEmitter, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LayoutService } from '../services/layout.service';
import { Subscription } from 'rxjs';
import { ConfigService } from '../services/config.service';
import { AuthService } from 'app/shared/auth/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {
  currentLang = "en";
  toggleClass = "ft-maximize";
  placement = "bottom-right";
  public isCollapsed = true;
  layoutSub: Subscription;
  language;
  @Output() lang = new EventEmitter<string>(); // send lang to app
  toggleHideSidebar = new EventEmitter<Object>();

  public config: any = {};
  user: any;
  notificationss :any;
  userId: any;
  findLoginUser: any;
  findNotification: any;

  constructor(public translate: TranslateService,private userService:UserService,private AuthService:AuthService, private layoutService: LayoutService, private configService:ConfigService) {

    translate.addLangs(['en' ,'er']);
    translate.setDefaultLang('ar');
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ar/) ? browserLang : "ar");
   

    this.layoutSub = layoutService.changeEmitted$.subscribe(
      direction => {
        const dir = direction.direction;
        if (dir === "rtl") {
          this.placement = "bottom-left";
        } else if (dir === "ltr") {
          this.placement = "bottom-right";
        }
      });
  }

  ngOnInit() {
    this.config = this.configService.templateConf;
    this.user = this.AuthService.getUser();
    this.findUser();
  }

 findUser(){
      this.userService.getUser(this.user.id).subscribe({
        next: response => {
            this.user= response.data.doc;
            console.log("user" ,    this.user);
        },
        error: err => {
            console.log(err);
        }
    });
  
  }
  deleteNotificatiob(notificationId){
    this.userService.deleteNotification(notificationId).subscribe({
      next: response => {
      },
      error: err => {
          console.log(err);
      }
  });
  }

  ngAfterViewInit() {
    if(this.config.layout.dir) {
      setTimeout(() => {
        const dir = this.config.layout.dir;
        if (dir === "rtl") {
          this.placement = "bottom-left";
        } else if (dir === "ltr") {
          this.placement = "bottom-right";
        }
      }, 0);
     
    }
  }

  ngOnDestroy() {
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }

  ChangeLanguage(language: string) {
    this.translate.use(language);
    this.lang.emit(language);
    console.log("language", language);
  }



  ToggleClass() {
    if (this.toggleClass === "ft-maximize") {
      this.toggleClass = "ft-minimize";
    } else {
      this.toggleClass = "ft-maximize";
    }
  }

  toggleNotificationSidebar() {
    this.layoutService.emitNotiSidebarChange(true);
  }

  toggleSidebar() {
    const appSidebar = document.getElementsByClassName("app-sidebar")[0];
    if (appSidebar.classList.contains("hide-sidebar")) {
      this.toggleHideSidebar.emit(false);
    } else {
      this.toggleHideSidebar.emit(true);
    }
  }

  logout(){
    this.AuthService.logout();
    window.location.href = '/content-pages/login';
  }
}
