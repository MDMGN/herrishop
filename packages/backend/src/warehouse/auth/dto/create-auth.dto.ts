import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class CreateAuthDto {
    @IsString()
    username:string;
    @IsEmail()
    email:string;
    @IsStrongPassword()
    password: string;
}
