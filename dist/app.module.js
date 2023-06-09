"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
require("@shopify/shopify-api/adapters/node");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const core_1 = require("@nestjs-shopify/core");
const shopify_api_1 = require("@shopify/shopify-api");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            core_1.ShopifyCoreModule.forRoot({
                apiKey: '919653315cf5d3322cf45ce5bd3596f6',
                apiSecretKey: 'e8331bd0a920fff733dfc2f0851a2a33',
                apiVersion: shopify_api_1.ApiVersion.Unstable,
                hostName: 'mspl-sheetal.myshopify.com',
                isEmbeddedApp: true,
                scopes: ['read_products', 'write_products', 'read_customers'],
                sessionStorage: ''
            })
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map