import { NAME_BRAND_REPOSITORY, NAME_DB_PROVIDER } from "src/constants";
import { DataSource } from "typeorm";
import { Brand } from "./entities/brand.entity";

export const brandsProviders=[
    {
        provide: NAME_BRAND_REPOSITORY,
        useFactory: (dataSource:DataSource) => dataSource.getRepository(Brand),
        inject: [NAME_DB_PROVIDER]
    }
]