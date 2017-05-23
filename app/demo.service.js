"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var auth_service_1 = require('./auth.service');
var http_1 = require('@angular/http');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
require('rxjs/add/observable/forkJoin');
var DemoService = (function () {
    function DemoService(http, _authService) {
        this.http = http;
        this._authService = _authService;
    }
    DemoService.prototype.getCompanies = function () {
        return this.http.get(this._authService.baseUrl + 'companies').map(function (res) { return res.json(); });
    };
    DemoService.prototype.createCompanies = function (companie) {
        return this.http.post(this._authService.baseUrl + 'companies', companie).map(function (res) { return res.json(); });
    };
    DemoService.prototype.updateCompanies = function (companie) {
        return this.http.put(this._authService.baseUrl + 'companies/' + companie.id, companie).map(function (res) { return res.json(); });
    };
    DemoService.prototype.deleteCompanies = function (companie) {
        return this.http.delete(this._authService.baseUrl + 'companies/' + companie.id);
    };
    DemoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.Auth])
    ], DemoService);
    return DemoService;
}());
exports.DemoService = DemoService;
//# sourceMappingURL=demo.service.js.map