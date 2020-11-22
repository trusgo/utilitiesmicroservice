import { Controller, Get } from '@nestjs/common'
import { EmailService } from './email.service'
import { MessagePattern } from '@nestjs/microservices'
import { MailReq } from './dto/mailreq.dto'

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) { }


  @MessagePattern({ cmd: 'flightTicket' })
  async flightTicket(reqBody: MailReq) {

    return await this.emailService.flightTicket(reqBody)
  }

  @MessagePattern({ cmd: 'hotelTicket' })
  async hotelTicket(reqBody: MailReq) {

    return await this.emailService.hotelTicket(reqBody)
  }
  @MessagePattern({ cmd: 'busTicket' })
  async busTicket(reqBody: MailReq) {

    return await this.emailService.busTicket(reqBody)
  }
  @MessagePattern({ cmd: 'forgetPassword' })
  async forgetPassword(reqBody: MailReq) {

    return await this.emailService.forgetPassword(reqBody)
  }
  @MessagePattern({ cmd: 'registration' })
  async registration(reqBody: MailReq) {

    return await this.emailService.registration(reqBody)
  }
  @MessagePattern({ cmd: 'paymentInvoice' })
  async paymentInvoice(reqBody: MailReq) {

    return await this.emailService.paymentInvoice(reqBody)
  }


}

