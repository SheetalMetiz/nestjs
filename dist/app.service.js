"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const Shopify = require('shopify-api-node');
const shopify = new Shopify({
    shopName: 'mspl-sheetal.myshopify.com',
    accessToken: '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'
});
let AppService = class AppService {
    async findAll() {
        const all_products = await shopify.product.count();
        const pros = await shopify.product
            .list({ limit: 10 })
            .then((product) => {
            console.log(product);
            return product;
        })
            .catch((err) => console.error(err));
        return pros;
    }
    async findOrderAll() {
        const all_order = shopify.order.count();
        const pros = shopify.order
            .list({ limit: 5 })
            .then((orders) => {
            console.log(orders);
            return orders;
        })
            .catch((err) => console.error(err));
        return pros;
    }
    async findCustomerAll() {
        const all_order1 = await shopify.customer.count();
        const pros = await shopify.customer
            .list({ list: 5 })
            .then((customer) => {
            console.log(customer);
            return customer;
        })
            .catch((err) => {
            console.log('err', err);
            console.error(err);
        });
        return pros;
    }
    async createproduct(title, body_html, vendor, product_type, status) {
        const product = shopify.product.create({ 'title': title, 'body_html': body_html,
            'vendor': vendor, 'product_type': product_type, 'status': status });
        return product;
    }
    async createcustomer(body) {
        const product = shopify.customer.create(body);
        return product;
    }
    async productid() {
        const product = shopify.product.find({
            id: 8312683200813,
        });
        return product;
    }
    getHello() {
        return `Hello World! ${new Date()}`;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map