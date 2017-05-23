"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var login_component_1 = require('./login.component');
var companie_detail_component_1 = require('./companie-detail.component');
var companies_component_1 = require('./companies.component');
var companies_component_2 = require('./companies.component');
var companies_component_3 = require('./companies.component');
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'companies', children: [
            {
                path: 'add-companies',
                component: companies_component_2.AddCompaniesComponent
            },
            {
                path: 'edit-companies',
                component: companies_component_3.EditCompaniesComponent
            },
            {
                path: '',
                component: companies_component_1.CompaniesComponent,
            }
        ]
    },
    { path: 'detail/:id', component: companie_detail_component_1.CompanieDetailComponent },
    { path: '**', redirectTo: '' }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map