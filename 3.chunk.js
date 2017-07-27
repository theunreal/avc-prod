webpackJsonp([3],{

/***/ "../../../../../src/app/admin/homepage/device-finder/device-finder.component.html":
/***/ (function(module, exports) {

module.exports = "<md-nav-list>\r\n\t<section class=\"row\">\r\n\t\t<md-list-item *ngFor=\"let segment of ['cisco','ciscoIL','ciscoUS','ciscoIN',\r\n\t\t'ciscoBL','ciscoUK']\"\r\n\t\t[class.active]=\"activeSegment == segment\" \r\n\t\t(click)=\"activeSegment=segment\"\r\n\t\tclass=\"col\">\r\n\t\t\t<h4 md-line>{{segment}}</h4>\r\n\t\t</md-list-item>\r\n\t</section>\r\n</md-nav-list>\r\n\r\n<section *ngIf=\"activeSegment\">\r\n\t<md-input-container>\r\n\t  \t\t<input mdInput placeholder=\"Find Devices..\"\r\n\t  \t\t [(ngModel)]=\"name\"\r\n\t  \t\t  (ngModelChange)=\"findDevices($event)\">\r\n\t</md-input-container>\r\n\t\r\n\t<md-nav-list *ngIf=\"(devices | async)?.length\">\r\n\t\t<md-list-item *ngFor=\"let device of devices | async\"\r\n\t\t(click)=\"dialogRef.close()\"\r\n\t\t\trouterLink=\"/admin/summary/device/{{device.name}}\">\r\n\t\t\t<h4 md-line>{{device.name}}</h4>\r\n\t\t</md-list-item>\r\n\t</md-nav-list>\r\n\t<div class=\"clearfix\"></div>\r\n\t<div class=\"float-right\">\r\n\t\t<button md-raised-button color=\"primary\"\r\n\t\t(click)=\"dialogRef.close()\"\r\n\t\trouterLink=\"/admin/summary/segment/{{activeSegment}}\">\r\n\t\t\tMonitor \"{{activeSegment}}\"\r\n\t\t</button>\r\n\t</div>\r\n\t\t\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/admin/homepage/device-finder/device-finder.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active, .active:hover {\n  background-color: #3162B6;\n  color: white;\n  border-radius: 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/homepage/device-finder/device-finder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceFinderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeviceFinderComponent = (function () {
    function DeviceFinderComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.segments = [];
    }
    DeviceFinderComponent.prototype.ngOnInit = function () {
    };
    DeviceFinderComponent.prototype.findDevices = function ($event) {
        this.devices = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([{ name: 'sjc23-noca-appx-gw1' }, { name: 'sjc23-noca-appx-gw2' }, { name: 'sjc23-noca-appx-gw3' }]);
    };
    return DeviceFinderComponent;
}());
DeviceFinderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-device-finder',
        template: __webpack_require__("../../../../../src/app/admin/homepage/device-finder/device-finder.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/homepage/device-finder/device-finder.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialogRef */]) === "function" && _a || Object])
], DeviceFinderComponent);

var _a;
//# sourceMappingURL=device-finder.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/admin/homepage/homepage.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = (function () {
    function HomepageComponent() {
    }
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-homepage',
        template: __webpack_require__("../../../../../src/app/admin/homepage/homepage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/homepage/homepage.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomepageComponent);

//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/homepage/homepage.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_admin_shared_module__ = __webpack_require__("../../../../../src/app/admin/shared/admin-shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepage_component__ = __webpack_require__("../../../../../src/app/admin/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homepage_routing_module__ = __webpack_require__("../../../../../src/app/admin/homepage/homepage.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__summary_service__ = __webpack_require__("../../../../../src/app/admin/homepage/summary.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__summary_summary_component__ = __webpack_require__("../../../../../src/app/admin/homepage/summary/summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__summary_summary_resolver__ = __webpack_require__("../../../../../src/app/admin/homepage/summary/summary.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__homepage_device_finder_device_finder_component__ = __webpack_require__("../../../../../src/app/admin/homepage/device-finder/device-finder.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageModule", function() { return HomepageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var HomepageModule = (function () {
    function HomepageModule() {
    }
    return HomepageModule;
}());
HomepageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__shared_admin_shared_module__["a" /* AdminSharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__homepage_routing_module__["a" /* HomepageRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ChartModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MdDialogModule */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_9__homepage_device_finder_device_finder_component__["a" /* DeviceFinderComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__homepage_component__["a" /* HomepageComponent */], __WEBPACK_IMPORTED_MODULE_5__summary_summary_component__["a" /* SummaryComponent */], __WEBPACK_IMPORTED_MODULE_9__homepage_device_finder_device_finder_component__["a" /* DeviceFinderComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__summary_service__["a" /* SummaryService */], __WEBPACK_IMPORTED_MODULE_6__summary_summary_resolver__["a" /* SummaryResolver */]]
    })
], HomepageModule);

//# sourceMappingURL=homepage.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/homepage/homepage.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepage_component__ = __webpack_require__("../../../../../src/app/admin/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__summary_summary_component__ = __webpack_require__("../../../../../src/app/admin/homepage/summary/summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__summary_summary_resolver__ = __webpack_require__("../../../../../src/app/admin/homepage/summary/summary.resolver.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__homepage_component__["a" /* HomepageComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__summary_summary_component__["a" /* SummaryComponent */],
                resolve: {
                    summary: __WEBPACK_IMPORTED_MODULE_4__summary_summary_resolver__["a" /* SummaryResolver */]
                },
            },
            {
                path: 'device/:device_id', component: __WEBPACK_IMPORTED_MODULE_3__summary_summary_component__["a" /* SummaryComponent */], data: {
                    device: true,
                }
            },
            {
                path: 'segment/:segment_id', component: __WEBPACK_IMPORTED_MODULE_3__summary_summary_component__["a" /* SummaryComponent */], data: {
                    segment: true
                }
            }
        ]
    }
];
var HomepageRoutingModule = (function () {
    function HomepageRoutingModule() {
    }
    return HomepageRoutingModule;
}());
HomepageRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]]
    })
], HomepageRoutingModule);

//# sourceMappingURL=homepage.routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/homepage/summary.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SummaryService = (function () {
    function SummaryService() {
    }
    SummaryService.prototype.getData = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(1).delay(500);
    };
    return SummaryService;
}());
SummaryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SummaryService);

//# sourceMappingURL=summary.service.js.map

/***/ }),

/***/ "../../../../../src/app/admin/homepage/summary/summary.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<section class=\"col-xl-9 col-lg-8 col-md-12\">\n\t\t\t<md-card class=\"nospaces extend-toolbar\">\n\t\t\t\t<md-toolbar color=\"accent\">\n\t\t\t\t<span>Summary<span *ngIf=\"device\">: {{device}}</span></span>\n\t\t\t\t</md-toolbar>\n\t\t\t\t<md-card-content>\n\t\t\t\t\t<div class=\"row mr-3 ml-3 text-center\">\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-6\">\n\t\t\t\t\t\t\t<small>Classification</small>\n\t\t\t\t\t\t\t<h3>100%</h3>\n\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t<md-icon>arrow_drop_up</md-icon> +5% vs the last 2 hours</small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-6\">\n\t\t\t\t\t\t\t<small>First Packet Classification</small>\n\t\t\t\t\t\t\t<h3>93%</h3>\n\t\t\t\t\t\t\t<small><md-icon>arrow_drop_up</md-icon> +13% vs the last 2 hours</small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-6\">\n\t\t\t\t\t\t\t<small>Bandwidth</small>\n\t\t\t\t\t\t\t<h3>658 Mbps</h3>\n\t\t\t\t\t\t\t<small><md-icon>arrow_drop_down</md-icon> -8% vs the last 2 hours</small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-3 col-md-6\">\n\t\t\t\t\t\t\t<small>SD-AVC Coverage</small>\n\t\t\t\t\t\t\t<h3>91%</h3>\n\t\t\t\t\t\t\t<small><md-icon>arrow_drop_up</md-icon> +3% vs the last 2 hours</small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</md-card-content>\n\t\t\t</md-card>\n\t\n\t\t\t<md-card class=\"mt-3 nospaces\">\n\t\t\t<md-toolbar>\n\t\t\t\t<span>Application Usage</span>\n\t\t\t</md-toolbar>\n\t\t\t\t<md-card-content>\n\t\t\t\t\t<md-nav-list>\n\t\t\t\t\t\t<article class=\"row\">\n\t\t\t\t\t\t\t<md-list-item \n\t\t\t\t\t\t\t*ngFor=\"let item of [1,2,3,4,5,6,7,8]\"\n\t\t\t\t\t\t\trouterLink=\"../../apps/{{item}}\"\n\t\t\t\t\t\t\tclass=\"col-xl-3 col-lg-4 col-md-6 col-sm-12\">\n\t\t\t\t\t\t\t\t<img md-list-avatar src=\"assets/images/apps/skype.png\" alt=\"Skype\">\n\t\t\t\t\t\t\t    <h4 md-line>Skype</h4>\n\t\t\t\t\t\t\t    <p md-line>54% <md-icon>trending_up</md-icon></p>\n\t\t\t\t\t\t\t</md-list-item>\n\t\t\t\t\t\t</article>\n\t\t\t\t\t</md-nav-list>\n\t\t\t\t</md-card-content>\n\t\t\t\t<md-card-actions align=\"right\">\n\t\t\t\t\t<button md-button color=\"primary\" routerLink=\"/admin/apps\">\n\t\t\t\t\t\t<md-icon>view_list</md-icon> View All (13)\n\t\t\t\t\t</button>\n\t\t\t\t</md-card-actions>\n\t\t\t</md-card>\n\t\t</section>\n\t\t\n\t\t<!-- All Devices info card -->\n\t\t<section class=\"col-lg-3 col-md-4\" *ngIf=\"!device\">\n\t\t\t<md-card class=\"nospaces\">\n\t\t\t\t<md-toolbar>Segment Monitoring\n\t\t\t\t<span class=\"fill-remaining-space\"></span>\n\t\t\t\t<button md-icon-button (click)=\"showDevices()\"><md-icon>swap_horiz</md-icon></button>\n\t\t\t\t</md-toolbar>\n\t\t\t\t<md-card-content>\n\t\t\t\t\t<md-nav-list>\n\t\t\t\t\t\t<md-list-item routerLink=\"/admin/devices\">\n\t\t\t\t\t\t\t<p md-line>Segments</p>\n\t\t\t\t\t\t\t<h3 md-line>4</h3>\n\t\t\t\t\t\t</md-list-item>\n\t\t\t\t\t\t<md-list-item routerLink=\"/admin/devices\">\n\t\t\t\t\t\t\t<p md-line>Devices</p>\n\t\t\t\t\t\t\t<h3 md-line>84</h3>\n\t\t\t\t\t\t</md-list-item>\n\t\t\t\t\t</md-nav-list>\n\t\t\t\t\t<md-list>\n\t\t\t\t\t\t<md-list-item>\n\t\t\t\t\t\t\t<md-icon md-list-icon>check</md-icon>\n\t\t\t\t\t\t\t<p md-line>Update</p>\n\t\t\t\t\t\t\t</md-list-item>\n\t\t\t\t\t\t<md-list-item>\n\t\t\t\t\t\t\t<md-icon md-list-icon>check</md-icon>\n\t\t\t\t\t\t\t<p md-line>Exporter</p>\n\t\t\t\t\t\t</md-list-item>\n\t\t\t\t\t\t<md-list-item>\n\t\t\t\t\t\t\t<md-icon md-list-icon>check</md-icon>\n\t\t\t\t\t\t\t<p md-line>Traffic</p>\n\t\t\t\t\t\t</md-list-item>\n\t\t\t\t\t</md-list>\n\t\t\t\t</md-card-content>\n\t\t\t</md-card>\n\t\t</section>\n\t\t\n\t\t<!-- Specific device info card -->\n\t\t<section class=\"col-xl-3 col-lg-4 col-md-12\" *ngIf=\"device\">\n\t\t\t<md-card class=\"nospaces\" [class.connected]=\"device\">\n\t\t\t\t<md-toolbar>{{device}}\n\t\t\t\t<span class=\"fill-remaining-space\"></span>\n\t\t\t\t<button md-icon-button (click)=\"showDevices()\"><md-icon>swap_horiz</md-icon></button>\n\t\t\t\t</md-toolbar>\n\t\t\t\t<md-card-content>\n\t\t\t\t\t<md-list>\n\t\t\t\t\t\t<md-list-item *ngIf=\"routeData.segment\" (click)=\"showDevices()\"\n\t\t\t\t\t\tstyle=\"cursor: pointer\">\n\t\t\t\t\t\t\t<p md-line>Devices</p>\n\t\t\t\t\t\t\t<h3 md-line>17</h3>\n\t\t\t\t\t\t</md-list-item>\n\t\t\t\t\t\t<md-list-item *ngIf=\"routeData.device\" style=\"cursor:pointer\"\n\t\t\t\t\t\t\trouterLink=\"/admin/summary/segment/ciscoIL\">\n\t\t\t\t\t\t\t<p md-line>Segment</p>\n\t\t\t\t\t\t\t<h3 md-line>ciscoIL</h3>\n\t\t\t\t\t\t</md-list-item>\n\t\t\t\t\t\t\t<md-list-item>\n\t\t\t\t\t\t\t\t<p md-line>IP</p>\n\t\t\t\t\t\t\t\t<h3 md-line>10.56.196.122</h3>\n\t\t\t\t\t\t\t</md-list-item>\n\t\t\t\t\t\t\t<md-list-item>\n\t\t\t\t\t\t\t\t<p md-line>Protocol Pack</p>\n\t\t\t\t\t\t\t\t<h3 md-line>pp-adv-asr1k-16.6.2-30-32.0.1.pack</h3>\n\t\t\t\t\t\t\t</md-list-item>\n\t\t\t\t\t\t\t<md-list-item>\n\t\t\t\t\t\t\t<md-icon md-list-icon>check</md-icon>\n\t\t\t\t\t\t\t<p md-line>Update</p>\n\t\t\t\t\t\t\t</md-list-item>\n\t\t\t\t\t\t<md-list-item>\n\t\t\t\t\t\t\t<md-icon md-list-icon>check</md-icon>\n\t\t\t\t\t\t\t<p md-line>Exporter</p>\n\t\t\t\t\t\t</md-list-item>\n\t\t\t\t\t\t<md-list-item>\n\t\t\t\t\t\t\t<md-icon md-list-icon>check</md-icon>\n\t\t\t\t\t\t\t<p md-line>Traffic</p>\n\t\t\t\t\t\t</md-list-item>\n\t\t\t\t\t\t\t\n\t\t\t\t\t</md-list>\n\t\t\t\t</md-card-content>\n\t\t\t</md-card>\n\t\t</section>\n\t\t\n\t</div>\n\t\n\t<div class=\"row mt-3 mb-3\">\n\t<section class=\"col-md-8 col-lg-9\">\n\t\t<md-card class=\"nospaces\">\n\t\t\t<md-toolbar>\n\t\t\t\t<span>Classification Performance</span>\n\t\t\t\t<span class=\"fill-remaining-space\"></span>\n\t\t\t\t\t<md-select placeholder=\"Period\" [(ngModel)]=\"analyticsTime\" style=\"min-width: 200px\"\n\t\t\t\t\t (ngModelChange)=\"updateAnalytics($event)\" floatPlaceholder=\"never\">\n\t\t\t   \t\t\t<md-option value=\"1\">This hour vs last hour</md-option>\n\t\t\t   \t\t\t<md-option value=\"2\">Last 6 hours vs previous 6 hours</md-option>\n\t\t   \t\t\t</md-select>\n\t\t\t</md-toolbar>\n\t\t  <md-card-content class=\"mt-3\" *ngIf=\"inited\">\n\t\t    <section class=\"row\">\n\t\t    \t<article class=\"col-md-4\">\n\t\t    \t\tClassification\n\t\t\t    \t\t<p-chart type=\"line\" [data]=\"data\" [options]=\"options\"\n\t\t\t    \t\twidth=\"50\" height=\"80\"></p-chart>\n\t\t    \t</article>\n\t\t    \t<article class=\"col-md-4\">\n\t\t    \t\tFirst Packet Classification\n\t\t    \t\t<p-chart type=\"line\" [data]=\"data\" [options]=\"options\"\n\t\t\t    \t\theight=\"70\"></p-chart>\n\t\t    \t</article>\n\t\t    \t<article class=\"col-md-4\">\n\t\t    \t\tSD-AVC Coverage Ratio\n\t\t    \t\t<p-chart type=\"line\" [data]=\"data\" [options]=\"options\"\n\t\t\t    \t\theight=\"70\"></p-chart>\n\t\t    \t</article>\n\t\t    </section>\n\t\t    <hr/>\n\t\t    <section class=\"row\">\n\t\t    \t<article class=\"col-md-4\">\n\t\t    \t\t<p-chart type=\"line\" [data]=\"vsData\" [options]=\"vsOptions\"></p-chart>\n\t\t    \t</article>\n\t\t    \t<article class=\"col-md-4\">\n\t\t    \t\t<p-chart type=\"line\" [data]=\"vsData\" [options]=\"vsOptions\"></p-chart>\n\t\t    \t</article>\n\t\t    \t<article class=\"col-md-4\">\n\t\t    \t\t<p-chart type=\"line\" [data]=\"vsData\" [options]=\"vsOptions\"></p-chart>\n\t\t    \t</article>\n\t\t    </section>\n\t\t\t</md-card-content>\n\t\t</md-card>\n\t</section>\n\t<section class=\"col-md-4 col-lg-3\">\n\t\t<md-card class=\"nospaces\">\n\t\t\t<md-toolbar>\n\t\t\t\t<span>Business Relevance</span>\n\t\t\t</md-toolbar>\n\t\t\t<md-card-content class=\"mt-3\">\n\t\t\t\t<p-chart type=\"doughnut\" \n\t\t\t\t[data]=\"dataDognut\"\n\t\t\t\t *ngIf=\"inited\"\n\t\t\t\t (onDataSelect)=\"dognutClick($event)\"\n\t\t\t\t ></p-chart>\n\t\t\t</md-card-content>\n\t\t</md-card>\n\t</section>\n\t</div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/admin/homepage/summary/summary.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".extend-toolbar {\n  background-color: #448AFF;\n  color: white; }\n\nh3 {\n  font-weight: bold;\n  line-height: 16px;\n  padding-top: 10px; }\n\nsmall {\n  font-size: 11px; }\n\nmd-list-item p {\n  font-size: 12px !important;\n  color: gray; }\n\nmd-list-item h3 {\n  font-size: 18px !important; }\n\nmd-card-content {\n  padding: 0 30px 0 30px; }\n\nmd-card-actions {\n  padding: 0 30px 0 30px; }\n\nmd-toolbar {\n  background-color: #F0F0F0; }\n\n.connected {\n  border-bottom: 3px solid #64DA41 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/homepage/summary/summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__device_finder_device_finder_component__ = __webpack_require__("../../../../../src/app/admin/homepage/device-finder/device-finder.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



;

var SummaryComponent = (function () {
    function SummaryComponent(router, route, dialog) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.data = {
            labels: ['', '', '', '', '', '', ''],
            datasets: [
                {
                    label: 'Today',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: '#448AFF',
                    fill: false
                },
                {
                    label: 'Yesterday',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    borderColor: '#ADD2E4',
                    fill: false
                }
            ]
        };
        this.options = {
            title: {
                display: false
            },
            legend: {
                position: 'bottom'
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        gridLines: {
                            display: false
                        }
                    }],
                yAxes: [{
                        display: false,
                        gridLines: {
                            display: false
                        }
                    }]
            }
        };
        this.vsData = {
            labels: ['', '', '', '', '', '', ''],
            datasets: [
                {
                    label: 'Bandwidth',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: '#448AFF',
                    fill: false,
                },
                {
                    label: 'CPS',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    borderColor: '#C7A62D',
                    fill: false
                }
            ],
        };
        this.vsOptions = {
            scales: {
                xAxes: [{ display: false, gridLines: { display: false } }],
                yAxes: [{ display: false, gridLines: { display: false } }]
            },
            legend: {
                position: 'bottom'
            }
        };
        this.dataDognut = {
            labels: ['Relevant', 'Irrelevant', 'Default'],
            animation: {
                animateScale: true
            },
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#64DA41",
                        "#DA4141",
                        "#43A3DA"
                    ],
                    hoverBackgroundColor: [
                        "#4FCB29",
                        "#CB2F2F",
                        "#2D8FC7"
                    ]
                }
            ]
        };
        route.params.subscribe(function (params) {
            if (params.device_id) {
                _this.getDeviceAnalytics(params.device_id);
            }
            else if (params.segment_id) {
                _this.getSegmentAnalytics(params.segment_id);
            }
            else {
                _this.getFullAnalytics();
            }
        });
        route.data.subscribe(function (routeData) {
            _this.routeData = routeData;
        });
    }
    SummaryComponent.prototype.ngAfterViewInit = function () {
        this.inited = true;
    };
    SummaryComponent.prototype.getDeviceAnalytics = function (id) {
        this.device = id;
    };
    SummaryComponent.prototype.getSegmentAnalytics = function (id) {
        this.device = id;
    };
    SummaryComponent.prototype.getFullAnalytics = function () {
    };
    SummaryComponent.prototype.dognutClick = function ($event) {
        console.log($event);
        var params = { relevant: $event.element._index, device: this.device };
        if (!this.device) {
            delete params.device;
        }
        this.router.navigate(['/admin/apps', params]);
    };
    SummaryComponent.prototype.updateAnalytics = function ($event) {
        this.data = {
            labels: ['', '', '', '', '', '', ''],
            datasets: [
                {
                    label: '',
                    data: [85, 69, 90, 41, 66, 85, 90],
                    borderColor: '#448AFF',
                    fill: false
                },
                {
                    label: '',
                    data: [48, 68, 70, 49, 66, 77, 85],
                    borderColor: '#ADD2E4',
                    fill: false
                }
            ]
        };
    };
    SummaryComponent.prototype.showDevices = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__device_finder_device_finder_component__["a" /* DeviceFinderComponent */]);
    };
    return SummaryComponent;
}());
SummaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'summary',
        template: __webpack_require__("../../../../../src/app/admin/homepage/summary/summary.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/homepage/summary/summary.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MdDialog */]) === "function" && _c || Object])
], SummaryComponent);

var _a, _b, _c;
//# sourceMappingURL=summary.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/homepage/summary/summary.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__summary_service__ = __webpack_require__("../../../../../src/app/admin/homepage/summary.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SummaryResolver = (function () {
    function SummaryResolver(summaryService) {
        this.summaryService = summaryService;
    }
    SummaryResolver.prototype.resolve = function (route, state) {
        return this.summaryService.getData();
    };
    return SummaryResolver;
}());
SummaryResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__summary_service__["a" /* SummaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__summary_service__["a" /* SummaryService */]) === "function" && _a || Object])
], SummaryResolver);

var _a;
//# sourceMappingURL=summary.resolver.js.map

/***/ })

});
//# sourceMappingURL=3.chunk.js.map