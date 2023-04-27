import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    productcreate(title: string, body_html: string, vendor: string, product_type: string, status: string): Promise<any>;
    findAll(): Promise<any>;
    index(): Promise<any>;
    orderindex(): Promise<any>;
    customerindex(): Promise<any>;
    getHello(): string;
}
