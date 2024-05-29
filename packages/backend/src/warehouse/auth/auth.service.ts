import {  BadRequestException, Injectable, Logger, UnauthorizedException  } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt' 
import { isEmail, isStrongPassword } from 'class-validator';

@Injectable()
export class AuthService {

  private logger=new Logger() ;
  
  constructor(
    @InjectRepository(User)
    private readonly userRepository:Repository<User>,
    private readonly jwtService: JwtService
  ){}
  
  async sigin(auth: CreateAuthDto) {

    if(auth?.token){
        try{
          const payload = this.verifyAccessToken(auth.token)
          this.logger.debug(payload)
          const user =await this.userRepository.findOne({where:{ email: payload.user_email}})
          const { password, role, updated_at ,...result} = user
          return  result
        }catch(errorJWT){
            throw new UnauthorizedException('Invalid Token')
        }
    }

    if(!isEmail(auth.email) || !isStrongPassword(auth.password)){
        throw new BadRequestException('El correo electrónico y el password son requeridos')
    }


    const user= await this.userRepository.findOne({ where: {email: auth.email }})
    if(user) {
      const isMatchPassword=await bcrypt.compare(auth.password,user.password)
      if(isMatchPassword){
        return this.getAccessToken(auth.email);
      }
    }
      throw new UnauthorizedException('La contraseña o email es incorrecta');
  }

  public verifyAccessToken(token: string){
      return this.jwtService.verify(token)
  }

  public getAccessToken(email:string){
    try{
      const accessToken = this.jwtService.sign({
        user_email: email,
      })

      return accessToken
      
    }catch(error){
        this.logger.error(error)
        throw new UnauthorizedException()
    }
  }
}
