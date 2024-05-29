import { Controller, Get, Post, Body, Patch, Param, Delete, UnprocessableEntityException, Logger } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  private logger = new Logger();
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const newUser=await this.usersService.create(createUserDto);
   

    if(!newUser) throw new UnprocessableEntityException();
    return {
      error: false,
      status: 200,
      message: "Hemos enviado un acceso temporal a tu correo eléctronico"
    }
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
