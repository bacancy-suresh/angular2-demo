"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var auth_service_1 = require('./auth.service');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
require('rxjs/Rx');
var AuthenticationConnectionBackend = (function (_super) {
    __extends(AuthenticationConnectionBackend, _super);
    function AuthenticationConnectionBackend(browserXhr, baseResponseOptions, xsrfStrategy, auth) {
        _super.call(this, browserXhr, baseResponseOptions, xsrfStrategy);
        this.auth = auth;
    }
    AuthenticationConnectionBackend.prototype.createConnection = function (request) {
        var _this = this;
        if (localStorage.getItem('token')) {
            request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
            request.headers.set('Content-Type', 'application/json');
        }
        else {
            request.headers.set('Content-Type', 'application/json');
        }
        var xhrConnection = _super.prototype.createConnection.call(this, request);
        xhrConnection.response = xhrConnection.response.catch(function (error) {
            if (error.status === 401 || error.status === 403 || error.status === 400) {
                // call login/logout service to handle unauthorized requests
                _this.auth.logout();
            }
            return Observable_1.Observable.throw(error);
        });
        return xhrConnection;
    };
    AuthenticationConnectionBackend = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.BrowserXhr, http_1.ResponseOptions, http_1.XSRFStrategy, auth_service_1.Auth])
    ], AuthenticationConnectionBackend);
    return AuthenticationConnectionBackend;
}(http_1.XHRBackend));
exports.AuthenticationConnectionBackend = AuthenticationConnectionBackend;
//# sourceMappingURL=http.js.map