import { Injectable } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt'
import { Auth } from "src/models/auth.model";



@Injectable()
export class AuthRepository{
    constructor(private jwtService:JwtService){}

    singIn(payload: Auth){
        return this.jwtService.sign(payload)
    }

    singUp(){

    }

    async verify(jwt: string){
        return await this.jwtService.verifyAsync<Auth>(jwt)
    }
}