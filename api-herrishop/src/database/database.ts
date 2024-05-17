import { DataSource } from 'typeorm';
import {NAME_DB_PROVIDER} from '../constants'

export const databaseProviders = [
  {
    provide: NAME_DB_PROVIDER,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'dbherrishop',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];