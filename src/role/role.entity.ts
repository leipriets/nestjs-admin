import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { PermissionEntity } from "../permission/permission.entity";

@Entity('roles')
export class RoleEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => PermissionEntity, {cascade: true})
    @JoinTable({
        name: 'role_permissions',
        joinColumn: {
            name: 'role_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {name: 'permission_id', referencedColumnName: 'id'}
    })
    permissions: PermissionEntity[]
}