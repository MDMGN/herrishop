import { DataSource } from 'typeorm';
import { Product } from './entities/product.entity';
import { NAME_DB_PROVIDER, NAME_PRODUCT_REPOSITORY } from 'src/constants';

export const productsProviders = [
  {
    provide: NAME_PRODUCT_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Product),
    inject: [NAME_DB_PROVIDER],
  },
];
