webpackJsonp([1],{

/***/ "../../../../../src/app/admin/aboutpage/aboutpage.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"accent\">About</md-toolbar>\n\n<section class=\"m-3\" [@stagger]>\n\n  <img src=\"https://coverfiles.alphacoders.com/608/608.jpg\"/>\n\n  <article class=\"m-3\">\n    <h3>About</h3>\n\n    <p>Loren Ipsum Loren IpsumLoren IpsumLoren IpsumLoren IpsumLoren Ipsum</p>\n    <p>Loren IpsumLoren IpsumLoren IpsumLoren Ipsum Loren IpsumLoren IpsumLoren Ipsum</p>\n    <p>Loren Ipsum Loren IpsumLoren Ipsum Loren Ipsum</p>\n    <p>Loren Ipsum Loren IpsumLoren IpsumLoren IpsumLoren IpsumLoren Ipsum</p>\n    <p>Loren IpsumLoren IpsumLoren IpsumLoren Ipsum Loren IpsumLoren IpsumLoren Ipsum</p>\n    <p>Loren Ipsum Loren IpsumLoren Ipsum Loren Ipsum</p>\n    <p>Loren Ipsum Loren IpsumLoren IpsumLoren IpsumLoren IpsumLoren Ipsum</p>\n    <p>Loren IpsumLoren IpsumLoren IpsumLoren Ipsum Loren IpsumLoren IpsumLoren Ipsum</p>\n    <p>Loren Ipsum Loren IpsumLoren Ipsum Loren Ipsum</p>\n  </article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/admin/aboutpage/aboutpage.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/aboutpage/aboutpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutpageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutpageComponent = (function () {
    function AboutpageComponent() {
    }
    AboutpageComponent.prototype.ngOnInit = function () {
    };
    AboutpageComponent.prototype.ngAfterContentInit = function () {
        this.loaded = true;
    };
    return AboutpageComponent;
}());
AboutpageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-aboutpage',
        template: __webpack_require__("../../../../../src/app/admin/aboutpage/aboutpage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/aboutpage/aboutpage.component.scss")],
    }),
    __metadata("design:paramtypes", [])
], AboutpageComponent);

//# sourceMappingURL=aboutpage.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "\t<simple-notifications [options]=\"options\"  (onDestroy)=\"destroyed($event)\"></simple-notifications>\n  \t\n\t<md-sidenav-container>\n\t  <md-sidenav #sidenav mode=\"side\" opened=\"true\" class=\"sidenav\">\n\t    <md-toolbar>Navigation</md-toolbar>\n\t\n\t    <md-nav-list>\n\t      <md-list-item routerLink=\"summary\" routerLinkActive=\"active\">\n\t       <md-icon md-list-icon>timeline</md-icon>\n\t       <h4 md-line>Analytics</h4>\n\t       </md-list-item>\n\t       <md-list-item routerLink=\"devices\" routerLinkActive=\"active\">\n\t\t      <md-icon md-list-icon>perm_device_information</md-icon>\n\t\t      <h4 md-line>Devices</h4>\n\t\t   </md-list-item>\n\t\t   <md-list-item routerLink=\"apps\" routerLinkActive=\"active\">\n\t\t      <md-icon md-list-icon>apps</md-icon>\n\t\t      <h4 md-line>Applications</h4>\n\t\t   </md-list-item>\n\t    </md-nav-list>\n\t  </md-sidenav>\n\n  <div class=\"sidenav-content mat-body-1\">\n\t\n\t<div class=\"container-fluid mt-2\">\n    <md-progress-bar mode=\"indeterminate\"\n                     color=\"warn\"\n                     *ngIf=\"loading\"></md-progress-bar>\n                     </div>\n    <div [@routerAnimations]=\"prepRouteState(outlet)\">\n\n      <!-- make sure to keep the =\"outlet\" part -->\n      <router-outlet #outlet=\"outlet\"></router-outlet>\n    </div>\n  </div>\n\n</md-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nmd-sidenav-container {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  min-height: 100%; }\n\n.sidenav {\n  width: 250px; }\n\n.active {\n  background-color: #eee !important;\n  border-left: 4px solid orange; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations__ = __webpack_require__("../../../../../src/app/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_interval__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminComponent = (function () {
    function AdminComponent(router, notificationsService) {
        var _this = this;
        this.router = router;
        this.notificationsService = notificationsService;
        this.loading = true;
        this.options = {
            position: ["bottom", "right"],
            lastOnBottom: true,
            maxStack: 3
        };
        router.events.subscribe(function (routerEvent) {
            console.log(routerEvent);
            _this.checkRouterEvent(routerEvent);
        });
        __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].interval(60000).subscribe(function () {
            var randoms = [{
                    title: 'Memory leak detected',
                    content: 'Office 365 memory usage increased by 60%',
                    type: 'error'
                }, {
                    title: 'Classification ratio increased',
                    content: 'The SD-AVC Controller classified 96% of your network connections',
                    type: 'success'
                },
                {
                    title: 'Volume increased',
                    content: 'Facebook volume increased by 200% in the last 2 hours',
                    type: 'warn'
                },
                {
                    title: 'Device Status Update',
                    content: 'Device sg-01 is being restarted...',
                    type: 'info'
                }
            ];
            var randomNumber = Math.floor(Math.random() * randoms.length);
            _this.notificationsService.create(randoms[randomNumber].title, randoms[randomNumber].content, randoms[randomNumber].type);
        });
    }
    AdminComponent.prototype.destroyed = function ($event) {
        console.log($event);
    };
    AdminComponent.prototype.prepRouteState = function (outlet) {
        var animation = outlet.activatedRouteData['animation'] || {};
        return animation['value'] || null;
    };
    AdminComponent.prototype.checkRouterEvent = function (routerEvent) {
        if (routerEvent instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["NavigationStart"]) {
            this.loading = true;
        }
        if (routerEvent instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["NavigationEnd"] ||
            routerEvent instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["NavigationCancel"] ||
            routerEvent instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["NavigationError"]) {
            this.loading = false;
        }
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin.component.scss")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('routerAnimations', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('* => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["useAnimation"])(__WEBPACK_IMPORTED_MODULE_3__animations__["a" /* routerAnimation */])
                ]),
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["b" /* NotificationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["b" /* NotificationsService */]) === "function" && _b || Object])
], AdminComponent);

var _a, _b;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_routing_module__ = __webpack_require__("../../../../../src/app/admin/admin.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aboutpage_aboutpage_component__ = __webpack_require__("../../../../../src/app/admin/aboutpage/aboutpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_admin_shared_module__ = __webpack_require__("../../../../../src/app/admin/shared/admin-shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__shared_admin_shared_module__["a" /* AdminSharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__admin_routing_module__["a" /* AdminRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdSidenavModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["a" /* SimpleNotificationsModule */].forRoot()
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__admin_component__["a" /* AdminComponent */], __WEBPACK_IMPORTED_MODULE_2__aboutpage_aboutpage_component__["a" /* AboutpageComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["b" /* NotificationsService */]]
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__admin_component__["a" /* AdminComponent */],
        children: [
            {
                path: 'summary', loadChildren: 'app/admin/homepage/homepage.module#HomepageModule',
                data: {
                    animation: { value: 'home' }
                }
            },
            {
                path: 'devices', loadChildren: 'app/admin/devices/devices.module#DevicesModule', data: {
                    animation: { value: 'devices' }
                }
            },
            {
                path: 'apps', loadChildren: 'app/admin/applications/applications.module#ApplicationsModule', data: {
                    animation: { value: 'apps' }
                }
            }
        ]
    }
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    return AdminRoutingModule;
}());
AdminRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]]
    })
], AdminRoutingModule);

//# sourceMappingURL=admin.routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routerAnimation; });

var routerAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animation"])([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["query"])(':enter, :leave', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ position: 'fixed', left: 0, right: 0 }), { optional: true }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["query"])(':leave', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ zIndex: 100 }), { optional: true }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["query"])(':enter', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(-150%)' }), { optional: true }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["group"])([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["query"])(':leave', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["group"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('300ms cubic-bezier(.35,0,.25,1)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(200%)', opacity: 0 })),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animateChild"])()
        ]), { optional: true }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["query"])(':enter', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["group"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('300ms cubic-bezier(.35,0,.25,1)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ transform: 'translateX(0%)' })),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animateChild"])()
        ]), { optional: true })
    ])
]);
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ "../../../../angular2-notifications/dist/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_push_notifications_module__ = __webpack_require__("../../../../angular2-notifications/dist/src/push-notifications.module.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_simple_notifications_module__ = __webpack_require__("../../../../angular2-notifications/dist/src/simple-notifications.module.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__src_simple_notifications_module__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__src_simple_notifications_module__["b"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../angular2-notifications/dist/src/push-notifications.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__push_notifications_services_push_notifications_service__ = __webpack_require__("../../../../angular2-notifications/dist/src/push-notifications/services/push-notifications.service.js");
/* unused harmony namespace reexport */
/* unused harmony export PushNotificationsModule */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PushNotificationsModule = (function () {
    function PushNotificationsModule() {
    }
    return PushNotificationsModule;
}());
PushNotificationsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        providers: [__WEBPACK_IMPORTED_MODULE_1__push_notifications_services_push_notifications_service__["a" /* PushNotificationsService */]]
    })
], PushNotificationsModule);

//# sourceMappingURL=push-notifications.module.js.map

/***/ }),

/***/ "../../../../angular2-notifications/dist/src/push-notifications/services/push-notifications.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushNotificationsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PushNotificationsService = (function () {
    function PushNotificationsService() {
        this.permission = this.isSupported() ? Notification.permission : 'denied';
    }
    PushNotificationsService.prototype.requestPermission = function () {
        var _this = this;
        if ('Notification' in window)
            Notification.requestPermission(function (status) { return _this.permission = status; });
    };
    PushNotificationsService.prototype.isSupported = function () {
        return 'Notification' in window;
    };
    PushNotificationsService.prototype.create = function (title, options) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (obs) {
            if (!('Notification' in window)) {
                obs.error('Notifications are not available in this environment');
                obs.complete();
            }
            if (_this.permission !== 'granted') {
                obs.error("The user hasn't granted you permission to send push notifications");
                obs.complete();
            }
            var n = new Notification(title, options);
            n.onshow = function (e) { return obs.next({ notification: n, event: e }); };
            n.onclick = function (e) { return obs.next({ notification: n, event: e }); };
            n.onerror = function (e) { return obs.error({ notification: n, event: e }); };
            n.onclose = function () { return obs.complete(); };
        });
    };
    return PushNotificationsService;
}());
PushNotificationsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], PushNotificationsService);

//# sourceMappingURL=push-notifications.service.js.map

/***/ }),

/***/ "../../../../angular2-notifications/dist/src/simple-notifications.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simple_notifications_components_simple_notifications_component__ = __webpack_require__("../../../../angular2-notifications/dist/src/simple-notifications/components/simple-notifications.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__simple_notifications_components_notification_component__ = __webpack_require__("../../../../angular2-notifications/dist/src/simple-notifications/components/notification.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__simple_notifications_pipes_max_pipe__ = __webpack_require__("../../../../angular2-notifications/dist/src/simple-notifications/pipes/max.pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__simple_notifications_services_notifications_service__ = __webpack_require__("../../../../angular2-notifications/dist/src/simple-notifications/services/notifications.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__simple_notifications_interfaces_icons__ = __webpack_require__("../../../../angular2-notifications/dist/src/simple-notifications/interfaces/icons.js");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__simple_notifications_services_notifications_service__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleNotificationsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SimpleNotificationsModule = SimpleNotificationsModule_1 = (function () {
    function SimpleNotificationsModule() {
    }
    SimpleNotificationsModule.forRoot = function () {
        return {
            ngModule: SimpleNotificationsModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_5__simple_notifications_services_notifications_service__["a" /* NotificationsService */]]
        };
    };
    return SimpleNotificationsModule;
}());
SimpleNotificationsModule = SimpleNotificationsModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__simple_notifications_components_simple_notifications_component__["a" /* SimpleNotificationsComponent */],
            __WEBPACK_IMPORTED_MODULE_3__simple_notifications_components_notification_component__["a" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_4__simple_notifications_pipes_max_pipe__["a" /* MaxPipe */]
        ],
        providers: [],
        exports: [__WEBPACK_IMPORTED_MODULE_2__simple_notifications_components_simple_notifications_component__["a" /* SimpleNotificationsComponent */]]
    })
], SimpleNotificationsModule);

var SimpleNotificationsModule_1;
//# sourceMappingURL=simple-notifications.module.js.map

/***/ }),

/***/ "../../../../angular2-notifications/dist/src/simple-notifications/components/notification.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_notifications_service__ = __webpack_require__("../../../../angular2-notifications/dist/src/simple-notifications/services/notifications.service.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationComponent = (function () {
    function NotificationComponent(notificationService, domSanitizer, zone) {
        var _this = this;
        this.notificationService = notificationService;
        this.domSanitizer = domSanitizer;
        this.zone = zone;
        // Progress bar variables
        this.progressWidth = 0;
        this.stopTime = false;
        this.count = 0;
        this.instance = function () {
            _this.zone.runOutsideAngular(function () {
                _this.zone.run(function () { return _this.diff = (new Date().getTime() - _this.start) - (_this.count * _this.speed); });
                if (_this.count++ === _this.steps)
                    _this.zone.run(function () { return _this.remove(); });
                else if (!_this.stopTime) {
                    if (_this.showProgressBar)
                        _this.zone.run(function () { return _this.progressWidth += 100 / _this.steps; });
                    _this.timer = setTimeout(_this.instance, (_this.speed - _this.diff));
                }
            });
        };
    }
    NotificationComponent.prototype.ngOnInit = function () {
        if (this.item.override) {
            this.attachOverrides();
        }
        if (this.animate) {
            this.item.state = this.animate;
        }
        if (this.timeOut !== 0) {
            this.startTimeOut();
        }
        this.safeSvg = this.domSanitizer.bypassSecurityTrustHtml(this.icon || this.item.icon);
    };
    NotificationComponent.prototype.startTimeOut = function () {
        var _this = this;
        this.steps = this.timeOut / 10;
        this.speed = this.timeOut / this.steps;
        this.start = new Date().getTime();
        this.zone.runOutsideAngular(function () { return _this.timer = setTimeout(_this.instance, _this.speed); });
    };
    NotificationComponent.prototype.onEnter = function () {
        if (this.pauseOnHover) {
            this.stopTime = true;
        }
    };
    NotificationComponent.prototype.onLeave = function () {
        if (this.pauseOnHover) {
            this.stopTime = false;
            setTimeout(this.instance, (this.speed - this.diff));
        }
    };
    NotificationComponent.prototype.setPosition = function () {
        return this.position !== 0 ? this.position * 90 : 0;
    };
    NotificationComponent.prototype.onClick = function ($e) {
        this.item.click.emit($e);
        if (this.clickToClose) {
            this.remove();
        }
    };
    // Attach all the overrides
    NotificationComponent.prototype.attachOverrides = function () {
        var _this = this;
        Object.keys(this.item.override).forEach(function (a) {
            if (_this.hasOwnProperty(a)) {
                _this[a] = _this.item.override[a];
            }
        });
    };
    NotificationComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.timer);
    };
    NotificationComponent.prototype.remove = function () {
        var _this = this;
        if (this.animate) {
            this.item.state = this.animate + 'Out';
            this.zone.runOutsideAngular(function () {
                setTimeout(function () {
                    _this.zone.run(function () { return _this.notificationService.set(_this.item, false); });
                }, 310);
            });
        }
        else {
            this.notificationService.set(this.item, false);
        }
    };
    return NotificationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], NotificationComponent.prototype, "timeOut", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], NotificationComponent.prototype, "showProgressBar", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], NotificationComponent.prototype, "pauseOnHover", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], NotificationComponent.prototype, "clickToClose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], NotificationComponent.prototype, "maxLength", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], NotificationComponent.prototype, "theClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], NotificationComponent.prototype, "rtl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], NotificationComponent.prototype, "animate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], NotificationComponent.prototype, "position", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NotificationComponent.prototype, "item", void 0);
NotificationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'simple-notification',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('enterLeave', [
                // Enter from right
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('fromRight', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 1, transform: 'translateX(0)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('* => fromRight', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0, transform: 'translateX(5%)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('fromRightOut', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0, transform: 'translateX(-5%)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('fromRight => fromRightOut', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 1, transform: 'translateX(0)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('300ms ease-in-out')
                ]),
                // Enter from left
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('fromLeft', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 1, transform: 'translateX(0)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('* => fromLeft', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0, transform: 'translateX(-5%)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('fromLeftOut', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0, transform: 'translateX(5%)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('fromLeft => fromLeftOut', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 1, transform: 'translateX(0)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('300ms ease-in-out')
                ]),
                // Rotate
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('scale', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 1, transform: 'scale(1)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('* => scale', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0, transform: 'scale(0)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('scaleOut', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0, transform: 'scale(0)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('scale => scaleOut', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 1, transform: 'scale(1)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out')
                ]),
                // Scale
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('rotate', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 1, transform: 'rotate(0deg)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('* => rotate', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0, transform: 'rotate(5deg)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('rotateOut', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0, transform: 'rotate(-5deg)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('rotate => rotateOut', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 1, transform: 'rotate(0deg)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out')
                ])
            ])
        ],
        template: "\n        <div class=\"simple-notification\"\n            [@enterLeave]=\"item.state\"\n            (click)=\"onClick($event)\"\n            [class]=\"theClass\"\n\n            [ngClass]=\"{\n                'alert': item.type === 'alert',\n                'error': item.type === 'error',\n                'warn': item.type === 'warn',\n                'success': item.type === 'success',\n                'info': item.type === 'info',\n                'bare': item.type === 'bare',\n                'rtl-mode': rtl\n            }\"\n\n            (mouseenter)=\"onEnter()\"\n            (mouseleave)=\"onLeave()\">\n\n            <div *ngIf=\"!item.html\">\n                <div class=\"sn-title\">{{item.title}}</div>\n                <div class=\"sn-content\">{{item.content | max:maxLength}}</div>\n\n                <div class=\"icon\" *ngIf=\"item.icon !== 'bare'\" [innerHTML]=\"safeSvg\"></div>\n            </div>\n            <div *ngIf=\"item.html\" [innerHTML]=\"item.html\"></div>\n\n            <div class=\"sn-progress-loader\" *ngIf=\"showProgressBar\">\n                <span [ngStyle]=\"{'width': progressWidth + '%'}\"></span>\n            </div>\n\n        </div>\n    ",
        styles: ["\n        .simple-notification {\n            width: 100%;\n            padding: 10px 20px;\n            box-sizing: border-box;\n            position: relative;\n            float: left;\n            margin-bottom: 10px;\n            color: #fff;\n            cursor: pointer;\n            transition: all 0.5s;\n        }\n\n        .simple-notification .sn-title {\n            margin: 0;\n            padding: 0 50px 0 0;\n            line-height: 30px;\n            font-size: 20px;\n        }\n\n        .simple-notification .sn-content {\n            margin: 0;\n            font-size: 16px;\n            padding: 0 50px 0 0;\n            line-height: 20px;\n        }\n\n        .simple-notification .icon {\n            position: absolute;\n            box-sizing: border-box;\n            top: 0;\n            right: 0;\n            width: 70px;\n            height: 70px;\n            padding: 10px;\n        }\n\n        .simple-notification .icon svg {\n            fill: #fff;\n            width: 100%;\n            height: 100%;\n        }\n\n        .simple-notification .icon svg g {\n            fill: #fff;\n        }\n\n        .simple-notification.rtl-mode {\n            direction: rtl;\n        }\n\n        .simple-notification.rtl-mode .sn-content {\n            padding: 0 0 0 50px;\n        }\n\n        .simple-notification.rtl-mode svg {\n            left: 0;\n            right: auto;\n        }\n\n        .simple-notification.error { background: #F44336; }\n        .simple-notification.success { background: #8BC34A; }\n        .simple-notification.alert { background: #ffdb5b; }\n        .simple-notification.info { background: #03A9F4; }\n        .simple-notification.warn { background: #ffdb5b; }\n\n        .simple-notification .sn-progress-loader {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 5px;\n        }\n\n        .simple-notification .sn-progress-loader span {\n            float: left;\n            height: 100%;\n        }\n\n        .simple-notification.success .sn-progress-loader span { background: #689F38; }\n        .simple-notification.error .sn-progress-loader span { background: #D32F2F; }\n        .simple-notification.alert .sn-progress-loader span { background: #edc242; }\n        .simple-notification.info .sn-progress-loader span { background: #0288D1; }\n        .simple-notification.warn .sn-progress-loader span { background: #edc242; }\n        .simple-notification.bare .sn-progress-loader span { background: #ccc; }\n\n        .simple-notification.warn div .sn-title { color: #444; }\n        .simple-notification.warn div .sn-content { color: #444; }\n    "]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_notifications_service__["a" /* NotificationsService */],
        __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
], NotificationComponent);

//# sourceMappingURL=notification.component.js.map

/***/ }),

/***/ "../../../../angular2-notifications/dist/src/simple-notifications/components/simple-notifications.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_notifications_service__ = __webpack_require__("../../../../angular2-notifications/dist/src/simple-notifications/services/notifications.service.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleNotificationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleNotificationsComponent = (function () {
    function SimpleNotificationsComponent(_service) {
        this._service = _service;
        this.onCreate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDestroy = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.notifications = [];
        this.position = ['bottom', 'right'];
        // Received values
        this.lastOnBottom = true;
        this.maxStack = 8;
        this.preventLastDuplicates = false;
        this.preventDuplicates = false;
        // Sent values
        this.timeOut = 0;
        this.maxLength = 0;
        this.clickToClose = true;
        this.showProgressBar = true;
        this.pauseOnHover = true;
        this.theClass = '';
        this.rtl = false;
        this.animate = 'fromRight';
    }
    Object.defineProperty(SimpleNotificationsComponent.prototype, "options", {
        set: function (opt) {
            this.attachChanges(opt);
        },
        enumerable: true,
        configurable: true
    });
    SimpleNotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Listen for changes in the service
        this.listener = this._service.getChangeEmitter()
            .subscribe(function (item) {
            switch (item.command) {
                case 'cleanAll':
                    _this.notifications = [];
                    break;
                case 'clean':
                    _this.cleanSingle(item.id);
                    break;
                case 'set':
                    if (item.add)
                        _this.add(item.notification);
                    else
                        _this.defaultBehavior(item);
                    break;
                default:
                    _this.defaultBehavior(item);
                    break;
            }
        });
    };
    // Default behavior on event
    SimpleNotificationsComponent.prototype.defaultBehavior = function (value) {
        this.notifications.splice(this.notifications.indexOf(value.notification), 1);
        this.onDestroy.emit(this.buildEmit(value.notification, false));
    };
    // Add the new notification to the notification array
    SimpleNotificationsComponent.prototype.add = function (item) {
        item.createdOn = new Date();
        var toBlock = this.preventLastDuplicates || this.preventDuplicates ? this.block(item) : false;
        // Save this as the last created notification
        this.lastNotificationCreated = item;
        if (!toBlock) {
            // Check if the notification should be added at the start or the end of the array
            if (this.lastOnBottom) {
                if (this.notifications.length >= this.maxStack)
                    this.notifications.splice(0, 1);
                this.notifications.push(item);
            }
            else {
                if (this.notifications.length >= this.maxStack)
                    this.notifications.splice(this.notifications.length - 1, 1);
                this.notifications.splice(0, 0, item);
            }
            this.onCreate.emit(this.buildEmit(item, true));
        }
    };
    // Check if notifications should be prevented
    SimpleNotificationsComponent.prototype.block = function (item) {
        var toCheck = item.html ? this.checkHtml : this.checkStandard;
        if (this.preventDuplicates && this.notifications.length > 0) {
            for (var i = 0; i < this.notifications.length; i++) {
                if (toCheck(this.notifications[i], item)) {
                    return true;
                }
            }
        }
        if (this.preventLastDuplicates) {
            var comp = void 0;
            if (this.preventLastDuplicates === 'visible' && this.notifications.length > 0) {
                if (this.lastOnBottom) {
                    comp = this.notifications[this.notifications.length - 1];
                }
                else {
                    comp = this.notifications[0];
                }
            }
            else if (this.preventLastDuplicates === 'all' && this.lastNotificationCreated) {
                comp = this.lastNotificationCreated;
            }
            else {
                return false;
            }
            return toCheck(comp, item);
        }
        return false;
    };
    SimpleNotificationsComponent.prototype.checkStandard = function (checker, item) {
        return checker.type === item.type && checker.title === item.title && checker.content === item.content;
    };
    SimpleNotificationsComponent.prototype.checkHtml = function (checker, item) {
        return checker.html ? checker.type === item.type && checker.title === item.title && checker.content === item.content && checker.html === item.html : false;
    };
    // Attach all the changes received in the options object
    SimpleNotificationsComponent.prototype.attachChanges = function (options) {
        var _this = this;
        Object.keys(options).forEach(function (a) {
            if (_this.hasOwnProperty(a)) {
                _this[a] = options[a];
            }
        });
    };
    SimpleNotificationsComponent.prototype.buildEmit = function (notification, to) {
        var toEmit = {
            createdOn: notification.createdOn,
            type: notification.type,
            icon: notification.icon,
            id: notification.id
        };
        if (notification.html) {
            toEmit.html = notification.html;
        }
        else {
            toEmit.title = notification.title;
            toEmit.content = notification.content;
        }
        if (!to) {
            toEmit.destroyedOn = new Date();
        }
        return toEmit;
    };
    SimpleNotificationsComponent.prototype.cleanSingle = function (id) {
        var indexOfDelete = 0;
        var doDelete = false;
        this.notifications.forEach(function (notification, idx) {
            if (notification.id === id) {
                indexOfDelete = idx;
                doDelete = true;
            }
        });
        if (doDelete) {
            this.notifications.splice(indexOfDelete, 1);
        }
    };
    SimpleNotificationsComponent.prototype.ngOnDestroy = function () {
        if (this.listener) {
            this.listener.unsubscribe();
        }
    };
    return SimpleNotificationsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SimpleNotificationsComponent.prototype, "options", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SimpleNotificationsComponent.prototype, "onCreate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SimpleNotificationsComponent.prototype, "onDestroy", void 0);
SimpleNotificationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'simple-notifications',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: "\n        <div class=\"simple-notification-wrapper\" [ngClass]=\"position\">\n            <simple-notification\n                *ngFor=\"let a of notifications; let i = index\"\n                [item]=\"a\"\n                [timeOut]=\"timeOut\"\n                [clickToClose]=\"clickToClose\"\n                [maxLength]=\"maxLength\"\n                [showProgressBar]=\"showProgressBar\"\n                [pauseOnHover]=\"pauseOnHover\"\n                [theClass]=\"theClass\"\n                [rtl]=\"rtl\"\n                [animate]=\"animate\"\n                [position]=\"i\"\n                >\n            </simple-notification>\n        </div>\n    ",
        styles: ["\n        .simple-notification-wrapper {\n            position: fixed;\n            width: 300px;\n            z-index: 1000;\n        }\n        \n        .simple-notification-wrapper.left { left: 20px; }\n        .simple-notification-wrapper.top { top: 20px; }\n        .simple-notification-wrapper.right { right: 20px; }\n        .simple-notification-wrapper.bottom { bottom: 20px; }\n        \n        @media (max-width: 340px) {\n            .simple-notification-wrapper {\n                width: auto;\n                left: 20px;\n                right: 20px;\n            }\n        }\n    "]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_notifications_service__["a" /* NotificationsService */]])
], SimpleNotificationsComponent);

//# sourceMappingURL=simple-notifications.component.js.map

/***/ }),

/***/ "../../../../angular2-notifications/dist/src/simple-notifications/interfaces/icons.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultIcons; });
var defaultIcons = {
    alert: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n            <path d=\"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"/>\n        </svg>\n    ",
    error: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0V0z\" fill=\"none\"/>\n            <path d=\"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/>\n        </svg>\n    ",
    info: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n            <path d=\"M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z\"/>\n        </svg>\n    ",
    success: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n            <path d=\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\"/>\n        </svg>\n    ",
    warn: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" width=\"64\" viewBox=\"0 0 64 64\" height=\"64\">\n          <circle cx=\"32.086\" cy=\"50.142\" r=\"2.256\"/>\n          <path d=\"M30.08 25.012V42.32c0 1.107.897 2.005 2.006 2.005s2.006-.897 2.006-2.005V25.012c0-1.107-.897-2.006-2.006-2.006s-2.006.898-2.006 2.006z\"/>\n          <path d=\"M63.766 59.234L33.856 3.082c-.697-1.308-2.844-1.308-3.54 0L.407 59.234c-.331.622-.312 1.372.051 1.975.362.605 1.015.975 1.72.975h59.816c.705 0 1.357-.369 1.721-.975.361-.603.381-1.353.051-1.975zM5.519 58.172L32.086 8.291l26.568 49.881H5.519z\"/>\n        </svg>\n    "
};
//# sourceMappingURL=icons.js.map

/***/ }),

/***/ "../../../../angular2-notifications/dist/src/simple-notifications/pipes/max.pipe.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaxPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MaxPipe = (function () {
    function MaxPipe() {
    }
    MaxPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!value)
            return value;
        var allowed = args[0];
        var received = value.length;
        if (received > allowed && allowed !== 0) {
            var toCut = allowed - received;
            return value.slice(0, toCut);
        }
        return value;
    };
    return MaxPipe;
}());
MaxPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'max' })
], MaxPipe);

//# sourceMappingURL=max.pipe.js.map

/***/ }),

/***/ "../../../../angular2-notifications/dist/src/simple-notifications/services/notifications.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_icons__ = __webpack_require__("../../../../angular2-notifications/dist/src/simple-notifications/interfaces/icons.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationsService = (function () {
    function NotificationsService() {
        this.emitter = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.icons = __WEBPACK_IMPORTED_MODULE_2__interfaces_icons__["a" /* defaultIcons */];
    }
    NotificationsService.prototype.set = function (notification, to) {
        notification.id = notification.override && notification.override.id ? notification.override.id : Math.random().toString(36).substring(3);
        notification.click = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitter.next({ command: 'set', notification: notification, add: to });
        return notification;
    };
    ;
    NotificationsService.prototype.getChangeEmitter = function () {
        return this.emitter;
    };
    //// Access methods
    NotificationsService.prototype.success = function (title, content, override) {
        return this.set({ title: title, content: content || '', type: 'success', icon: this.icons.success, override: override }, true);
    };
    NotificationsService.prototype.error = function (title, content, override) {
        return this.set({ title: title, content: content || '', type: 'error', icon: this.icons.error, override: override }, true);
    };
    NotificationsService.prototype.alert = function (title, content, override) {
        return this.set({ title: title, content: content || '', type: 'alert', icon: this.icons.alert, override: override }, true);
    };
    NotificationsService.prototype.info = function (title, content, override) {
        return this.set({ title: title, content: content || '', type: 'info', icon: this.icons.info, override: override }, true);
    };
    NotificationsService.prototype.warn = function (title, content, override) {
        return this.set({ title: title, content: content || '', type: 'warn', icon: this.icons.warn, override: override }, true);
    };
    NotificationsService.prototype.bare = function (title, content, override) {
        return this.set({ title: title, content: content || '', type: 'bare', icon: 'bare', override: override }, true);
    };
    // With type method
    NotificationsService.prototype.create = function (title, content, type, override) {
        if (content === void 0) { content = ''; }
        if (type === void 0) { type = 'success'; }
        return this.set({ title: title, content: content, type: type, icon: this.icons[type], override: override }, true);
    };
    // HTML Notification method
    NotificationsService.prototype.html = function (html, type, override) {
        if (type === void 0) { type = 'success'; }
        return this.set({ html: html, type: type, icon: 'bare', override: override }, true);
    };
    // Remove all notifications method
    NotificationsService.prototype.remove = function (id) {
        if (id)
            this.emitter.next({ command: 'clean', id: id });
        else
            this.emitter.next({ command: 'cleanAll' });
    };
    return NotificationsService;
}());
NotificationsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], NotificationsService);

//# sourceMappingURL=notifications.service.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/interval.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var interval_1 = __webpack_require__("../../../../rxjs/observable/interval.js");
Observable_1.Observable.interval = interval_1.interval;
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ "../../../../rxjs/observable/IntervalObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isNumeric_1 = __webpack_require__("../../../../rxjs/util/isNumeric.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var IntervalObservable = (function (_super) {
    __extends(IntervalObservable, _super);
    function IntervalObservable(period, scheduler) {
        if (period === void 0) { period = 0; }
        if (scheduler === void 0) { scheduler = async_1.async; }
        _super.call(this);
        this.period = period;
        this.scheduler = scheduler;
        if (!isNumeric_1.isNumeric(period) || period < 0) {
            this.period = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            this.scheduler = async_1.async;
        }
    }
    /**
     * Creates an Observable that emits sequential numbers every specified
     * interval of time, on a specified IScheduler.
     *
     * <span class="informal">Emits incremental numbers periodically in time.
     * </span>
     *
     * <img src="./img/interval.png" width="100%">
     *
     * `interval` returns an Observable that emits an infinite sequence of
     * ascending integers, with a constant interval of time of your choosing
     * between those emissions. The first emission is not sent immediately, but
     * only after the first period has passed. By default, this operator uses the
     * `async` IScheduler to provide a notion of time, but you may pass any
     * IScheduler to it.
     *
     * @example <caption>Emits ascending numbers, one every second (1000ms)</caption>
     * var numbers = Rx.Observable.interval(1000);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link timer}
     * @see {@link delay}
     *
     * @param {number} [period=0] The interval size in milliseconds (by default)
     * or the time unit determined by the scheduler's clock.
     * @param {Scheduler} [scheduler=async] The IScheduler to use for scheduling
     * the emission of values, and providing a notion of "time".
     * @return {Observable} An Observable that emits a sequential number each time
     * interval.
     * @static true
     * @name interval
     * @owner Observable
     */
    IntervalObservable.create = function (period, scheduler) {
        if (period === void 0) { period = 0; }
        if (scheduler === void 0) { scheduler = async_1.async; }
        return new IntervalObservable(period, scheduler);
    };
    IntervalObservable.dispatch = function (state) {
        var index = state.index, subscriber = state.subscriber, period = state.period;
        subscriber.next(index);
        if (subscriber.closed) {
            return;
        }
        state.index += 1;
        this.schedule(state, period);
    };
    IntervalObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var period = this.period;
        var scheduler = this.scheduler;
        subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
            index: index, subscriber: subscriber, period: period
        }));
    };
    return IntervalObservable;
}(Observable_1.Observable));
exports.IntervalObservable = IntervalObservable;
//# sourceMappingURL=IntervalObservable.js.map

/***/ }),

/***/ "../../../../rxjs/observable/interval.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IntervalObservable_1 = __webpack_require__("../../../../rxjs/observable/IntervalObservable.js");
exports.interval = IntervalObservable_1.IntervalObservable.create;
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ "../../../../rxjs/util/isNumeric.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray_1 = __webpack_require__("../../../../rxjs/util/isArray.js");
function isNumeric(val) {
    // parseFloat NaNs numeric-cast false positives (null|true|false|"")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    // adding 1 corrects loss of precision from parseFloat (#15100)
    return !isArray_1.isArray(val) && (val - parseFloat(val) + 1) >= 0;
}
exports.isNumeric = isNumeric;
;
//# sourceMappingURL=isNumeric.js.map

/***/ })

});
//# sourceMappingURL=1.chunk.js.map