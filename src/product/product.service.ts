import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { ProductEntity } from './models/product.entity';

@Injectable()
export class ProductService extends AbstractService {

    constructor(
        @InjectRepository(ProductEntity) private readonly productRepository: Repository<ProductEntity>
    ) {
        super(productRepository);
    }
}
