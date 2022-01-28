import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { TourService } from '../../../../shared/services/tour.service';

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
  selector: 'app-tours-report',
  templateUrl: './tours-report.component.html',
  styleUrls: ['./tours-report.component.scss']
})
export class ToursReportComponent implements OnInit {



    // Line chart configuration Starts
    WidgetlineChart: Chart = {
      type: 'Line', data: data['WidgetlineChart2'],
      options: {
          axisX: {
              showGrid: false,
              showLabel: false,
              offset: 0,
          },
          axisY: {
              showGrid: false,
              low: 50,
              showLabel: false,
              offset: 0,
          },
          fullWidth: true
      },
  };

      // Line chart configuration Starts
      WidgetlineChart1: Chart = {
        type: 'Line', data: data['WidgetlineChart3'],
        options: {
            axisX: {
                showGrid: false,
                showLabel: false,
                offset: 0,
            },
            axisY: {
                showGrid: false,
                low: 50,
                showLabel: false,
                offset: 0,
            },
            fullWidth: true,
            chartPadding: { top: 0, right: 0, bottom: 10, left: 0 }
        },
        events: {
            created(data: any): void {

                var defs = data.svg.elem('defs');
                defs.elem('linearGradient', {
                    id: 'widgradient',
                    x1: 0,
                    y1: 1,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(132, 60, 247, 1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(56, 184, 242, 1)'
                });

            },

        },
    };
    // Line chart configuration Ends

    // Line chart configuration Starts
    WidgetlineChart2: Chart = {
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
            fullWidth: true
        },
        events: {
            created(data: any): void {

                var defs = data.svg.elem('defs');
                defs.elem('linearGradient', {
                    id: 'widgradient1',
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

        },
    };
    // Line chart configuration Ends


    // Donut chart configuration Ends

    // Donut chart configuration Starts
    DonutChart2: Chart = {
        type: 'Pie',
        data: data['DashboardDonut'],
        options: {
            donut: true,
            donutWidth: 3,
            startAngle: 90,
            chartPadding: 25,
            labelInterpolationFnc: function (value) {
                return '\ue9e7';
            }
        },
        events: {
            draw(data: any): void {
                if (data.type === 'label') {
                    if (data.index === 0) {
                        data.element.attr({
                            dx: data.element.root().width() / 2,
                            dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
                            class: 'ct-label',
                            'font-family': 'feather'
                        });
                    } else {
                        data.element.remove();
                    }
                }
            }
        }
    };
    // Donut chart configuration Ends

    // Donut chart configuration Starts
    DonutChart3: Chart = {
        type: 'Pie',
        data: data['DashboardDonut'],
        options: {
            donut: true,
            donutWidth: 3,
            startAngle: 270,
            chartPadding: 25,
            labelInterpolationFnc: function (value) {
                return '\ue964';
            }
        },
        events: {
            draw(data: any): void {
                if (data.type === 'label') {
                    if (data.index === 0) {
                        data.element.attr({
                            dx: data.element.root().width() / 2,
                            dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
                            class: 'ct-label',
                            'font-family': 'feather'
                        });
                    } else {
                        data.element.remove();
                    }
                }
            }
        }
    };

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
      // Line chart configuration Ends




  toursType=[];
  toursByMonth = [];
  toursByWeek = [];
  completedTours = [];
  lineChartData = [];
  monthsTourResult :any;
  monthsResult: any;
  lineChart1: { type: string; data: { labels: any[]; series: any[]; }; options: { axisX: { showGrid: boolean; }; axisY: { low: number; scaleMinSpace: number; }; fullWidth: boolean; }; events: { draw(data: any): void; }; };
  tours: any;
  totalTours: any;
  innerTours: any;
  outerTours: any;
  cancelledTours: any;
  latest3Tours: any;
  toursDiffcultyStats: any;

  constructor(   
    private tourService:TourService,
    private fb: FormBuilder,
    private toastr:ToastrService) { }

  ngOnInit() {
  this.getourMonthlyStatus();
  this.getToursTypeStats();
  this.getourWeeklyStatus();
  this.tourCompletedStatus();
  this.getToursDiffcultyStats();
  this.getTours();

}




// Get Tours
getTours(){
  this.tourService.getTours().subscribe(
    res =>{
      let data = res['data'];
      this.tours = data.docs.filter(a=> a.active === true);
      this.completedTours = data.docs.filter(a=> a.completed === true).length;
      this.innerTours = data.docs.filter(a=> a.type === "داخلي").length;
      this.outerTours = data.docs.filter(a=> a.type === "دولي").length;
      this.cancelledTours = data.docs.filter(a=> a.active === false).length;
      this.latest3Tours = this.tours.slice(Math.max(this.tours.length - 3, 0));
      console.log('latest3Tours >>>',this.latest3Tours);
       this.totalTours = this.tours.length;
      console.log('tours >>>',data.docs);
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
       this.generateChart(this.toursByMonth);
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

 // Get Tours by week Stats
 getourWeeklyStatus(){
  const year = new Date().getFullYear();
 this.tourService.tourWeeklyStatus(year).subscribe(
   res =>{
     let data = res['data'];
     this.toursByWeek = data.plan
     // this.totalTours = this.tours.length;
     console.log(' this.toursByWeek >>>',  this.toursByWeek );
     },
     err =>{
     console.log(err);
   }
 )
}

 // Get Completed Tours 
 tourCompletedStatus(){
  const year = new Date().getFullYear();
 this.tourService.tourCompletedStatus().subscribe(
   res =>{
     let data = res['data'];
     this.completedTours= data.plan;
     console.log(' this.completedTours >>>',  this.completedTours );
     },
     err =>{
     console.log(err);
   }
 )
}

 // Get Tours Types Stats
 getToursTypeStats(){
  this.tourService.tourTypeStatus().subscribe(
    res =>{
      let data = res['data'];
      this.toursType = data.stats;
      const tourNumber = data.stats.map(a => a.numTours);
      console.log('tourNumber >>>',tourNumber );
      const avgPrice = data.stats.map(a => a.avgPrice);
      const minPrice = data.stats.map(a => a.minPrice);
      const maxPrice = data.stats.map(a => a.maxPrice);
      this.generateChart2( avgPrice , minPrice ,maxPrice);
      // this.totalTours = this.tours.length;
      console.log('toursTypes >>>', this.toursType );
      },
      err =>{
      console.log(err);
    }
  )
}



generateChart2( avgPrice:any , minPrice:any , maxPrice:any){
  this.lineChart2 = {
      type: 'Bar', 
      data: {
      labels: [
        'رحلات داخلية',
        'رحلات خارجية',

      ],
      series: [
        avgPrice,
        minPrice,
        maxPrice
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

 // Get Tours groupSize duration Stats
 getToursDiffcultyStats(){
  this.tourService.tourDiffcultyStatus().subscribe(
    res =>{
      let data = res['data'];
      this.toursDiffcultyStats= data.plan;
      const chartLabels = this.toursDiffcultyStats.map(a => a._id);
      const chartSeries = this.toursDiffcultyStats.map(a => a.numTours);
      const tourGroupSize = this.toursDiffcultyStats.map(a => a.tourGroupSize);
      const tourDuration = this.toursDiffcultyStats.map(a => a.tourDuration);
      this.generateDiffcultyChart(chartLabels ,chartSeries ,tourGroupSize ,tourDuration);
      console.log('toursDiffcultyStats >>>', this.toursDiffcultyStats );
      },
      err =>{
      console.log(err);
    }
  )
}


generateDiffcultyChart(chartLabels,chartSeries , tourGroupSize ,tourDuration){
  this.lineAreaChart= {
    type: 'Line',
    data: {
      labels:chartLabels ,
      series:[ tourGroupSize ,tourDuration],
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



}
