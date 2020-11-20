import { Controller, Get, Logger, Req } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  testMail(@Req() req): any {
    console.log('info', req);
    switch (3) {
      case 3:
        return this.appService.getHello();
        break;
      default:
        return ' No type Found';
        break;
    }
  }
}
