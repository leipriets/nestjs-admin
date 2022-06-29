import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PaginatedResultInterface } from './paginated-result.interface';

@Injectable()
export abstract class AbstractService {

    protected constructor(
        protected readonly repository: Repository<any>
    ) {
        
    }

    public async all(relations: any[] = []): Promise<any[]> {
        return this.repository.find({relations});
    }

    public async paginate(
        page: number = 1,
        relations: any[] = []
    ): Promise<PaginatedResultInterface> {
        const take = 15;
        const [data, total] = await this.repository.findAndCount({
            take,
            skip: (page - 1) * take,
            relations
        });

        return {
            data: data,
            meta: {
                total,
                page,
                last_page: Math.ceil(total/take)
            }
        }
    }
    

    public async create(data): Promise<any> {
        return this.repository.save(data);
    }

    public async findOne(condition, relations: any[] = []): Promise<any> {
        return this.repository.findOne({
            where: condition,
            relations
        });
    }

    public async update(id: number, data): Promise<any> {
        return this.repository.update(id, data);
    }

    public async delete(id: number): Promise<any> {
        return this.repository.delete(id);
    }

}
