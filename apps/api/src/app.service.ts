import { Injectable } from '@nestjs/common'
import { AUTOSPACE_API_SERVICE, type ApiHealth } from '@autospace/shared'
import { add } from '@autospace/sample-lib'

@Injectable()
export class AppService {
  getHealth(): ApiHealth {
    return {
      service: AUTOSPACE_API_SERVICE,
      status: 'ok',
      timestamp: new Date().toISOString(),
    }
  }

  getHello(): string {
    return `Hello World!: ${add(2, 3)}`
  }
}
