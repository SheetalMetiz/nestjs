import {
    ShopifyWebhookHandler,
    WebhookHandler,
  } from '@nestjs-shopify/webhooks';
  
  @WebhookHandler('PRODUCTS_CREATE')
  export class CustomersCreateWebhookHandler extends ShopifyWebhookHandler {
    async handle(shop: string, product: unknown): Promise<void> {
      console.log(shop, product);
    }
  }