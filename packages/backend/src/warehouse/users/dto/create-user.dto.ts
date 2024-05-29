import { IsEmail, Matches } from "class-validator";

export class CreateUserDto {
    @IsEmail({}, { message: 'El correo electrónico debe tener un formato válido.' })
    email: string;
    @Matches(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/, { message: 'El nombre debe contener solo letras y espacios, y tener entre 4 y 16 caracteres.' })
    name: string;
    @Matches(/^[a-zA-Z0-9\s\-\'\.,#\/]+$/, { message: 'La dirección no es válida.' })
    address: string;
    @Matches(/^\d{5}$/, { message: 'El código postal debe contener exactamente 5 dígitos.' })
    zip_code: string;
    @Matches(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/, { message: 'El formato de fecha de nacimiento debe ser YYYY-MM-DD.' })
    birthdate: string;
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{6,}$/, { message: 'La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un dígito, un carácter especial y tener al menos 6 caracteres.' })
    password: string;
}
