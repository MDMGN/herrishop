import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsJWT, IsOptional, IsStrongPassword } from "class-validator";

export class CreateAuthDto {

    @ApiProperty()
    @IsEmail()
    @IsOptional()
    email:string;

    @ApiProperty()
    @IsStrongPassword()
    @IsOptional()
    password: string;

    @ApiProperty()
    @IsJWT()
    @IsOptional()
    token?:string
}
