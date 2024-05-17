import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WarehouseModule } from './warehouse/warehouse.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [WarehouseModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
