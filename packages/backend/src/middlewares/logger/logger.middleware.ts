import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, Request } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const {originalUrl, method } = req
    const USER_AGENT= req.headers['user-agent'] || ''
    
    console.info(`${originalUrl} ${USER_AGENT} ${method}`);
    next();
  }
}
