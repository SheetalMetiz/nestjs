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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    productcreate(title, body_html, vendor, product_type, status) {
        const all_products = this.appService.createproduct(title, body_html, vendor, product_type, status);
        return all_products;
    }
    async findAll() {
        const all_products = this.appService.findAll();
        return all_products;
    }
    index() {
        const all_products = this.appService.findAll();
        return all_products;
    }
    orderindex() {
        const all_products = this.appService.findOrderAll();
        return all_products;
    }
    customerindex() {
        const all_products = this.appService.findCustomerAll();
        return all_products;
    }
    getHello() {
        return this.appService.getHello();
    }
};
__decorate([
    (0, common_1.Post)('productcreate'),
    __param(0, (0, common_1.Body)('title')),
    __param(1, (0, common_1.Body)('body_html')),
    __param(2, (0, common_1.Body)('vendor')),
    __param(3, (0, common_1.Body)('product_type')),
    __param(4, (0, common_1.Body)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "productcreate", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('products'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "index", null);
__decorate([
    (0, common_1.Get)('orders'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "orderindex", null);
__decorate([
    (0, common_1.Get)('customers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "customerindex", null);
__decorate([
    (0, common_1.Get)('hello'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map