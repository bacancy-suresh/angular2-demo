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
var demo_service_1 = require('./demo.service');
var auth_service_1 = require('./auth.service');
var HomeComponent = (function () {
    function HomeComponent(_demoService, auth) {
        this._demoService = _demoService;
        this.auth = auth;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    HomeComponent.prototype.getCompanies = function () {
        var _this = this;
        this._demoService.getCompanies().subscribe(
        // the first argument is a function which runs on success
        function (data) { _this.companies = data; }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () { return console.log('done loading companies'); });
    };
    HomeComponent.prototype.createCompanies = function (name) {
        var _this = this;
        var companie = { name: name };
        this._demoService.createCompanies(companie).subscribe(function (data) {
            // refresh the list
            _this.getCompanies();
            return true;
        });
    };
    HomeComponent.prototype.updateCompanies = function (companie) {
        var _this = this;
        this._demoService.updateCompanies(companie).subscribe(function (data) {
            // refresh the list
            _this.getCompanies();
            return true;
        });
    };
    HomeComponent.prototype.deleteCompanies = function (companie) {
        var _this = this;
        if (confirm("Are you sure you want to delete " + companie.name + "?")) {
            this._demoService.deleteCompanies(companie).subscribe(function (data) {
                // refresh the list
                _this.getCompanies();
                return true;
            });
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'app/home.template.html'
        }), 
        __metadata('design:paramtypes', [demo_service_1.DemoService, auth_service_1.Auth])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map