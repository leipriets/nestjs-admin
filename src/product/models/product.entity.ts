import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class ProductEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    image: string;

    @Column()
    price: number;
}