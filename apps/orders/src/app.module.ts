import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { OrdersRepository } from './repositories/orders.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './schemas/order.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required()
      }),
      envFilePath: './apps/orders/.env'
    }),
    DatabaseModule,
    MongooseModule.forFeature([{name: Order.name, schema: OrderSchema}])
  ],
  controllers: [AppController],
  providers: [AppService, OrdersRepository],
})
export class AppModule {}
