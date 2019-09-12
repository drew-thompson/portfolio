import { Controller, Get, Post } from '@nestjs/common';

import { Message } from '@portfolio/api-interface';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): { data: Message } {
    return { data: this.appService.getData() };
  }

  @Post('hello')
  fakerPost(): { data: Message } {
    return { data: this.appService.getData() };
  }
}
