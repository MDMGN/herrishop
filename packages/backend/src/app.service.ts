import { Injectable } from '@nestjs/common';
import { AuthService } from './warehouse/auth/auth.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './warehouse/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, // Inyecta el repositorio de usuarios
    private readonly authService: AuthService // Inyecta el servicio de autenticación
  ) {}

  // Verifica el correo electrónico a través del token
  async verifyEmail(token: string): Promise<{ isSuccess: boolean; message: string }> {
    let isSuccess: boolean, message: string;

    try {
      // Verifica el token de acceso usando el servicio de autenticación
      const payload = this.authService.verifyAccessToken(token);
      // Busca el usuario por el correo electrónico en el payload del token
      const user = await this.userRepository.findOne({ where: { email: payload.email } });

      if (user.status) {
        // Si la cuenta ya está verificada
        message = 'Oops! Tu Cuenta ya ha sido verificada';
        isSuccess = false;
      } else {
        // Si la cuenta no está verificada, actualiza el estado y guarda el usuario
        user.status = 1;
        await this.userRepository.save(user);
        isSuccess = true;
        message = "¡Registro exitoso! Te has registrado correctamente.";
      }
    } catch {
      // Maneja errores de verificación del token
      isSuccess = false;
      message = "¡Oops! Token Invalido. No se ha podido completar tu registro.";
    }
    
    // Retorna el resultado de la verificación
    return { isSuccess, message };
  }
}
