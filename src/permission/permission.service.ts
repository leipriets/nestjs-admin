import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { PermissionEntity } from './permission.entity';

@Injectable()
export class PermissionService extends AbstractService {

    constructor(
        @InjectRepository(PermissionEntity) private readonly permissionRepository: Repository<PermissionEntity> 
    ) {
        super(permissionRepository);
    }

}
