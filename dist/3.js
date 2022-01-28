(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard1/dashboard1.component */ "./src/app/dashboard/dashboard1/dashboard1.component.ts");
/* harmony import */ var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard2/dashboard2.component */ "./src/app/dashboard/dashboard2/dashboard2.component.ts");





var routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard1',
                component: _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_3__["Dashboard1Component"],
                data: {
                    title: 'Dashboard 1'
                }
            },
            {
                path: 'dashboard2',
                component: _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_4__["Dashboard2Component"],
                data: {
                    title: 'Dashboard 2'
                }
            },
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/dist/ng-chartist.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_chartist__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/directives/match-height.directive */ "./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard1/dashboard1.component */ "./src/app/dashboard/dashboard1/dashboard1.component.ts");
/* harmony import */ var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard2/dashboard2.component */ "./src/app/dashboard/dashboard2/dashboard2.component.ts");









var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
                ng_chartist__WEBPACK_IMPORTED_MODULE_4__["ChartistModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_6__["MatchHeightModule"]
            ],
            exports: [],
            declarations: [
                _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_7__["Dashboard1Component"],
                _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_8__["Dashboard2Component"]
            ],
            providers: [],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard1/dashboard1.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/dashboard1/dashboard1.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--Statistics cards Starts-->\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n\t\t<div class=\"card gradient-blackberry\">\r\n\t\t\t<div class=\"card-content\">\r\n\t\t\t\t<div class=\"card-body pt-2 pb-0\">\r\n\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t<div class=\"media-body white text-left\">\r\n\t\t\t\t\t\t\t<h3 class=\"font-large-1 mb-0\">ريال {{totalEarings}}</h3>\r\n\t\t\t\t\t\t\t<p class=\"box-title\">المدخلات</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"media-right white text-right\">\r\n\t\t\t\t\t\t\t<i class=\"icon-wallet font-large-1\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"Widget-line-chart\" class=\"height-75 WidgetlineChart WidgetlineChartshadow mb-2\">\r\n\t\t\t\t\t<x-chartist class=\"\" [data]=\"WidgetlineChart.data\" [type]=\"WidgetlineChart.type\" [options]=\"WidgetlineChart.options\" [responsiveOptions]=\"WidgetlineChart.responsiveOptions\"\r\n\t\t\t\t\t [events]=\"WidgetlineChart.events\">\r\n\t\t\t\t\t</x-chartist>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n\t\t<div class=\"card gradient-ibiza-sunset\">\r\n\t\t\t<div class=\"card-content\">\r\n\t\t\t\t<div class=\"card-body pt-2 pb-0\">\r\n\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t<div class=\"media-body white text-left\">\r\n\t\t\t\t\t\t\t<h3 class=\"font-large-1 mb-0\">{{totalBookings}}</h3>\r\n\t\t\t\t\t\t\t<p class=\"box-title\">عدد الحجوزات</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"media-right white text-right\">\r\n\t\t\t\t\t\t\t<i class=\"icon-calendar font-large-1\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"Widget-line-chart\" class=\"height-75 WidgetlineChart WidgetlineChartshadow mb-2\">\r\n\t\t\t\t\t<x-chartist class=\"\" [data]=\"WidgetlineChart.data\" [type]=\"WidgetlineChart.type\" [options]=\"WidgetlineChart.options\" [responsiveOptions]=\"WidgetlineChart.responsiveOptions\"\r\n\t\t\t\t\t [events]=\"WidgetlineChart.events\">\r\n\t\t\t\t\t</x-chartist>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n\t<div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n\t\t<div class=\"card gradient-green-tea\">\r\n\t\t\t<div class=\"card-content\">\r\n\t\t\t\t<div class=\"card-body pt-2 pb-0\">\r\n\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t<div class=\"media-body white text-left\">\r\n\t\t\t\t\t\t\t<h3 class=\"font-large-1 mb-0\">{{totalTours}}</h3>\r\n\t\t\t\t\t\t\t<p class=\"box-title\">عدد الرحلات</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"media-right white text-right\">\r\n\t\t\t\t\t\t\t<i class=\"icon-plane font-large-1\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"Widget-line-chart\" class=\"height-75 WidgetlineChart WidgetlineChartshadow mb-2\">\r\n\t\t\t\t\t<x-chartist class=\"\" [data]=\"WidgetlineChart.data\" [type]=\"WidgetlineChart.type\" [options]=\"WidgetlineChart.options\" [responsiveOptions]=\"WidgetlineChart.responsiveOptions\"\r\n\t\t\t\t\t [events]=\"WidgetlineChart.events\">\r\n\t\t\t\t\t</x-chartist>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n\t\t<div class=\"card gradient-pomegranate\">\r\n\t\t\t<div class=\"card-content\">\r\n\t\t\t\t<div class=\"card-body pt-2 pb-0\">\r\n\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t<div class=\"media-body white text-left\">\r\n\t\t\t\t\t\t\t<h3 class=\"font-large-1 mb-0\">{{appUsers}}</h3>\r\n\t\t\t\t\t\t\t<p class=\"box-title\">عدد الموظفين</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"media-right white text-right\">\r\n\t\t\t\t\t\t\t<i class=\"icon-users font-large-1\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"Widget-line-chart\" class=\"height-75 WidgetlineChart WidgetlineChartshadow mb-2\">\r\n\t\t\t\t\t<x-chartist class=\"\" [data]=\"WidgetlineChart.data\" [type]=\"WidgetlineChart.type\" [options]=\"WidgetlineChart.options\" [responsiveOptions]=\"WidgetlineChart.responsiveOptions\"\r\n\t\t\t\t\t [events]=\"WidgetlineChart.events\">\r\n\t\t\t\t\t</x-chartist>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!--Statistics cards Ends-->\r\n\r\n<!--Line with Area Chart 1 Starts-->\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header\">\r\n\t\t\t\t<h4 class=\"card-title\">احصائيات الرحلات مع عدد المقاعد المتاحة والحجوزات</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card-content\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"chart-info mb-3 ml-3\">\r\n\t\t\t\t\t\t<span class=\"btn-primary d-inline-block rounded-circle mr-1\" style=\"width:15px; height:15px;\"></span> عدد المقاعد الكلية\r\n\t\t\t\t\t\t<span class=\"btn-warning d-inline-block rounded-circle mr-1 ml-2\" style=\"width:15px; height:15px;\"></span> عدد المقاعد المحجوزة\r\n\t\t\t\t\t\t<span class=\"btn-danger d-inline-block rounded-circle mr-1 ml-2\" style=\"width:15px; height:15px;\"></span> عدد المقاعد المتبقية\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"line-area\" class=\"height-350 lineArea\">\r\n\t\t\t\t\t\t<x-chartist [data]=\"lineArea.data\" [type]=\"lineArea.type\" [options]=\"lineArea.options\" [events]=\"lineArea.events\">\r\n\t\t\t\t\t\t</x-chartist>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!--Line with Area Chart 1 Ends-->\r\n\r\n<div class=\"row\" matchHeight =\"card\">\r\n\t<div class=\"col-xl-4 col-lg-12 col-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header\">\r\n\t\t\t\t<h4 class=\"card-title\">التقارير</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card-content\">\r\n\r\n\t\t\t\t<p class=\"font-medium-2 text-muted text-center pb-2\">الحجوزات اخر 6 أشهر</p>\r\n\t\t\t\t<div id=\"Stack-bar-chart\" class=\"height-300 Stackbarchart mb-2\">\r\n\t\t\t\t\t<x-chartist class=\"\" [data]=\"Stackbarchart.data\" [type]=\"Stackbarchart.type\" [options]=\"Stackbarchart.options\"\r\n\t\t\t\t\t [responsiveOptions]=\"Stackbarchart.responsiveOptions\" [events]=\"Stackbarchart.events\">\r\n\t\t\t\t\t</x-chartist>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-xl-8 col-lg-12 col-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header\">\r\n\t\t\t\t<h4 class=\"card-title\">البرامج السياحية</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card-content tours-list\">\r\n\t\t\t\t<table class=\"table table-responsive-sm text-center\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>الصورة</th>\r\n\t\t\t\t\t\t\t<th>اسم الرحلة</th>\r\n\t\t\t\t\t\t\t<th>عدد الحجوزات</th>\r\n\t\t\t\t\t\t\t<th>التفعيل</th>\r\n\t\t\t\t\t\t\t<th>السعر</th>\r\n\t\t\t\t\t\t\t<th>تاريخ الرحلة</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody *ngFor=\"let tour of tours\">\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td><img class=\"media-object round-media height-50\" src=\"https://res.cloudinary.com/reg1rego3/image/upload/v{{tour?.imageCover.imgVersion}}/{{tour?.imageCover.imageId}}.png\" alt=\"Generic placeholder image\" /></td>\r\n\t\t\t\t\t\t\t<td>{{tour.name}}</td>\r\n\t\t\t\t\t\t\t<td>{{tour?.bookings.length}}</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<label class=\"switch\" *ngIf=\"tour?.active === false\" >\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" />\r\n\t\t\t\t\t\t\t\t\t<span class=\"slider round\"  (click)=\"enableTour(tour)\"></span>\r\n\t\t\t\t\t\t\t\t  </label>\r\n\t\t\t\t\t\t\t\t  <label class=\"switch\"  *ngIf=\"tour?.active === true\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked >\r\n\t\t\t\t\t\t\t\t\t<span class=\"slider round\"  (click)=\"disableTour(tour)\"></span>\r\n\t\t\t\t\t\t\t\t  </label>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>{{tour.price}} ريال</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t{{tour?.createdAt | date}}\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"row\" matchHeight =\"card\">\r\n\t<div class=\"col-xl-8 col-lg-12 col-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header\">\r\n\t\t\t\t<h4 class=\"card-title mb-0\">احصائيات الرحلات  كل شهر خلال السنه</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card-content\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"chart-info mb-2\">\r\n\t\t\t\t\t\t<span class=\"text-uppercase mr-3\"><i class=\"fa fa-circle primary font-small-2 mr-1\"></i> عدد الرحلات</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"line-area2\" class=\"height-400 lineArea2\">\r\n\t\t\t\t\t\t<x-chartist class=\"\" [data]=\"lineArea2.data\" [type]=\"lineArea2.type\" [options]=\"lineArea2.options\"\r\n\t\t\t\t\t\t [responsiveOptions]=\"lineArea2.responsiveOptions\" [events]=\"lineArea2.events\">\r\n\r\n\t\t\t\t\t\t</x-chartist>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-xl-4 col-lg-12 col-12\">\r\n\t\t<div class=\"card gradient-blackberry\">\r\n\t\t\t<div class=\"card-content\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<h4 class=\"card-title white\">الإحصائيات</h4>\r\n\t\t\t\t\t<div class=\"p-2 text-center\">\r\n\t\t\t\t\t\t<!-- <a class=\"white font-medium-1\"></a> -->\r\n\t\t\t\t\t\t<a class=\"btn btn-raised btn-round bg-white mx-3 px-3\">إحصائيات اخر اسبوع</a>\r\n\t\t\t\t\t\t<!-- <a class=\"white font-medium-1\">Day</a> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"my-3 text-center white\">\r\n\t\t\t\t\t\t<a class=\"font-large-2 d-block mb-1\">ريال {{totalEarings}} <span class=\"ft-arrow-up font-large-2\"></span></a>\r\n\t\t\t\t\t\t<!-- <span class=\"font-medium-1\">Week2   +15.44</span> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"lineChart\" class=\"height-250 lineChart lineChartShadow\">\r\n\t\t\t\t\t<x-chartist class=\"\" [data]=\"lineChart.data\" [type]=\"lineChart.type\" [options]=\"lineChart.options\"\r\n\t\t\t\t\t [responsiveOptions]=\"lineChart.responsiveOptions\" [events]=\"lineChart.events\">\r\n\t\t\t\t\t</x-chartist>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"row\" matchHeight =\"card\">\r\n\t<div class=\"col-xl-4 col-lg-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header\">\r\n\t\t\t\t<h4 class=\"card-title\">حجوزات الرحلات</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card-content users-list\">\r\n\t\t\t\t<ul class=\"list-group\" *ngFor=\"let tour of tours\">\r\n\t\t\t\t\t<li class=\"list-group-item text-left\">\r\n\t\t\t\t\t  <span class=\"badge bg-primary float-right text-white\">{{tour?.bookings.length}}</span> {{tour?.name}}\r\n\t\t\t\t\t</li>\r\n\t\t\t\t  </ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-xl-4 col-lg-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header\">\r\n\t\t\t\t<h4 class=\"card-title mb-0\">قائمة المرشدين السياحين</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card-content users-list\">\r\n\t\t\t\t<div class=\"card-body\" *ngFor=\"let user of users\">\r\n\t\t\t\t\t<div class=\"media mb-1\">\r\n\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t<h4 class=\"font-medium-2 mt-1 mb-0\">{{user.name}}</h4>\r\n\t\t\t\t\t\t\t<p class=\"text-muted font-small-3\">{{user.role}}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"mt-1\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"user.active === true\" class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" checked id=\"customcheckbox1\">\r\n\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customcheckbox1\"></label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div  *ngIf=\"user.active === false\" class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\"  id=\"customcheckbox1\">\r\n\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customcheckbox1\"></label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"action-buttons mt-2 text-center\">\r\n\t\t\t\t\t<a href=\"/full-layout/full-pages/guides\" class=\"btn btn-raised gradient-blackberry py-2 px-4 white mr-2\">أضف مرشد سياحي </a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-xl-4 col-lg-12 list\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header\">\r\n\t\t\t\t<h4 class=\"card-title\">الرحلات</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card-content\">\r\n\r\n\t\t\t\t<p class=\"font-medium-2 text-muted text-center\">احصائيات اكتمال الحجوزات للرحلات</p>\r\n\t\t\t\t<div id=\"donut-dashboard-chart\" class=\"height-250 donut\">\r\n\t\t\t\t\t<x-chartist class=\"\" [data]=\"DonutChart.data\" [type]=\"DonutChart.type\" [options]=\"DonutChart.options\" [responsiveOptions]=\"DonutChart.responsiveOptions\"\r\n\t\t\t\t\t [events]=\"DonutChart.events\">\r\n\t\t\t\t\t</x-chartist>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\r\n\t\t\t\t\t<div class=\"row mb-2\">\r\n\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t<span class=\"mb-1 text-muted d-block\">{{notCcompletedTours}} - الرحلات الغير مكتملة</span>\r\n\t\t\t\t\t\t\t<div class=\"progress\" style=\"height: 5px;\">\r\n\t\t\t\t\t\t\t\t<div class=\"progress-bar  bg-yellow\" role=\"progressbar\" style=\"width: 35%;\" aria-valuenow=\"35\" aria-valuemin=\"0\"\r\n\t\t\t\t\t\t\t\t aria-valuemax=\"100\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t<span class=\"mb-1 text-muted d-block\">{{completedTours}} - عدد الرحلات المكتملة</span>\r\n\t\t\t\t\t\t\t<div class=\"progress\" style=\"height: 5px;\">\r\n\t\t\t\t\t\t\t\t<div class=\"progress-bar bg-green\" role=\"progressbar\" style=\"width: 28%;\" aria-valuenow=\"28\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard1/dashboard1.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/dashboard1/dashboard1.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .lineArea .ct-series-a .ct-area {\n  fill-opacity: 0.7;\n  fill: url(\"/dashboard/dashboard1#gradient1\") !important; }\n\n:host /deep/ .lineArea .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient\") !important;\n  fill-opacity: 0.9; }\n\n:host /deep/ .lineArea .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .lineArea .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .Stackbarchart .ct-series-a .ct-bar {\n  stroke: url(\"/dashboard/dashboard1#linear\") !important; }\n\n:host /deep/ .Stackbarchart .ct-series-b .ct-bar {\n  stroke: #e9e9e9; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient2\") !important; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient3\") !important; }\n\n:host /deep/ .lineArea2 .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-point-circle {\n  stroke: #843cf7; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-line {\n  stroke: #A675F4; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-point-circle {\n  stroke: #31afb2; }\n\n:host /deep/ .lineArea2 .ct-line {\n  fill: none;\n  stroke-width: 2px; }\n\n:host /deep/ .lineChart .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineChart .ct-series-a .ct-point-circle {\n  stroke: white; }\n\n:host /deep/ .lineChart .ct-line {\n  fill: none;\n  stroke: white;\n  stroke-width: 1px; }\n\n:host /deep/ .lineChart .ct-label {\n  color: #FFF; }\n\n:host /deep/ .lineChartShadow {\n  filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .donut .ct-done .ct-slice-donut {\n  stroke: #0CC27E;\n  stroke-width: 24px !important; }\n\n:host /deep/ .donut .ct-progress .ct-slice-donut {\n  stroke: #FFC107;\n  stroke-width: 16px !important; }\n\n:host /deep/ .donut .ct-outstanding .ct-slice-donut {\n  stroke: #7E57C2;\n  stroke-width: 8px !important; }\n\n:host /deep/ .donut .ct-started .ct-slice-donut {\n  stroke: #2196F3;\n  stroke-width: 32px !important; }\n\n:host /deep/ .donut .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 20px;\n  fill: #868e96; }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+1) {\n  stroke: url(\"/dashboard/dashboard1#gradient7\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+2) {\n  stroke: url(\"/dashboard/dashboard1#gradient5\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+3) {\n  stroke: url(\"/dashboard/dashboard1#gradient6\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+4) {\n  stroke: url(\"/dashboard/dashboard1#gradient4\"); }\n\n:host /deep/ .BarChartShadow {\n  filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .WidgetlineChart .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart .ct-line {\n  stroke: #fff; }\n\n:host /deep/ .WidgetlineChart .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(255, 255, 255, 0.2); }\n\n:host /deep/ .WidgetlineChartshadow {\n  filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n.list {\n  height: 300px; }\n\n.users-list {\n  overflow-y: scroll;\n  height: 300px; }\n\n.tours-list {\n  overflow-y: scroll;\n  height: 360px; }\n\n.box-title {\n  letter-spacing: 0.3px;\n  padding-top: 20px;\n  font-size: 20px; }\n\n.mb-1 {\n  margin-bottom: -3rem !important; }\n\n/* The switch - the box around the slider */\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px; }\n\n/* Hide default HTML checkbox */\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0; }\n\n/* The slider */\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s; }\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s; }\n\ninput:checked + .slider {\n  background-color: #2196F3; }\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3; }\n\ninput:checked + .slider:before {\n  transform: translateX(26px); }\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px; }\n\n.slider.round:before {\n  border-radius: 50%; }\n\n.ui-table .ui-table-tbody > tr > td {\n  background-color: inherit;\n  font-size: medium;\n  border: 1px solid #c8c8c8; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZDEvQzpcXFVzZXJzXFxwb3N0Z3Jlc1xcRGVza3RvcFxcbGFzdFxcdHJhdmVsRmluYWxhcHBcXHRvdXJGcm9udGVuZC9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQxXFxkYXNoYm9hcmQxLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkMS9kYXNoYm9hcmQxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kscUJBQXFCO0VBQ3JCLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLGlCQUFpQixFQUFBOztBQUtyQjtFQUNJLGlCQUFpQjtFQUNqQix1REFBNEQsRUFBQTs7QUFHaEU7RUFDSSxzREFBNEQ7RUFDNUQsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBT3JCO0VBR1ksc0RBQTRELEVBQUE7O0FBSHhFO0VBUVksZUFBZSxFQUFBOztBQVMzQjtFQUNJLHVEQUE2RCxFQUFBOztBQUdqRTtFQUNJLHVEQUE2RCxFQUFBOztBQUdqRTtFQUNJLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxVQUFVO0VBQ1YsaUJBQWlCLEVBQUE7O0FBT3JCO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUVZLG9EQUFtRDtFQUFFO2dGQ3BDZSxFRHFDQzs7QUFNL0U7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCLEVBQUE7O0FBRS9CO0VBQ0UsZUFBZTtFQUNmLDZCQUE2QixFQUFBOztBQUUvQjtFQUNFLGVBQWU7RUFDZiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsYUFBYSxFQUFBOztBQU9mO0VBQ0UsOENBQW9ELEVBQUE7O0FBRXREO0VBQ0UsOENBQW9ELEVBQUE7O0FBRXREO0VBQ0UsOENBQW9ELEVBQUE7O0FBRXREO0VBQ0UsOENBQW9ELEVBQUE7O0FBR3REO0VBRVUsb0RBQW1EO0VBQUU7Z0ZDL0NlLEVEZ0RDOztBQU9qRjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLFlBQVksRUFBQTs7QUFJaEI7RUFDSSxxQkFBcUI7RUFDcEIsZ0NBQWdDLEVBQUE7O0FBR3JDO0VBRVksb0RBQW1EO0VBQUU7Z0ZDdERlLEVEdURDOztBQUlqRjtFQUNJLGFBQVksRUFBQTs7QUFFaEI7RUFDSSxrQkFBa0I7RUFDbEIsYUFDSixFQUFBOztBQUNBO0VBQ0ksa0JBQWtCO0VBQ2xCLGFBQ0osRUFBQTs7QUFDQTtFQUNJLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLCtCQUErQixFQUFBOztBQUVqQywyQ0FBQTs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZCwrQkFBQTs7QUFDQTtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUyxFQUFBOztBQUdYLGVBQUE7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxzQkFBc0I7RUFFdEIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtFQUV2QixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsMkJBQTJCLEVBQUE7O0FBRzdCO0VBR0UsMkJBQTJCLEVBQUE7O0FBRzdCLG9CQUFBOztBQUNBO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQix5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQxL2Rhc2hib2FyZDEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3Mvc2Nzcy9ncmFkaWVudC12YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0IC9kZWVwLyAuY3QtZ3JpZHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDtcclxuICAgIHN0cm9rZTogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmN0LWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcclxuICAgIGZpbGwtb3BhY2l0eTogMC43O1xyXG4gICAgZmlsbDp1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1zZXJpZXMtYiAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQpICFpbXBvcnRhbnQ7XHJcbiAgICBmaWxsLW9wYWNpdHk6IDAuOTtcclxufVxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1saW5le1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYSAuY3QtcG9pbnQge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XHJcbn1cclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IDEgQ1NTIEVuZHNcclxuXHJcbi8vIFN0YWNrIEJhciBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLlN0YWNrYmFyY2hhcnR7XHJcbiAgICAuY3Qtc2VyaWVzLWEge1xyXG4gICAgICAgIC5jdC1iYXJ7XHJcbiAgICAgICAgICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2xpbmVhcikgIWltcG9ydGFudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jdC1zZXJpZXMtYiB7XHJcbiAgICAgICAgLmN0LWJhcntcclxuICAgICAgICAgICAgc3Ryb2tlOiAjZTllOWU5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gU3RhY2sgQmFyIENoYXJ0IENTUyBFbmRzXHJcblxyXG4vLyBMaW5lIHdpdGggQXJlYSBDaGFydCAyIENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQyKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWIgLmN0LWFyZWEge1xyXG4gICAgZmlsbDogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50MykgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWIgLmN0LXBvaW50LWNpcmNsZXtcclxuICAgIHN0cm9rZTogIzg0M2NmNztcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1iIC5jdC1saW5le1xyXG4gICAgc3Ryb2tlOiAjQTY3NUY0O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2U6ICMzMWFmYjI7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1saW5lIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxufVxyXG5cclxuLy8gTGluZSB3aXRoIEFyZWEgQ2hhcnQgMiBDU1MgRW5kc1xyXG5cclxuLy8gTGluZSBDaGFydCBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG4gICAgZmlsbDogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZTogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1saW5lIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2U6IHdoaXRlO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1sYWJlbCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnRTaGFkb3cge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjVweCA4cHggcmdiYSgwLDAsMCwwLjMpICk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyNXB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTsgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cclxufVxyXG5cclxuLy8gTGluZSBDaGFydCAgQ1NTIEVuZHNcclxuIFxyXG4gIC8vIERvbnV0IENoYXJ0ICBDU1MgRW5kc1xyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LWRvbmUgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogIzBDQzI3RTtcclxuICAgIHN0cm9rZS13aWR0aDogMjRweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1wcm9ncmVzcyAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiAjRkZDMTA3O1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LW91dHN0YW5kaW5nIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICM3RTU3QzI7XHJcbiAgICBzdHJva2Utd2lkdGg6IDhweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1zdGFydGVkIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICMyMTk2RjM7XHJcbiAgICBzdHJva2Utd2lkdGg6IDMycHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LWxhYmVsIHtcclxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XHJcbiAgICBhbGlnbm1lbnQtYmFzZWxpbmU6IG1pZGRsZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZpbGw6ICM4NjhlOTY7XHJcbiAgfVxyXG5cclxuICAvLyBEb251dCBDaGFydCAgQ1NTIEVuZHNcclxuXHJcbiAgLy8gQmFyIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0bisxKSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDcpO1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDRuKzIpIHtcclxuICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50NSk7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rMykge1xyXG4gICAgc3Ryb2tlOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ2KTtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0bis0KSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDQpO1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydFNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyMHB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTtcclxuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDIwcHggOHB4IHJnYmEoMCwwLDAsMC4zKSApOyAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcblxyXG4vLyBCYXIgQ2hhcnQgQ1NTIEVuZHNcclxuXHJcbi8vIFdpZGdldCBsaW5lIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1wb2ludCB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDBweDtcclxufVxyXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydCAuY3QtbGluZXtcclxuICAgIHN0cm9rZTogI2ZmZjtcclxufVxyXG5cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1ncmlkIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDsgICAgXHJcbiAgICAgc3Ryb2tlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0c2hhZG93IHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDE1cHggNXB4IHJnYmEoMCwwLDAsMC44KSApO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMTVweCA1cHggcmdiYSgwLDAsMCwwLjgpICk7IC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXHJcbn1cclxuXHJcbi8vIFdpZGdldCBsaW5lIENoYXJ0IENTUyBFbmRzXHJcbi5saXN0e1xyXG4gICAgaGVpZ2h0OjMwMHB4O1xyXG59XHJcbi51c2Vycy1saXN0e1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgaGVpZ2h0OjMwMHB4XHJcbn1cclxuLnRvdXJzLWxpc3R7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBoZWlnaHQ6MzYwcHhcclxufVxyXG4uYm94LXRpdGxle1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLm1iLTF7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtM3JlbSAhaW1wb3J0YW50O1xyXG59XHJcbiAgLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cclxuICAuc3dpdGNoIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xyXG4gIC5zd2l0Y2ggaW5wdXQge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAvKiBUaGUgc2xpZGVyICovXHJcbiAgLnNsaWRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICB3aWR0aDogMjZweDtcclxuICAgIGxlZnQ6IDRweDtcclxuICAgIGJvdHRvbTogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICB9XHJcbiAgXHJcbiAgLyogUm91bmRlZCBzbGlkZXJzICovXHJcbiAgLnNsaWRlci5yb3VuZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIC51aS10YWJsZSAudWktdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7XHJcbn1cclxuIiwiOmhvc3QgL2RlZXAvIC5jdC1ncmlkIHtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMHB4O1xuICBzdHJva2U6IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuXG46aG9zdCAvZGVlcC8gLmN0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjlyZW07IH1cblxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYSAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xuICBmaWxsLW9wYWNpdHk6IDAuNztcbiAgZmlsbDogdXJsKFwiL2Rhc2hib2FyZC9kYXNoYm9hcmQxI2dyYWRpZW50MVwiKSAhaW1wb3J0YW50OyB9XG5cbjpob3N0IC9kZWVwLyAubGluZUFyZWEgLmN0LXNlcmllcy1iIC5jdC1hcmVhIHtcbiAgZmlsbDogdXJsKFwiL2Rhc2hib2FyZC9kYXNoYm9hcmQxI2dyYWRpZW50XCIpICFpbXBvcnRhbnQ7XG4gIGZpbGwtb3BhY2l0eTogMC45OyB9XG5cbjpob3N0IC9kZWVwLyAubGluZUFyZWEgLmN0LWxpbmUge1xuICBzdHJva2Utd2lkdGg6IDBweDsgfVxuXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1wb2ludCB7XG4gIHN0cm9rZS13aWR0aDogMHB4OyB9XG5cbjpob3N0IC9kZWVwLyAuU3RhY2tiYXJjaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhciB7XG4gIHN0cm9rZTogdXJsKFwiL2Rhc2hib2FyZC9kYXNoYm9hcmQxI2xpbmVhclwiKSAhaW1wb3J0YW50OyB9XG5cbjpob3N0IC9kZWVwLyAuU3RhY2tiYXJjaGFydCAuY3Qtc2VyaWVzLWIgLmN0LWJhciB7XG4gIHN0cm9rZTogI2U5ZTllOTsgfVxuXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xuICBmaWxsOiB1cmwoXCIvZGFzaGJvYXJkL2Rhc2hib2FyZDEjZ3JhZGllbnQyXCIpICFpbXBvcnRhbnQ7IH1cblxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1iIC5jdC1hcmVhIHtcbiAgZmlsbDogdXJsKFwiL2Rhc2hib2FyZC9kYXNoYm9hcmQxI2dyYWRpZW50M1wiKSAhaW1wb3J0YW50OyB9XG5cbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1wb2ludC1jaXJjbGUge1xuICBzdHJva2Utd2lkdGg6IDJweDtcbiAgZmlsbDogd2hpdGU7IH1cblxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1iIC5jdC1wb2ludC1jaXJjbGUge1xuICBzdHJva2U6ICM4NDNjZjc7IH1cblxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1iIC5jdC1saW5lIHtcbiAgc3Ryb2tlOiAjQTY3NUY0OyB9XG5cbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlIHtcbiAgc3Ryb2tlOiAjMzFhZmIyOyB9XG5cbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1saW5lIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlLXdpZHRoOiAycHg7IH1cblxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQgLmN0LXBvaW50LWNpcmNsZSB7XG4gIHN0cm9rZS13aWR0aDogMnB4O1xuICBmaWxsOiB3aGl0ZTsgfVxuXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XG4gIHN0cm9rZTogd2hpdGU7IH1cblxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQgLmN0LWxpbmUge1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6IHdoaXRlO1xuICBzdHJva2Utd2lkdGg6IDFweDsgfVxuXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydCAuY3QtbGFiZWwge1xuICBjb2xvcjogI0ZGRjsgfVxuXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydFNoYWRvdyB7XG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMjVweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpKTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMjVweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpKTtcbiAgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi8gfVxuXG46aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1kb25lIC5jdC1zbGljZS1kb251dCB7XG4gIHN0cm9rZTogIzBDQzI3RTtcbiAgc3Ryb2tlLXdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7IH1cblxuOmhvc3QgL2RlZXAvIC5kb251dCAuY3QtcHJvZ3Jlc3MgLmN0LXNsaWNlLWRvbnV0IHtcbiAgc3Ryb2tlOiAjRkZDMTA3O1xuICBzdHJva2Utd2lkdGg6IDE2cHggIWltcG9ydGFudDsgfVxuXG46aG9zdCAvZGVlcC8gLmRvbnV0IC5jdC1vdXRzdGFuZGluZyAuY3Qtc2xpY2UtZG9udXQge1xuICBzdHJva2U6ICM3RTU3QzI7XG4gIHN0cm9rZS13aWR0aDogOHB4ICFpbXBvcnRhbnQ7IH1cblxuOmhvc3QgL2RlZXAvIC5kb251dCAuY3Qtc3RhcnRlZCAuY3Qtc2xpY2UtZG9udXQge1xuICBzdHJva2U6ICMyMTk2RjM7XG4gIHN0cm9rZS13aWR0aDogMzJweCAhaW1wb3J0YW50OyB9XG5cbjpob3N0IC9kZWVwLyAuZG9udXQgLmN0LWxhYmVsIHtcbiAgdGV4dC1hbmNob3I6IG1pZGRsZTtcbiAgYWxpZ25tZW50LWJhc2VsaW5lOiBtaWRkbGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZmlsbDogIzg2OGU5NjsgfVxuXG46aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDRuKzEpIHtcbiAgc3Ryb2tlOiB1cmwoXCIvZGFzaGJvYXJkL2Rhc2hib2FyZDEjZ3JhZGllbnQ3XCIpOyB9XG5cbjpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rMikge1xuICBzdHJva2U6IHVybChcIi9kYXNoYm9hcmQvZGFzaGJvYXJkMSNncmFkaWVudDVcIik7IH1cblxuOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0biszKSB7XG4gIHN0cm9rZTogdXJsKFwiL2Rhc2hib2FyZC9kYXNoYm9hcmQxI2dyYWRpZW50NlwiKTsgfVxuXG46aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDRuKzQpIHtcbiAgc3Ryb2tlOiB1cmwoXCIvZGFzaGJvYXJkL2Rhc2hib2FyZDEjZ3JhZGllbnQ0XCIpOyB9XG5cbjpob3N0IC9kZWVwLyAuQmFyQ2hhcnRTaGFkb3cge1xuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDIwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKSk7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDIwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKSk7XG4gIC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovIH1cblxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQgLmN0LXBvaW50IHtcbiAgc3Ryb2tlLXdpZHRoOiAwcHg7IH1cblxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQgLmN0LWxpbmUge1xuICBzdHJva2U6ICNmZmY7IH1cblxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQgLmN0LWdyaWQge1xuICBzdHJva2UtZGFzaGFycmF5OiAwcHg7XG4gIHN0cm9rZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpOyB9XG5cbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0c2hhZG93IHtcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuOCkpO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuOCkpO1xuICAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqLyB9XG5cbi5saXN0IHtcbiAgaGVpZ2h0OiAzMDBweDsgfVxuXG4udXNlcnMtbGlzdCB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiAzMDBweDsgfVxuXG4udG91cnMtbGlzdCB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiAzNjBweDsgfVxuXG4uYm94LXRpdGxlIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4OyB9XG5cbi5tYi0xIHtcbiAgbWFyZ2luLWJvdHRvbTogLTNyZW0gIWltcG9ydGFudDsgfVxuXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAzNHB4OyB9XG5cbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXG4uc3dpdGNoIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDsgfVxuXG4vKiBUaGUgc2xpZGVyICovXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gIHRyYW5zaXRpb246IC40czsgfVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAyNnB4O1xuICB3aWR0aDogMjZweDtcbiAgbGVmdDogNHB4O1xuICBib3R0b206IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICB0cmFuc2l0aW9uOiAuNHM7IH1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzOyB9XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMzsgfVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpOyB9XG5cbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xuLnNsaWRlci5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7IH1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7IH1cblxuLnVpLXRhYmxlIC51aS10YWJsZS10Ym9keSA+IHRyID4gdGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard1/dashboard1.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/dashboard1/dashboard1.component.ts ***!
  \**************************************************************/
/*! exports provided: Dashboard1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard1Component", function() { return Dashboard1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_services_booking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/booking.service */ "./src/app/shared/services/booking.service.ts");
/* harmony import */ var app_shared_services_invoice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/invoice.service */ "./src/app/shared/services/invoice.service.ts");
/* harmony import */ var app_shared_services_tour_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/tour.service */ "./src/app/shared/services/tour.service.ts");
/* harmony import */ var app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");








var data = __webpack_require__(/*! ../../shared/data/chartist.json */ "./src/app/shared/data/chartist.json");
var Dashboard1Component = /** @class */ (function () {
    // Line chart configuration Ends
    function Dashboard1Component(tourService, toastr, invoiceService, bookingService, userService) {
        this.tourService = tourService;
        this.toastr = toastr;
        this.invoiceService = invoiceService;
        this.bookingService = bookingService;
        this.userService = userService;
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
                series: []
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
                created: function (data) {
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
                draw: function (data) {
                    if (data.type === 'bar') {
                        data.element.attr({
                            style: 'stroke-width: 5px',
                            x1: data.x1 + 0.001
                        });
                    }
                    else if (data.type === 'label') {
                        data.element.attr({
                            y: 270
                        });
                    }
                }
            }
        };
        // Line area chart configuration Starts
        this.lineArea = {
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
                created: function (data) {
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
                draw: function (data) {
                    var circleRadius = 6;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_6__["Svg"]('circle', {
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
        this.lineArea2 = {
            type: 'Line',
            data: data['lineArea2'],
            options: {
                showArea: true,
                fullWidth: true,
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_6__["Interpolation"].none(),
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
                created: function (data) {
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
                draw: function (data) {
                    var circleRadius = 4;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_6__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                    else if (data.type === 'label') {
                        // adjust label position for rotation
                        var dX = data.width / 2 + (30 - data.width);
                        data.element.attr({ x: data.element.attr('x') - dX });
                    }
                }
            },
        };
        // Line area chart 2 configuration Ends
        // Line chart configuration Starts
        this.lineChart = {
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
                draw: function (data) {
                    var circleRadius = 4;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_6__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                    else if (data.type === 'label') {
                        // adjust label position for rotation
                        var dX = data.width / 2 + (30 - data.width);
                        data.element.attr({ x: data.element.attr('x') - dX });
                    }
                }
            },
        };
        // Line chart configuration Ends
        // Donut chart configuration Starts
        this.DonutChart = {
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
                draw: function (data) {
                    if (data.type === 'label') {
                        if (data.index === 0) {
                            data.element.attr({
                                dx: data.element.root().width() / 2,
                                dy: data.element.root().height() / 2
                            });
                        }
                        else {
                            data.element.remove();
                        }
                    }
                }
            }
        };
        // Donut chart configuration Ends
        //  Bar chart configuration Starts
        this.BarChart = {
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
                high: 60,
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
                created: function (data) {
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
                draw: function (data) {
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
        this.WidgetlineChart = {
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
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_6__["Interpolation"].cardinal({
                    tension: 0
                }),
                fullWidth: true,
            },
        };
        this.appReports = [];
    }
    Dashboard1Component.prototype.ngOnInit = function () {
        this.getTours();
        this.getRemainingSeatsStatus();
        this.getBookings();
        this.getourMonthlyStatus();
        this.getUsers();
        this.getBookingsSixMonthlyStatus();
        this.getBookingsWeeklyStatus();
    };
    // Get Tours by month Stats
    Dashboard1Component.prototype.getBookingsMonthlyStatus = function () {
        var _this = this;
        var year = new Date().getFullYear();
        this.bookingService.bookingMonthlyStatus(year).subscribe(function (res) {
            var data = res['data'];
            var month = res['month'];
            _this.bookingsBySixMonths = data.sixMonthes;
        }, function (err) {
            console.log(err);
        });
    };
    // Get Tours by month Stats
    Dashboard1Component.prototype.getBookingsSixMonthlyStatus = function () {
        var _this = this;
        var year = new Date().getFullYear();
        this.bookingService.bookingMonthlyStatus(year).subscribe(function (res) {
            var data2 = res['data2'];
            _this.bookingsBySixMonths = data2.sixMonthesPlan;
            console.log(" this.bookingsBySixMonthLength22", _this.bookingsBySixMonths);
            _this.generateChartSixMonthes(_this.bookingsBySixMonths);
        }, function (err) {
            console.log(err);
        });
    };
    Dashboard1Component.prototype.generateChartSixMonthes = function (bookingsBySixMonths) {
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
                created: function (data) {
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
                draw: function (data) {
                    if (data.type === 'bar') {
                        data.element.attr({
                            style: 'stroke-width: 5px',
                            x1: data.x1 + 0.001
                        });
                    }
                    else if (data.type === 'label') {
                        data.element.attr({
                            y: 270
                        });
                    }
                }
            },
        };
    };
    ;
    // Get Tours by month Stats
    Dashboard1Component.prototype.getRemainingSeatsStatus = function () {
        var _this = this;
        this.bookingService.getRemainingSeatsPlan().subscribe(function (res) {
            var data = res['data'];
            _this.remainingSeatsPlan = data.plan;
            var maxGroupSize = data.plan.map(function (a) { return a.maxGroupSize; });
            var numOfBooking = data.plan.map(function (a) { return a.numOfBooking; });
            var remainingSeats = data.plan.map(function (a) { return a.remainingSeats; });
            var labels = data.plan.map(function (a) { return a._id; });
            _this.generateChart(labels, maxGroupSize, numOfBooking, remainingSeats);
            console.log("this.getRemainingSeatsPlan>>", _this.remainingSeatsPlan);
        }, function (err) {
            console.log(err);
        });
    };
    // Get Tours by month Stats
    Dashboard1Component.prototype.getourMonthlyStatus = function () {
        var _this = this;
        var year = new Date().getFullYear();
        this.tourService.tourMonthlyStatus(year).subscribe(function (res) {
            var data = res['data'];
            _this.toursByMonth = data.plan;
            _this.generateChart2(_this.toursByMonth);
        }, function (err) {
            console.log(err);
        });
    };
    Dashboard1Component.prototype.generateChart2 = function (chartData) {
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
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_6__["Interpolation"].none(),
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
                created: function (data) {
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
                draw: function (data) {
                    var circleRadius = 4;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_6__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                    else if (data.type === 'label') {
                        // adjust label position for rotation
                        var dX = data.width / 2 + (30 - data.width);
                        data.element.attr({ x: data.element.attr('x') - dX });
                    }
                }
            },
        };
    };
    Dashboard1Component.prototype.generateChart = function (labels, maxGroupSize, numOfBooking, remainingSeats) {
        this.lineArea = {
            type: 'Bar',
            data: {
                labels: labels,
                series: [
                    maxGroupSize, numOfBooking, remainingSeats
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
                draw: function (data) {
                    if (data.type === 'label') {
                        // adjust label position for rotation
                        var dX = data.width / 2 + (30 - data.width);
                        data.element.attr({ x: data.element.attr('x') - dX });
                    }
                }
            },
        };
    };
    // Get Bookings
    Dashboard1Component.prototype.getBookings = function () {
        var _this = this;
        this.bookingService.getBookings().subscribe(function (res) {
            var data = res['data'];
            _this.bookings = data.docs.filter(function (a) { return a.paymentInfo.orderStatus === "دفع بتحويل بنكي" || a.paymentInfo.orderStatus === "تأكيد حجز المبلغ كامل"; });
            console.log("boooooo", _this.bookings);
            _this.totalBookings = data.docs.length;
            var i;
            var total = 0;
            for (i = 0; i < _this.bookings.length; i++) {
                total += _this.bookings[i].paymentInfo.totalPrice;
                _this.totalEarings = total;
            }
            return total;
        }, function (err) {
            console.log(err);
        });
    };
    // Get Users
    Dashboard1Component.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (res) {
            var data = res['data'];
            _this.appUsers = data.docs.length;
            _this.appReports.push(_this.appUsers);
            _this.users = data.docs.filter(function (a) { return a.role === "مرشد سياحي"; });
            _this.totalUsers = _this.users.length;
            console.log('users >>>', _this.users);
        }, function (err) {
            console.log(err);
        });
    };
    //Enable Tour 
    Dashboard1Component.prototype.enableTour = function (tour) {
        var _this = this;
        if (tour) {
            var tourId = tour.id;
            this.tourService.enableTour(tourId, tour).subscribe(function (res) {
                _this.toastr.success(' تم تفعيل الرحلة بنجاح');
                _this.getTours();
            }, function (err) {
                console.log(err);
            });
        }
    };
    //DisableTour
    Dashboard1Component.prototype.disableTour = function (tour) {
        var _this = this;
        if (tour) {
            var tourId = tour.id;
            this.tourService.disableTour(tourId, tour).subscribe(function (res) {
                _this.toastr.success(' تم الغاء الرحلة بنجاح');
                _this.getTours();
            }, function (err) {
                console.log(err);
            });
        }
    };
    // Get Tours
    Dashboard1Component.prototype.getTours = function () {
        var _this = this;
        this.tourService.getTours().subscribe(function (res) {
            var data = res['data'];
            _this.tours = data.docs;
            _this.totalTours = data.docs.filter(function (a) { return a.active === true; }).length;
            _this.completedTours = _this.tours.filter(function (a) { return a.completed === true; }).length;
            _this.notCcompletedTours = _this.tours.filter(function (a) { return a.completed === false; }).length;
            _this.generateDotChart(_this.completedTours, _this.notCcompletedTours);
        }, function (err) {
            console.log(err);
        });
    };
    Dashboard1Component.prototype.generateDotChart = function (completedTours, notCcompletedTours) {
        // Donut chart configuration Starts
        this.DonutChart = {
            type: 'Pie',
            data: {
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
                draw: function (data) {
                    if (data.type === 'label') {
                        if (data.index === 0) {
                            data.element.attr({
                                dx: data.element.root().width() / 2,
                                dy: data.element.root().height() / 2
                            });
                        }
                        else {
                            data.element.remove();
                        }
                    }
                }
            }
        };
        // Donut chart configuration Ends
    };
    // Get Tours by month Stats
    Dashboard1Component.prototype.getBookingsWeeklyStatus = function () {
        var _this = this;
        this.bookingService.bookingWeeklyStatus().subscribe(function (res) {
            var data = res['data'];
            var week = res['week'];
            _this.bookingsByWeek = data.plan;
            _this.generateWeeklyReport(_this.bookingsByWeek);
        }, function (err) {
            console.log(err);
        });
    };
    Dashboard1Component.prototype.generateWeeklyReport = function (bookingsByWeek) {
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
                draw: function (data) {
                    var circleRadius = 4;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_6__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                    else if (data.type === 'label') {
                        // adjust label position for rotation
                        var dX = data.width / 2 + (30 - data.width);
                        data.element.attr({ x: data.element.attr('x') - dX });
                    }
                }
            },
        };
    };
    Dashboard1Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard1',
            template: __webpack_require__(/*! ./dashboard1.component.html */ "./src/app/dashboard/dashboard1/dashboard1.component.html"),
            styles: [__webpack_require__(/*! ./dashboard1.component.scss */ "./src/app/dashboard/dashboard1/dashboard1.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [app_shared_services_tour_service__WEBPACK_IMPORTED_MODULE_4__["TourService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], app_shared_services_invoice_service__WEBPACK_IMPORTED_MODULE_3__["InvoiceService"], app_shared_services_booking_service__WEBPACK_IMPORTED_MODULE_2__["BookingService"], app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], Dashboard1Component);
    return Dashboard1Component;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard2/dashboard2.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/dashboard2/dashboard2.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n    <div class=\"card bg-primary\">\r\n      <div class=\"card-content\">\r\n        <div class=\"card-body pt-2 pb-0\">\r\n          <div class=\"media\">\r\n            <div class=\"media-body white text-left\">\r\n              <h3 class=\"font-large-1 mb-0\">$15,678</h3>\r\n              <span>Total Cost</span>\r\n            </div>\r\n            <div class=\"media-right white text-right\">\r\n              <i class=\"icon-bulb font-large-1\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"Widget-line-chart\" class=\"height-75 WidgetlineChart WidgetlineChartShadow mb-3\">\r\n          <x-chartist class=\"\" [data]=\"WidgetlineChart.data\" [type]=\"WidgetlineChart.type\" [options]=\"WidgetlineChart.options\"\r\n            [responsiveOptions]=\"WidgetlineChart.responsiveOptions\" [events]=\"WidgetlineChart.events\">\r\n          </x-chartist>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n    <div class=\"card bg-warning\">\r\n      <div class=\"card-content\">\r\n        <div class=\"card-body pt-2 pb-0\">\r\n          <div class=\"media\">\r\n            <div class=\"media-body white text-left\">\r\n              <h3 class=\"font-large-1 mb-0\">$2156</h3>\r\n              <span>Total Tax</span>\r\n            </div>\r\n            <div class=\"media-right white text-right\">\r\n              <i class=\"icon-pie-chart font-large-1\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"Widget-line-chart2\" class=\"height-75 WidgetlineChart WidgetlineChartShadow mb-3\">\r\n          <x-chartist class=\"\" [data]=\"WidgetlineChart.data\" [type]=\"WidgetlineChart.type\" [options]=\"WidgetlineChart.options\"\r\n            [responsiveOptions]=\"WidgetlineChart.responsiveOptions\" [events]=\"WidgetlineChart.events\">\r\n          </x-chartist>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n    <div class=\"card bg-success\">\r\n      <div class=\"card-content\">\r\n        <div class=\"card-body pt-2 pb-0\">\r\n          <div class=\"media\">\r\n            <div class=\"media-body white text-left\">\r\n              <h3 class=\"font-large-1 mb-0\">$45,668</h3>\r\n              <span>Total Sales</span>\r\n            </div>\r\n            <div class=\"media-right white text-right\">\r\n              <i class=\"icon-graph font-large-1\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"Widget-line-chart2\" class=\"height-75 WidgetlineChart WidgetlineChartShadow mb-3\">\r\n          <x-chartist class=\"\" [data]=\"WidgetlineChart.data\" [type]=\"WidgetlineChart.type\" [options]=\"WidgetlineChart.options\"\r\n            [responsiveOptions]=\"WidgetlineChart.responsiveOptions\" [events]=\"WidgetlineChart.events\">\r\n          </x-chartist>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n    <div class=\"card bg-danger\">\r\n      <div class=\"card-content\">\r\n        <div class=\"card-body pt-2 pb-0\">\r\n          <div class=\"media\">\r\n            <div class=\"media-body white text-left\">\r\n              <h3 class=\"font-large-1 mb-0\">$32,454</h3>\r\n              <span>Total Earning</span>\r\n            </div>\r\n            <div class=\"media-right white text-right\">\r\n              <i class=\"icon-wallet font-large-1\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"Widget-line-chart2\" class=\"height-75 WidgetlineChart WidgetlineChartShadow mb-3\">\r\n          <x-chartist class=\"\" [data]=\"WidgetlineChart.data\" [type]=\"WidgetlineChart.type\" [options]=\"WidgetlineChart.options\"\r\n            [responsiveOptions]=\"WidgetlineChart.responsiveOptions\" [events]=\"WidgetlineChart.events\">\r\n          </x-chartist>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" matchHeight=\"card\">\r\n  <div class=\"col-xl-4 col-lg-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h4 class=\"card-title mb-0\">Discover People</h4>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <div class=\"card-body\">\r\n          <div class=\"media mb-3\">\r\n            <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-12.png\">\r\n            <div class=\"media-body\">\r\n              <h4 class=\"font-medium-1 mt-2 mb-0\">Jessica Rice</h4>\r\n            </div>\r\n            <a class=\"d-flex ml-3 btn btn-raised btn-round gradient-blackberry py-2 width-150 justify-content-center white\">Following</a>\r\n          </div>\r\n          <div class=\"media mb-3\">\r\n            <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-danger height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-11.png\">\r\n            <div class=\"media-body\">\r\n              <h4 class=\"font-medium-1 mt-2 mb-0\">Jacob Rios</h4>\r\n            </div>\r\n            <a class=\"d-flex ml-3 btn btn-raised btn-round btn-outline-grey py-2 width-150 justify-content-center\">Follow</a>\r\n          </div>\r\n          <div class=\"media mb-3\">\r\n            <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-success height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-3.png\">\r\n            <div class=\"media-body\">\r\n              <h4 class=\"font-medium-1 mt-2 mb-0\">Russell Diaz</h4>\r\n            </div>\r\n            <a class=\"d-flex ml-3 btn btn-raised btn-round btn-outline-grey py-2 width-150 justify-content-center\">Follow</a>\r\n          </div>\r\n          <div class=\"media mb-3\">\r\n            <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-warning height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-6.png\">\r\n            <div class=\"media-body\">\r\n              <h4 class=\"font-medium-1 mt-2 mb-0\">Sara Bell</h4>\r\n            </div>\r\n            <a class=\"d-flex ml-3 btn btn-raised btn-round gradient-blackberry py-2 width-150 justify-content-center white\">Following</a>\r\n          </div>\r\n          <div class=\"media mb-3\">\r\n            <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-info height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-18.png\">\r\n            <div class=\"media-body\">\r\n              <h4 class=\"font-medium-1 mt-2 mb-0\">Janet Lucas</h4>\r\n            </div>\r\n            <a class=\"d-flex ml-3 btn btn-raised btn-round btn-outline-grey py-2 width-150 justify-content-center\">Follow</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xl-8 col-lg-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h4 class=\"card-title mb-0\">Sales Analysis</h4>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <div class=\"card-body\">\r\n          <div class=\"chart-info mb-3\">\r\n            <span class=\"text-uppercase mr-3\"><i class=\"fa fa-circle primary font-small-2 mr-1\"></i> Sales</span>\r\n            <span class=\"text-uppercase mr-3\"><i class=\"fa fa-circle warning font-small-2 mr-1\"></i> Visits</span>\r\n            <span class=\"text-uppercase\"><i class=\"fa fa-circle danger font-small-2 mr-1\"></i> clicks</span>\r\n          </div>\r\n          <div id=\"line-chart1\" class=\"height-350 lineChart1 lineChart1Shadow\">\r\n            <x-chartist class=\"\" [data]=\"lineChart1.data\" [type]=\"lineChart1.type\" [options]=\"lineChart1.options\"\r\n              [responsiveOptions]=\"lineChart1.responsiveOptions\" [events]=\"lineChart1.events\">\r\n            </x-chartist>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" matchHeight=\"card\">\r\n  <div class=\"col-lg-4 col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header text-center pb-0\">\r\n        <span class=\"font-medium-2 primary\">Steps</span>\r\n        <h3 class=\"font-large-2 mt-1\">3261</h3>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <div id=\"donut-chart1\" class=\"height-250 donut1\">\r\n          <x-chartist [data]=\"DonutChart1.data\" [type]=\"DonutChart1.type\" [options]=\"DonutChart1.options\"\r\n            [responsiveOptions]=\"DonutChart1.responsiveOptions\" [events]=\"DonutChart1.events\">\r\n          </x-chartist>\r\n        </div>\r\n        <div class=\"card-body text-center\">\r\n          <span class=\"font-large-1 d-block mb-1\">5000</span>\r\n          <span class=\"primary font-medium-1\">Steps Today's Target</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-4 col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header text-center pb-0\">\r\n        <span class=\"font-medium-2 warning\">Distance</span>\r\n        <h3 class=\"font-large-2 mt-1\">7.6\r\n          <span class=\"font-medium-1 grey darken-1 text-bold-400\">miles</span>\r\n        </h3>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <div id=\"donut-chart2\" class=\"height-250 donut2\">\r\n          <x-chartist [data]=\"DonutChart2.data\" [type]=\"DonutChart2.type\" [options]=\"DonutChart2.options\"\r\n            [responsiveOptions]=\"DonutChart2.responsiveOptions\" [events]=\"DonutChart2.events\">\r\n          </x-chartist>\r\n        </div>\r\n        <div class=\"card-body text-center\">\r\n          <span class=\"font-large-1 d-block mb-1\">10</span>\r\n          <span class=\"warning font-medium-1\">Miles Today's Target</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-4 col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header text-center pb-0\">\r\n        <span class=\"font-medium-2 danger\">Calories</span>\r\n        <h3 class=\"font-large-2 mt-1\">4,025\r\n          <span class=\"font-medium-1 grey darken-1 text-bold-400\">kcal</span>\r\n        </h3>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <div id=\"donut-chart3\" class=\"height-250 donut3\">\r\n          <x-chartist [data]=\"DonutChart3.data\" [type]=\"DonutChart3.type\" [options]=\"DonutChart3.options\"\r\n            [responsiveOptions]=\"DonutChart3.responsiveOptions\" [events]=\"DonutChart3.events\">\r\n          </x-chartist>\r\n        </div>\r\n        <div class=\"card-body text-center\">\r\n          <span class=\"font-large-1 d-block mb-1\">5000</span>\r\n          <span class=\"danger font-medium-1\">kcla Today's Target</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" matchHeight=\"card\">\r\n  <div class=\"col-xl-6 col-lg-12 col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-content\">\r\n        <div class=\"card-img\">\r\n          <img class=\"card-img-top img-fluid height-300\" src=\"assets/img/photos/weather-1.jpg\" alt=\"Card image cap\">\r\n          <h4 class=\"card-title\">Sunny</h4>\r\n          <a class=\"btn btn-floating halfway-fab bg-primary\"><i class=\"ft-plus\"></i></a>\r\n        </div>\r\n        <div class=\"card-body mt-2\">\r\n          <div class=\"row\">\r\n            <div class=\"col-2 text-center\">\r\n              <span class=\"d-block\">Mon</span>\r\n              <i class=\"wi wi-day-sunny d-block warning font-large-1 my-3\"></i>\r\n              <span class=\"d-block\">13&deg;</span>\r\n            </div>\r\n            <div class=\"col-2 text-center\">\r\n              <span class=\"d-block\">Tue</span>\r\n              <i class=\"wi wi-day-cloudy d-block warning font-large-1 my-3\"></i>\r\n              <span class=\"d-block\">12&deg;</span>\r\n            </div>\r\n            <div class=\"col-2 text-center\">\r\n              <span class=\"d-block\">Wed</span>\r\n              <i class=\"wi wi-day-cloudy-gusts d-block warning font-large-1 my-3\"></i>\r\n              <span class=\"d-block\">10&deg;</span>\r\n            </div>\r\n            <div class=\"col-2 text-center\">\r\n              <span class=\"d-block\">Thu</span>\r\n              <i class=\"wi wi-day-cloudy-windy d-block warning font-large-1 my-3\"></i>\r\n              <span class=\"d-block\">12&deg;</span>\r\n            </div>\r\n            <div class=\"col-2 text-center\">\r\n              <span class=\"d-block\">Fri</span>\r\n              <i class=\"wi wi-day-fog d-block warning font-large-1 my-3\"></i>\r\n              <span class=\"d-block\">9&deg;</span>\r\n            </div>\r\n            <div class=\"col-2 text-center\">\r\n              <span class=\"d-block\">Sat</span>\r\n              <i class=\"wi wi-day-lightning d-block warning font-large-1 my-3\"></i>\r\n              <span class=\"d-block\">6&deg;</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-xl-6 col-lg-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header pb-0\">\r\n        <h4 class=\"card-title\">Statistics</h4>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <div class=\"card-body\">\r\n          <div class=\"chart-info mb-2\">\r\n            <span class=\"text-uppercase mr-3\"><i class=\"fa fa-circle primary font-small-2 mr-1\"></i> Sales</span>\r\n            <span class=\"text-uppercase\"><i class=\"fa fa-circle warning font-small-2 mr-1\"></i> Visits</span>\r\n          </div>\r\n          <div id=\"line-chart2\" class=\"height-350 lineChart2 lineChart2Shadow\">\r\n            <x-chartist class=\"\" [data]=\"lineChart2.data\" [type]=\"lineChart2.type\" [options]=\"lineChart2.options\"\r\n              [responsiveOptions]=\"lineChart2.responsiveOptions\" [events]=\"lineChart2.events\">\r\n            </x-chartist>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row mb-3\" matchHeight=\"card\">\r\n  <div class=\"col-xl-4 col-lg-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-content\">\r\n        <div class=\"card-body\">\r\n          <div class=\"row d-flex mb-3 py-2\">\r\n            <div class=\"col align-self-center text-center\"><i class=\"icon-graph font-large-2 blue-grey lighten-2\"></i></div>\r\n            <div class=\"col align-self-center\"><img alt=\"96x96\" class=\"bg-danger width-150 rounded-circle img-fluid\"\r\n                src=\"assets/img/portrait/small/avatar-s-11.png\"></div>\r\n            <div class=\"col align-self-center text-center\"><i class=\"icon-envelope font-large-2 blue-grey lighten-2\"></i></div>\r\n          </div>\r\n          <h3 class=\"font-large-1 text-center\">Kevin Sullivan</h3>\r\n          <span class=\"font-medium-1 grey d-block text-center\">UX Designer</span>\r\n          <div class=\"row mt-4 mb-3\">\r\n            <div class=\"col-xl-7 col-8 \">\r\n              <div id=\"Widget-line-chart1\" class=\"height-75 WidgetlineChart1 WidgetlineChart1Shadow px-2\">\r\n                <x-chartist class=\"\" [data]=\"WidgetlineChart1.data\" [type]=\"WidgetlineChart1.type\" [options]=\"WidgetlineChart1.options\"\r\n                  [responsiveOptions]=\"WidgetlineChart1.responsiveOptions\" [events]=\"WidgetlineChart1.events\">\r\n                </x-chartist>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-5 col-4\">\r\n              <span class=\"font-large-1\"><i class=\"fa fa-caret-up font-large-2 success\"></i> 27 %</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xl-4 col-lg-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-content\">\r\n        <div class=\"card-img\">\r\n          <ngb-carousel>\r\n            <ng-template ngbSlide>\r\n              <img src=\"assets/img/photos/17.jpg\" alt=\"Random first slide\">\r\n              <div class=\"carousel-caption\">\r\n                <h3>First slide label</h3>\r\n                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n              </div>\r\n            </ng-template>\r\n            <ng-template ngbSlide>\r\n              <img src=\"assets/img/photos/13.jpg\" alt=\"Random second slide\">\r\n              <div class=\"carousel-caption\">\r\n                <h3>Second slide label</h3>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n              </div>\r\n            </ng-template>\r\n            <ng-template ngbSlide>\r\n              <img src=\"assets/img/photos/12.jpg\" alt=\"Random third slide\">\r\n              <div class=\"carousel-caption\">\r\n                <h3>Third slide label</h3>\r\n                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-carousel>\r\n          <a class=\"btn btn-floating halfway-fab btn-large gradient-blackberry\"><i class=\"ft-plus\"></i></a>\r\n        </div>\r\n        <div class=\"card-body mt-3\">\r\n          <h4 class=\"card-title\">Card title</h4>\r\n          <p class=\"card-text\">Sweet halvah dragée jelly-o halvah carrot cake oat cake. Donut jujubes jelly chocolate\r\n            cake.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xl-4 col-lg-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h4 class=\"card-title\">Earnings</h4>\r\n        <span class=\"grey\">Mon 18 - Sun 21</span>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <div class=\"card-body\">\r\n          <div class=\"earning-details mb-4\">\r\n            <h3 class=\"font-large-2 mb-1\">$4295.36 <i class=\"ft-arrow-up font-large-2 teal accent-3\"></i></h3>\r\n            <span class=\"font-medium-1 grey d-block\">Total Earnings</span>\r\n          </div>\r\n          <div id=\"Widget-line-chart2\" class=\"height-100 WidgetlineChart2 WidgetlineChart2Shadow\">\r\n            <x-chartist class=\"\" [data]=\"WidgetlineChart2.data\" [type]=\"WidgetlineChart2.type\" [options]=\"WidgetlineChart2.options\"\r\n              [responsiveOptions]=\"WidgetlineChart2.responsiveOptions\" [events]=\"WidgetlineChart2.events\">\r\n            </x-chartist>\r\n          </div>\r\n          <div class=\"action-buttons mt-4 mb-1 text-center\">\r\n            <a class=\"btn btn-raised gradient-blackberry py-2 px-4 white mr-2\">View Full</a>\r\n            <a class=\"btn btn-raised btn-outline-grey py-2 px-3\">Print</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" matchHeight=\"card\">\r\n  <div class=\"col-lg-4 col-md-4 col-sm-12 mb-2\">\r\n    <div class=\"card card-inverse bg-primary text-center\">\r\n      <div class=\"card-content\">\r\n        <div class=\"card-img overlap\">\r\n          <img src=\"assets/img/elements/11.png\" alt=\"element 06\" width=\"190\" class=\"mb-1\">\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">New Arrival</h4>\r\n          <p class=\"card-text\">Donut toffee candy brownie soufflé macaroon.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-lg-4 col-md-4 col-sm-12 mb-2\">\r\n    <div class=\"card card-inverse bg-danger text-center\">\r\n      <div class=\"card-content\">\r\n        <div class=\"card-img overlap\">\r\n          <img src=\"assets/img/elements/14.png\" alt=\"element 03\" width=\"170\">\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">Brand Minute</h4>\r\n          <p class=\"card-text\">Donut toffee candy brownie soufflé macaroon.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-lg-4 col-md-4 col-sm-12 mb-2\">\r\n    <div class=\"card card-inverse bg-warning text-center\">\r\n      <div class=\"card-content\">\r\n        <div class=\"card-img overlap\">\r\n          <img src=\"assets/img/elements/07.png\" alt=\"element 07\" width=\"225\">\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">Brand Minute</h4>\r\n          <p class=\"card-text\">Donut toffee candy brownie soufflé macaroon.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" matchHeight=\"card\">\r\n  <div class=\"col-xl-8 col-lg-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header pb-0\">\r\n        <h4 class=\"card-title\">Sales Per Visit</h4>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <div class=\"card-body\">\r\n          <div class=\"chart-info mb-2\">\r\n            <span class=\"text-uppercase mr-3\"><i class=\"fa fa-circle primary font-small-2 mr-1\"></i> Sales</span>\r\n            <span class=\"text-uppercase\"><i class=\"fa fa-circle warning font-small-2 mr-1\"></i> Visits</span>\r\n          </div>\r\n          <div id=\"line-area-chart\" class=\"height-300 lineAreaChart mb-1\">\r\n            <x-chartist class=\"\" [data]=\"lineAreaChart.data\" [type]=\"lineAreaChart.type\" [options]=\"lineAreaChart.options\"\r\n              [responsiveOptions]=\"lineAreaChart.responsiveOptions\" [events]=\"lineAreaChart.events\">\r\n\r\n            </x-chartist>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xl-4 col-lg-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-content\">\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">DAILY DIET</h4>\r\n          <p class=\"card-text\">Some quick example text to build on the card.</p>\r\n        </div>\r\n        <ul class=\"list-group\">\r\n          <li class=\"list-group-item text-left\">\r\n            <span class=\"badge bg-primary float-right text-white\">4</span> Protein Milk\r\n          </li>\r\n          <li class=\"list-group-item text-left\">\r\n            <span class=\"badge bg-info float-right text-white\">2</span> oz Water\r\n          </li>\r\n          <li class=\"list-group-item text-left\">\r\n            <span class=\"badge bg-warning float-right text-white\">6</span> Vegetable Juice\r\n          </li>\r\n          <li class=\"list-group-item text-left\">\r\n            <span class=\"badge bg-success float-right text-white\">1</span> Sugar Free Jello-O\r\n          </li>\r\n          <li class=\"list-group-item text-left\">\r\n            <span class=\"badge bg-danger float-right text-white\">3</span> Protein Meal\r\n          </li>\r\n        </ul>\r\n        <div class=\"card-body\">\r\n          <a class=\"card-link success\">Card link</a>\r\n          <a class=\"card-link success\">Another link</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard2/dashboard2.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/dashboard2/dashboard2.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .WidgetlineChart .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart .ct-line {\n  stroke: #fff; }\n\n:host /deep/ .WidgetlineChartShadow {\n  filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  /* Same syntax as box-shadow, except for the spread property */ }\n\n:host /deep/ .WidgetlineChart1 .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart1 .ct-line {\n  stroke: url(\"/dashboard/dashboard2#widgradient\") !important; }\n\n:host /deep/ .WidgetlineChart1Shadow {\n  filter: drop-shadow(0px 20px 5px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .WidgetlineChart2 .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart2 .ct-line {\n  stroke: url(\"/dashboard/dashboard2#widgradient1\") !important; }\n\n:host /deep/ .WidgetlineChart2 .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(255, 255, 255, 0.2); }\n\n:host /deep/ .WidgetlineChart2Shadow {\n  filter: drop-shadow(0px 20px 5px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .donut1 .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 60px;\n  fill: #009DA0; }\n\n:host /deep/ .donut1 .ct-outstanding .ct-slice-donut {\n  stroke: #eee; }\n\n:host /deep/ .donut1 .ct-done .ct-slice-donut {\n  stroke: #009DA0; }\n\n:host /deep/ .donut2 .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 60px;\n  fill: #FF8D60; }\n\n:host /deep/ .donut2 .ct-outstanding .ct-slice-donut {\n  stroke: #eee; }\n\n:host /deep/ .donut2 .ct-done .ct-slice-donut {\n  stroke: #FF8D60; }\n\n:host /deep/ .donut3 .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 60px;\n  fill: #FF586B; }\n\n:host /deep/ .donut3 .ct-outstanding .ct-slice-donut {\n  stroke: #eee; }\n\n:host /deep/ .donut3 .ct-done .ct-slice-donut {\n  stroke: #FF586A; }\n\n:host /deep/ .lineAreaChart .ct-series-a .ct-area {\n  fill: url(\"/dashboard/dashboard2#gradient\") !important; }\n\n:host /deep/ .lineAreaChart .ct-series-b .ct-area {\n  fill: #ff8d60;\n  fill-opacity: 0.1; }\n\n:host /deep/ .lineAreaChart .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineAreaChart .ct-series-b .ct-point-circle {\n  stroke: #ff8d60; }\n\n:host /deep/ .lineAreaChart .ct-series-a .ct-point-circle {\n  stroke: #31afb2; }\n\n:host /deep/ .lineAreaChart .ct-line {\n  fill: none;\n  stroke-width: 1px; }\n\n:host /deep/ .lineChart2 .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineChart2 .ct-series-b .ct-point-circle {\n  stroke: #ff8d60; }\n\n:host /deep/ .lineChart2 .ct-series-a .ct-point-circle {\n  stroke: #31afb2; }\n\n:host /deep/ .lineChart2 .ct-line {\n  fill: none;\n  stroke-width: 1px; }\n\n:host /deep/ .lineChart2Shadow {\n  filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .lineChart1 .ct-line {\n  fill: none;\n  stroke-width: 3px; }\n\n:host /deep/ .lineChart1 .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .lineChart1Shadow {\n  filter: drop-shadow(0px 20px 6px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZDIvQzpcXFVzZXJzXFxwb3N0Z3Jlc1xcRGVza3RvcFxcbGFzdFxcdHJhdmVsRmluYWxhcHBcXHRvdXJGcm9udGVuZC9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQyXFxkYXNoYm9hcmQyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkMi9kYXNoYm9hcmQyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kscUJBQXFCO0VBQ3JCLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLGlCQUFpQixFQUFBOztBQUtyQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFFWSxvREFBbUQ7RUFBRSw4REFBQSxFQUErRDs7QUFNaEk7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSwyREFBaUUsRUFBQTs7QUFHckU7RUFFWSxvREFBbUQ7RUFBRTtnRkNSZSxFRFNDOztBQU1qRjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLDREQUFpRSxFQUFBOztBQUVyRTtFQUNJLHFCQUFxQjtFQUNwQixnQ0FBZ0MsRUFBQTs7QUFFckM7RUFFWSxvREFBbUQ7RUFBRTtnRkNYZSxFRFlDOztBQU9qRjtFQUNJLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGVBQWUsRUFBQTs7QUFPakI7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlLEVBQUE7O0FBT2pCO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsYUFBYSxFQUFBOztBQUdmO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZUFBZSxFQUFBOztBQU9qQjtFQUNFLHNEQUE0RCxFQUFBOztBQUdoRTtFQUNJLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxVQUFVO0VBQ1YsaUJBQWlCLEVBQUE7O0FBT3JCO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksVUFBVTtFQUNWLGlCQUFpQixFQUFBOztBQUdyQjtFQUVZLG9EQUFtRDtFQUFFO2dGQ2xEZSxFRG1EQzs7QUFNakY7RUFDSSxVQUFVO0VBQ1YsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBRVksb0RBQW1EO0VBQUU7Z0ZDdkRlLEVEd0RDIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZDIvZGFzaGJvYXJkMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9zY3NzL2dyYWRpZW50LXZhcmlhYmxlc1wiO1xyXG5cclxuOmhvc3QgL2RlZXAvIC5jdC1ncmlke1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMHB4O1xyXG4gICAgc3Ryb2tlOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuY3QtbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLy93aWRnZXQgTGluZSBDaGFydCBDU1MgU3RhcnRzXHJcbiBcclxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQgLmN0LXBvaW50IHtcclxuICAgIHN0cm9rZS13aWR0aDogMHB4O1xyXG59XHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1saW5le1xyXG4gICAgc3Ryb2tlOiAjZmZmO1xyXG59XHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0U2hhZG93IHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDE1cHggNXB4IHJnYmEoMCwwLDAsMC44KSApO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMTVweCA1cHggcmdiYSgwLDAsMCwwLjgpICk7IC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcblxyXG4vL3dpZGdldCBMaW5lIENoYXJ0IENTUyBFbmRzXHJcblxyXG4vL3dpZGdldCBMaW5lIENoYXJ0IDEgQ1NTIFN0YXJ0c1xyXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydDEgLmN0LXBvaW50IHtcclxuICAgIHN0cm9rZS13aWR0aDogMHB4O1xyXG59XHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0MSAuY3QtbGluZXtcclxuICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQyLWdyYWRpZW50LXBhdGggKyAgI3dpZGdyYWRpZW50KSAhaW1wb3J0YW50OyAvLyAjMDA5REEwOyBcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQxU2hhZG93IHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDIwcHggNXB4IHJnYmEoMCwwLDAsMC4zKSApO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjBweCA1cHggcmdiYSgwLDAsMCwwLjMpICk7IC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXHJcbn1cclxuLy93aWRnZXQgTGluZSBDaGFydCAxIENTUyBFbmRzXHJcblxyXG4vL3dpZGdldCBMaW5lIENoYXJ0IDIgQ1NTIFN0YXJ0c1xyXG5cclxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQyIC5jdC1wb2ludCB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDBweDtcclxufVxyXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydDIgLmN0LWxpbmV7XHJcbiAgICBzdHJva2U6dXJsKCRkYXNoYm9hcmQyLWdyYWRpZW50LXBhdGggKyAgI3dpZGdyYWRpZW50MSkgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydDIgLmN0LWdyaWQge1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMHB4OyAgICBcclxuICAgICBzdHJva2U6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxufVxyXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydDJTaGFkb3cge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjBweCA1cHggcmdiYSgwLDAsMCwwLjMpICk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyMHB4IDVweCByZ2JhKDAsMCwwLDAuMykgKTsgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cclxufVxyXG4vL3dpZGdldCBMaW5lIENoYXJ0IDIgQ1NTIEVuZHNcclxuXHJcblxyXG4vL0RvbnV0IENoYXJ0IDEgQ1NTIFN0YXJ0c1xyXG5cclxuOmhvc3QgL2RlZXAvIC5kb251dDEgLmN0LWxhYmVsIHtcclxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XHJcbiAgICBhbGlnbm1lbnQtYmFzZWxpbmU6IG1pZGRsZTtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIGZpbGw6ICMwMDlEQTA7XHJcbiAgfVxyXG5cclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0MSAuY3Qtb3V0c3RhbmRpbmcgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogI2VlZTsgICAgXHJcbiAgfVxyXG5cclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0MSAuY3QtZG9uZSAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiAjMDA5REEwO1xyXG4gIH1cclxuXHJcbiAgLy9Eb251dCBDaGFydCAxIENTUyBFbmRzXHJcblxyXG4gIC8vRG9udXQgQ2hhcnQgMiBDU1MgU3RhcnRzXHJcblxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQyIC5jdC1sYWJlbCB7XHJcbiAgICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xyXG4gICAgYWxpZ25tZW50LWJhc2VsaW5lOiBtaWRkbGU7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBmaWxsOiAjRkY4RDYwO1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5kb251dDIgLmN0LW91dHN0YW5kaW5nIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICNlZWU7ICAgIFxyXG4gIH1cclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5kb251dDIgLmN0LWRvbmUgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogI0ZGOEQ2MDtcclxuICB9XHJcblxyXG4gIC8vRG9udXQgQ2hhcnQgMiBDU1MgRW5kc1xyXG5cclxuICAvL0RvbnV0IENoYXJ0IDMgQ1NTIFN0YXJ0c1xyXG5cclxuICA6aG9zdCAvZGVlcC8gLmRvbnV0MyAuY3QtbGFiZWwge1xyXG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcclxuICAgIGFsaWdubWVudC1iYXNlbGluZTogbWlkZGxlO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgZmlsbDogI0ZGNTg2QjtcclxuICB9XHJcblxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQzIC5jdC1vdXRzdGFuZGluZyAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiAjZWVlOyAgICBcclxuICB9XHJcblxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQzIC5jdC1kb25lIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICNGRjU4NkE7XHJcbiAgfVxyXG5cclxuICAvL0RvbnV0IENoYXJ0IDMgQ1NTIEVuZHNcclxuXHJcbiAgLy8gTGluZSBhcmVhIGNoYXJ0IENTUyBTdGFydHNcclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5saW5lQXJlYUNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiB1cmwoJGRhc2hib2FyZDItZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWFDaGFydCAuY3Qtc2VyaWVzLWIgLmN0LWFyZWEge1xyXG4gICAgZmlsbDogI2ZmOGQ2MDtcclxuICAgIGZpbGwtb3BhY2l0eTogMC4xO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhQ2hhcnQgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcclxuICAgIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhQ2hhcnQgLmN0LXNlcmllcy1iIC5jdC1wb2ludC1jaXJjbGUge1xyXG4gICAgc3Ryb2tlOiAjZmY4ZDYwO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1wb2ludC1jaXJjbGUge1xyXG4gICAgc3Ryb2tlOiAjMzFhZmIyO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhQ2hhcnQgLmN0LWxpbmUge1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIHN0cm9rZS13aWR0aDogMXB4O1xyXG59XHJcblxyXG4vLyBMaW5lIGFyZWEgY2hhcnQgQ1NTIEVuZHNcclxuXHJcbi8vTGluZSBjaGFydCAyIENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0MiAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG4gICAgZmlsbDogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0MiAuY3Qtc2VyaWVzLWIgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2U6ICNmZjhkNjA7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0MiAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XHJcbiAgICBzdHJva2U6ICMzMWFmYjI7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0MiAuY3QtbGluZSB7XHJcbiAgICBmaWxsOiBub25lO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0MlNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyNXB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTtcclxuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDI1cHggOHB4IHJnYmEoMCwwLDAsMC4zKSApOyAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcbi8vTGluZSBjaGFydCAyIENTUyBFbmRzXHJcblxyXG4vL0xpbmUgQ2hhcnQgMSBDU1MgU3RhcnRzXHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydDEgLmN0LWxpbmUge1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIHN0cm9rZS13aWR0aDogM3B4O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydDEgLmN0LXBvaW50IHtcclxuICAgIHN0cm9rZS13aWR0aDogMHB4O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydDFTaGFkb3cge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjBweCA2cHggcmdiYSgwLDAsMCwwLjMpICk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyMHB4IDZweCByZ2JhKDAsMCwwLDAuMykgKTsgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cclxufVxyXG4vL0xpbmUgQ2hhcnQgMSBDU1MgRW5kcyIsIjpob3N0IC9kZWVwLyAuY3QtZ3JpZCB7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDBweDtcbiAgc3Ryb2tlOiByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cblxuOmhvc3QgL2RlZXAvIC5jdC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtOyB9XG5cbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1wb2ludCB7XG4gIHN0cm9rZS13aWR0aDogMHB4OyB9XG5cbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1saW5lIHtcbiAgc3Ryb2tlOiAjZmZmOyB9XG5cbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0U2hhZG93IHtcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuOCkpO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuOCkpO1xuICAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi8gfVxuXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydDEgLmN0LXBvaW50IHtcbiAgc3Ryb2tlLXdpZHRoOiAwcHg7IH1cblxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQxIC5jdC1saW5lIHtcbiAgc3Ryb2tlOiB1cmwoXCIvZGFzaGJvYXJkL2Rhc2hib2FyZDIjd2lkZ3JhZGllbnRcIikgIWltcG9ydGFudDsgfVxuXG46aG9zdCAvZGVlcC8gLldpZGdldGxpbmVDaGFydDFTaGFkb3cge1xuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDIwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKSk7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDIwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKSk7XG4gIC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovIH1cblxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQyIC5jdC1wb2ludCB7XG4gIHN0cm9rZS13aWR0aDogMHB4OyB9XG5cbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0MiAuY3QtbGluZSB7XG4gIHN0cm9rZTogdXJsKFwiL2Rhc2hib2FyZC9kYXNoYm9hcmQyI3dpZGdyYWRpZW50MVwiKSAhaW1wb3J0YW50OyB9XG5cbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0MiAuY3QtZ3JpZCB7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDBweDtcbiAgc3Ryb2tlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7IH1cblxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQyU2hhZG93IHtcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDBweCAyMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAyMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqLyB9XG5cbjpob3N0IC9kZWVwLyAuZG9udXQxIC5jdC1sYWJlbCB7XG4gIHRleHQtYW5jaG9yOiBtaWRkbGU7XG4gIGFsaWdubWVudC1iYXNlbGluZTogbWlkZGxlO1xuICBmb250LXNpemU6IDYwcHg7XG4gIGZpbGw6ICMwMDlEQTA7IH1cblxuOmhvc3QgL2RlZXAvIC5kb251dDEgLmN0LW91dHN0YW5kaW5nIC5jdC1zbGljZS1kb251dCB7XG4gIHN0cm9rZTogI2VlZTsgfVxuXG46aG9zdCAvZGVlcC8gLmRvbnV0MSAuY3QtZG9uZSAuY3Qtc2xpY2UtZG9udXQge1xuICBzdHJva2U6ICMwMDlEQTA7IH1cblxuOmhvc3QgL2RlZXAvIC5kb251dDIgLmN0LWxhYmVsIHtcbiAgdGV4dC1hbmNob3I6IG1pZGRsZTtcbiAgYWxpZ25tZW50LWJhc2VsaW5lOiBtaWRkbGU7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgZmlsbDogI0ZGOEQ2MDsgfVxuXG46aG9zdCAvZGVlcC8gLmRvbnV0MiAuY3Qtb3V0c3RhbmRpbmcgLmN0LXNsaWNlLWRvbnV0IHtcbiAgc3Ryb2tlOiAjZWVlOyB9XG5cbjpob3N0IC9kZWVwLyAuZG9udXQyIC5jdC1kb25lIC5jdC1zbGljZS1kb251dCB7XG4gIHN0cm9rZTogI0ZGOEQ2MDsgfVxuXG46aG9zdCAvZGVlcC8gLmRvbnV0MyAuY3QtbGFiZWwge1xuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xuICBhbGlnbm1lbnQtYmFzZWxpbmU6IG1pZGRsZTtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBmaWxsOiAjRkY1ODZCOyB9XG5cbjpob3N0IC9kZWVwLyAuZG9udXQzIC5jdC1vdXRzdGFuZGluZyAuY3Qtc2xpY2UtZG9udXQge1xuICBzdHJva2U6ICNlZWU7IH1cblxuOmhvc3QgL2RlZXAvIC5kb251dDMgLmN0LWRvbmUgLmN0LXNsaWNlLWRvbnV0IHtcbiAgc3Ryb2tlOiAjRkY1ODZBOyB9XG5cbjpob3N0IC9kZWVwLyAubGluZUFyZWFDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xuICBmaWxsOiB1cmwoXCIvZGFzaGJvYXJkL2Rhc2hib2FyZDIjZ3JhZGllbnRcIikgIWltcG9ydGFudDsgfVxuXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhQ2hhcnQgLmN0LXNlcmllcy1iIC5jdC1hcmVhIHtcbiAgZmlsbDogI2ZmOGQ2MDtcbiAgZmlsbC1vcGFjaXR5OiAwLjE7IH1cblxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYUNoYXJ0IC5jdC1wb2ludC1jaXJjbGUge1xuICBzdHJva2Utd2lkdGg6IDJweDtcbiAgZmlsbDogd2hpdGU7IH1cblxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYUNoYXJ0IC5jdC1zZXJpZXMtYiAuY3QtcG9pbnQtY2lyY2xlIHtcbiAgc3Ryb2tlOiAjZmY4ZDYwOyB9XG5cbjpob3N0IC9kZWVwLyAubGluZUFyZWFDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XG4gIHN0cm9rZTogIzMxYWZiMjsgfVxuXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhQ2hhcnQgLmN0LWxpbmUge1xuICBmaWxsOiBub25lO1xuICBzdHJva2Utd2lkdGg6IDFweDsgfVxuXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydDIgLmN0LXBvaW50LWNpcmNsZSB7XG4gIHN0cm9rZS13aWR0aDogMnB4O1xuICBmaWxsOiB3aGl0ZTsgfVxuXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydDIgLmN0LXNlcmllcy1iIC5jdC1wb2ludC1jaXJjbGUge1xuICBzdHJva2U6ICNmZjhkNjA7IH1cblxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQyIC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlIHtcbiAgc3Ryb2tlOiAjMzFhZmIyOyB9XG5cbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0MiAuY3QtbGluZSB7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZS13aWR0aDogMXB4OyB9XG5cbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0MlNoYWRvdyB7XG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMjVweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpKTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMjVweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpKTtcbiAgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi8gfVxuXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydDEgLmN0LWxpbmUge1xuICBmaWxsOiBub25lO1xuICBzdHJva2Utd2lkdGg6IDNweDsgfVxuXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydDEgLmN0LXBvaW50IHtcbiAgc3Ryb2tlLXdpZHRoOiAwcHg7IH1cblxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQxU2hhZG93IHtcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDBweCAyMHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAyMHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqLyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard2/dashboard2.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/dashboard2/dashboard2.component.ts ***!
  \**************************************************************/
/*! exports provided: Dashboard2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard2Component", function() { return Dashboard2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_2__);



var data = __webpack_require__(/*! ../../shared/data/chartist.json */ "./src/app/shared/data/chartist.json");
var Dashboard2Component = /** @class */ (function () {
    function Dashboard2Component() {
        // Line chart configuration Starts
        this.WidgetlineChart = {
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
        // Line chart configuration Ends
        // Line chart configuration Starts
        this.WidgetlineChart1 = {
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
                created: function (data) {
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
        this.WidgetlineChart2 = {
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
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_2__["Interpolation"].cardinal({
                    tension: 0
                }),
                fullWidth: true
            },
            events: {
                created: function (data) {
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
        // Donut chart configuration Starts
        this.DonutChart1 = {
            type: 'Pie',
            data: data['DashboardDonut'],
            options: {
                donut: true,
                donutWidth: 3,
                startAngle: 0,
                chartPadding: 25,
                labelInterpolationFnc: function (value) {
                    return '\ue9c9';
                }
            },
            events: {
                draw: function (data) {
                    if (data.type === 'label') {
                        if (data.index === 0) {
                            data.element.attr({
                                dx: data.element.root().width() / 2,
                                dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
                                class: 'ct-label',
                                'font-family': 'feather'
                            });
                        }
                        else {
                            data.element.remove();
                        }
                    }
                }
            }
        };
        // Donut chart configuration Ends
        // Donut chart configuration Starts
        this.DonutChart2 = {
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
                draw: function (data) {
                    if (data.type === 'label') {
                        if (data.index === 0) {
                            data.element.attr({
                                dx: data.element.root().width() / 2,
                                dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
                                class: 'ct-label',
                                'font-family': 'feather'
                            });
                        }
                        else {
                            data.element.remove();
                        }
                    }
                }
            }
        };
        // Donut chart configuration Ends
        // Donut chart configuration Starts
        this.DonutChart3 = {
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
                draw: function (data) {
                    if (data.type === 'label') {
                        if (data.index === 0) {
                            data.element.attr({
                                dx: data.element.root().width() / 2,
                                dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
                                class: 'ct-label',
                                'font-family': 'feather'
                            });
                        }
                        else {
                            data.element.remove();
                        }
                    }
                }
            }
        };
        // Donut chart configuration Ends
        // Line area chart configuration Starts
        this.lineAreaChart = {
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
                created: function (data) {
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
                draw: function (data) {
                    var circleRadius = 6;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_2__["Svg"]('circle', {
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
        this.lineChart2 = {
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
                draw: function (data) {
                    var circleRadius = 6;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_2__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                    else if (data.type === 'label') {
                        // adjust label position for rotation
                        var dX = data.width / 2 + (30 - data.width);
                        data.element.attr({ x: data.element.attr('x') - dX });
                    }
                }
            },
        };
        // Line chart configuration Ends
        // Line chart configuration Starts
        this.lineChart1 = {
            type: 'Line', data: data['line1'],
            options: {
                axisX: {
                    showGrid: false,
                },
                axisY: {
                    low: 0,
                    scaleMinSpace: 50,
                },
                fullWidth: true
            },
            events: {
                draw: function (data) {
                    if (data.type === 'label') {
                        // adjust label position for rotation
                        var dX = data.width / 2 + (30 - data.width);
                        data.element.attr({ x: data.element.attr('x') - dX });
                    }
                }
            },
        };
        // Line chart configuration Ends
    }
    Dashboard2Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard2',
            template: __webpack_require__(/*! ./dashboard2.component.html */ "./src/app/dashboard/dashboard2/dashboard2.component.html"),
            styles: [__webpack_require__(/*! ./dashboard2.component.scss */ "./src/app/dashboard/dashboard2/dashboard2.component.scss")]
        })
    ], Dashboard2Component);
    return Dashboard2Component;
}());



/***/ })

}]);
//# sourceMappingURL=3.js.map