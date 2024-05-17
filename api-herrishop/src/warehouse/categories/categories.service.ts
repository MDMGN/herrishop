import { Inject, Injectable } from '@nestjs/common';
import { Category } from './entities/category.entity';
import { NAME_CATEGORY_REPOSITORY } from 'src/constants';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {

    constructor(@Inject(NAME_CATEGORY_REPOSITORY) private categoryRepository:Repository<Category>){}

    findAll():Promise<Category[]>{
        return this.categoryRepository.find()
    }
}
