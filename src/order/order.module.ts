import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { OrderItemEntity } from './order-item.entity';
import { OrderController } from './order.controller';
import { OrderEntity } from './order.entity';
import { OrderService } from './order.service';

@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forFeature([
      OrderEntity,
      OrderItemEntity
    ])
  ],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
