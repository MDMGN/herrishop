import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { verifyEmailDto } from './dto/verify_email.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get('verify')
  @Render('verify')
  async verifyEmail(@Query() verifyEmailDto:verifyEmailDto ) {
    const props =await this.appService.verifyEmail(verifyEmailDto.token)
    return props ;
  }
}
