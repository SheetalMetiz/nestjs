import { Controller, Get, Body, Post,RawBodyRequest, Req} from '@nestjs/common';
import { AppService } from './app.service';
import { WebhookOperation } from '@shopify/shopify-api';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('productcreate')
  productcreate(@Body('title') title:string,
  @Body('body_html') body_html:string,
  @Body('vendor') vendor:string,
  @Body('product_type') product_type:string,
  @Body('status') status:string){
    const all_products =  this.appService.createproduct(title,body_html,vendor,product_type,status);
    return all_products
  }

  
  // create customer
  // @Post('customercreate')
  // customercreate(
  //   @Body() body:PayloadModel)
  // {
  //   console.log('body',body)
  //   const all_products =  this.appService.createcustomer(body);
  //   return all_products
  // }
  // end 
 
  @Get()
  async findAll() {
    const all_products =  this.appService.findAll(); // Get all products
    return all_products
  }
// RawBodyRequest<Request>
 @Post('products')
  async index(@Body() @Req() req:RawBodyRequest<Request>){
//     const all_products =  this.appService.findAll();
   
    console.log('@Req()@Req()',req)
    var data = JSON.parse(req)
    return data
  }

  @Get('orders')
  orderindex(){
    console.log('its working')
    const all_products =  this.appService.findOrderAll();
    return all_products
  }

  @Get('customers')
  customerindex(){
    const all_products =  this.appService.findCustomerAll();
    return all_products
  }

  
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}


