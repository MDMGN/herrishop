import { Injectable, Logger, UnauthorizedException  } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Auth } from 'src/models/auth.model';

@Injectable()
export class AuthService {

  private logger=new Logger() ;
  
  constructor(private readonly jwtService: JwtService){}
  
  public sigin(auth: Auth) {

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
