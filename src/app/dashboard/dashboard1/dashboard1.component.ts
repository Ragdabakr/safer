import { Component } from '@angular/core';
import { BookingService } from 'app/shared/services/booking.service';
import { InvoiceService } from 'app/shared/services/invoice.service';
import { TourService } from 'app/shared/services/tour.service';
import { UserService } from 'app/shared/services/user.service';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from "ng-chartist";
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import  io from 'socket.io-client';
import { AuthService } from 'app/shared/auth/auth.service';
import { FlightTicketsService } from 'app/shared/services/flightTickets.service';

declare var require: any;

const data: any = require('../../shared/data/chartist.json');

export interface Chart {
    type: ChartType;
    data: Chartist.IChartistData;
    options?: any;
    responsiveOptions?: any;
    events?: ChartEvent;
}

@Component({
    selector: 'app-dashboard1',
    templateUrl: './dashboard1.component.html',
    styleUrls: ['./dashboard1.component.scss']
})

export class Dashboard1Component {
    private socket: any;
  public data: any;
    Stackbarchart: Chart = {
        type: 'Bar',
        data: {
            labels: [
              'يناير',
              'فبراير',
              'مارس',
              'أبريل',
              'مايو',
              'يونيو'
            ],
            series: [
          
            ]
          },
        options: {
            stackBars: true,
            fullWidth: true,
            axisX: {
                showGrid: false,
            },
            axisY: {
                showGrid: false,
                showLabel: false,
                offset: 0
            },
            chartPadding: 30
        },
        events: {
            created(data: any): void {
                var defs = data.svg.elem('defs');
                defs.elem('linearGradient', {
                    id: 'linear',
                    x1: 0,
                    y1: 1,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(0, 201, 255,1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(17,228,183, 1)'
                });
            },
            draw(data: any): void {
                if (data.type === 'bar') {
                    data.element.attr({
                        style: 'stroke-width: 5px',
                        x1: data.x1 + 0.001
                    });

                }
                else if (data.type === 'label') {
                    data.element.attr({
                        y: 270
                    })
                }
            }
        }
    };

      // Line area chart configuration Starts
      lineArea: Chart = {
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
   
    // Stacked Bar chart configuration Starts
    
    
        // Stacked Bar chart configuration Ends
    
        // Line area chart 2 configuration Starts
        lineArea2: Chart = {
            type: 'Line',
            data: data['lineArea2'],
            options: {
                showArea: true,
                fullWidth: true,
                lineSmooth: Chartist.Interpolation.none(),
                axisX: {
                    showGrid: false,
                },
                axisY: {
                    low: 0,
                    scaleMinSpace: 50,
                }            
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
                created(data: any): void {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'gradient2',
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
                        'stop-color': 'rgba(0, 201, 255, 1)'
                    });
    
                    defs.elem('linearGradient', {
                        id: 'gradient3',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0.3,
                        'stop-opacity': '0.2',
                        'stop-color': 'rgba(255, 255, 255, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-opacity': '0.2',
                        'stop-color': 'rgba(132, 60, 247, 1)'
                    });
                },
                draw(data: any): void {
                    var circleRadius = 4;
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
        // Line area chart 2 configuration Ends
    
        // Line chart configuration Starts
        lineChart: Chart = {
            type: 'Line', data: data['LineDashboard'],
            options: {
                axisX: {
                    showGrid: false
                },
                axisY: {
                    showGrid: false,
                    showLabel: false,
                    low: 0,
                    high: 100,
                    offset: 0,
                },
                fullWidth: true,
                offset: 0,
            },
            events: {
                draw(data: any): void {
                    var circleRadius = 4;
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
        // Line chart configuration Ends
    
        // Donut chart configuration Starts
        DonutChart: Chart = {
            type: 'Pie',
            data: data['donutDashboard'],
            options: {
                donut: true,
                startAngle: 0,
                labelInterpolationFnc: function (value) {
                    var total = data['donutDashboard'].series.reduce(function (prev, series) {
                        return prev + series.value;
                    }, 0);
                    return total + '%';
                }
            },
            events: {
                draw(data: any): void {
                    if (data.type === 'label') {
                        if (data.index === 0) {
                            data.element.attr({
                                dx: data.element.root().width() / 2,
                                dy: data.element.root().height() / 2
                            });
                        } else {
                            data.element.remove();
                        }
                    }
    
                }
            }
        };
        // Donut chart configuration Ends
    
        //  Bar chart configuration Starts
        BarChart: Chart = {
            type: 'Bar', data: data['DashboardBar'], options: {
                axisX: {
                    showGrid: false,
                },
                axisY: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0
                },
                low: 0,
                high: 60, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            },
            responsiveOptions: [
                ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
            ],
            events: {
                created(data: any): void {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'gradient4',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(238, 9, 121,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(255, 106, 0, 1)'
                    });
                    defs.elem('linearGradient', {
                        id: 'gradient5',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(0, 75, 145,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(120, 204, 55, 1)'
                    });
    
                    defs.elem('linearGradient', {
                        id: 'gradient6',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(132, 60, 247,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(56, 184, 242, 1)'
                    });
                    defs.elem('linearGradient', {
                        id: 'gradient7',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(155, 60, 183,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(255, 57, 111, 1)'
                    });
    
                },
                draw(data: any): void {
                    var barHorizontalCenter, barVerticalCenter, label, value;
                    if (data.type === 'bar') {
    
                        data.element.attr({
                            y1: 195,
                            x1: data.x1 + 0.001
                        });
    
                    }
                }
            },
    
        };
        // Bar chart configuration Ends
    
        // line chart configuration Starts
        WidgetlineChart: Chart = {
            type: 'Line', data: data['WidgetlineChart'],
            options: {
                axisX: {
                    showGrid: true,
                    showLabel: false,
                    offset: 0,
                },
                axisY: {
                    showGrid: false,
                    low: 40,
                    showLabel: false,
                    offset: 0,
                },
                lineSmooth: Chartist.Interpolation.cardinal({
                    tension: 0
                }),
                fullWidth: true,
            },
        };
        bookings: any;
        tours: any;
        remainingSeatsPlan: any;
        toursByMonth: any;
        users: any;
        totalUsers: any;
        bookingsBySixMonths: any;
        bookingsBySixMonthLength: any;
    completedTours: any;
    notCcompletedTours: any;
    invoices: any;
    totalEarings: number;
    totalTours: any;
    totalBookings: any;
    appUsers: any;
    appReports= [];
    bookingsByWeek: any;
    user: string;
    tickets: any;
    
        // Line chart configuration Ends
    
        constructor(private tourService:TourService,private flightTicketsService :FlightTicketsService,private authService:AuthService, private translate: TranslateService ,private toastr:ToastrService ,private invoiceService: InvoiceService, private bookingService:BookingService, private userService:UserService,) 
        { 
            translate.setDefaultLang('ar');
            this.socket = io('http://localhost:3000');
    }
    
        ngOnInit() {
          this.getTours();
          this.getRemainingSeatsStatus();
          this.getBookings();
          this.getourMonthlyStatus();
          this.getUsers();
          this.getTickets();
          this.getBookingsSixMonthlyStatus();
          this.getBookingsWeeklyStatus();
          this.user = this.authService.getUser();
          console.log("user",this.user);

        }
     
       // Get Tours by month Stats
       getBookingsMonthlyStatus(){
        const year = new Date().getFullYear();
       this.bookingService.bookingMonthlyStatus(year).subscribe(
         res =>{
           let data = res['data'];
           let month = res['month'];
            this.bookingsBySixMonths = data.sixMonthes;
    
           },
           err =>{
           console.log(err);
         }
       )
      }
    
         // Get Tours by month Stats
         getBookingsSixMonthlyStatus(){
            const year = new Date().getFullYear();
           this.bookingService.bookingMonthlyStatus(year).subscribe(
             res =>{
                let data2 = res['data2'];
                this.bookingsBySixMonths = data2.sixMonthesPlan;
                console.log(" this.bookingsBySixMonthLength22" ,  this.bookingsBySixMonths);
                this.generateChartSixMonthes(this.bookingsBySixMonths);
               },
               err =>{
               console.log(err);
             }
           )
          }

        generateChartSixMonthes(bookingsBySixMonths){
       this.Stackbarchart = {
            type: 'Bar',
            data: {
                labels: [
                  'يناير',
                  'فبراير',
                  'مارس',
                  'أبريل',
                  'مايو',
                  'يونيو'
                ],
                series: [
                    bookingsBySixMonths,
                    bookingsBySixMonths
                     
                ]
              },
            options: {
                stackBars: true,
                fullWidth: true,
                axisX: {
                    showGrid: false,
                },
                axisY: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0
                },
                chartPadding: 30
            },
            events: {
                created(data: any): void {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'linear',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(0, 201, 255,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(17,228,183, 1)'
                    });
                },
                draw(data: any): void {
                    if (data.type === 'bar') {
                        data.element.attr({
                            style: 'stroke-width: 5px',
                            x1: data.x1 + 0.001
                        });
    
                    }
                    else if (data.type === 'label') {
                        data.element.attr({
                            y: 270
                        })
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
             this.generateChart(labels ,maxGroupSize ,numOfBooking ,remainingSeats);
             console.log("this.getRemainingSeatsPlan>>" , this.remainingSeatsPlan);
            },
            err =>{
            console.log(err);
          }
        )
       }
    
        // Get Tours by month Stats
     getourMonthlyStatus(){
        const year = new Date().getFullYear();
       this.tourService.tourMonthlyStatus(year).subscribe(
         res =>{
           let data = res['data'];
            this.toursByMonth = data.plan;
            this.generateChart2(this.toursByMonth);
           },
           err =>{
           console.log(err);
         }
       )
     }
    
     generateChart2(chartData){
        this.lineArea2 = {
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
                showArea: false,
                fullWidth: true,
                lineSmooth: Chartist.Interpolation.none(),
                axisX: {
                    showGrid: false,
                },
                axisY: {
                    low: 0,
                    scaleMinSpace: 50,
                }            
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
                created(data: any): void {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'gradient2',
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
                        'stop-color': 'rgba(0, 201, 255, 1)'
                    });
    
                    defs.elem('linearGradient', {
                        id: 'gradient3',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0.3,
                        'stop-opacity': '0.2',
                        'stop-color': 'rgba(255, 255, 255, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-opacity': '0.2',
                        'stop-color': 'rgba(132, 60, 247, 1)'
                    });
                },
                draw(data: any): void {
                    var circleRadius = 4;
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
       }
    
    generateChart(labels ,maxGroupSize ,numOfBooking ,remainingSeats){
        this.lineArea = {
            type: 'Bar', 
            data: {
            labels: labels,
            series: [
                maxGroupSize ,numOfBooking ,remainingSeats
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
    
        
    }
    
        // Get Bookings
        getBookings(){
        this.bookingService.getBookings().subscribe(
            res =>{
            let data = res['data'];
            this.bookings = data.docs.filter(a => a.paymentInfo.orderStatus === "دفع بتحويل بنكي" ||  a.paymentInfo.orderStatus === "تأكيد حجز المبلغ كامل" )
            console.log("boooooo" ,  this.bookings);
            this.totalBookings = data.docs.length;
            var i;
            var total = 0;
            for (i = 0; i < this.bookings.length; i++) {
                total += this.bookings[i].paymentInfo.totalPrice;
                this.totalEarings = total;
            }
               return total;
            },
            err =>{
            console.log(err);
            }
        )
        }
    
        // Get Users
    getUsers(){
        this.userService.getUsers().subscribe(
          res =>{
            let data = res['data'];
            this.appUsers = data.docs.length;
            this.appReports.push( this.appUsers);
            this.users = data.docs.filter(a => a.role === "مرشد سياحي");
            this.totalUsers= this.users.length;

            console.log('users >>>',this.users);
            },
            err =>{
            console.log(err);
          }
        )
      }
    
      //Enable Tour 
    enableTour(tour){
    
        if(tour){
          const tourId = tour.id;
          this.tourService.enableTour(tourId ,tour).subscribe(
            res =>{
              this.toastr.success(' تم تفعيل الرحلة بنجاح');
              this.getTours();
              },
              err =>{
              console.log(err);
            }
          )
        }
       
      }
      
      //DisableTour
      disableTour(tour){
        if(tour){
          const tourId = tour.id;
          this.tourService.disableTour(tourId ,tour).subscribe(
            res =>{
              this.toastr.success(' تم الغاء الرحلة بنجاح');
              this.getTours();
              },
              err =>{
              console.log(err);
            }
          )
        }
      }

                // Get Tours
    getTours(){
        this.tourService.getTours().subscribe(
          res =>{
            let data = res['data'];
            this.tours = data.docs;
            this.totalTours = data.docs.filter(a => a.active === true).length;
            this.completedTours= this.tours.filter(a => a.completed === true).length;
            this.notCcompletedTours=  this.tours.filter(a => a.completed === false).length;
            this.generateDotChart(this.completedTours , this.notCcompletedTours );
            },
            err =>{
            console.log(err);
          }
        )
      } 
    
    generateDotChart(completedTours , notCcompletedTours ){
           // Donut chart configuration Starts
          this.DonutChart= {
            type: 'Pie',
            data :{
            "series": [
                {
                  "name": "done",
                  "className": "ct-done",
                  "value": completedTours
                },
                {
                  "name": "progress",
                  "className": "ct-progress",
                  "value": notCcompletedTours
                },
               
            
              ],
            },
            options: {
                donut: true,
                startAngle: 0,
                labelInterpolationFnc: function (value) {
                    var total = data['donutDashboard'].series.reduce(function (prev, series) {
                        return prev + series.value;
                    }, 0);
                    return total + '%';
                }
            },
            events: {
                draw(data: any): void {
                    if (data.type === 'label') {
                        if (data.index === 0) {
                            data.element.attr({
                                dx: data.element.root().width() / 2,
                                dy: data.element.root().height() / 2
                            });
                        } else {
                            data.element.remove();
                        }
                    }
    
                }
            }
        };
        // Donut chart configuration Ends
    }

// Get Tours by month Stats
getBookingsWeeklyStatus(){
    this.bookingService.bookingWeeklyStatus().subscribe(
      res =>{
        let data = res['data'];
        let week = res['week'];
         this.bookingsByWeek = data.plan;
         this.generateWeeklyReport(this.bookingsByWeek);
        },
        err =>{
        console.log(err);
      }
    )
   }
  

generateWeeklyReport(bookingsByWeek){
   this.lineChart = {
    type: 'Line',
    data: {
        labels: [
          'السبت',
          'الاحد',
          'الأثنين',
          'الثلاثاء',
          'الأربعاء',
          'الخميس',
          'الجمعة'
         
        ],
        series: [
            bookingsByWeek
        ]
      },
    options: {
        axisX: {
            showGrid: false
        },
        axisY: {
            showGrid: false,
            showLabel: false,
            low: 0,
            high: 100,
            offset: 0,
        },
        fullWidth: true,
        offset: 0,
    },
    events: {
        draw(data: any): void {
            var circleRadius = 4;
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
}
getTickets(){
    this.flightTicketsService.getFlightTicketsList().subscribe({
      next: response => {
          this.tickets = response.data.docs.reverse();
      },
      error: err => {
          console.log(err);
      }
  });
}
    
    }
