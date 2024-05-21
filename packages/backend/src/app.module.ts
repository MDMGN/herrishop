import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WarehouseModule } from './warehouse/warehouse.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './warehouse/products/entities/product.entity';
import { Category } from './warehouse/categories/entities/category.entity';
import { Brand } from './warehouse/brands/entities/brand.entity';
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'dbherrishop',
    logger: 'debug',
    logging: 'all',
    entities: [
      Product,
      Category,
      Brand
    ],
    synchronize: false
  }),
  WarehouseModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
