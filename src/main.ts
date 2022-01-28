// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// // if (environment.production) {
// //   enableProdMode();
// // }
// enableProdMode();
//  platformBrowserDynamic().bootstrapModule(AppModule);

 import { enableProdMode } from '@angular/core';
 import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 
 import { AppModule } from './app/app.module';
 import { environment } from './environments/environment';
 
//  if (environment.production) {
//   enableProdMode();
//  }
 enableProdMode();
 
 if (environment.production) {
 
  platformBrowserDynamic().bootstrapModule( AppModule )
    .catch( err => console.log( err ) );
 
 } else {
 
  platformBrowserDynamic().bootstrapModule( AppModule )
    .catch( err => console.log( err ) );
 
 }



