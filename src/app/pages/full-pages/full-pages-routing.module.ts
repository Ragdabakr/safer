import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryPageComponent } from "./gallery/gallery-page.component";
import { InvoicePageComponent } from "./invoice/invoice-page.component";
import { HorizontalTimelinePageComponent } from "./timeline/horizontal/horizontal-timeline-page.component";
import { VerticalTimelinePageComponent } from "./timeline/vertical/vertical-timeline-page.component";
import { UserProfilePageComponent } from "./user-profile/user-profile-page.component";
import { SearchComponent } from './search/search.component';
import { FaqComponent } from './faq/faq.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { CreateTourComponent } from './tours/create-tour/create-tour.component';
import { TravellersComponent } from './travellers/travellers/travellers.component';
import { HotelsComponent } from './hotels/hotels/hotels.component';
import { TravelAgentsComponent } from './travel-agents/travel-agents/travel-agents.component';
import { TransportsComponent } from './transports/transports/transports.component';
import { UsersComponent } from './users/users.component';
import { GuidesComponent } from './guides/guides.component';
import { TourListComponent } from './tours/tour-list/tour-list.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { EditTourComponent } from './tours/edit-tour/edit-tour.component';
import { CreateBookingComponent } from './booking/create-booking/create-booking.component';
import { BookingListComponent } from './booking/booking-list/booking-list.component';
import { ToursReportComponent } from './reports/tours-report/tours-report.component';
import { BookingsReportComponent } from './reports/bookings-report/bookings-report.component';
import { AccountComponent } from './account-setting/account/account.component';
import { ProfileComponent } from './account-setting/profile/profile.component';
import { InvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { RolesComponent } from './users/roles/roles.component';
import { FlightTicketsComponent } from './flight-tickets/flight-tickets.component';
import { BookingFlightTicketComponent } from './flight-tickets/booking-flight-ticket/booking-flight-ticket.component';
import { FlightTicketsInvoicesListComponent } from './invoice/flight-tickets-invoices-list/flight-tickets-invoices-list.component';
import { FlightTicketInvoiceComponent } from './invoice/flight-ticket-invoice/flight-ticket-invoice.component';
import { CompaniesComponent } from './account/companies/companies.component';
import { GroupsReportComponent } from './reports/groups-report/groups-report.component';
import { GroupReportComponent } from './reports/group-report/group-report.component';
import { SafeBoxComponent } from './safe-box/safe-box.component';
import { AccountsBalanceComponent } from './account/accounts-balance/accounts-balance.component';
import { CommissionsComponent } from './account/commissions/commissions.component';
import { FlightTicketsListComponent } from './flight-tickets/flight-tickets-list/flight-tickets-list.component';
import { InvoiceComponent } from './flight-tickets/invoice/invoice.component';

const routes: Routes = [
  {
    path: '',
    children: [
       
      {
        path: 'gallery',
        component: GalleryPageComponent,
        data: {
          title: 'Gallery Page'
        }
      },
      {
        path: 'invoices',
        component: InvoiceListComponent,
        data: {
          title: 'Invoices Page'
        }
      }, 
      {
        path: 'guides',
        component: GuidesComponent,
        data: {
          title: 'guides Page'
        }
      },   
      {
        path: 'invoice/:invoiceId',
        component: InvoicePageComponent,
        data: {
          title: 'Invoice Page'
        }
      },    
      {
        path: 'horizontaltimeline',
        component: HorizontalTimelinePageComponent,
        data: {
          title: 'Horizontal Timeline Page'
        }
      },
      {
        path: 'verticaltimeline',
        component: VerticalTimelinePageComponent,
        data: {
          title: 'Vertical Timeline Page'
        }
      },
      {
        path: 'search',
        component: SearchComponent,
        data: {
          title: 'Search'
        }
      },
      {
        path: 'faq',
        component: FaqComponent,
        data: {
          title: 'FAQ'
        }
      },
  {
    path: 'kb',
    component: KnowledgeBaseComponent,
    data: {
      title: 'Knowledge Base'
      }
    },
    {
      path: 'createTour',
      component: CreateTourComponent,
      data: {
        title: 'Create tour'
        }
      },
    {
      path: 'editTour/:tourId',
      component: EditTourComponent,
      data: {
        title: 'Edit tour'
        }
      },
    {
      path: 'tours',
      component: TourListComponent,
      data: {
        title: 'Tours'
        }
      },
      {
        path: 'createBooking',
        component:CreateBookingComponent ,
        data: {
          title: 'create Booking'
          }
        },
        {
          path: 'booking',
          component:BookingListComponent ,
          data: {
            title: 'Bookings'
            }
          },
          {
            path: 'flightTickets',
            component:FlightTicketsComponent ,
            data: {
              title: 'FlightTickets'
              }
            },
            {
              path: 'bookingFlightTickets',
              component:BookingFlightTicketComponent,
              data: {
                title: 'bookingFlightTickets'
                }
              },
              {
                path: 'flightTicketsInvoices',
                component:FlightTicketsInvoicesListComponent,
                data: {
                  title: 'FlightTicketsInvoices'
                  }
                },
                {
                  path: 'flightTicketInvoice/:invoiceId',
                  component:FlightTicketInvoiceComponent,
                  data: {
                    title: 'FlightTicketInvoice'
                    }
                  },
                  {
                    path: 'invoices/:invoiceId',
                    component:InvoiceComponent,
                    data: {
                      title: 'Invoice'
                      }
                    },
                  {
                    path: 'accountsBalanceComponent',
                    component: AccountsBalanceComponent,
                    data: {
                      title: ' AccountsBalanceComponent '
                      }
                    },
                    {
                      path: 'commissionsComponent',
                      component: CommissionsComponent,
                      data: {
                        title: ' CommissionsComponent '
                        }
                      },
                  {
                    path: 'companiesStatement',
                    component:CompaniesComponent,
                    data: {
                      title: 'CompaniesStatement '
                      }
                    },
                    {
                      path: 'flightTicketsList',
                      component: FlightTicketsListComponent,
                      data: {
                        title: 'FlightTicketsList'
                        }
                      },

          {
            path: 'toursReport',
            component:ToursReportComponent ,
            data: {
              title: 'tours Report'
              }
            },
      {
        path: 'bookingsReport',
        component:BookingsReportComponent ,
        data: {
          title: 'Bookings Report'
          }
        },
        {
          path: 'groupsReport',
          component:GroupsReportComponent ,
          data: {
            title: 'Groups Report'
            }
          },
          {
            path: 'groupReport/:groupId',
            component:GroupReportComponent ,
            data: {
              title: 'Group Report'
              }
            },
          {
            path: 'users',
            component: UsersListComponent,
            data: {
              title: 'Users'
              }
           }, 
           {
            path: 'roles',
            component: RolesComponent,
            data: {
              title: 'roles'
              }
           }, 
           {
            path: 'travellers',
            component: HotelsComponent,
            data: {
              title: 'Travellers'
              }
           },
          //  {
          //   path: 'guides',
          //   component: GuidesComponent,
          //   data: {
          //     title: 'Guides'
          //     }
          //  },
           {
            path: 'transports',
            component: TransportsComponent,
            data: {
              title: 'Transports'
              }
           },
           {
            path: 'hotels',
            component: HotelsComponent,
            data: {
              title: 'Hotels'
              }
           },
           {
            path: 'companies',
            component:TravelAgentsComponent,
            data: {
              title: 'Companies'
              }
           },
           {
            path: 'profile',
            component: ProfileComponent,
            data: {
              title: 'Profile'
              }
           },
           {
            path: 'account-settings',
            component: AccountComponent,
            data: {
              title: 'settings'
              }
           },
           {
            path: 'safeBox',
            component: SafeBoxComponent,
            data: {
              title: 'Safe Box'
              }
            },

        // {
        //     path: 'tours',
        //     loadChildren: './tours/tours.module#ToursModule'
        // },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullPagesRoutingModule { }
