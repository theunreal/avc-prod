webpackJsonp([4],{

/***/ "../../../../../src/app/admin/devices/device-list/device-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<md-card class=\"nospaces\">\n\t\t<md-toolbar color=\"accent\">\n\t\t  <span>Device List</span>\n\t\t</md-toolbar>\n\t\t\n\t\t    <md-tab-group class=\"extend-toolbar\">\n\t\t\t  <md-tab *ngFor=\"let segment of segments | async as segments; let i = index\"\n\t\t\t  label=\"{{segment.name}} ({{segment.devices.length}})\">\n\t\t\t  \t<section class=\"container-fluid\">\n\t\t\t  \t<md-input-container>\n\t\t  \t\t<input mdInput placeholder=\"Filter Devices..\"\n\t\t  \t\t [(ngModel)]=\"name\"\n\t\t  \t\t  (ngModelChange)=\"filterName($event,segment,i)\">\n\t\t\t\t</md-input-container>\n\t\t\t\t  <md-nav-list>\n\t\t\t\t  \t<div  class=\"row pt-4 pl-2\">\n\t\t\t\t\t\t  \t<md-list-item *ngFor=\"let device of segment.devices\" \n\t\t\t\t\t\t\t\trouterLink=\"/admin/summary/device/{{device.data.deviceId}}\" class=\"col\">\n\t\t\t\t\t\t\t\t\t<md-icon md-list-icon\n\t\t\t\t\t\t\t\t\t[class.up]=\"device\"\n\t\t\t\t\t\t\t\t\t[class.down]=\"!device\">cloud</md-icon>\n\t\t\t\t\t\t\t\t\t<h4 md-line>{{device.data.deviceId}}</h4>\n\t\t\t\t\t\t\t\t\t<p md-line>{{device.score}}% <md-icon>trending_up</md-icon></p>\n\t\t\t\t\t\t\t\t</md-list-item>\n\t\t\t\t\t\t</div>\n\t\t\t\t  \t</md-nav-list>\n\t\t\t\t  </section>\n\t\t\t  </md-tab>\n\t\t\t</md-tab-group>\n\t\t</md-card>\n\t</div>"

/***/ }),

/***/ "../../../../../src/app/admin/devices/device-list/device-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/deep/ .mat-tab-label {\n  color: white; }\n\n/deep/ .mat-tab-header {\n  background-color: #448AFF; }\n\n/deep/ .mat-ink-bar {\n  background-color: white !important;\n  min-width: 120px; }\n\n.hoverShadow:hover {\n  box-shadow: 3px 3px 3px #888888;\n  cursor: pointer;\n  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.45);\n  transition: box-shadow 0.3s; }\n\nmd-card-title {\n  font-weight: bold; }\n\n.connected {\n  border-bottom: 3px solid #6FDF6B; }\n\n.disconnected {\n  border-bottom: 3px solid #D64747; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/devices/device-list/device-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__devices_device_service__ = __webpack_require__("../../../../../src/app/admin/devices/device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { Device } from './device.interface';



var DeviceListComponent = (function () {
    function DeviceListComponent(http, deviceService) {
        this.http = http;
        this.deviceService = deviceService;
        this.mockSegments = [
            {
                "name": "cisco",
                "devices": [
                    {
                        "data": {
                            "deviceId": "sjc23-noca-appx-gw1",
                            "deviceIp": "10.35.16.20",
                            "ignoreDevice": false
                        },
                        "controller": {
                            "controllerAddress": "10.56.196.226",
                            "activeControllerAddress": "10.56.196.226",
                            "primaryControllerAddress": "10.56.196.226",
                            "secondaryControllerAddress": "10.56.196.153"
                        },
                        "scores": {
                            "firstPktsClassificationRatio": 8.0,
                            "sdAvcPktsClassificationImprovment": 6.8,
                            "sdAvcCoverageRatio": 7.5,
                            "sdAvcClassificationImprovement": 3.1,
                            "totalFlows": 278789,
                            "flowsPerSeconds": 929.3
                        },
                        "package": {
                            "currentLoadedPack": "pp_update_201707230931.pack",
                            "packRuleCandidate": "pp_update_201707230931.pack",
                            "packRuleCandidateTs": 1500802267000,
                            "currentLoadedProtocolPack": "pp32_166_230717_1040",
                            "defaultPackVersion": 31,
                            "activePackVersion": 31,
                            "protocolPackLastUpdatedPack": null,
                            "protocolPackLastUpdateStartTs": null,
                            "protocolPackLastUpdateEndTs": null,
                            "ppUpdateStatus": "No pending job",
                            "ppUpdateStartTs": null,
                            "ppUpdateEta": null,
                            "lastPpUpdateStatus": "No job history",
                            "protocolPackCandidate": "BuiltIn"
                        },
                        "flows": {
                            "fifClassified": 187908,
                            "sdavcFifClassified": 157925,
                            "sdavcEarlyClassified": 177259,
                            "sdavcClassified": 22583,
                            "finalClassified": 147309,
                            "totalUdp": 106905,
                            "totalTcpOpened": 128000,
                            "totalUdpOpened": 108027,
                            "totalTcp": 80283,
                            "totalDns": 0,
                            "totalAsymTcp": 22636,
                            "totalAsymUdp": 18045,
                            "totalAsymDns": 0
                        },
                        "config": {
                            "version": 1,
                            "import": {
                                "enabled": true,
                                "intervalSec": 300,
                                "timeoutRollback": true
                            },
                            "export": {
                                "enabled": true,
                                "socketCacheIntervalSec": 900,
                                "l3CacheIntervalSec": 900,
                                "protocolDiscoveryIntervalSec": 300,
                                "deviceInfoIntervalSec": 60,
                                "asymSocketsIntervalSec": 900,
                                "socketCacheMaxEntriesToExport": 20000,
                                "l3CacheMaxEntriesToExport": 30000,
                                "asymSocketsMaxEntriesToExport": 900,
                                "socketCacheProtocolsToFilter": {
                                    "http": true,
                                    "ssl": true,
                                    "snmp": true,
                                    "ntp": true,
                                    "https": true,
                                    "statistical-conf-audio": true
                                }
                            }
                        },
                        "lastSwitchoverTs": null,
                        "lastStatusTs": 1500802649000,
                        "lastAutoUpdateTs": 1500802471000,
                        "lastAutoUpdateRulePackTs": 1500802471000,
                        "lastPdTs": 1500802621000,
                        "lastPdBytes": 3807108910,
                        "lastCacheUpdate": null,
                        "ftpLoginSuccess": 1124,
                        "score": 96,
                        "engineVersion": 30,
                        "asymmetricScore": 28,
                        "connected": true
                    },
                    {
                        "data": {
                            "deviceId": "sjc23-noca-appx-gw1",
                            "deviceIp": "10.35.16.20",
                            "ignoreDevice": false
                        },
                        "controller": {
                            "controllerAddress": "10.56.196.226",
                            "activeControllerAddress": "10.56.196.226",
                            "primaryControllerAddress": "10.56.196.226",
                            "secondaryControllerAddress": "10.56.196.153"
                        },
                        "package": {
                            "currentLoadedPack": "pp_update_201707230931.pack",
                            "packRuleCandidate": "pp_update_201707230931.pack",
                            "packRuleCandidateTs": 1500802267000,
                            "currentLoadedProtocolPack": "pp32_166_230717_1040",
                            "defaultPackVersion": 31,
                            "activePackVersion": 31,
                            "protocolPackLastUpdatedPack": null,
                            "protocolPackLastUpdateStartTs": null,
                            "protocolPackLastUpdateEndTs": null,
                            "ppUpdateStatus": "No pending job",
                            "ppUpdateStartTs": null,
                            "ppUpdateEta": null,
                            "lastPpUpdateStatus": "No job history",
                            "protocolPackCandidate": "BuiltIn"
                        },
                        "scores": {
                            "firstPktsClassificationRatio": 8.0,
                            "sdAvcPktsClassificationImprovment": 6.8,
                            "sdAvcCoverageRatio": 7.5,
                            "sdAvcClassificationImprovement": 3.1,
                            "totalFlows": 278789,
                            "flowsPerSeconds": 929.3
                        },
                        "flows": {
                            "fifClassified": 187908,
                            "sdavcFifClassified": 157925,
                            "sdavcEarlyClassified": 177259,
                            "sdavcClassified": 22583,
                            "finalClassified": 147309,
                            "totalUdp": 106905,
                            "totalTcpOpened": 128000,
                            "totalUdpOpened": 108027,
                            "totalTcp": 80283,
                            "totalDns": 0,
                            "totalAsymTcp": 22636,
                            "totalAsymUdp": 18045,
                            "totalAsymDns": 0
                        },
                        "config": {
                            "version": 1,
                            "import": {
                                "enabled": true,
                                "intervalSec": 300,
                                "timeoutRollback": true
                            },
                            "export": {
                                "enabled": true,
                                "socketCacheIntervalSec": 900,
                                "l3CacheIntervalSec": 900,
                                "protocolDiscoveryIntervalSec": 300,
                                "deviceInfoIntervalSec": 60,
                                "asymSocketsIntervalSec": 900,
                                "socketCacheMaxEntriesToExport": 20000,
                                "l3CacheMaxEntriesToExport": 30000,
                                "asymSocketsMaxEntriesToExport": 900,
                                "socketCacheProtocolsToFilter": {
                                    "http": true,
                                    "ssl": true,
                                    "snmp": true,
                                    "ntp": true,
                                    "https": true,
                                    "statistical-conf-audio": true
                                }
                            }
                        },
                        "lastSwitchoverTs": null,
                        "lastStatusTs": 1500802649000,
                        "lastAutoUpdateTs": 1500802471000,
                        "lastAutoUpdateRulePackTs": 1500802471000,
                        "lastPdTs": 1500802621000,
                        "lastPdBytes": 3807108910,
                        "lastCacheUpdate": null,
                        "ftpLoginSuccess": 1124,
                        "score": 96,
                        "engineVersion": 30,
                        "asymmetricScore": 28
                    },
                    {
                        "data": {
                            "deviceId": "sjc23-noca-appx-gw1",
                            "deviceIp": "10.35.16.20",
                            "ignoreDevice": false
                        },
                        "controller": {
                            "controllerAddress": "10.56.196.226",
                            "activeControllerAddress": "10.56.196.226",
                            "primaryControllerAddress": "10.56.196.226",
                            "secondaryControllerAddress": "10.56.196.153"
                        },
                        "scores": {
                            "firstPktsClassificationRatio": 8.0,
                            "sdAvcPktsClassificationImprovment": 6.8,
                            "sdAvcCoverageRatio": 7.5,
                            "sdAvcClassificationImprovement": 3.1,
                            "totalFlows": 278789,
                            "flowsPerSeconds": 929.3
                        },
                        "package": {
                            "currentLoadedPack": "pp_update_201707230931.pack",
                            "packRuleCandidate": "pp_update_201707230931.pack",
                            "packRuleCandidateTs": 1500802267000,
                            "currentLoadedProtocolPack": "pp32_166_230717_1040",
                            "defaultPackVersion": 31,
                            "activePackVersion": 31,
                            "protocolPackLastUpdatedPack": null,
                            "protocolPackLastUpdateStartTs": null,
                            "protocolPackLastUpdateEndTs": null,
                            "ppUpdateStatus": "No pending job",
                            "ppUpdateStartTs": null,
                            "ppUpdateEta": null,
                            "lastPpUpdateStatus": "No job history",
                            "protocolPackCandidate": "BuiltIn"
                        },
                        "flows": {
                            "fifClassified": 187908,
                            "sdavcFifClassified": 157925,
                            "sdavcEarlyClassified": 177259,
                            "sdavcClassified": 22583,
                            "finalClassified": 147309,
                            "totalUdp": 106905,
                            "totalTcpOpened": 128000,
                            "totalUdpOpened": 108027,
                            "totalTcp": 80283,
                            "totalDns": 0,
                            "totalAsymTcp": 22636,
                            "totalAsymUdp": 18045,
                            "totalAsymDns": 0
                        },
                        "config": {
                            "version": 1,
                            "import": {
                                "enabled": true,
                                "intervalSec": 300,
                                "timeoutRollback": true
                            },
                            "export": {
                                "enabled": true,
                                "socketCacheIntervalSec": 900,
                                "l3CacheIntervalSec": 900,
                                "protocolDiscoveryIntervalSec": 300,
                                "deviceInfoIntervalSec": 60,
                                "asymSocketsIntervalSec": 900,
                                "socketCacheMaxEntriesToExport": 20000,
                                "l3CacheMaxEntriesToExport": 30000,
                                "asymSocketsMaxEntriesToExport": 900,
                                "socketCacheProtocolsToFilter": {
                                    "http": true,
                                    "ssl": true,
                                    "snmp": true,
                                    "ntp": true,
                                    "https": true,
                                    "statistical-conf-audio": true
                                }
                            }
                        },
                        "lastSwitchoverTs": null,
                        "lastStatusTs": 1500802649000,
                        "lastAutoUpdateTs": 1500802471000,
                        "lastAutoUpdateRulePackTs": 1500802471000,
                        "lastPdTs": 1500802621000,
                        "lastPdBytes": 3807108910,
                        "lastCacheUpdate": null,
                        "ftpLoginSuccess": 1124,
                        "score": 96,
                        "engineVersion": 30,
                        "asymmetricScore": 28,
                        "connected": true
                    }
                ]
            },
            {
                "name": "mongo",
                "devices": [
                    {
                        "data": {
                            "deviceId": "sjc23-noca-appx-gw1",
                            "deviceIp": "10.35.16.20",
                            "ignoreDevice": false
                        },
                        "controller": {
                            "controllerAddress": "10.56.196.226",
                            "activeControllerAddress": "10.56.196.226",
                            "primaryControllerAddress": "10.56.196.226",
                            "secondaryControllerAddress": "10.56.196.153"
                        },
                        "scores": {
                            "firstPktsClassificationRatio": 8.0,
                            "sdAvcPktsClassificationImprovment": 6.8,
                            "sdAvcCoverageRatio": 7.5,
                            "sdAvcClassificationImprovement": 3.1,
                            "totalFlows": 278789,
                            "flowsPerSeconds": 929.3
                        },
                        "package": {
                            "currentLoadedPack": "pp_update_201707230931.pack",
                            "packRuleCandidate": "pp_update_201707230931.pack",
                            "packRuleCandidateTs": 1500802267000,
                            "currentLoadedProtocolPack": "pp32_166_230717_1040",
                            "defaultPackVersion": 31,
                            "activePackVersion": 31,
                            "protocolPackLastUpdatedPack": null,
                            "protocolPackLastUpdateStartTs": null,
                            "protocolPackLastUpdateEndTs": null,
                            "ppUpdateStatus": "No pending job",
                            "ppUpdateStartTs": null,
                            "ppUpdateEta": null,
                            "lastPpUpdateStatus": "No job history",
                            "protocolPackCandidate": "BuiltIn"
                        },
                        "flows": {
                            "fifClassified": 187908,
                            "sdavcFifClassified": 157925,
                            "sdavcEarlyClassified": 177259,
                            "sdavcClassified": 22583,
                            "finalClassified": 147309,
                            "totalUdp": 106905,
                            "totalTcpOpened": 128000,
                            "totalUdpOpened": 108027,
                            "totalTcp": 80283,
                            "totalDns": 0,
                            "totalAsymTcp": 22636,
                            "totalAsymUdp": 18045,
                            "totalAsymDns": 0
                        },
                        "config": {
                            "version": 1,
                            "import": {
                                "enabled": true,
                                "intervalSec": 300,
                                "timeoutRollback": true
                            },
                            "export": {
                                "enabled": true,
                                "socketCacheIntervalSec": 900,
                                "l3CacheIntervalSec": 900,
                                "protocolDiscoveryIntervalSec": 300,
                                "deviceInfoIntervalSec": 60,
                                "asymSocketsIntervalSec": 900,
                                "socketCacheMaxEntriesToExport": 20000,
                                "l3CacheMaxEntriesToExport": 30000,
                                "asymSocketsMaxEntriesToExport": 900,
                                "socketCacheProtocolsToFilter": {
                                    "http": true,
                                    "ssl": true,
                                    "snmp": true,
                                    "ntp": true,
                                    "https": true,
                                    "statistical-conf-audio": true
                                }
                            }
                        },
                        "lastSwitchoverTs": null,
                        "lastStatusTs": 1500802649000,
                        "lastAutoUpdateTs": 1500802471000,
                        "lastAutoUpdateRulePackTs": 1500802471000,
                        "lastPdTs": 1500802621000,
                        "lastPdBytes": 3807108910,
                        "lastCacheUpdate": null,
                        "ftpLoginSuccess": 1124,
                        "score": 96,
                        "engineVersion": 30,
                        "asymmetricScore": 28,
                        "connected": true
                    },
                    {
                        "data": {
                            "deviceId": "sjc23-noca-appx-gw1",
                            "deviceIp": "10.35.16.20",
                            "ignoreDevice": false
                        },
                        "controller": {
                            "controllerAddress": "10.56.196.226",
                            "activeControllerAddress": "10.56.196.226",
                            "primaryControllerAddress": "10.56.196.226",
                            "secondaryControllerAddress": "10.56.196.153"
                        },
                        "scores": {
                            "firstPktsClassificationRatio": 8.0,
                            "sdAvcPktsClassificationImprovment": 6.8,
                            "sdAvcCoverageRatio": 7.5,
                            "sdAvcClassificationImprovement": 3.1,
                            "totalFlows": 278789,
                            "flowsPerSeconds": 929.3
                        },
                        "package": {
                            "currentLoadedPack": "pp_update_201707230931.pack",
                            "packRuleCandidate": "pp_update_201707230931.pack",
                            "packRuleCandidateTs": 1500802267000,
                            "currentLoadedProtocolPack": "pp32_166_230717_1040",
                            "defaultPackVersion": 31,
                            "activePackVersion": 31,
                            "protocolPackLastUpdatedPack": null,
                            "protocolPackLastUpdateStartTs": null,
                            "protocolPackLastUpdateEndTs": null,
                            "ppUpdateStatus": "No pending job",
                            "ppUpdateStartTs": null,
                            "ppUpdateEta": null,
                            "lastPpUpdateStatus": "No job history",
                            "protocolPackCandidate": "BuiltIn"
                        },
                        "flows": {
                            "fifClassified": 187908,
                            "sdavcFifClassified": 157925,
                            "sdavcEarlyClassified": 177259,
                            "sdavcClassified": 22583,
                            "finalClassified": 147309,
                            "totalUdp": 106905,
                            "totalTcpOpened": 128000,
                            "totalUdpOpened": 108027,
                            "totalTcp": 80283,
                            "totalDns": 0,
                            "totalAsymTcp": 22636,
                            "totalAsymUdp": 18045,
                            "totalAsymDns": 0
                        },
                        "config": {
                            "version": 1,
                            "import": {
                                "enabled": true,
                                "intervalSec": 300,
                                "timeoutRollback": true
                            },
                            "export": {
                                "enabled": true,
                                "socketCacheIntervalSec": 900,
                                "l3CacheIntervalSec": 900,
                                "protocolDiscoveryIntervalSec": 300,
                                "deviceInfoIntervalSec": 60,
                                "asymSocketsIntervalSec": 900,
                                "socketCacheMaxEntriesToExport": 20000,
                                "l3CacheMaxEntriesToExport": 30000,
                                "asymSocketsMaxEntriesToExport": 900,
                                "socketCacheProtocolsToFilter": {
                                    "http": true,
                                    "ssl": true,
                                    "snmp": true,
                                    "ntp": true,
                                    "https": true,
                                    "statistical-conf-audio": true
                                }
                            }
                        },
                        "lastSwitchoverTs": null,
                        "lastStatusTs": 1500802649000,
                        "lastAutoUpdateTs": 1500802471000,
                        "lastAutoUpdateRulePackTs": 1500802471000,
                        "lastPdTs": 1500802621000,
                        "lastPdBytes": 3807108910,
                        "lastCacheUpdate": null,
                        "ftpLoginSuccess": 1124,
                        "score": 96,
                        "engineVersion": 30,
                        "asymmetricScore": 28,
                        "connected": true
                    }
                ]
            }
        ];
    }
    DeviceListComponent.prototype.ngOnInit = function () {
        this.segments = this.deviceService.getDevices();
    };
    DeviceListComponent.prototype.filterName = function ($event, segment, index) {
        segment.devices = this.mockSegments[index].devices.filter(function (device) {
            if (device.data.deviceId.toLowerCase().includes($event.toLowerCase()) === true) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    return DeviceListComponent;
}());
DeviceListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-device-list',
        template: __webpack_require__("../../../../../src/app/admin/devices/device-list/device-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/devices/device-list/device-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__devices_device_service__["a" /* DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__devices_device_service__["a" /* DeviceService */]) === "function" && _b || Object])
], DeviceListComponent);

var _a, _b;
//# sourceMappingURL=device-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/devices/device.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_API_CONFIG__ = __webpack_require__("../../../../../src/app/shared/API_CONFIG.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeviceService = (function () {
    function DeviceService(http) {
        this.http = http;
    }
    DeviceService.prototype.getDevices = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_API_CONFIG__["a" /* API_URL */] + 'devices.json');
    };
    return DeviceService;
}());
DeviceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], DeviceService);

var _a;
//# sourceMappingURL=device.service.js.map

/***/ }),

/***/ "../../../../../src/app/admin/devices/devices.component.html":
/***/ (function(module, exports) {

module.exports = "      <!-- make sure to keep the =\"outlet\" part -->\r\n      <router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/admin/devices/devices.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/devices/devices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DevicesComponent = (function () {
    function DevicesComponent() {
    }
    DevicesComponent.prototype.ngOnInit = function () {
    };
    return DevicesComponent;
}());
DevicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-devices',
        template: __webpack_require__("../../../../../src/app/admin/devices/devices.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/devices/devices.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DevicesComponent);

//# sourceMappingURL=devices.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/devices/devices.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_admin_shared_module__ = __webpack_require__("../../../../../src/app/admin/shared/admin-shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__device_list_device_list_component__ = __webpack_require__("../../../../../src/app/admin/devices/device-list/device-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__devices_component__ = __webpack_require__("../../../../../src/app/admin/devices/devices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__devices_routing_module__ = __webpack_require__("../../../../../src/app/admin/devices/devices.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__device_service__ = __webpack_require__("../../../../../src/app/admin/devices/device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk__ = __webpack_require__("../../../cdk/@angular/cdk.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesModule", function() { return DevicesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DevicesModule = (function () {
    function DevicesModule() {
    }
    return DevicesModule;
}());
DevicesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__shared_admin_shared_module__["a" /* AdminSharedModule */],
            __WEBPACK_IMPORTED_MODULE_4__devices_routing_module__["a" /* DevicesRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_cdk__["_0" /* CdkTableModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__devices_component__["a" /* DevicesComponent */], __WEBPACK_IMPORTED_MODULE_1__device_list_device_list_component__["a" /* DeviceListComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__device_service__["a" /* DeviceService */]]
    })
], DevicesModule);

//# sourceMappingURL=devices.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/devices/devices.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__device_list_device_list_component__ = __webpack_require__("../../../../../src/app/admin/devices/device-list/device-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__devices_component__ = __webpack_require__("../../../../../src/app/admin/devices/devices.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__devices_component__["a" /* DevicesComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_0__device_list_device_list_component__["a" /* DeviceListComponent */],
                /*
                resolve: {
                  devices: DeviceListResolver
                },*/ data: {
                    animation: {
                        value: 'device',
                    }
                } },
        ]
    }
];
var DevicesRoutingModule = (function () {
    function DevicesRoutingModule() {
    }
    return DevicesRoutingModule;
}());
DevicesRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]]
    })
], DevicesRoutingModule);

//# sourceMappingURL=devices.routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/API_CONFIG.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
var API_URL = 'assets/data/';
//# sourceMappingURL=API_CONFIG.js.map

/***/ })

});
//# sourceMappingURL=4.chunk.js.map