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
var CompaniesComponent = (function () {
    function CompaniesComponent(_demoService, auth) {
        this._demoService = _demoService;
        this.auth = auth;
    }
    CompaniesComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    CompaniesComponent.prototype.getCompanies = function () {
        var _this = this;
        this._demoService.getCompanies().subscribe(
        // the first argument is a function which runs on success
        function (data) { _this.companies = data; }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () { return console.log('done loading companies'); });
    };
    CompaniesComponent.prototype.createCompanies = function (name) {
        var _this = this;
        var companie = { name: name };
        this._demoService.createCompanies(companie).subscribe(function (data) {
            // refresh the list
            _this.getCompanies();
            return true;
        });
    };
    CompaniesComponent.prototype.updateCompanies = function (companie) {
        var _this = this;
        this._demoService.updateCompanies(companie).subscribe(function (data) {
            // refresh the list
            _this.getCompanies();
            return true;
        });
    };
    CompaniesComponent.prototype.deleteCompanies = function (companie) {
        var _this = this;
        if (confirm("Are you sure you want to delete " + companie.name + "?")) {
            this._demoService.deleteCompanies(companie).subscribe(function (data) {
                // refresh the list
                _this.getCompanies();
                return true;
            });
        }
    };
    CompaniesComponent = __decorate([
        core_1.Component({
            selector: 'companies',
            templateUrl: 'app/companies.template.html'
        }), 
        __metadata('design:paramtypes', [demo_service_1.DemoService, auth_service_1.Auth])
    ], CompaniesComponent);
    return CompaniesComponent;
}());
exports.CompaniesComponent = CompaniesComponent;
var EditCompaniesComponent = (function () {
    function EditCompaniesComponent(_demoService, auth) {
        this._demoService = _demoService;
        this.auth = auth;
    }
    EditCompaniesComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    EditCompaniesComponent.prototype.getCompanies = function () {
        var _this = this;
        this._demoService.getCompanies().subscribe(
        // the first argument is a function which runs on success
        function (data) { _this.companies = data; }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () { return console.log('done loading companies'); });
    };
    EditCompaniesComponent.prototype.createCompanies = function (name) {
        var _this = this;
        var companie = { name: name };
        this._demoService.createCompanies(companie).subscribe(function (data) {
            // refresh the list
            _this.getCompanies();
            return true;
        });
    };
    EditCompaniesComponent.prototype.updateCompanies = function (companie) {
        var _this = this;
        this._demoService.updateCompanies(companie).subscribe(function (data) {
            // refresh the list
            _this.getCompanies();
            return true;
        });
    };
    EditCompaniesComponent.prototype.deleteCompanies = function (companie) {
        var _this = this;
        if (confirm("Are you sure you want to delete " + companie.name + "?")) {
            this._demoService.deleteCompanies(companie).subscribe(function (data) {
                // refresh the list
                _this.getCompanies();
                return true;
            });
        }
    };
    EditCompaniesComponent = __decorate([
        core_1.Component({
            selector: 'edit-companies',
            templateUrl: 'app/edit-companies.template.html'
        }), 
        __metadata('design:paramtypes', [demo_service_1.DemoService, auth_service_1.Auth])
    ], EditCompaniesComponent);
    return EditCompaniesComponent;
}());
exports.EditCompaniesComponent = EditCompaniesComponent;
var AddCompaniesComponent = (function () {
    function AddCompaniesComponent(_demoService, auth) {
        this._demoService = _demoService;
        this.auth = auth;
    }
    AddCompaniesComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    AddCompaniesComponent.prototype.getCompanies = function () {
        var _this = this;
        this._demoService.getCompanies().subscribe(
        // the first argument is a function which runs on success
        function (data) { _this.companies = data; }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () { return console.log('done loading companies'); });
    };
    AddCompaniesComponent.prototype.createCompanies = function (name) {
        var _this = this;
        var companie = { name: name };
        this._demoService.createCompanies(companie).subscribe(function (data) {
            // refresh the list
            _this.getCompanies();
            return true;
        });
    };
    AddCompaniesComponent.prototype.updateCompanies = function (companie) {
        var _this = this;
        this._demoService.updateCompanies(companie).subscribe(function (data) {
            // refresh the list
            _this.getCompanies();
            return true;
        });
    };
    AddCompaniesComponent.prototype.deleteCompanies = function (companie) {
        var _this = this;
        if (confirm("Are you sure you want to delete " + companie.name + "?")) {
            this._demoService.deleteCompanies(companie).subscribe(function (data) {
                // refresh the list
                _this.getCompanies();
                return true;
            });
        }
    };
    AddCompaniesComponent = __decorate([
        core_1.Component({
            selector: 'add-companies',
            templateUrl: 'app/add-companies.template.html'
        }), 
        __metadata('design:paramtypes', [demo_service_1.DemoService, auth_service_1.Auth])
    ], AddCompaniesComponent);
    return AddCompaniesComponent;
}());
exports.AddCompaniesComponent = AddCompaniesComponent;
//# sourceMappingURL=companies.component.js.map