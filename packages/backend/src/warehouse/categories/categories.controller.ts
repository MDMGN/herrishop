import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('api/categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async findAll(){
    const categories= await this.categoriesService.findAll()
    return{
      error: false,
      status: 200,
      data: categories
    }
  }
}
