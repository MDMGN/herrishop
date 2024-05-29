import { Body, Controller, Get } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService:AuthService
  ) {}

  @Get()
  async create(@Body() createAuthDto: CreateAuthDto) {

    const token = this.authService.sigin(createAuthDto)
  }



}
