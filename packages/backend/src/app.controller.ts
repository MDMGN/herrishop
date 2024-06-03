import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { VerifyEmailDto } from './dto/verify_email.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  // Ruta GET para la verificación de correo electrónico
  @Get('verify')
  @Render('verify') // Renderiza la vista verify.hbs
  async verifyEmail(@Query() verifyEmailDto: VerifyEmailDto) {
    // Llama al servicio para verificar el token de correo electrónico
    const props = await this.appService.verifyEmail(verifyEmailDto.token);
    // Retorna el resultado de la validación del token a la vista
    return props;
  }
}
