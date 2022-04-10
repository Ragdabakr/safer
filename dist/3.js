(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/app/pages/content-pages/coming-soon/coming-soon-page.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/content-pages/coming-soon/coming-soon-page.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Coming soon starts-->\r\n<section id=\"coming-soon\">\r\n  <div class=\"container-fluid white\">\r\n    <div class=\"row full-height-vh\">\r\n      <div class=\"col-12 d-flex align-items-center justify-content-center\">\r\n        <div class=\"card box-shadow-0 no-border\">\r\n          <div class=\"card-header text-center\">\r\n            <h4 class=\"card-title text-dark\">\r\n              WE ARE LAUNCHING SOON.\r\n            </h4>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <div class=\"text-center\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                  <img alt=\"avtar\" class=\"img-fluid mb-2\" src=\"../../../../assets/img/gallery/coming-soon.png\" width=\"200\">\r\n                </div>\r\n              </div>\r\n              <div id=\"clockFlat\" class=\"getting-started pt-1 mt-2\">\r\n                <div class=\"px-3 py-3 mr-3 mb-3 d-inline-block\"> <span class=\"text-dark\">{{countdown.days}}</span> <br>\r\n                  <p class=\"lead mt-2 mb-0 text-dark\"> Days </p>\r\n                </div>\r\n                <div class=\"px-3 py-3 mr-3 mb-3 d-inline-block\"> <span class=\"text-dark\">{{countdown.hours}}</span> <br>\r\n                  <p class=\"lead mt-2 mb-0 text-dark\"> Hours </p>\r\n                </div>\r\n                <div class=\"px-3 py-3 mr-3 mb-3 d-inline-block\"> <span class=\"text-dark\">{{countdown.minutes}}</span>\r\n                  <br>\r\n                  <p class=\"lead mt-2 mb-0 text-dark\"> Minutes </p>\r\n                </div>\r\n                <div class=\"px-2 py-3 mr-3 mb-3 d-inline-block\"> <span class=\"text-dark\">{{countdown.seconds}}</span>\r\n                  <br>\r\n                  <p class=\"lead mt-2 mb-0 text-dark\"> Seconds </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"cs-text-divider\">\r\n                <hr class=\"float-left\"> <span class=\"text-dark\">Subscribe</span>\r\n                <hr class=\"float-right\">\r\n              </div>\r\n              <p class=\"mt-3 text-dark\">\r\n                If you would like to be notified when our app is live, Please subscribe to our mailing list.\r\n              </p>\r\n              <div class=\"row mx-auto\">\r\n                <div class=\"col-sm-12 mx-auto\">\r\n                  <input type=\"text\" class=\"form-control mt-3\" placeholder=\"Email\" />\r\n                  <button class=\"btn btn-lg btn-primary mt-2\">Subscribe</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Coming soon ends-->\r\n"

/***/ }),

/***/ "./src/app/pages/content-pages/coming-soon/coming-soon-page.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/content-pages/coming-soon/coming-soon-page.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#coming-soon {\n  background-image: url('light-bg.jpg');\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n#coming-soon .card-coming-soon {\n  border-radius: 0.5rem;\n}\n#coming-soon .getting-started {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n#coming-soon .cs-text-divider {\n  width: 100%;\n  text-align: center;\n}\n#coming-soon .cs-text-divider hr {\n  margin-left: auto;\n  margin-right: auto;\n  width: 40%;\n}\n#coming-soon .cs-text-divider span {\n  position: relative;\n  top: 11px;\n}\n#coming-soon .btn.btn-lg.btn-primary {\n  color: #fff !important;\n}\n@media (max-width: 540px) {\n  #coming-soon {\n    overflow: hidden;\n  }\n  #coming-soon .card-coming-soon {\n    position: relative;\n    top: -12px;\n  }\n  #coming-soon .card-coming-soon .card-header {\n    padding: 1rem;\n  }\n  #coming-soon .card-coming-soon .card-header h4.card-title {\n    font-size: 1rem;\n  }\n  #coming-soon .card-coming-soon img.img-cs {\n    width: 100px;\n  }\n  #coming-soon .card-coming-soon .cs-text-divider hr {\n    margin-left: auto;\n    margin-right: auto;\n    width: 35%;\n  }\n  #coming-soon .card-coming-soon .getting-started {\n    padding-top: 0 !important;\n    margin-top: auto !important;\n  }\n  #coming-soon .card-coming-soon .getting-started .clockCard {\n    margin-bottom: 0.5rem !important;\n  }\n  #coming-soon .card-coming-soon .getting-started .clockCard P.lead {\n    margin-top: 0 !important;\n  }\n  #coming-soon .card-coming-soon input.form-control {\n    margin-top: 0.5rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC1wYWdlcy9jb21pbmctc29vbi9GOlxcdHJhdmVsRmluYWxhcHBcXHRvdXJGcm9udGVuZC9zcmNcXGFwcFxccGFnZXNcXGNvbnRlbnQtcGFnZXNcXGNvbWluZy1zb29uXFxjb21pbmctc29vbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb250ZW50LXBhZ2VzL2NvbWluZy1zb29uL2NvbWluZy1zb29uLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUNERjtBREdFO0VBQ0UscUJBQUE7QUNESjtBRElFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0ZKO0FES0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNISjtBREtJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNITjtBRE1JO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDSk47QURRRTtFQUNFLHNCQUFBO0FDTko7QURXQTtFQUNFO0lBQ0UsZ0JBQUE7RUNSRjtFRFVFO0lBQ0Usa0JBQUE7SUFDQSxVQUFBO0VDUko7RURVSTtJQUNFLGFBQUE7RUNSTjtFRFVNO0lBQ0UsZUFBQTtFQ1JSO0VEWUk7SUFDRSxZQUFBO0VDVk47RURlTTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0VDYlI7RURpQkk7SUFDRSx5QkFBQTtJQUNBLDJCQUFBO0VDZk47RURpQk07SUFDRSxnQ0FBQTtFQ2ZSO0VEaUJRO0lBQ0Usd0JBQUE7RUNmVjtFRG9CSTtJQUNFLDZCQUFBO0VDbEJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250ZW50LXBhZ2VzL2NvbWluZy1zb29uL2NvbWluZy1zb29uLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb21pbmcgU29vblxyXG5cclxuI2NvbWluZy1zb29uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvZ2FsbGVyeS9saWdodC1iZy5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAuY2FyZC1jb21pbmctc29vbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgfVxyXG5cclxuICAuZ2V0dGluZy1zdGFydGVkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jcy10ZXh0LWRpdmlkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaHIge1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICB3aWR0aDogNDAlO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogMTFweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idG4uYnRuLWxnLmJ0bi1wcmltYXJ5IHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo1NDBweCkge1xyXG4gICNjb21pbmctc29vbiB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIC5jYXJkLWNvbWluZy1zb29uIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IC0xMnB4O1xyXG5cclxuICAgICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG5cclxuICAgICAgICBoNC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZy5pbWctY3Mge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNzLXRleHQtZGl2aWRlciB7XHJcblxyXG4gICAgICAgIGhyIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5nZXR0aW5nLXN0YXJ0ZWQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAuY2xvY2tDYXJkIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgIFAubGVhZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlucHV0LmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbiIsIiNjb21pbmctc29vbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvZ2FsbGVyeS9saWdodC1iZy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuI2NvbWluZy1zb29uIC5jYXJkLWNvbWluZy1zb29uIHtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuI2NvbWluZy1zb29uIC5nZXR0aW5nLXN0YXJ0ZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuI2NvbWluZy1zb29uIC5jcy10ZXh0LWRpdmlkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2NvbWluZy1zb29uIC5jcy10ZXh0LWRpdmlkZXIgaHIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNDAlO1xufVxuI2NvbWluZy1zb29uIC5jcy10ZXh0LWRpdmlkZXIgc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMXB4O1xufVxuI2NvbWluZy1zb29uIC5idG4uYnRuLWxnLmJ0bi1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gICNjb21pbmctc29vbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAjY29taW5nLXNvb24gLmNhcmQtY29taW5nLXNvb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xMnB4O1xuICB9XG4gICNjb21pbmctc29vbiAuY2FyZC1jb21pbmctc29vbiAuY2FyZC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbiAgI2NvbWluZy1zb29uIC5jYXJkLWNvbWluZy1zb29uIC5jYXJkLWhlYWRlciBoNC5jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgI2NvbWluZy1zb29uIC5jYXJkLWNvbWluZy1zb29uIGltZy5pbWctY3Mge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICAjY29taW5nLXNvb24gLmNhcmQtY29taW5nLXNvb24gLmNzLXRleHQtZGl2aWRlciBociB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAzNSU7XG4gIH1cbiAgI2NvbWluZy1zb29uIC5jYXJkLWNvbWluZy1zb29uIC5nZXR0aW5nLXN0YXJ0ZWQge1xuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gICNjb21pbmctc29vbiAuY2FyZC1jb21pbmctc29vbiAuZ2V0dGluZy1zdGFydGVkIC5jbG9ja0NhcmQge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gICNjb21pbmctc29vbiAuY2FyZC1jb21pbmctc29vbiAuZ2V0dGluZy1zdGFydGVkIC5jbG9ja0NhcmQgUC5sZWFkIHtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgI2NvbWluZy1zb29uIC5jYXJkLWNvbWluZy1zb29uIGlucHV0LmZvcm0tY29udHJvbCB7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/content-pages/coming-soon/coming-soon-page.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/content-pages/coming-soon/coming-soon-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ComingSoonPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonPageComponent", function() { return ComingSoonPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var ComingSoonPageComponent = /** @class */ (function () {
    function ComingSoonPageComponent() {
        this.pickDate = new Date().setMonth(new Date().getMonth() + 2);
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US');
        this.launchDate = this.datePipe.transform(this.pickDate, 'yyyy-MM-dd');
        // Set the defaults
        this.countdown = {
            weeks: '',
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        };
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ComingSoonPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currDate = moment__WEBPACK_IMPORTED_MODULE_4__();
        var launchDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.launchDate);
        var diff = launchDate.diff(currDate, 'seconds');
        this.countdown = this.calculateRemainingTime(diff);
        // Create a subscribable interval
        var countDown = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
            return diff = diff - 1;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
            return _this.calculateRemainingTime(value);
        }));
        // Subscribe to the countdown interval
        countDown
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (value) {
            _this.countdown = value;
        });
    };
    ComingSoonPageComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    ComingSoonPageComponent.prototype.calculateRemainingTime = function (seconds) {
        var timeLeft = moment__WEBPACK_IMPORTED_MODULE_4__["duration"](seconds, 'seconds');
        return {
            weeks: timeLeft.asWeeks().toFixed(0),
            days: timeLeft.asDays().toFixed(0),
            hours: timeLeft.hours(),
            minutes: timeLeft.minutes(),
            seconds: timeLeft.seconds()
        };
    };
    ComingSoonPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coming-soon-page',
            template: __webpack_require__(/*! ./coming-soon-page.component.html */ "./src/app/pages/content-pages/coming-soon/coming-soon-page.component.html"),
            styles: [__webpack_require__(/*! ./coming-soon-page.component.scss */ "./src/app/pages/content-pages/coming-soon/coming-soon-page.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ComingSoonPageComponent);
    return ComingSoonPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/content-pages/content-pages-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/content-pages/content-pages-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ContentPagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPagesRoutingModule", function() { return ContentPagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coming-soon/coming-soon-page.component */ "./src/app/pages/content-pages/coming-soon/coming-soon-page.component.ts");
/* harmony import */ var _error_error_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error/error-page.component */ "./src/app/pages/content-pages/error/error-page.component.ts");
/* harmony import */ var _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password/forgot-password-page.component */ "./src/app/pages/content-pages/forgot-password/forgot-password-page.component.ts");
/* harmony import */ var _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lock-screen/lock-screen-page.component */ "./src/app/pages/content-pages/lock-screen/lock-screen-page.component.ts");
/* harmony import */ var _login_login_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login-page.component */ "./src/app/pages/content-pages/login/login-page.component.ts");
/* harmony import */ var _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./maintenance/maintenance-page.component */ "./src/app/pages/content-pages/maintenance/maintenance-page.component.ts");
/* harmony import */ var _register_register_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register-page.component */ "./src/app/pages/content-pages/register/register-page.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/pages/content-pages/reset-password/reset-password.component.ts");











var routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            {
                path: 'comingsoon',
                component: _coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_3__["ComingSoonPageComponent"],
                data: {
                    title: 'Coming Soon page'
                }
            },
            {
                path: 'error',
                component: _error_error_page_component__WEBPACK_IMPORTED_MODULE_4__["ErrorPageComponent"],
                data: {
                    title: 'Error Page'
                }
            },
            {
                path: 'forgotpassword',
                component: _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPageComponent"],
                data: {
                    title: 'Forgot Password Page'
                }
            },
            {
                path: 'resetpassword',
                component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordComponent"],
                data: {
                    title: 'ResetPassword Page'
                }
            },
            {
                path: 'lockscreen',
                component: _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_6__["LockScreenPageComponent"],
                data: {
                    title: 'Lock Screen page'
                }
            },
            {
                path: 'login',
                component: _login_login_page_component__WEBPACK_IMPORTED_MODULE_7__["LoginPageComponent"],
                data: {
                    title: 'login'
                }
            },
            {
                path: 'maintenance',
                component: _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_8__["MaintenancePageComponent"],
                data: {
                    title: 'Maintenance Page'
                }
            },
            {
                path: 'register',
                component: _register_register_page_component__WEBPACK_IMPORTED_MODULE_9__["RegisterPageComponent"],
                data: {
                    title: 'Register Page'
                }
            },
        ]
    }
];
var ContentPagesRoutingModule = /** @class */ (function () {
    function ContentPagesRoutingModule() {
    }
    ContentPagesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ContentPagesRoutingModule);
    return ContentPagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/content-pages/content-pages.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/content-pages/content-pages.module.ts ***!
  \*************************************************************/
/*! exports provided: ContentPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPagesModule", function() { return ContentPagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _content_pages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content-pages-routing.module */ "./src/app/pages/content-pages/content-pages-routing.module.ts");
/* harmony import */ var _coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coming-soon/coming-soon-page.component */ "./src/app/pages/content-pages/coming-soon/coming-soon-page.component.ts");
/* harmony import */ var _error_error_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error/error-page.component */ "./src/app/pages/content-pages/error/error-page.component.ts");
/* harmony import */ var _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forgot-password/forgot-password-page.component */ "./src/app/pages/content-pages/forgot-password/forgot-password-page.component.ts");
/* harmony import */ var _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lock-screen/lock-screen-page.component */ "./src/app/pages/content-pages/lock-screen/lock-screen-page.component.ts");
/* harmony import */ var _login_login_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login-page.component */ "./src/app/pages/content-pages/login/login-page.component.ts");
/* harmony import */ var _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./maintenance/maintenance-page.component */ "./src/app/pages/content-pages/maintenance/maintenance-page.component.ts");
/* harmony import */ var _register_register_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register-page.component */ "./src/app/pages/content-pages/register/register-page.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/pages/content-pages/reset-password/reset-password.component.ts");




// import 'hammerjs';












var ContentPagesModule = /** @class */ (function () {
    function ContentPagesModule() {
    }
    ContentPagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _content_pages_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContentPagesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
            ],
            declarations: [
                _coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_6__["ComingSoonPageComponent"],
                _error_error_page_component__WEBPACK_IMPORTED_MODULE_7__["ErrorPageComponent"],
                _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordPageComponent"],
                _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_9__["LockScreenPageComponent"],
                _login_login_page_component__WEBPACK_IMPORTED_MODULE_10__["LoginPageComponent"],
                _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_11__["MaintenancePageComponent"],
                _register_register_page_component__WEBPACK_IMPORTED_MODULE_12__["RegisterPageComponent"],
                _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_14__["ResetPasswordComponent"]
            ],
        })
    ], ContentPagesModule);
    return ContentPagesModule;
}());



/***/ }),

/***/ "./src/app/pages/content-pages/error/error-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/content-pages/error/error-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Error page starts-->\r\n<section id=\"error\">\r\n  <div class=\"container-fluid forgot-password-bg\">\r\n    <div class=\"row full-height-vh\">\r\n      <div class=\"col-12 d-flex align-items-center justify-content-center\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12 text-center\">\r\n            <img src=\"../../assets/img/gallery/error.png\" alt=\"\" class=\"img-fluid error-img mt-2\" height=\"300\" width=\"400\">\r\n            <h1 class=\"text-white mt-4\">404 - Page Not Found!</h1>\r\n            <div class=\"error-text w-75 mx-auto mt-4\">\r\n              <p class=\"text-white\">paraphonic unassessable foramination Caulopteris worral Spirophyton\r\n                encrimson esparcet aggerate chondrule restate whistler shallopy biosystematy area\r\n                bertram plotting unstarting.</p>\r\n            </div>\r\n            <button class=\"btn btn-primary btn-lg mt-3\"><a [routerLink]=\"['/']\" class=\"text-decoration-none text-white\">Back\r\n                To Home</a></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Error page ends-->\r\n"

/***/ }),

/***/ "./src/app/pages/content-pages/error/error-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/content-pages/error/error-page.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#error {\n  background-image: url('light-bg.jpg');\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n\n@media (max-width: 768px) {\n  #error .error-img {\n    width: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC1wYWdlcy9lcnJvci9GOlxcdHJhdmVsRmluYWxhcHBcXHRvdXJGcm9udGVuZC9zcmNcXGFwcFxccGFnZXNcXGNvbnRlbnQtcGFnZXNcXGVycm9yXFxlcnJvci1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb250ZW50LXBhZ2VzL2Vycm9yL2Vycm9yLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxxQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUNBRjs7QURHQTtFQUVJO0lBQ0UsWUFBQTtFQ0RKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250ZW50LXBhZ2VzL2Vycm9yL2Vycm9yLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFcnJvclxyXG4jZXJyb3Ige1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9nYWxsZXJ5L2xpZ2h0LWJnLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAjZXJyb3Ige1xyXG4gICAgLmVycm9yLWltZyB7XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiI2Vycm9yIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9nYWxsZXJ5L2xpZ2h0LWJnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjZXJyb3IgLmVycm9yLWltZyB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/content-pages/error/error-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/content-pages/error/error-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/pages/content-pages/error/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.scss */ "./src/app/pages/content-pages/error/error-page.component.scss")]
        })
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/content-pages/forgot-password/forgot-password-page.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/content-pages/forgot-password/forgot-password-page.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Forgot Password Starts-->\r\n<section id=\"forgot-password\">\r\n  <div class=\"container-fluid forgot-password-bg\">\r\n    <div\r\n      class=\"row full-height-vh m-0  d-flex align-items-center justify-content-center\"\r\n    >\r\n      <div class=\"col-md-7 col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-content\">\r\n            <div class=\"card-body fg-image\">\r\n              <div class=\"row m-0\">\r\n                <div class=\"col-lg-6 d-none d-lg-block text-center py-3\">\r\n                  <img\r\n                    src=\"../../../../assets/img/gallery/forgot.png\"\r\n                    alt=\"\"\r\n                    class=\"img-fluid\"\r\n                    width=\"300\"\r\n                    height=\"230\"\r\n                  />\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-12 bg-white px-4 pt-3\">\r\n                    <h4 class=\"card-title mb-2\">إستعادة كلمة المرور</h4>\r\n                    <p class=\"card-text mb-3\">\r\n                       الرجاء ادخال الايميل وسنقوم بإرسال رابط إستعادة كلمة المرور\r\n                    </p>\r\n                    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"authForm\">\r\n                        <app-input inputType=\"text\"\r\n                                   label=\"البريد الالكتروني\"\r\n                                   [control]=\"authForm.get('email')\"></app-input>\r\n\r\n                      \r\n                        <div class=\"fg-actions d-flex justify-content-between\">\r\n                            <div class=\"login-btn\">\r\n                                <button class=\"btn btn-outline-primary\">\r\n                                    <a class=\"text-decoration-none\"\r\n                                       [routerLink]=\"['/content-pages/login']\">العودة لصفحة الدخول</a>\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"recover-pass\">\r\n                                <button class=\"btn btn-primary text-decoration-none text-white\">\r\n                                        إستعادة كلمة المرور\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Forgot Password Ends-->\r\n"

/***/ }),

/***/ "./src/app/pages/content-pages/forgot-password/forgot-password-page.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/content-pages/forgot-password/forgot-password-page.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#forgot-password .forgot-password-bg {\n  background-image: url('light-bg.jpg');\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n#forgot-password .fg-image {\n  padding: 0;\n  background: #f0f0f0;\n}\n#forgot-password .login-btn .btn.btn-outline-primary:hover a {\n  color: #fff;\n}\n#forgot-password .recover-pass button.btn.btn-primary {\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC1wYWdlcy9mb3Jnb3QtcGFzc3dvcmQvRjpcXHRyYXZlbEZpbmFsYXBwXFx0b3VyRnJvbnRlbmQvc3JjXFxhcHBcXHBhZ2VzXFxjb250ZW50LXBhZ2VzXFxmb3Jnb3QtcGFzc3dvcmRcXGZvcmdvdC1wYXNzd29yZC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb250ZW50LXBhZ2VzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLHFDQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQ0ZKO0FES0U7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUNISjtBRFVRO0VBQ0UsV0FBQTtBQ1JWO0FEZUk7RUFDRSxzQkFBQTtBQ2JOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGVudC1wYWdlcy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb3Jnb3QgUGFzc3dvcmRcclxuXHJcbiNmb3Jnb3QtcGFzc3dvcmQge1xyXG4gIC5mb3Jnb3QtcGFzc3dvcmQtYmcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9nYWxsZXJ5L2xpZ2h0LWJnLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB9XHJcblxyXG4gIC5mZy1pbWFnZSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcclxuICB9XHJcblxyXG5cclxuICAubG9naW4tYnRuIHtcclxuICAgIC5idG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucmVjb3Zlci1wYXNzIHtcclxuICAgIGJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xyXG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIjZm9yZ290LXBhc3N3b3JkIC5mb3Jnb3QtcGFzc3dvcmQtYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2dhbGxlcnkvbGlnaHQtYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbiNmb3Jnb3QtcGFzc3dvcmQgLmZnLWltYWdlIHtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbn1cbiNmb3Jnb3QtcGFzc3dvcmQgLmxvZ2luLWJ0biAuYnRuLmJ0bi1vdXRsaW5lLXByaW1hcnk6aG92ZXIgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuI2ZvcmdvdC1wYXNzd29yZCAucmVjb3Zlci1wYXNzIGJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/content-pages/forgot-password/forgot-password-page.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/content-pages/forgot-password/forgot-password-page.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ForgotPasswordPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageComponent", function() { return ForgotPasswordPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");






var ForgotPasswordPageComponent = /** @class */ (function () {
    function ForgotPasswordPageComponent(router, authService, toastr, route) {
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
        this.route = route;
        this.authForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
            ])
        });
    }
    // On reset click, reset form fields
    ForgotPasswordPageComponent.prototype.onReset = function () {
        this.forogtPasswordForm.reset();
    };
    // On login link click
    ForgotPasswordPageComponent.prototype.onLogin = function () {
        this.router.navigate(['login'], { relativeTo: this.route.parent });
    };
    // On registration link click
    ForgotPasswordPageComponent.prototype.onRegister = function () {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    };
    // On submit link click
    ForgotPasswordPageComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.authForm.invalid) {
            return;
        }
        console.log(this.authForm.value);
        this.authService.forgotPassword(this.authForm.value).subscribe(function (data) {
            _this.toastr.success('تم ارسال رابط استعادة كلمة المرور الي الايميل');
        }, function (error) {
            if (error.error.message === "There is no user with email address.") {
                _this.toastr.error('لا يوجد في سجلاتنا مستخدم بهذا الايميل');
            }
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], ForgotPasswordPageComponent.prototype, "forogtPasswordForm", void 0);
    ForgotPasswordPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password-page',
            template: __webpack_require__(/*! ./forgot-password-page.component.html */ "./src/app/pages/content-pages/forgot-password/forgot-password-page.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password-page.component.scss */ "./src/app/pages/content-pages/forgot-password/forgot-password-page.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ForgotPasswordPageComponent);
    return ForgotPasswordPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/content-pages/lock-screen/lock-screen-page.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/content-pages/lock-screen/lock-screen-page.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Lock Screen Starts-->\r\n<section id=\"lock-screen\">\r\n  <div class=\"container-fluid forgot-password-bg\">\r\n    <div class=\"row full-height-vh m-0\">\r\n      <div class=\"col-12 d-flex align-items-center justify-content-center\">\r\n        <div class=\"card\">\r\n          <div class=\"card-content\">\r\n            <div class=\"card-body lock-screen-img\">\r\n              <div class=\"row m-0\">\r\n                <div class=\"col-lg-6 d-lg-block d-none text-center py-2\">\r\n                  <img\r\n                    src=\"../../assets/img/gallery/lock.png\"\r\n                    alt=\"\"\r\n                    class=\"img-fluid\"\r\n                    height=\"230\"\r\n                    width=\"400\"\r\n                  />\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-12 pt-3 px-4 bg-white\">\r\n                  <h4 class=\"card-title mb-3\">\r\n                    Your Session is locked\r\n                  </h4>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control mb-3\"\r\n                    placeholder=\"Email\"\r\n                  />\r\n                  <input\r\n                    type=\"password\"\r\n                    class=\"form-control mb-3\"\r\n                    placeholder=\"password\"\r\n                  />\r\n                  <div class=\"fg-actions d-flex justify-content-between\">\r\n                    <div class=\"login-btn\">\r\n                      <button\r\n                        class=\"btn btn-link text-decoration-none text-primary\"\r\n                      >\r\n                        Are You Not John Doe ?\r\n                      </button>\r\n                    </div>\r\n                    <div class=\"recover-pass\">\r\n                      <button class=\"btn btn-primary\">\r\n                        <a\r\n                          class=\"text-decoration-none text-white\"\r\n                          [routerLink]=\"['/dashboard/dashboard1']\"\r\n                        >\r\n                          Unlock\r\n                        </a>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Lock Screen Ends-->\r\n"

/***/ }),

/***/ "./src/app/pages/content-pages/lock-screen/lock-screen-page.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/content-pages/lock-screen/lock-screen-page.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#lock-screen {\n  background-image: url('light-bg.jpg');\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n#lock-screen .lock-screen-img {\n  background: #f0f0f0;\n  padding: 0;\n}\n#lock-screen .btn.btn-link.text-decoration-none:hover {\n  text-decoration: none !important;\n}\n#lock-screen .login-btn .btn.btn-link {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC1wYWdlcy9sb2NrLXNjcmVlbi9GOlxcdHJhdmVsRmluYWxhcHBcXHRvdXJGcm9udGVuZC9zcmNcXGFwcFxccGFnZXNcXGNvbnRlbnQtcGFnZXNcXGxvY2stc2NyZWVuXFxsb2NrLXNjcmVlbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb250ZW50LXBhZ2VzL2xvY2stc2NyZWVuL2xvY2stc2NyZWVuLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUNERjtBREdFO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FDREo7QURLSTtFQUNFLGdDQUFBO0FDSE47QURRSTtFQUNFLGVBQUE7QUNOTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQtcGFnZXMvbG9jay1zY3JlZW4vbG9jay1zY3JlZW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvcmdvdCBQYXNzd29yZFxyXG5cclxuI2xvY2stc2NyZWVuIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2dhbGxlcnkvbGlnaHQtYmcuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gIC5sb2NrLXNjcmVlbi1pbWcge1xyXG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAuYnRuLmJ0bi1saW5rLnRleHQtZGVjb3JhdGlvbi1ub25lIHtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sb2dpbi1idG4ge1xyXG4gICAgLmJ0bi5idG4tbGluayB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiI2xvY2stc2NyZWVuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9nYWxsZXJ5L2xpZ2h0LWJnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4jbG9jay1zY3JlZW4gLmxvY2stc2NyZWVuLWltZyB7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gIHBhZGRpbmc6IDA7XG59XG4jbG9jay1zY3JlZW4gLmJ0bi5idG4tbGluay50ZXh0LWRlY29yYXRpb24tbm9uZTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuI2xvY2stc2NyZWVuIC5sb2dpbi1idG4gLmJ0bi5idG4tbGluayB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/content-pages/lock-screen/lock-screen-page.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/content-pages/lock-screen/lock-screen-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LockScreenPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockScreenPageComponent", function() { return LockScreenPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var LockScreenPageComponent = /** @class */ (function () {
    function LockScreenPageComponent() {
    }
    LockScreenPageComponent.prototype.onSubmit = function () {
        this.lockScreenForm.reset();
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], LockScreenPageComponent.prototype, "lockScreenForm", void 0);
    LockScreenPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lock-screen-page',
            template: __webpack_require__(/*! ./lock-screen-page.component.html */ "./src/app/pages/content-pages/lock-screen/lock-screen-page.component.html"),
            styles: [__webpack_require__(/*! ./lock-screen-page.component.scss */ "./src/app/pages/content-pages/lock-screen/lock-screen-page.component.scss")]
        })
    ], LockScreenPageComponent);
    return LockScreenPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/content-pages/login/login-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/content-pages/login/login-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Login Page Starts-->\r\n<section id=\"login\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row full-height-vh m-0\">\r\n      <div class=\"col-12 d-flex align-items-center justify-content-center\">\r\n        <div class=\"card\">\r\n          <div class=\"card-content\">\r\n            <div class=\"card-body login-img\">\r\n              <div class=\"row m-0\">\r\n                <div\r\n                  class=\"col-lg-6 d-lg-block d-none py-2 px-3 text-center align-middle\"\r\n                >\r\n                  <img\r\n                    src=\"../../assets/img/gallery/login.png\"\r\n                    alt=\"\"\r\n                    class=\"img-fluid mt-5\"\r\n                    width=\"400\"\r\n                    height=\"230\"\r\n                  />\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-12 bg-white px-4 pt-3\">\r\n                    <h4 class=\"card-title mb-2\">الدخول</h4>\r\n                    <p class=\"card-text mb-3\">\r\n                       مرحبا الرجاء تسجيل الدخول\r\n                    </p>\r\n                    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"authForm\">\r\n                        <app-input inputType=\"text\"\r\n                                   label=\"البريد الالكتروني\"\r\n                                   [control]=\"authForm.get('email')\"></app-input>\r\n\r\n                        <app-input inputType=\"password\"\r\n                                   label=\"كلمة المرور\"\r\n                                   [control]=\"authForm.get('password')\"></app-input>\r\n\r\n                        <div class=\"d-flex justify-content-between mt-2\">\r\n                            <div class=\"remember-me\">\r\n                                <div class=\"custom-control custom-checkbox custom-control-inline mb-3\">\r\n                                    <input type=\"checkbox\"\r\n                                           id=\"customCheckboxInline1\"\r\n                                           name=\"customCheckboxInline1\"\r\n                                           class=\"custom-control-input\" />\r\n                                    <label class=\"custom-control-label\"\r\n                                           for=\"customCheckboxInline1\">\r\n                                       تذكرني\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"forgot-password-option\">\r\n                                <a [routerLink]=\"['/content-pages/forgotpassword']\"\r\n                                   class=\"text-decoration-none text-primary\">هل نسيت كلمة المرور؟</a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"fg-actions d-flex justify-content-between\">\r\n                            <!-- <div class=\"login-btn\">\r\n                                <button class=\"btn btn-outline-primary\">\r\n                                    <a [routerLink]=\"['/content-pages/register']\"\r\n                                       class=\"text-decoration-none\">ليس لديك حساب؟</a>\r\n                                </button>\r\n                            </div> -->\r\n                            <div class=\"recover-pass\">\r\n                                <button class=\"btn btn-primary\">\r\n                                    <a class=\"text-decoration-none text-white\">\r\n                                        حفظ\r\n                                    </a>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"d-flex justify-content-between mt-3\">\r\n                            <div class=\"option-login\">\r\n                                <h6 class=\"text-decoration-none text-primary\">\r\n                                    Or Login With\r\n                                </h6>\r\n                            </div>\r\n                            <div class=\"social-login-options\">\r\n                                <a class=\"btn btn-social-icon mr-2 btn-facebook\">\r\n                                    <span class=\"fa fa-facebook\"></span>\r\n                                </a>\r\n                                <a class=\"btn btn-social-icon mr-2 btn-twitter\">\r\n                                    <span class=\"fa fa-twitter\"></span>\r\n                                </a>\r\n                            </div>\r\n                        </div> -->\r\n                        </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Login Page Ends-->\r\n"

/***/ }),

/***/ "./src/app/pages/content-pages/login/login-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/content-pages/login/login-page.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login {\n  background-image: url('light-bg.jpg');\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n#login .login-img {\n  padding: 0;\n  background: #f0f0f0;\n}\n#login .login-btn .btn.btn-outline-primary:hover a {\n  color: #fff;\n}\n#login .recover-pass button.btn.btn-primary {\n  color: #fff !important;\n}\n#login .forgot-password-option a.text-decoration-none,\n#login .forgot-password-option .custom-control-label,\n#login .remember-me a.text-decoration-none,\n#login .remember-me .custom-control-label {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC1wYWdlcy9sb2dpbi9GOlxcdHJhdmVsRmluYWxhcHBcXHRvdXJGcm9udGVuZC9zcmNcXGFwcFxccGFnZXNcXGNvbnRlbnQtcGFnZXNcXGxvZ2luXFxsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb250ZW50LXBhZ2VzL2xvZ2luL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUNERjtBREdFO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FDREo7QURPUTtFQUNFLFdBQUE7QUNMVjtBRFlJO0VBQ0Usc0JBQUE7QUNWTjtBRGlCSTs7OztFQUVFLGVBQUE7QUNiTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQtcGFnZXMvbG9naW4vbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExvZ2luIFBhZ2VcclxuXHJcbiNsb2dpbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2dhbGxlcnkvbGlnaHQtYmcuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgLmxvZ2luLWltZyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1idG4ge1xyXG4gICAgLmJ0bi5idG4tb3V0bGluZS1wcmltYXJ5IHtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yZWNvdmVyLXBhc3Mge1xyXG4gICAgYnV0dG9uLmJ0bi5idG4tcHJpbWFyeSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9yZ290LXBhc3N3b3JkLW9wdGlvbixcclxuICAucmVtZW1iZXItbWUge1xyXG5cclxuICAgIGEudGV4dC1kZWNvcmF0aW9uLW5vbmUsXHJcbiAgICAuY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiNsb2dpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvZ2FsbGVyeS9saWdodC1iZy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuI2xvZ2luIC5sb2dpbi1pbWcge1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xufVxuI2xvZ2luIC5sb2dpbi1idG4gLmJ0bi5idG4tb3V0bGluZS1wcmltYXJ5OmhvdmVyIGEge1xuICBjb2xvcjogI2ZmZjtcbn1cbiNsb2dpbiAucmVjb3Zlci1wYXNzIGJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuI2xvZ2luIC5mb3Jnb3QtcGFzc3dvcmQtb3B0aW9uIGEudGV4dC1kZWNvcmF0aW9uLW5vbmUsXG4jbG9naW4gLmZvcmdvdC1wYXNzd29yZC1vcHRpb24gLmN1c3RvbS1jb250cm9sLWxhYmVsLFxuI2xvZ2luIC5yZW1lbWJlci1tZSBhLnRleHQtZGVjb3JhdGlvbi1ub25lLFxuI2xvZ2luIC5yZW1lbWJlci1tZSAuY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/content-pages/login/login-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/content-pages/login/login-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");






var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(router, authService, toastr, route) {
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
        this.route = route;
        this.authForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(80),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40)
            ]),
        });
    }
    // On submit button click    
    LoginPageComponent.prototype.onReset = function () {
        this.loginForm.reset();
    };
    // On Forgot password link click
    LoginPageComponent.prototype.onForgotPassword = function () {
        this.router.navigate(['content-pages/forgotpassword'], { relativeTo: this.route.parent });
    };
    // On registration link click
    LoginPageComponent.prototype.onRegister = function () {
        this.router.navigate(['content-pages/register'], { relativeTo: this.route.parent });
    };
    // On login link click
    LoginPageComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.authForm.invalid) {
            return;
        }
        console.log(this.authForm.value);
        this.authService.SignIn(this.authForm.value).subscribe({
            next: function (response) {
                if (response === null) {
                    _this.toastr.error('الايميل أو كلمة المرور غير صحيحة');
                }
                _this.token = response;
                localStorage.setItem('loggedUser', JSON.stringify(_this.token));
                var userToken = localStorage.setItem('token', _this.token);
                _this.router.navigate(['/full-layout/dashboard/dashboard1']);
            },
            error: function (err) {
                console.log(err);
                _this.router.navigate(['/content-pages/login']);
                if (!err.status) {
                    _this.authForm.setErrors({ noConnection: true });
                    _this.toastr.error('معلومات الدخول غير صحيحة');
                }
                else {
                    _this.toastr.error('معلومات الدخول غير صحيحة');
                    _this.authForm.setErrors({ unknownError: true });
                }
            }
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], LoginPageComponent.prototype, "loginForm", void 0);
    LoginPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/pages/content-pages/login/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.scss */ "./src/app/pages/content-pages/login/login-page.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/content-pages/maintenance/maintenance-page.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/content-pages/maintenance/maintenance-page.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Under Maintenance Starts-->\r\n<section id=\"maintenance\" class=\"full-height-vh\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row full-height-vh\">\r\n      <div class=\"col-12 d-flex align-items-center justify-content-center\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12 text-center\">\r\n            <img src=\"../../../../assets/img/gallery/maintenance.png\" alt=\"\" class=\"img-fluid maintenance-img mt-2\"\r\n              height=\"300\" width=\"400\">\r\n            <h1 class=\"text-white mt-4\">Under Maintenance!</h1>\r\n            <div class=\"w-75 mx-auto maintenance-text mt-3\">\r\n              <p class=\"text-white\">paraphonic unassessable foramination Caulopteris worral Spirophyton\r\n                encrimson esparcet aggerate chondrule restate whistler shallopy biosystematy area\r\n                bertram plotting unstarting quarterstaff.\r\n              </p>\r\n            </div>\r\n            <button class=\"btn btn-primary btn-lg mt-4\"><a href=\"dashboard1.html\" class=\"text-decoration-none text-white\">Back\r\n                To Home</a></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Under Maintenance Starts-->\r\n"

/***/ }),

/***/ "./src/app/pages/content-pages/maintenance/maintenance-page.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/content-pages/maintenance/maintenance-page.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#maintenance {\n  background-image: url('light-bg.jpg');\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n\n@media (max-width: 768px) {\n  #maintenance .maintenance-img {\n    width: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC1wYWdlcy9tYWludGVuYW5jZS9GOlxcdHJhdmVsRmluYWxhcHBcXHRvdXJGcm9udGVuZC9zcmNcXGFwcFxccGFnZXNcXGNvbnRlbnQtcGFnZXNcXG1haW50ZW5hbmNlXFxtYWludGVuYW5jZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb250ZW50LXBhZ2VzL21haW50ZW5hbmNlL21haW50ZW5hbmNlLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUNERjs7QURJQTtFQUVJO0lBQ0UsWUFBQTtFQ0ZKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250ZW50LXBhZ2VzL21haW50ZW5hbmNlL21haW50ZW5hbmNlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNYWludGVuYW5jZVxyXG5cclxuI21haW50ZW5hbmNlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvZ2FsbGVyeS9saWdodC1iZy5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICNtYWludGVuYW5jZSB7XHJcbiAgICAubWFpbnRlbmFuY2UtaW1nIHtcclxuICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIjbWFpbnRlbmFuY2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2dhbGxlcnkvbGlnaHQtYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNtYWludGVuYW5jZSAubWFpbnRlbmFuY2UtaW1nIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/content-pages/maintenance/maintenance-page.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/content-pages/maintenance/maintenance-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MaintenancePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenancePageComponent", function() { return MaintenancePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MaintenancePageComponent = /** @class */ (function () {
    function MaintenancePageComponent() {
    }
    MaintenancePageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maintenance-page',
            template: __webpack_require__(/*! ./maintenance-page.component.html */ "./src/app/pages/content-pages/maintenance/maintenance-page.component.html"),
            styles: [__webpack_require__(/*! ./maintenance-page.component.scss */ "./src/app/pages/content-pages/maintenance/maintenance-page.component.scss")]
        })
    ], MaintenancePageComponent);
    return MaintenancePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/content-pages/match-password.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/content-pages/match-password.ts ***!
  \*******************************************************/
/*! exports provided: MatchPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchPassword", function() { return MatchPassword; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MatchPassword = /** @class */ (function () {
    function MatchPassword() {
    }
    MatchPassword.prototype.validate = function (formGroup) {
        var _a = formGroup.value, password = _a.password, passwordConfirmation = _a.passwordConfirmation;
        if (password === passwordConfirmation) {
            return null;
        }
        else {
            return { passwordsDontMatch: true };
        }
    };
    MatchPassword = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], MatchPassword);
    return MatchPassword;
}());



/***/ }),

/***/ "./src/app/pages/content-pages/register/register-page.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/content-pages/register/register-page.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section id=\"regestration\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row full-height-vh m-0\">\r\n      <div class=\"col-12 d-flex align-items-center justify-content-center\">\r\n        <div class=\"card\">\r\n          <div class=\"card-content\">\r\n            <div class=\"card-body register-img\">\r\n              <div class=\"row m-0\">\r\n                <div class=\"col-lg-6 d-none d-lg-block py-2 px-3 text-center\">\r\n                  <img\r\n                    src=\"../../assets/img/gallery/register.png\"\r\n                    alt=\"\"\r\n                    class=\"img-fluid mt-3 pl-3\"\r\n                    width=\"400\"\r\n                    height=\"230\"\r\n                  />\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-12 pt-3 px-4 bg-white\">\r\n                  <h4 class=\"card-title mb-2\">Create Account</h4>\r\n                  <p class=\"card-text mb-3\">\r\n                    Fill the below form to create a new account.\r\n                  </p>\r\n                  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"authForm\">\r\n                      <app-input inputType=\"text\"\r\n                                 label=\"name\"\r\n                                 [control]=\"authForm.get('name')\"></app-input>\r\n\r\n                      <app-input inputType=\"text\"\r\n                                 label=\"email\"\r\n                                 [control]=\"authForm.get('email')\"></app-input>\r\n\r\n                      <app-input inputType=\"password\"\r\n                                 label=\"Password\"\r\n                                 [control]=\"authForm.get('password')\"></app-input>\r\n\r\n                      <app-input inputType=\"password\"\r\n                                 label=\"Password Confirmation\"\r\n                                 [control]=\"authForm.get('passwordConfirmation')\"></app-input>\r\n\r\n                      <div *ngIf=\"\r\n                              authForm.get('password').touched && authForm.get('passwordConfirmation').touched && authForm.errors\"\r\n                           class=\"ui red basic label\">\r\n                          <p *ngIf=\"authForm.errors.passwordsDontMatch\">\r\n                              Password and Password Confirmation must match\r\n                          </p>\r\n                          <p *ngIf=\"authForm.errors.noConnection\">\r\n                              No internet connection detected, failed to sign up\r\n                          </p>\r\n                          <p *ngIf=\"authForm.errors.unknownError\">\r\n                              Failed to sign up\r\n                          </p>\r\n                      </div>\r\n\r\n\r\n                      <div class=\"custom-control custom-checkbox custom-control-inline mb-3\">\r\n                          <input type=\"checkbox\"\r\n                                 id=\"customCheckboxInline1\"\r\n                                 name=\"customCheckboxInline1\"\r\n                                 class=\"custom-control-input\"\r\n                                 checked />\r\n                          <label class=\"custom-control-label\"\r\n                                 for=\"customCheckboxInline1\">\r\n                              I accept the terms & conditions.\r\n                          </label>\r\n                      </div>\r\n\r\n                      <div class=\"fg-actions d-flex justify-content-between\">\r\n                          <div class=\"login-btn\">\r\n                              <button class=\"btn btn-outline-primary\">\r\n                                  <a href=\"login-page.html\"\r\n                                     class=\"text-decoration-none\"\r\n                                     [routerLink]=\"['/pages/login']\">\r\n                                      Back To Login\r\n                                  </a>\r\n                              </button>\r\n                          </div>\r\n\r\n\r\n                          <div class=\"recover-pass\">\r\n                              <button class=\"btn btn-primary\">\r\n                                  <a class=\"text-decoration-none text-white\">\r\n                                      Register\r\n                                  </a>\r\n                              </button>\r\n                          </div>\r\n                      </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Registration Page Ends-->\r\n"

/***/ }),

/***/ "./src/app/pages/content-pages/register/register-page.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/content-pages/register/register-page.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#regestration {\n  background-image: url('light-bg.jpg');\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n#regestration .register-img {\n  background: #f0f0f0;\n  padding: 0;\n}\n#regestration .login-btn .btn.btn-outline-primary:hover a {\n  color: #fff;\n}\n#regestration .recover-pass button.btn.btn-primary {\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC1wYWdlcy9yZWdpc3Rlci9GOlxcdHJhdmVsRmluYWxhcHBcXHRvdXJGcm9udGVuZC9zcmNcXGFwcFxccGFnZXNcXGNvbnRlbnQtcGFnZXNcXHJlZ2lzdGVyXFxyZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb250ZW50LXBhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUNERjtBREdFO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FDREo7QURPUTtFQUNFLFdBQUE7QUNMVjtBRFlJO0VBQ0Usc0JBQUE7QUNWTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQtcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXItcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvciBSZWdpc3RyYXRpb24gcGFnZVxyXG5cclxuI3JlZ2VzdHJhdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9nYWxsZXJ5L2xpZ2h0LWJnLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAucmVnaXN0ZXItaW1nIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWJ0biB7XHJcbiAgICAuYnRuLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJlY292ZXItcGFzcyB7XHJcbiAgICBidXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcclxuICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiI3JlZ2VzdHJhdGlvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvZ2FsbGVyeS9saWdodC1iZy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuI3JlZ2VzdHJhdGlvbiAucmVnaXN0ZXItaW1nIHtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgcGFkZGluZzogMDtcbn1cbiNyZWdlc3RyYXRpb24gLmxvZ2luLWJ0biAuYnRuLmJ0bi1vdXRsaW5lLXByaW1hcnk6aG92ZXIgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuI3JlZ2VzdHJhdGlvbiAucmVjb3Zlci1wYXNzIGJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/content-pages/register/register-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/content-pages/register/register-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _match_password__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../match-password */ "./src/app/pages/content-pages/match-password.ts");





var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent(matchPassword, authService) {
        this.matchPassword = matchPassword;
        this.authService = authService;
        this.authForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20),
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)
            ]),
            passwordConfirmation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)
            ])
        }, { validators: [this.matchPassword.validate] });
    }
    //  On submit click, reset field value
    RegisterPageComponent.prototype.onSubmits = function () {
        this.registerForm.reset();
    };
    RegisterPageComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.authForm.invalid) {
            return;
        }
        this.authService.SignUp(this.authForm.value).subscribe({
            next: function (response) {
                console.log(response);
                // Navigate to some other route
            },
            error: function (err) {
                console.log(err);
                if (!err.status) {
                    _this.authForm.setErrors({ noConnection: true });
                }
                else {
                    _this.authForm.setErrors({ unknownError: true });
                }
            }
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], RegisterPageComponent.prototype, "registerForm", void 0);
    RegisterPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-page',
            template: __webpack_require__(/*! ./register-page.component.html */ "./src/app/pages/content-pages/register/register-page.component.html"),
            styles: [__webpack_require__(/*! ./register-page.component.scss */ "./src/app/pages/content-pages/register/register-page.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_match_password__WEBPACK_IMPORTED_MODULE_4__["MatchPassword"],
            _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/content-pages/reset-password/reset-password.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/content-pages/reset-password/reset-password.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section id=\"regestration\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row full-height-vh m-0\">\r\n            <div class=\"col-12 d-flex align-items-center justify-content-center\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-content\">\r\n                        <div class=\"card-body register-img\">\r\n                            <div class=\"row m-0\">\r\n                                <div class=\"col-lg-6 d-none d-lg-block py-2 px-3 text-center\">\r\n                                    <img src=\"../../assets/img/gallery/register.png\"\r\n                                         alt=\"\"\r\n                                         class=\"img-fluid mt-3 pl-3\"\r\n                                         width=\"400\"\r\n                                         height=\"230\" />\r\n                                </div>\r\n                                <div class=\"col-lg-6 col-md-12 pt-3 px-4 bg-white\">\r\n                                    <h4 class=\"card-title mb-2\">كلمة مرور جديدة</h4>\r\n                                    <p class=\"card-text mb-3\">\r\n                                       \r\n                                    </p>\r\n                                    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"authForm\">\r\n                                        <app-input inputType=\"password\"\r\n                                                   label=\"كلمة المرور الجديدة\"\r\n                                                   [control]=\"authForm.get('password')\"></app-input>\r\n\r\n                                        <app-input inputType=\"password\"\r\n                                                   label=\"تأكيد كلمة المرور\"\r\n                                                   [control]=\"authForm.get('passwordConfirmation')\"></app-input>\r\n\r\n                                        <div *ngIf=\"\r\n                                         authForm.get('password').touched && authForm.get('passwordConfirmation').touched && authForm.errors\"\r\n                                             class=\"ui red basic label\">\r\n                                            <p *ngIf=\"authForm.errors.passwordsDontMatch\">\r\n                                                كلمة المرور وتأكيد كلمة المرور غير متطابقان\r\n                                            </p>\r\n                                        </div>\r\n\r\n                                      \r\n                                        <div class=\"fg-actions d-flex justify-content-between\">\r\n                                            <div class=\"login-btn\">\r\n                                                <button class=\"btn btn-outline-primary\">\r\n                                                    <a href=\"login-page.html\"\r\n                                                       class=\"text-decoration-none\"\r\n                                                       [routerLink]=\"['/content-pages/login']\">\r\n                                                       العودة لصفحة الدخول\r\n                                                    </a>\r\n                                                </button>\r\n                                            </div>\r\n\r\n\r\n                                            <div class=\"recover-pass\">\r\n                                                <button class=\"btn btn-primary\">\r\n                                                    <a class=\"text-decoration-none text-white\">\r\n                                                        حفظ\r\n                                                    </a>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Registration Page Ends-->\r\n"

/***/ }),

/***/ "./src/app/pages/content-pages/reset-password/reset-password.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/content-pages/reset-password/reset-password.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQtcGFnZXMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/content-pages/reset-password/reset-password.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/content-pages/reset-password/reset-password.component.ts ***!
  \********************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _match_password__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../match-password */ "./src/app/pages/content-pages/match-password.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(matchPassword, authService, activatedRoute, toastr) {
        this.matchPassword = matchPassword;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.authForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)
            ]),
            passwordConfirmation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40)
            ])
        }, { validators: [this.matchPassword.validate] });
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (param) {
            _this.email = param['email'];
            _this.token = param['token'];
        });
    };
    //  On submit click, reset field value
    ResetPasswordComponent.prototype.onSubmits = function () {
        this.registerForm.reset();
    };
    ResetPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.authForm.invalid) {
            return;
        }
        this.authService.ResetPassword(this.authForm.value, this.token, this.email).subscribe(function (data) {
            // Navigate to some other route
            window.location.href = '/content-pages/login';
        }, function (error) {
            if (error.error.message === "Token is invalid or has expired") {
                _this.toastr.error('لقد انتهت صلاحية الرابط');
            }
        });
    };
    ;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], ResetPasswordComponent.prototype, "registerForm", void 0);
    ResetPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/pages/content-pages/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/pages/content-pages/reset-password/reset-password.component.scss")]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_match_password__WEBPACK_IMPORTED_MODULE_4__["MatchPassword"],
            _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ })

}]);
//# sourceMappingURL=3.js.map