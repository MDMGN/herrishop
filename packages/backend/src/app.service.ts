import { Injectable } from '@nestjs/common';
import { AuthService } from './warehouse/auth/auth.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './warehouse/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User> ,
    private readonly authService: AuthService
  ){}

  async verifyEmail(token:string): Promise<{ isSuccess:boolean , message:string }> {

    let isSuccess:boolean, message:string

    try{
      const payload= this.authService.verifyAccessToken(token)
       const user= await this.userRepository.findOne({where:{email:payload.email}})

       if(user.status){
          message= 'Oops! Tu Cuenta ya ha sido verificada'
          isSuccess= false
          return { isSuccess, message}
       }else{
         user.status= 1
         await this.userRepository.save(user)
         isSuccess = true
        }
    
      }catch{
        isSuccess= false
        message= isSuccess ? "¡Registro exitoso! Te has registrado correctamente." : "¡Oops! Token Invalido. No se ha podido completar tu registro."
    }
    return { isSuccess, message}
  }
}
