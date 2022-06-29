import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { RoleEntity } from './role.entity';

@Injectable()
export class RoleService extends AbstractService {
    constructor(
        @InjectRepository(RoleEntity) private readonly roleRepository: Repository<RoleEntity> 
    ) {
        super(roleRepository);
    }
}
