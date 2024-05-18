import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { BrandsModule } from './brands/brands.module';

@Module({
    imports: [ProductsModule, UsersModule, CategoriesModule],
    providers: [],
})
export class WarehouseModule {}
