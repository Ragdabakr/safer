import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";

import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import { CONTENT_ROUTES } from "./shared/routes/content-layout.routes";


import { AuthGuard } from './shared/auth/auth-guard.service';
import { LoginPageComponent } from './pages/content-pages/login/login-page.component';
import { AppComponent } from './app.component';
import { ContentPagesModule } from './pages/content-pages/content-pages.module';

const appRoutes: Routes = [
 //{ path: 'content-pages', loadChildren: () => ContentPagesModule},
  { path: 'content-pages', loadChildren: () => import('./pages/content-pages/content-pages.module').then( m => m.ContentPagesModule)},
  {path: '', redirectTo: '/content-pages/login', pathMatch: 'full'},



  {
    path: 'full-layout',
    component: FullLayoutComponent,
    data: {
      title: 'full layout'
    },
     children : [
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule)},
      {
        path: 'calendar',
        loadChildren: './calendar/calendar.module#CalendarsModule'
      },
      {
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsNg2Module'
      },
       {
        path: 'forms',
        loadChildren: './forms/forms.module#FormModule'
      },
      {
        path: 'maps',
        loadChildren: './maps/maps.module#MapsModule'
      },
      {
        path: 'tables',
        loadChildren: './tables/tables.module#TablesModule'
      },
      {
        path: 'datatables',
        loadChildren: './data-tables/data-tables.module#DataTablesModule'
      },
      {
        path: 'uikit',
        loadChildren: './ui-kit/ui-kit.module#UIKitModule'
      },
      {
        path: 'components',
        loadChildren: './components/ui-components.module#UIComponentsModule'
      },
      // {
      //   path: 'pages',
      //   loadChildren: './pages/full-pages/full-pages.module#FullPagesModule'
      // },
      {
        path: 'cards',
        loadChildren: './cards/cards.module#CardsModule'
      },
      {
        path: 'colorpalettes',
        loadChildren: './color-palette/color-palette.module#ColorPaletteModule'
      },
      {
        path: 'chat',
        loadChildren: './chat/chat.module#ChatModule'
      },
      {
        path: 'chat-ngrx',
        loadChildren: './chat-ngrx/chat-ngrx.module#ChatNGRXModule'
      },
      {
        path: 'inbox',
        loadChildren: './inbox/inbox.module#InboxModule'
      },
      {
        path: 'taskboard',
        loadChildren: './taskboard/taskboard.module#TaskboardModule'
      },
      {
        path: 'taskboard-ngrx',
        loadChildren: './taskboard-ngrx/taskboard-ngrx.module#TaskboardNGRXModule'
      },
      {
        path: 'player',
        loadChildren: './player/player.module#PlayerModule'
      },
      {
        path: 'calendar',
        loadChildren: './calendar/calendar.module#CalendarsModule'
      },
    {
      path: 'users',
      loadChildren: './pages/full-pages/users/users.module#UsersModule'
    },
    {
      path: 'booking',
      loadChildren: './pages/full-pages/booking/booking.module#BookingModule'
    },
    {
      path: 'flightTickets',
      loadChildren: './pages/full-pages/flightTickets/flightTickets.module#flightTicketsModule'
    },
    {
      path: 'account',
      loadChildren: './pages/full-pages/account/account.module#AccountModule'
    },

    {
      path: 'reports',
      loadChildren: './pages/full-pages/reports/reports.module#ReportsModule'
    },
    {
      path: 'hotels',
      loadChildren: './pages/full-pages/hotels/hotels.module#ToursModule'
    },
    {
      path: 'companies',
      loadChildren: './pages/full-pages/companies/TravelAgents.module#TravelAgentsModule'
    },
    {
      path: 'transports',
      loadChildren: './pages/full-pages/guides/guides.module#ToursModule'
    },
    {
      path: 'tours',
      loadChildren: './pages/full-pages/transports/transports.module#ToursModule'
    },
    {
      path: 'settings',
      loadChildren: './pages/full-pages/transports/settings.module#AccountSettingModule'
    },
    { path: 'full-pages', loadChildren: () => import('./pages/full-pages/full-pages.module').then( m => m.FullPagesModule)},
    ],
  },




  // { path: 'full-layout', component: FullLayoutComponent, children: Full_ROUTES},



{path: '**', redirectTo: 'content-pages/login'}


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule]
})

export class AppRoutingModule {}


