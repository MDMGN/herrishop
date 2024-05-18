import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { categoriesProviders } from './category.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoriesController],
  providers: [
    ...categoriesProviders,
    CategoriesService]
})
export class CategoriesModule {}
