import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
import { DataSource } from 'typeorm';
import { brandsProviders } from './brands.providers';

@Module({
  imports: [DataSource],
  controllers: [BrandsController],
  providers: [
    ...brandsProviders,
    BrandsService
  ],
})
export class BrandsModule {}
