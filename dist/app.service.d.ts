export declare class AppService {
    findAll(): Promise<any>;
    findOrderAll(): Promise<any>;
    findCustomerAll(): Promise<any>;
    createproduct(title: string, body_html: string, vendor: string, product_type: string, status: string): Promise<any>;
    createcustomer(body: any): Promise<any>;
    productid(): Promise<any>;
    getHello(): string;
}
