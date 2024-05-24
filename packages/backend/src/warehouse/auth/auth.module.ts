import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'SERECRET:API_KEY',
      signOptions: {
        algorithm: 'RS256',
        expiresIn: '30d',
      }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
