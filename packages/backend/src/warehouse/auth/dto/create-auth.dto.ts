import { IsEmail, IsJWT, IsOptional, IsStrongPassword } from "class-validator";

export class CreateAuthDto {
    @IsEmail()
    email:string;
    @IsStrongPassword()
    password: string;
    @IsJWT()
    @IsOptional()
    token?:string
}
