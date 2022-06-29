import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from '../common/abstract.service';
import { PaginatedResultInterface } from '../common/paginated-result.interface';

import { Repository } from 'typeorm';
import { User } from './models/user.entity';

@Injectable()
export class UserService extends AbstractService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {
        super(userRepository);
    }

    public async paginate(page: number = 1, relations:any[] = []): Promise<any> {

        const { data, meta } = await super.paginate(page, relations);

        return {
            data: data.map( user => {
                const {password, ...data} = user;

                return data; 
            }),
            meta
        }
    }
}
