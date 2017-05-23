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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
require('rxjs/add/observable/forkJoin');
var Auth = (function () {
    function Auth(http, router) {
        this.http = http;
        this.router = router;
        var usertoken = localStorage.getItem('token');
        this.token = usertoken;
        this.user = localStorage.getItem('user');
        this.baseUrl = "http://192.168.1.119:8080/api/";
    }
    Auth.prototype.login = function (data) {
        return this.http.post(this.baseUrl + 'login', data).map(function (res) { return res.json(); });
    };
    Auth.prototype.currentUser = function () {
        return localStorage.getItem('user');
    };
    Auth.prototype.authenticated = function () {
        return localStorage.getItem('token');
    };
    Auth.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.token = null;
        this.user = null;
        this.router.navigate(['/login']);
    };
    Auth = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], Auth);
    return Auth;
}());
exports.Auth = Auth;
//# sourceMappingURL=auth.service.js.map