import { Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order.request';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }
  
  createOrder(request: CreateOrderRequest){
    
  }

}
