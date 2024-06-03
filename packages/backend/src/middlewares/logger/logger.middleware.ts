import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, Request } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  // Método que se ejecuta cuando el middleware es llamado
  use(req: Request, res: Response, next: () => void) {
    // Extrae la URL original y el método HTTP de la solicitud
    const { originalUrl, method } = req;
    // Obtiene el User-Agent de las cabeceras de la solicitud, si está disponible
    const USER_AGENT = req.headers['user-agent'] || '';

    // Registra en consola la URL, el User-Agent y el método HTTP
    console.info(`${originalUrl} ${USER_AGENT} ${method}`);
    // Llama a la siguiente función en la cadena de middleware
    next();
  }
}
