import { Controller, Get } from '@nestjs/common'
import type { ApiHealth } from '@autospace/shared'
import { AppService } from './app.service.js'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  getHealth(): ApiHealth {
    return this.appService.getHealth()
  }

  @Get('/')
  getHello(): string {
    return this.appService.getHello()
  }
}
