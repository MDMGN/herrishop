import { IsEmail, Matches } from "class-validator"; // Importa los decoradores necesarios de class-validator
import { ApiProperty } from '@nestjs/swagger'; // Importa ApiProperty de @nestjs/swagger para documentación

export class CreateUserDto {
    @ApiProperty({ description: 'Correo electrónico del usuario' }) // Proporciona metadatos para documentación de la API, incluyendo una descripción
    @IsEmail({}, { message: 'El correo electrónico debe tener un formato válido.' }) // Valida que el campo email sea un correo electrónico válido
    email: string;

    @ApiProperty({ description: 'Nombre del usuario' }) // Proporciona metadatos para documentación de la API, incluyendo una descripción
    @Matches(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/, { message: 'El nombre debe contener solo letras y espacios, y tener entre 4 y 16 caracteres.' }) // Valida que el campo name contenga solo letras y espacios, y tenga entre 4 y 16 caracteres
    name: string;

    @ApiProperty({ description: 'Dirección del usuario' }) // Proporciona metadatos para documentación de la API, incluyendo una descripción
    @Matches(/^[a-zA-Z0-9\s\-\'\.,#\/]+$/, { message: 'La dirección no es válida.' }) // Valida que el campo address cumpla con ciertos criterios
    address: string;

    @ApiProperty({ description: 'Código postal del usuario' }) // Proporciona metadatos para documentación de la API, incluyendo una descripción
    @Matches(/^\d{5}$/, { message: 'El código postal debe contener exactamente 5 dígitos.' }) // Valida que el campo zip_code tenga exactamente 5 dígitos
    zip_code: string;

    @ApiProperty({ description: 'Fecha de nacimiento del usuario' }) // Proporciona metadatos para documentación de la API, incluyendo una descripción
    @Matches(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/, { message: 'El formato de fecha de nacimiento debe ser YYYY-MM-DD.' }) // Valida el formato de fecha de nacimiento
    birthdate: string;

    @ApiProperty({ description: 'Contraseña del usuario' }) // Proporciona metadatos para documentación de la API, incluyendo una descripción
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{6,}$/, { message: 'La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un dígito, un carácter especial y tener al menos 6 caracteres.' }) // Valida la complejidad de la contraseña
    password: string;
}
