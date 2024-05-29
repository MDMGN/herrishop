import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService:AuthService
  ) {}

  @Post()
  async create(@Body() createAuthDto: CreateAuthDto) {
    const result =await this.authService.sigin(createAuthDto)
    return{
      error: false,
      status: 201,
      result
    }
  }



}
