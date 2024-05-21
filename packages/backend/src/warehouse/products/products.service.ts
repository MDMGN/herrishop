import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../categories/entities/category.entity';
import { Brand } from '../brands/entities/brand.entity';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(Brand)
    private brandRepository: Repository<Brand>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productRepository.find({relations:  ['brand', 'category']});
  }

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findOne(id: number) {
    return this.productRepository.findOneBy({id})
  }

  async findAllWithCategoriesBrands(){
      return Promise.all([
          this.productRepository.find(),
          this.categoryRepository.find(),
          this.brandRepository.find()
        ])
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
