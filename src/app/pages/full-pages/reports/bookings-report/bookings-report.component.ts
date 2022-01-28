import { Component, OnInit } from '@angular/core';
import { BookingService } from 'app/shared/services/booking.service';
import { TourService } from 'app/shared/services/tour.service';

import {
  IBarChartOptions,
  IChartistAnimationOptions,
  IChartistData
} from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';

import * as Chartist from 'chartist';
const data: any = require('../../../../shared/data/chartist.json');
declare var require: any;
export interface Chart {
 
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: 'app-bookings-report',
  templateUrl: './bookings-report.component.html',
  styleUrls: ['./bookings-report.component.scss']
})
export class BookingsReportComponent implements OnInit {
  bookingsByMonth: any;
  remainingSeatsPlan: any;
  bookingsByWeek: any;
  lineChart1: { type: string; data: { labels: string[]; series: any[]; }; options: { axisX: { showGrid: boolean; }; axisY: { low: number; scaleMinSpace: number; }; fullWidth: boolean; }; events: { draw(data: any): void; }; };
  tours: any;
  totalTours: any;

     // Line area chart configuration Starts
     lineAreaChart: Chart = {
      type: 'Line',
      data: data['lineArea3'],
      options: {
          low: 0,
          showArea: true,
          fullWidth: true,
          onlyInteger: true,
          axisY: {
              low: 0,
              scaleMinSpace: 50,
          },
          axisX: {
              showGrid: false
          }
      },
      events: {
          created(data: any): void {
              var defs = data.svg.elem('defs');
              defs.elem('linearGradient', {
                  id: 'gradient',
                  x1: 0,
                  y1: 1,
                  x2: 0,
                  y2: 0
              }).elem('stop', {
                  offset: 0,
                  'stop-opacity': '0.2',
                  'stop-color': 'rgba(255, 255, 255, 1)'
              }).parent().elem('stop', {
                  offset: 1,
                  'stop-opacity': '0.2',
                  'stop-color': 'rgba(38, 198, 218, 1)'
              });
          },
          draw(data: any): void {

              var circleRadius = 6;
              if (data.type === 'point') {
                  var circle = new Chartist.Svg('circle', {
                      cx: data.x,
                      cy: data.y,
                      r: circleRadius,
                      class: 'ct-point-circle'
                  });
                  data.element.replace(circle);
              }
          }
      },
  };
  // Line area chart configuration Ends


       // Line chart configuration Starts
       lineChart2: Chart = {
        type: 'Line', data: data['line2'],
        options: {
            axisX: {
                showGrid: false,
            },
            axisY: {
                low: 0,
                scaleMinSpace: 50,
            },
            fullWidth: true,
        },
        responsiveOptions: [
            ['screen and (max-width: 640px) and (min-width: 381px)', {
                axisX: {
                    labelInterpolationFnc: function (value, index) {
                        return index % 2 === 0 ? value : null;
                    }
                }
            }],
            ['screen and (max-width: 380px)', {
                axisX: {
                    labelInterpolationFnc: function (value, index) {
                        return index % 3 === 0 ? value : null;
                    }
                }
            }]
        ],
        events: {
            draw(data: any): void {
                var circleRadius = 6;
                if (data.type === 'point') {
                    var circle = new Chartist.Svg('circle', {
                        cx: data.x,
                        cy: data.y,
                        r: circleRadius,
                        class: 'ct-point-circle'
                    });
                    data.element.replace(circle);
                }
                else if (data.type === 'label') {
                    // adjust label position for rotation
                    const dX = data.width / 2 + (30 - data.width)
                    data.element.attr({ x: data.element.attr('x') - dX })
                }
            }
        },

    };
  bookings: any;
  cashBooking: any;
  depositeBooking: any;
  bankTransfearBooking: any;
  bookingsByWeekLength: void;
  bookingsByMonthLength: any;
  bookingsLength: any;
  cancelBooking: any;
  activeBookings: any;
    // Line chart configuration Ends

  constructor(private tourService:TourService, private bookingService:BookingService,) { }

  ngOnInit() {
    this.getTours();
    this.getBookingsMonthlyStatus();
    this.getBookingsWeeklyStatus();
    this.getRemainingSeatsStatus();
    this.getBookings();
  
  }

   // Get Tours by month Stats
 getBookingsMonthlyStatus(){
  const year = new Date().getFullYear();
 this.bookingService.bookingMonthlyStatus(year).subscribe(
   res =>{
     let data = res['data'];
     let month = res['month'];
      this.bookingsByMonth = data.plan;
      this.bookingsByMonthLength = month.stats[0].numBookings;
      this.generateChart(this.bookingsByMonth);
     },
     err =>{
     console.log(err);
   }
 )
}

generateChart(chartData:any){
  this.lineChart1 = {
      type: 'Line', 
      data: {
      labels: [
        'يناير',
        'فبراير',
        'مارس',
        'أبريل',
        'مايو',
        'يونيو',
        'يوليو',
        'أغسطس',
        'سبتمبر',
        'أكتوبر',
        'نوفمبر ',
        'ديسمبر'
      ],
      series: [
       chartData
      ]
    },
      options: {
          axisX: {
              showGrid: false,
          },
          axisY: {
              low: 0,
              scaleMinSpace: 20,
          },
          fullWidth: true
      },
      events: {
          draw(data: any): void {
              if (data.type === 'label') {
                  // adjust label position for rotation
                  const dX = data.width / 2 + (30 - data.width)
                  data.element.attr({ x: data.element.attr('x') - dX })
              }
          }
      },
    };
  };

   
   // Get Tours by month Stats
   getRemainingSeatsStatus(){
   this.bookingService.getRemainingSeatsPlan().subscribe(
     res =>{
       let data = res['data'];
        this.remainingSeatsPlan = data.plan;
        const maxGroupSize = data.plan.map(a => a.maxGroupSize);
        const numOfBooking = data.plan.map(a => a.numOfBooking);
        const remainingSeats = data.plan.map(a => a.remainingSeats);
        const labels = data.plan.map(a => a._id);
        this.generateChart3(labels ,maxGroupSize ,numOfBooking ,remainingSeats);
        console.log("this.getRemainingSeatsPlan>>" , this.remainingSeatsPlan);
       },
       err =>{
       console.log(err);
     }
   )
  }

  generateChart3(labels ,maxGroupSize ,numOfBooking ,remainingSeats){
    this.lineAreaChart = {
        type: 'Bar', 
        data: {
        labels: labels,
        series: [
          maxGroupSize,
          numOfBooking,
          remainingSeats

        ]
      },
        options: {
            axisX: {
                showGrid: false,
            },
            axisY: {
                low: 0,
                scaleMinSpace: 20,
            },
            fullWidth: true
        },
        events: {
            draw(data: any): void {
                if (data.type === 'label') {
                    // adjust label position for rotation
                    const dX = data.width / 2 + (30 - data.width)
                    data.element.attr({ x: data.element.attr('x') - dX })
                }
            }
        },
    };
    };


    // Get Tours
getTours(){
  this.tourService.getTours().subscribe(
    res =>{
      let data = res['data'];
      this.tours = data.docs.filter(a=> a.active === true);
       this.totalTours = this.tours.length;
      console.log('tours >>>',data.docs);
      },
      err =>{
      console.log(err);
    }
  )
}


// Get Tours by month Stats
getBookingsWeeklyStatus(){
  this.bookingService.bookingWeeklyStatus().subscribe(
    res =>{
      let data = res['data'];
      let week = res['week'];
       this.bookingsByWeek = data.plan;
       this.bookingsByWeekLength = week.stats[0].numBookings;
       console.log("weeeeee" , this.bookingsByWeekLength);
       this.generateChart2(this.bookingsByWeek);
      },
      err =>{
      console.log(err);
    }
  )
 }

 generateChart2(chartData:any){
   this.lineChart2 = {
     type: 'Line',
     data: {
       labels:[
         'الاحد',
         'الاثنين',
         'الثلاثاء',
         'الاربعاء',
         'الخميس',
         'الجمعة',
         'سبت',
       ],
       series:[ chartData
       ],
     },
     options: {
         low: 0,
         showArea: true,
         fullWidth: true,
         onlyInteger: true,
         axisY: {
             low: 0,
             scaleMinSpace: 50,
         },
         axisX: {
             showGrid: false
         }
     },
     events: {
         created(data: any): void {
             var defs = data.svg.elem('defs');
             defs.elem('linearGradient', {
                 id: 'gradient',
                 x1: 0,
                 y1: 1,
                 x2: 0,
                 y2: 0
             }).elem('stop', {
                 offset: 0,
                 'stop-opacity': '0.2',
                 'stop-color': 'rgba(255, 255, 255, 1)'
             }).parent().elem('stop', {
                 offset: 1,
                 'stop-opacity': '0.2',
                 'stop-color': 'rgba(38, 198, 218, 1)'
             });
         },
         draw(data: any): void {
 
             var circleRadius = 6;
             if (data.type === 'point') {
                 var circle = new Chartist.Svg('circle', {
                     cx: data.x,
                     cy: data.y,
                     r: circleRadius,
                     class: 'ct-point-circle'
                 });
                 data.element.replace(circle);
             }
         }
     },
 };
}


      // Get Bookings
      getBookings(){
        this.bookingService.getBookings().subscribe(
          res =>{
            let data = res['data'];
            this.bookings = data.docs;
            this.bookingsLength = this.bookings.length;
            this.activeBookings = data.docs.filter(a => a.paymentInfo.orderStatus === "دفع بتحويل بنكي" ||  a.paymentInfo.orderStatus === "تأكيد حجز المبلغ كامل" ).length;
            this.cashBooking = data.docs.filter(a => a.paymentInfo.orderStatus === "تأكيد حجز المبلغ كامل").length;
            this.cancelBooking = data.docs.filter(a => a.paymentInfo.orderStatus === "الغاء الحجز").length;
            this.bankTransfearBooking = data.docs.filter(a => a.paymentInfo.orderStatus === "دفع بتحويل بنكي").length;
            console.log('bookings >>>',this.bookings);
            },
            err =>{
            console.log(err);
          }
        )
      }


}

