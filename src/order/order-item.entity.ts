import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from "./order.entity";

@Entity('order_items')
export class OrderItemEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    product_title: string;

    @Column()
    price: number;

    @Column()
    quantity: number;
    
    @ManyToOne(() => OrderEntity, order => order.order_items)
    @JoinColumn({name: 'order_id'})
    order: OrderEntity;

}