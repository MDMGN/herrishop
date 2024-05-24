import { Controller, Get, Body, UnauthorizedException, HttpException, Query} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    @InjectRepository(User)
    private readonly userRepository:Repository<User>,
    private readonly authService:AuthService
  ) {}

  @Get()
  async create(@Query() createAuthDto: CreateAuthDto) {
    const user= await this.userRepository.findOneBy({email: createAuthDto.email}) 

    if(!user){
      throw new HttpException('Unathorized',401)
    }
    return this.authService.getAccesToken(createAuthDto);
  }



}
