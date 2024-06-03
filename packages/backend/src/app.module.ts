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
    // Módulo de configuración global
    ConfigModule.forRoot({
      isGlobal: true
    }),
    // Configuración de TypeORM para la base de datos MySQL
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
      synchronize: false, // No sincronizar automáticamente las entidades con la base de datos,
    }),
    // Módulo global para JWT
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRECT_KEY, // Clave secreta para firmar tokens JWT
      signOptions: {
        algorithm: 'HS256', // Algoritmo de firma
        expiresIn: '30d',   // Duración de los tokens
      }
    }),
    // Registro de la entidad User en TypeORM
    TypeOrmModule.forFeature([User]),
    // Módulo del almacén
    WarehouseModule
  ],
  // Controladores del módulo App
  controllers: [AppController],
  // Proveedores de servicios del módulo
  providers: [AppService, AuthService]
})
export class AppModule { 
  configure(consumer: MiddlewareConsumer) {
    // Aplicar el middleware de registro de peticiones a todas las rutas
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
