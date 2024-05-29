import { Injectable, Logger, UnauthorizedException  } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Auth } from 'src/models/auth.model';
import { CreateAuthDto } from './dto/create-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import * as byCript from 'bcrypt' 

@Injectable()
export class AuthService {

  private logger=new Logger() ;
  
  constructor(
    @InjectRepository(User)
    private readonly userRepository:Repository<User>,
    private readonly jwtService: JwtService
  ){}
  
  async sigin(auth: CreateAuthDto) {
    const user= await this.userRepository.findOne({ where: {email: auth.email }})
    byCript.compare(auth.password,user.password)
    try{
      const accessToken = this.jwtService.sign({
        user_email: auth.email,
      })

      return accessToken
      
    }catch(error){
        this.logger.error(error)
        throw new UnauthorizedException()
    }
  }

  public verifyAccessToken(token: string){
      return this.jwtService.verify(token)
  }
}
