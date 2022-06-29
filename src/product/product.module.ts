import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { ProductEntity } from './models/product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { UploadController } from './upload.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity]),
    CommonModule,
  ],
  controllers: [ProductController, UploadController],
  providers: [ProductService]
})
export class ProductModule {}
