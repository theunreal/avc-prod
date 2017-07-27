webpackJsonp([2],{

/***/ "../../../../../src/app/admin/applications/all-devices/all-devices.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<md-input-container>\r\n  \t\t<input mdInput placeholder=\"Filter Devices..\"\r\n  \t\t [(ngModel)]=\"name\"\r\n  \t\t  (ngModelChange)=\"filterName($event)\">\r\n\t</md-input-container>\r\n\t\r\n\t<md-nav-list>\r\n\t\t<h3 md-subheader>Cisco (5)</h3>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<md-list-item *ngFor=\"let device of devices\"\r\n\t\t\t\t(click)=\"dialogRef.close()\"\r\n\t\t\t\trouterLink=\"/admin/summary/device/{{device.name}}\"\r\n\t\t\t\t class=\"col\">\r\n\t\t\t\t\t<md-icon md-list-icon\r\n\t\t\t\t\t[class.up]=\"device.online\"\r\n\t\t\t\t\t[class.down]=\"!device.online\">cloud</md-icon>\r\n\t\t\t\t\t<h4 md-line>{{device.name}}</h4>\r\n\t\t\t\t\t<p md-line>{{device.classification}}% <md-icon>trending_up</md-icon></p>\r\n\t\t\t\t</md-list-item>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<h3 md-subheader>Mongo (5)</h3>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<md-list-item *ngFor=\"let device of devices\"\r\n\t\t\t\trouterLink=\"/admin/summary/device/{{device.name}}\"\r\n\t\t\t\t(click)=\"dialogRef.close()\"\r\n\t\t\t\t class=\"col\">\r\n\t\t\t\t\t<md-icon md-list-icon \r\n\t\t\t\t\t[class.up]=\"device.online\"\r\n\t\t\t\t\t[class.down]=\"!device.online\">cloud</md-icon>\r\n\t\t\t\t\t<h4 md-line>{{device.name}}</h4>\r\n\t\t\t\t\t<p md-line>{{device.classification}}% <md-icon>trending_up</md-icon></p>\r\n\t\t\t\t</md-list-item>\r\n\t\t\t</div>\r\n\t</md-nav-list>\r\n</div>\r\n\r\n<!--\r\n<div class=\"example-container mat-elevation-z8\">\r\n\r\n  <md-table #table [dataSource]=\"dataSource\">\r\n\r\n    <ng-container cdkColumnDef=\"name\">\r\n      <md-header-cell *cdkHeaderCellDef> Name </md-header-cell>\r\n      <md-cell *cdkCellDef=\"let row\"> {{row.name}} </md-cell>\r\n    </ng-container>\r\n\r\n    <ng-container cdkColumnDef=\"ip\">\r\n      <md-header-cell *cdkHeaderCellDef> IP </md-header-cell>\r\n      <md-cell *cdkCellDef=\"let row\"> {{row.ip}} </md-cell>\r\n    </ng-container>\r\n\r\n    <md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row>\r\n    <md-row *cdkRowDef=\"let row; columns: displayedColumns;\"></md-row>\r\n  </md-table>\r\n</div>\r\n -->"

/***/ }),

/***/ "../../../../../src/app/admin/applications/all-devices/all-devices.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 100%;\n  min-width: 300px; }\n\n.example-header {\n  min-height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 24px;\n  font-size: 20px; }\n\n.example-header {\n  min-height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  padding: 8px 24px 0;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.mat-input-container {\n  font-size: 14px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin-left: 32px; }\n\n.mat-table {\n  overflow: auto; }\n\n/deep/ .wmat .mat-input-placeholder {\n  color: #ffffff; }\n\nmd-icon {\n  vertical-align: middle; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/applications/all-devices/all-devices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk__ = __webpack_require__("../../../cdk/@angular/cdk.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllDevicesComponent; });
/* unused harmony export ExampleDatabase */
/* unused harmony export ExampleDataSource */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











var AllDevicesComponent = (function () {
    function AllDevicesComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.devices = [{
                name: 'Device 01',
                online: true,
                ip: '192.168.1.1',
                classification: 91
            },
            {
                name: 'Device 02',
                online: true,
                ip: '192.168.1.1',
                classification: 86
            },
            {
                name: 'Device 03',
                online: false,
                ip: '192.168.1.3',
                classification: 61
            },
            {
                name: 'Device 04',
                online: true,
                ip: '192.168.1.4',
                classification: 96
            },
            {
                name: 'Device 05',
                online: true,
                ip: '192.168.1.5',
                classification: 85
            }];
        this.displayedColumns = ['name', 'ip'];
        this.exampleDatabase = new ExampleDatabase();
        this.orgDevices = Object.create(this.devices);
    }
    AllDevicesComponent.prototype.filterName = function ($event) {
        this.devices = this.orgDevices.filter(function (device) {
            if (device.name.toLowerCase().includes($event.toLowerCase()) === true) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    AllDevicesComponent.prototype.ngOnInit = function () {
    };
    return AllDevicesComponent;
}());
AllDevicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'all-devices',
        template: __webpack_require__("../../../../../src/app/admin/applications/all-devices/all-devices.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/applications/all-devices/all-devices.component.scss")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_10__angular_material__["i" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_material__["i" /* MdDialogRef */]) === "function" && _a || Object])
], AllDevicesComponent);

/** Constants used to fill up our data base. */
var NAMES = ['Device 1', 'Device 2', 'Device 3', 'Device 4', 'Device 5'];
/** An example database that the data source uses to retrieve data for the table. */
var ExampleDatabase = (function () {
    function ExampleDatabase() {
        /** Stream that emits whenever the data has been modified. */
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /** Adds a new user to the database. */
    ExampleDatabase.prototype.addUser = function () {
        var copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /** Builds and returns a new User. */
    ExampleDatabase.prototype.createNewUser = function () {
        var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];
        return {
            name: name,
            ip: "192.168.1.1"
        };
    };
    return ExampleDatabase;
}());

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource = (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._filterChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        return _this;
    }
    Object.defineProperty(ExampleDataSource.prototype, "filter", {
        get: function () { return this._filterChange.value; },
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._filterChange,
        ];
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"], displayDataChanges).map(function () {
            return _this._exampleDatabase.data.slice().filter(function (item) {
                var searchStr = (item.name).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            });
        });
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk__["_1" /* DataSource */]));

var _a;
//# sourceMappingURL=all-devices.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/applications/application-list/application-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<md-card class=\"nospaces\">\n\t\t<md-toolbar color=\"accent\">\n\t\t  <span>Application List</span>\n\t\t</md-toolbar>\n\t\t\n\t\t    <md-tab-group class=\"extend-toolbar\" #tabs>\n\t\t\t  <md-tab label=\"Relevant\">\n\t\t\t  \t<md-nav-list class=\"container-fluid\">\n\t\t\t  \t\t<section class=\"row\">\n\t\t\t\t  \t\t<md-list-item class=\"col-md-3\"\n\t\t\t\t  \t\t *ngFor=\"let app of [1,2,3,4,5,6,7,8,9,10,11,12,13]\"\n\t\t\t\t  \t\t routerLink=\"{{app}}\">\n\t\t\t\t  \t\t\t<img src=\"assets/images/apps/skype.png\" md-list-avatar/> \n\t\t\t\t  \t\t\t<h4 md-line>Skype</h4>\n\t\t\t\t  \t\t\t<p md-line>58% Bandwidth</p>\n\t\t\t\t  \t\t</md-list-item>\n\t\t\t\t  \t</section>\n\t\t\t  \t</md-nav-list>\n\t\t\t  </md-tab>\n\t\t\t  <md-tab label=\"Irelevant\">\n\t\t\t\t<md-nav-list class=\"container-fluid\">\n\t\t\t  \t\t<section class=\"row\">\n\t\t\t\t  \t\t<md-list-item class=\"col-md-3\" *ngFor=\"let app of [1,2,3,4,5,6,7,8,9,10,11,12,13]\"\n\t\t\t\t  \t\trouterLink=\"{{app}}\">\n\t\t\t\t  \t\t\t<img src=\"assets/images/apps/utorrent.png\" md-list-avatar/> \n\t\t\t\t  \t\t\t<h4 md-line>uTorrent</h4>\n\t\t\t\t  \t\t\t<p md-line>73% Bandwidth</p>\n\t\t\t\t  \t\t</md-list-item>\n\t\t\t\t  \t</section>\n\t\t\t  \t</md-nav-list>\n\t\t\t  </md-tab>\n\t\t\t  <md-tab label=\"Default\">\n\t\t\t\t<md-nav-list class=\"container-fluid\">\n\t\t\t  \t\t<section class=\"row\">\n\t\t\t\t  \t\t<md-list-item class=\"col-md-3\" *ngFor=\"let app of [1,2,3,4,5,6,7,8,9,10,11,12,13]\"\n\t\t\t\t  \t\trouterLink=\"{{app}}\">\n\t\t\t\t  \t\t\t<img src=\"assets/images/apps/utorrent.png\" md-list-avatar/> \n\t\t\t\t  \t\t\t<h4 md-line>uTorrent</h4>\n\t\t\t\t  \t\t\t<p md-line>39% Bandwidth</p>\n\t\t\t\t  \t\t</md-list-item>\n\t\t\t\t  \t</section>\n\t\t\t  \t</md-nav-list>\n\t\t\t  </md-tab>\n\t\t\t</md-tab-group>\n\t\t</md-card>\n\t</div>"

/***/ }),

/***/ "../../../../../src/app/admin/applications/application-list/application-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/applications/application-list/application-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__applications_service__ = __webpack_require__("../../../../../src/app/admin/applications/applications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApplicationListComponent = (function () {
    function ApplicationListComponent(http, applicationsService, route) {
        this.http = http;
        this.applicationsService = applicationsService;
        this.route = route;
        this.route.params.subscribe(function (params) {
            // params.device ? this.getAppsbyDevice() : this.getApps();
        });
    }
    ApplicationListComponent.prototype.ngOnInit = function () {
    };
    ApplicationListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // Updates tab index
            _this.tabs.selectedIndex = params.relevant;
        });
    };
    return ApplicationListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('tabs'),
    __metadata("design:type", Object)
], ApplicationListComponent.prototype, "tabs", void 0);
ApplicationListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-application-list',
        template: __webpack_require__("../../../../../src/app/admin/applications/application-list/application-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/applications/application-list/application-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__applications_service__["a" /* ApplicationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__applications_service__["a" /* ApplicationsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _c || Object])
], ApplicationListComponent);

var _a, _b, _c;
//# sourceMappingURL=application-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/applications/applications.component.html":
/***/ (function(module, exports) {

module.exports = "      <!-- make sure to keep the =\"outlet\" part -->\r\n      <router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/admin/applications/applications.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/applications/applications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApplicationsComponent = (function () {
    function ApplicationsComponent() {
    }
    ApplicationsComponent.prototype.ngOnInit = function () {
    };
    return ApplicationsComponent;
}());
ApplicationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-applications',
        template: __webpack_require__("../../../../../src/app/admin/applications/applications.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/applications/applications.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ApplicationsComponent);

//# sourceMappingURL=applications.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/applications/applications.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_admin_shared_module__ = __webpack_require__("../../../../../src/app/admin/shared/admin-shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__all_devices_all_devices_component__ = __webpack_require__("../../../../../src/app/admin/applications/all-devices/all-devices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applications_component__ = __webpack_require__("../../../../../src/app/admin/applications/applications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__application_list_application_list_component__ = __webpack_require__("../../../../../src/app/admin/applications/application-list/application-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__applications_routing_module__ = __webpack_require__("../../../../../src/app/admin/applications/applications.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__applications_service__ = __webpack_require__("../../../../../src/app/admin/applications/applications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__view_app_view_app_component__ = __webpack_require__("../../../../../src/app/admin/applications/view-app/view-app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsModule", function() { return ApplicationsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ApplicationsModule = (function () {
    function ApplicationsModule() {
    }
    return ApplicationsModule;
}());
ApplicationsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__shared_admin_shared_module__["a" /* AdminSharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__applications_routing_module__["a" /* ApplicationsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ChartModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__applications_component__["a" /* ApplicationsComponent */], __WEBPACK_IMPORTED_MODULE_4__application_list_application_list_component__["a" /* ApplicationListComponent */], __WEBPACK_IMPORTED_MODULE_7__view_app_view_app_component__["a" /* ViewAppComponent */], __WEBPACK_IMPORTED_MODULE_1__all_devices_all_devices_component__["a" /* AllDevicesComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__applications_service__["a" /* ApplicationsService */]]
    })
], ApplicationsModule);

//# sourceMappingURL=applications.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/applications/applications.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__application_list_application_list_component__ = __webpack_require__("../../../../../src/app/admin/applications/application-list/application-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applications_component__ = __webpack_require__("../../../../../src/app/admin/applications/applications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_app_view_app_component__ = __webpack_require__("../../../../../src/app/admin/applications/view-app/view-app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__applications_component__["a" /* ApplicationsComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_0__application_list_application_list_component__["a" /* ApplicationListComponent */],
                /*
                resolve: {
                  devices: DeviceListResolver
                },*/ data: {
                    animation: {
                        value: 'device',
                    }
                } },
            {
                path: ':id', component: __WEBPACK_IMPORTED_MODULE_4__view_app_view_app_component__["a" /* ViewAppComponent */],
                /*
                resolve: {
                  card: ViewAppResolver
                },*/ data: {
                    animation: {
                        value: 'view-app',
                    }
                }
            }
        ]
    }
];
var ApplicationsRoutingModule = (function () {
    function ApplicationsRoutingModule() {
    }
    return ApplicationsRoutingModule;
}());
ApplicationsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]]
    })
], ApplicationsRoutingModule);

//# sourceMappingURL=applications.routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/applications/applications.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApplicationsService = (function () {
    function ApplicationsService(http) {
        this.http = http;
    }
    return ApplicationsService;
}());
ApplicationsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ApplicationsService);

var _a;
//# sourceMappingURL=applications.service.js.map

/***/ }),

/***/ "../../../../../src/app/admin/applications/view-app/view-app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"row\">\r\n\t\t<section class=\"col-md-8\">\r\n\t\t\t<md-card class=\"nospaces\">\r\n\t\t\t\t<md-toolbar color=\"accent\">\r\n\t\t\t\t<img src=\"assets/images/apps/skype.png\" class=\"rounded-circle\"/>\r\n\t\t\t\t&nbsp; <span>Skype</span>\r\n\t\t\t\t<span class=\"fill-remaining-space\"></span>\r\n\t\t\t\t<small>Busines Irrelevant</small>\r\n\t\t\t\t</md-toolbar>\r\n\t\t\t\t<md-card-content class=\"p-3\">\r\n\t\t\t\t\t<all-devices></all-devices>\r\n\t\t\t\t</md-card-content>\r\n\t\t\t</md-card>\r\n\t\t</section>\r\n\t\t\r\n\t\t<section class=\"col-md-4\">\r\n\t\t\t<md-card class=\"nospaces\">\r\n\t\t\t\t<md-toolbar color=\"accent\">\r\n\t\t\t\t\tBandwidth Usage\r\n\t\t\t\t</md-toolbar>\r\n\t\t\t\t<md-card-content class=\"p-3\">\r\n\t\t\t\t\t<p-chart type=\"line\" [data]=\"data\" [options]=\"options\"></p-chart>\r\n\t\t\t\t</md-card-content>\r\n\t\t\t</md-card>\r\n\t\t\t\r\n\t\t\t<md-card class=\"nospaces mt-2\">\r\n\t\t\t\t<md-toolbar color=\"accent\">\r\n\t\t\t\t\tRules\r\n\t\t\t\t</md-toolbar>\r\n\t\t\t\t<md-card-content class=\"p-3\">\r\n\t\t\t\t\t<md-list>\r\n\t\t\t\t\t\t<md-list-item *ngFor=\"let rule of [1]\">\r\n\t\t\t\t\t\t\t<md-icon md-list-icon>info</md-icon>\r\n\t\t\t\t\t\t\t<h4 md-line>46.51.254.142</h4>\r\n\t\t\t\t\t\t\t<p md-line>6 hits</p>\r\n\t\t\t\t\t\t\t<p md-line>Layer3, global</p>\r\n\t\t\t\t\t\t</md-list-item>\r\n\t\t\t\t\t</md-list>\r\n\t\t\t\t</md-card-content>\r\n\t\t\t</md-card>\r\n\t\t</section>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/applications/view-app/view-app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/applications/view-app/view-app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewAppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewAppComponent = (function () {
    function ViewAppComponent() {
        this.data = {
            labels: ['Bandwith', '10:00', '12:00', '14:00', '18:00', '20:00', '22:00'],
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
            scales: {
                xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            display: false
                        }
                    }]
            }
        };
    }
    ViewAppComponent.prototype.ngOnInit = function () {
    };
    return ViewAppComponent;
}());
ViewAppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view-app',
        template: __webpack_require__("../../../../../src/app/admin/applications/view-app/view-app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/applications/view-app/view-app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ViewAppComponent);

//# sourceMappingURL=view-app.component.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/fromEvent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var fromEvent_1 = __webpack_require__("../../../../rxjs/observable/fromEvent.js");
Observable_1.Observable.fromEvent = fromEvent_1.fromEvent;
//# sourceMappingURL=fromEvent.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/merge.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var merge_1 = __webpack_require__("../../../../rxjs/observable/merge.js");
Observable_1.Observable.merge = merge_1.merge;
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/debounceTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var debounceTime_1 = __webpack_require__("../../../../rxjs/operator/debounceTime.js");
Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/distinctUntilChanged.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var distinctUntilChanged_1 = __webpack_require__("../../../../rxjs/operator/distinctUntilChanged.js");
Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/startWith.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var startWith_1 = __webpack_require__("../../../../rxjs/operator/startWith.js");
Observable_1.Observable.prototype.startWith = startWith_1.startWith;
//# sourceMappingURL=startWith.js.map

/***/ }),

/***/ "../../../../rxjs/operator/distinctUntilChanged.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
 *   .distinctUntilChanged()
 *   .subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4
 *
 * @example <caption>An example using a compare function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilChanged((p: Person, q: Person) => p.name === q.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinctUntilChanged
 * @owner Observable
 */
function distinctUntilChanged(compare, keySelector) {
    return this.lift(new DistinctUntilChangedOperator(compare, keySelector));
}
exports.distinctUntilChanged = distinctUntilChanged;
var DistinctUntilChangedOperator = (function () {
    function DistinctUntilChangedOperator(compare, keySelector) {
        this.compare = compare;
        this.keySelector = keySelector;
    }
    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
    };
    return DistinctUntilChangedOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DistinctUntilChangedSubscriber = (function (_super) {
    __extends(DistinctUntilChangedSubscriber, _super);
    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
        _super.call(this, destination);
        this.keySelector = keySelector;
        this.hasKey = false;
        if (typeof compare === 'function') {
            this.compare = compare;
        }
    }
    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
        return x === y;
    };
    DistinctUntilChangedSubscriber.prototype._next = function (value) {
        var keySelector = this.keySelector;
        var key = value;
        if (keySelector) {
            key = tryCatch_1.tryCatch(this.keySelector)(value);
            if (key === errorObject_1.errorObject) {
                return this.destination.error(errorObject_1.errorObject.e);
            }
        }
        var result = false;
        if (this.hasKey) {
            result = tryCatch_1.tryCatch(this.compare)(this.key, key);
            if (result === errorObject_1.errorObject) {
                return this.destination.error(errorObject_1.errorObject.e);
            }
        }
        else {
            this.hasKey = true;
        }
        if (Boolean(result) === false) {
            this.key = key;
            this.destination.next(value);
        }
    };
    return DistinctUntilChangedSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ })

});
//# sourceMappingURL=2.chunk.js.map