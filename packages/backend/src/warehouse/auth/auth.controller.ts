import { Body, Controller, Post } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService // Inyecta el servicio de autenticación
  ) {}

  // Ruta POST para la creación de autenticación (inicio de sesión/registro)
  @Post()
  async create(@Body() createAuthDto: CreateAuthDto) {
    // Llama al método `sigin` del servicio de autenticación con el DTO proporcionado
    const result = await this.authService.sigin(createAuthDto);
    
    // Retorna una respuesta con el resultado de la operación
    return {
      error: false,
      status: 201, // Estado HTTP 201 indica que el recurso fue creado
      result
    };
  }
}
