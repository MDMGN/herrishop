import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { MailerModule, MailerService } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';  
import { AuthService } from '../auth/auth.service';
import { join } from 'path';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports : [
    TypeOrmModule.forFeature([User]),
    MailerModule.forRootAsync({
      useFactory: ()=>(
        {
          transport:{
            host: 'smtp.gmail.com',
            service: 'gmail',
            port: 465,
            secure: true,
            auth: {
              user: process.env.EMAIL_USERNAME,
              pass : process.env.EMAIL_PASSWORD
            },
          },
          defaults:{
            from: `"No reply" <herrishop@herrishop.com>`
          },
          template: {
            dir: join(__dirname,'../../templates'),
            adapter: new HandlebarsAdapter(),
            options: {
              strict: true
            }
          },
        }
      )
    }),
  ConfigModule,
  JwtModule.register({
    secret: 'SERECRET:API_KEY',
    signOptions: {
      algorithm: 'HS256',
      expiresIn: '30d',
    }
  })
  ],
  controllers: [UsersController],
  providers: [UsersService, AuthService],
})
export class UsersModule {}
