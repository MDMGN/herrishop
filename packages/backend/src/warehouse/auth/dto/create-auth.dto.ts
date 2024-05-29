import { IsEmail, IsJWT, IsOptional, IsStrongPassword } from "class-validator";

export class CreateAuthDto {
    @IsEmail()
    @IsOptional()
    email:string;
    @IsStrongPassword()
    @IsOptional()
    password: string;
    @IsJWT()
    @IsOptional()
    token?:string
}
