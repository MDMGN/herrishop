import { IsJWT } from "class-validator";

export class verifyEmailDto{
    @IsJWT()
    token:string;
}