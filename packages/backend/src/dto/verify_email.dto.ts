import { IsJWT } from "class-validator";

// DTO para la verificación del correo electrónico
export class VerifyEmailDto {
  // Valida que el token sea un JWT válido
  @IsJWT()
  token: string;
}
