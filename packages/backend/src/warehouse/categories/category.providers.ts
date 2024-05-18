import { NAME_CATEGORY_REPOSITORY, NAME_DB_PROVIDER } from "src/constants";
import { DataSource } from "typeorm";
import { Category } from "./entities/category.entity";

export const categoriesProviders=[
    {
        provide: NAME_CATEGORY_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Category),
        inject: [NAME_DB_PROVIDER]
    }
]