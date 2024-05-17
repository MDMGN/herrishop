import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [ProductsModule, UsersModule],
    providers: []
})
export class WarehouseModule {}
