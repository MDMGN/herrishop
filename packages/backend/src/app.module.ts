import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WarehouseModule } from './warehouse/warehouse.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'dbherrishop',
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    synchronize: false
  }),
  WarehouseModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
