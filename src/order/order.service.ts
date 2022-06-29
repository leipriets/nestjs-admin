import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { OrderEntity } from './order.entity';

@Injectable()
export class OrderService extends AbstractService {

    constructor(
        @InjectRepository(OrderEntity) private readonly orderRepository: Repository<OrderEntity>
    ) {
        super(orderRepository);
    }

    public async paginate(page: number = 1, relations:any[] = []): Promise<any> {

        const { data, meta } = await super.paginate(page, relations);

        return {
            data: data.map( (order: OrderEntity) => ({
                id: order.id,
                name: order.name,
                email: order.email,
                total: order.total,
                created_at: order.created_at,
                order_items: order.order_items
            })),
            meta
        }
    }

    public async chart() {
        return this.orderRepository.query(`
        SELECT DATE_FORMAT(o.created_at, '%Y-%m-%d') as date, sum(i.price * i.quantity) as sum
        FROM orders o
        JOIN order_items i on o.id = i.order_id
        GROUP BY date;
        `)
    }

}
