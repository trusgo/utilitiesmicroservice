import { Controller, Get } from '@nestjs/common'
import { EmailService } from './email.service'
import { MessagePattern } from '@nestjs/microservices'

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) { }


  @MessagePattern({ cmd: 'sendMail' })
  async sendMail(keyword: string) {

    return await this.emailService.sendMail(keyword)
  }
  


}

