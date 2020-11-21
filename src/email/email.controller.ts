import { Controller, Get } from '@nestjs/common'
import { EmailService } from './email.service'
import { MessagePattern } from '@nestjs/microservices'

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) { }


  @MessagePattern({ cmd: 'flightTicket' })
  async flightTicket(keyword: string) {

    return await this.emailService.flightTicket(keyword)
  }
  


}

