import { Exclude } from "class-transformer";
import { RoleEntity } from "src/role/role.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({unique: true})
    email: string;

    @Column()
    @Exclude()
    password: string;


    @ManyToOne(() => RoleEntity)
    @JoinColumn({name: 'role_id'})
    role: RoleEntity;
}