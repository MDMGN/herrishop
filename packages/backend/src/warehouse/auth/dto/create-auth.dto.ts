import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsJWT, IsOptional, IsStrongPassword } from "class-validator";

// DTO para la creación de autenticación
export class CreateAuthDto {

  // Define la propiedad `email` y la documenta para Swagger
  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'usuario@ejemplo.com'
  })
  @IsEmail() // Valida que la propiedad sea un correo electrónico válido
  @IsOptional() // Hace que esta propiedad sea opcional
  email: string;

  // Define la propiedad `password` y la documenta para Swagger
  @ApiProperty({
    description: 'Contraseña del usuario, debe ser segura',
    example: 'S3gu4!Pa$$w0rd'
  })
  @IsStrongPassword() // Valida que la propiedad sea una contraseña fuerte
  @IsOptional() // Hace que esta propiedad sea opcional
  password: string;

  // Define la propiedad `token` y la documenta para Swagger
  @ApiProperty({
    description: 'Token JWT para la autenticación',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
  })
  @IsJWT() // Valida que la propiedad sea un JWT válido
  @IsOptional() // Hace que esta propiedad sea opcional
  token?: string;
}
