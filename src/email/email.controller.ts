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

  @MessagePattern({ cmd: 'hotelTicket' })
  async hotelTicket(keyword: string) {

    return await this.emailService.hotelTicket(keyword)
  }
  @MessagePattern({ cmd: 'busTicket' })
  async busTicket(keyword: string) {

    return await this.emailService.busTicket(keyword)
  }
  @MessagePattern({ cmd: 'forgetPassword' })
  async forgetPassword(keyword: string) {

    return await this.emailService.forgetPassword(keyword)
  }
  @MessagePattern({ cmd: 'registration' })
  async registration(keyword: string) {

    return await this.emailService.registration(keyword)
  }
  @MessagePattern({ cmd: 'paymentInvoice' })
  async paymentInvoice(keyword: string) {

    return await this.emailService.paymentInvoice(keyword)
  }


}

