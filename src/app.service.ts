import { Injectable } from '@nestjs/common';

const Shopify = require('shopify-api-node');

const shopify = new Shopify({
  shopName: 'mspl-sheetal.myshopify.com',
  accessToken:'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'
});



@Injectable()
export class AppService {

  async findAll() {
    const all_products = await shopify.product.count(); // Get all products
    const pros = await shopify.product
      .list({ limit: 10 })
      .then((product: any) => 
      {
        console.log(product)
        return product
      }
      )
      .catch((err: any) => 
      console.error(err)
      );
    return pros
  }

  async findOrderAll() {
    const all_order = shopify.order.count(); // Get all orders
  
    const pros = shopify.order
      .list({ limit: 5 })
      .then((orders: any) => {
        console.log(orders)
        return orders
       
      }
      )
      .catch((err: any) => console.error(err));
    return pros;
  }

  async findCustomerAll() {
    const all_order1 = await shopify.customer.count();
    // console.log('all_order',all_order1)
    const pros = await shopify.customer
      .list({list:5})
      .then((customer: any) => {
        console.log(customer)
        return customer
       
      }
      )
      .catch((err: any) => {
        console.log('err',err) 
      console.error(err)
      });
    return pros;
  }

  // 'body_html':"<strong>Good snowboard!</strong>"

  async createproduct(title:string,body_html:string,vendor:string,product_type:string,status:string) {
    const product = shopify.product.create({'title':title,'body_html':body_html,
    'vendor':vendor,'product_type':product_type,'status':status})
    return product;
  }

  async createcustomer(body:any) {
    const product = shopify.customer.create(body)
    return product;
  }

  async productid(){
    const product = shopify.product.find({
      id: 8312683200813,
    })
    return product;
  }


  getHello(): string {
    return `Hello World! ${new Date()}`;
  }
}
