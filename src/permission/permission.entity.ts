import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('permissions')
export class PermissionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}