import { Exclude, Expose } from "class-transformer";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderItemEntity } from "./order-item.entity";

@Entity('orders')
export class OrderEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Exclude()
    first_name: string;

    @Column()
    @Exclude()
    last_name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: string;

    @OneToMany(() => OrderItemEntity, OrderItemEntity => OrderItemEntity.order )
    order_items: OrderItemEntity[];

    @Expose()
    get name(): string {
        return `${this.first_name} ${this.last_name}`; 
    }

    @Expose()
    get total():number {
        return this.order_items.reduce((sum, i) => sum + i.quantity * i.price , 0)
    }
}