import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { MailerModule } from '@nestjs-modules/mailer';
import { AuthService } from '../auth/auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports : [TypeOrmModule.forFeature([User]),
  MailerModule.forRoot({
    transport: `smtps://${process.env.EMAIL_USERNAME}:${process.env.EMAIL_PASSWORD}@smtp.domain.com`,
  }),
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
