import { Injectable } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt'
import { Auth } from "src/models/auth.model";



@Injectable()
class AuthRepository{
    constructor(private jwtService:JwtService){}

    singIn(payload: Auth){
        const jwt= this.jwtService.sign(payload,{
            expiresIn: '30d',
            algorithm: 'HS256',
            secret: 'SERECRET:API_KEY'
        })
        return jwt
    }

    singUp(){   
        
    }

}