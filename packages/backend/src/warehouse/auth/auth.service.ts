import { Injectable, Logger } from '@nestjs/common';
import { AuthRepository } from 'src/repository/auth.service';
import { JwtService } from '@nestjs/jwt';
import { Auth } from 'src/models/auth.model';

@Injectable()
export class AuthService {

  private logger=new Logger() ;
  constructor(
    private jwtService: JwtService
  ){}
  
  getAccesToken(auth: Auth) {

    try{
      const accessToken = this.jwtService.sign({
        user_email: auth.email,
      })

      return{
        access_token: accessToken
      }
    }catch(error){
        this.logger.error(error)
    }
  }
}
