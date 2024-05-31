import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WarehouseModule } from './warehouse/warehouse.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './warehouse/products/entities/product.entity';
import { Category } from './warehouse/categories/entities/category.entity';
import { Brand } from './warehouse/brands/entities/brand.entity';
import { ConfigModule } from '@nestjs/config'
import { User } from './warehouse/users/entities/user.entity';
import { LoggerMiddleware } from './middlewares/logger/logger.middleware';
import { AuthService } from './warehouse/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
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
      Brand,
      User
    ],
    synchronize: false
  }),
  //Modulo global para JWT
  JwtModule.register({
    global: true,
    secret: 'SERECRET:API_KEY',
    signOptions: {
      algorithm: 'HS256',
      expiresIn: '30d',
    }
  }),
  //Modulo global para TypeORM
  TypeOrmModule.forFeature([User]),
    WarehouseModule
  ],
  //Controladore de AppModule
  controllers: [AppController],
  providers: [AppService, AuthService] // ServiciosAA
})
export class AppModule { 
  configure(consumer: MiddlewareConsumer){
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
