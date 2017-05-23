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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt');
var common_1 = require('@angular/common');
var app_component_1 = require('./app.component');
var home_component_1 = require('./home.component');
var companies_component_1 = require('./companies.component');
var companies_component_2 = require('./companies.component');
var companies_component_3 = require('./companies.component');
var login_component_1 = require('./login.component');
var demo_service_1 = require('./demo.service');
var auth_service_1 = require('./auth.service');
var companie_detail_component_1 = require('./companie-detail.component');
var app_routes_1 = require('./app.routes');
var http_2 = require('./http');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                companies_component_1.CompaniesComponent,
                companies_component_2.AddCompaniesComponent,
                companies_component_3.EditCompaniesComponent,
                companie_detail_component_1.CompanieDetailComponent
            ],
            providers: [
                app_routes_1.appRoutingProviders,
                angular2_jwt_1.AUTH_PROVIDERS,
                demo_service_1.DemoService,
                auth_service_1.Auth,
                { provide: http_1.XHRBackend, useClass: http_2.AuthenticationConnectionBackend }
            ],
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                app_routes_1.routing,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map