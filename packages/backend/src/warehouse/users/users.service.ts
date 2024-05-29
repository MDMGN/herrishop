import { HttpException, Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm'
import { MailerService } from '@nestjs-modules/mailer';
import * as bcrypt from 'bcrypt';
import { AuthService } from '../auth/auth.service';
import { MailContext } from 'src/models/mail.model';

@Injectable()
export class UsersService {
private logger= new Logger()
  constructor(
    @InjectRepository(User)
    private readonly userRepository:Repository<User>,
    private readonly mailService: MailerService,
    private readonly authService:AuthService,
  ){}
  
  async create(createUserDto: CreateUserDto) {

    const user= await this.userRepository.findOne({where:{email: createUserDto.email}})

    if(user){
      throw new HttpException(`El usuario con el email ${createUserDto.email} ya existe`,404)
    }
    const newUser= this.userRepository.create(createUserDto)

    const saltOrRounds = 10;
    const hashPassword = await bcrypt.hash(newUser.password, saltOrRounds);
    newUser.password = hashPassword;
    const token =await this.authService.getAccessToken(createUserDto.email)
    const host = 'localhost:3000'
    await this.sendMail('Herrishop <herrishop@herishop.com>',newUser.email,'Confirmar el registro',{host, token, site: 'verify'})
    return await this.userRepository.save(newUser);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  private async sendMail(from:string, to:string, subject:string, props: MailContext) {
    const {host,site,token} = props
    try{

      return await this.mailService.sendMail({
        from,
        to,
        subject,
        template: './email.template.hbs',
        context:{
          token,
          site,
          host
        },
      });

    }catch(e){
      this.logger.error(e);
    }
  }
}
