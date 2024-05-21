import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpException, HttpStatus } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  async findAll() {
    const products = await this.productsService.findAll()
      return {
        error: false,
        status: 200,
        data: products
      };

    }
  @Get('/all-data')
  async findAllWithCategoriesBrands(){
    const [ products, categories, brands ] = await this.productsService.findAllWithCategoriesBrands()
    return{
      error: false,
      status: 200,
      data : {
        products,
        categories,
        brands
      }
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const product =await this.productsService.findOne(id)

    if(!product) throw new HttpException("Product not found", HttpStatus.NOT_FOUND)

    return {
      error: false,
      status: 200,
      data: product
    };
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
