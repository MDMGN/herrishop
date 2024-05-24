import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthRepository } from 'src/repository/auth.service';

@Injectable()
export class AuthService {
  constructor(private authRepository: AuthRepository){}
  
  create(createAuthDto: CreateAuthDto) {
    return this.authRepository.singIn({
      email: 'michaelmdvr@gmail.com',
      password: '@Mdmgn123xz',
      name: 'MDMGN'
    })
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
