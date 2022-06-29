import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ProductUpdateDto } from './models/product-update.dto';
import { ProductCreateDto } from './models/product.dto';
import { ProductService } from './product.service';

@UseGuards(AuthGuard)
@Controller('products')
export class ProductController {

    constructor(
        private productService: ProductService
    ) {}

    @Get()
    public async all(
        @Query('page') page: number = 1
    ) {
        return this.productService.paginate(page);
    }

    @Post()
    public async create(
        @Body() body: ProductCreateDto
    ) {
        return this.productService.create(body);
    }

    @Get(':id')
    public async get(
        @Param('id') id: number
    ) {
        return this.productService.findOne({id});
    }

    @Put(':id')
    public async update(
        @Param('id') id: number,
        @Body() body: ProductUpdateDto
    ) {
        await this.productService.update(id, body);

        return this.productService.findOne({id});
    }

    @Delete(':id')
    public async delete(
        @Param('id') id: number
    ) {
        return this.productService.delete(id);
    }

}
