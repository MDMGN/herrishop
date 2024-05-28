import { IsEmail, Matches } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email:string;
    @Matches()
    surname:string;
    address:string;
    zip_code:string;
    birthdate:string;
    status:number;
    role:string;
}
