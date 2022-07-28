import { AppService } from './app.service';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order.request';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createOrder(@Body() request: CreateOrderRequest){
    return this.appService.createOrder(request);
  }

//adas
}
