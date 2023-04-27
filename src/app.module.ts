import { Module } from '@nestjs/common';
import '@shopify/shopify-api/adapters/node'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopifyCoreModule } from '@nestjs-shopify/core';
import { ApiVersion } from '@shopify/shopify-api';


@Module({
  imports: [
    ShopifyCoreModule.forRoot({
      apiKey: '919653315cf5d3322cf45ce5bd3596f6',
      apiSecretKey: 'e8331bd0a920fff733dfc2f0851a2a33',
      apiVersion: ApiVersion.Unstable,
      hostName: 'mspl-sheetal.myshopify.com',
      isEmbeddedApp: true,
      scopes: ['read_products','write_products','read_customers'],
      sessionStorage:''
    
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
