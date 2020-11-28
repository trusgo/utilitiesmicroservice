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
  @MessagePattern({ cmd: 'cancelRequest' })
  async cancelRequest(reqBody: MailReq) {

    return await this.emailService.cancelRequest(reqBody)
  }
  @MessagePattern({ cmd: 'cancelRequestRefNo' })
  async cancelRequestrefNo(reqBody: MailReq) {

    return await this.emailService.cancelRequestrefNo(reqBody)
  }

  @MessagePattern({ cmd: 'cancelTicket' })
  async cancelTicket(reqBody: MailReq) {

    return await this.emailService.cancelTicket(reqBody)
  }
  @MessagePattern({ cmd: 'changePassword' })
  async changePassword(reqBody: MailReq) {

    return await this.emailService.changePassword(reqBody)
  }
  @MessagePattern({ cmd: 'changeTxnPassword' })
  async changeTxnPassword(reqBody: MailReq) {

    return await this.emailService.changeTxnPassword(reqBody)
  }
  @MessagePattern({ cmd: 'busInvoice' })
  async busInvoice(reqBody: MailReq) {

    return await this.emailService.busInvoice(reqBody)
  }
  @MessagePattern({ cmd: 'feedbackAndComplaints' })
  async feedbackAndComplaints(reqBody: MailReq) {

    return await this.emailService.feedbackAndComplaints(reqBody)
  }
  @MessagePattern({ cmd: 'flightSegment' })
  async flightSegment(reqBody: MailReq) {

    return await this.emailService.flightSegment(reqBody)
  }
  @MessagePattern({ cmd: 'groupEnquiryRequest' })
  async groupEnquiryRequest(reqBody: MailReq) {

    return await this.emailService.groupEnquiryRequest(reqBody)
  }
  @MessagePattern({ cmd: 'hotelInovice' })
  async hotelInovice(reqBody: MailReq) {

    return await this.emailService.hotelInovice(reqBody)
  }
  @MessagePattern({ cmd: 'hotelRoomBooking' })
  async hotelRoomBooking(reqBody: MailReq) {

    return await this.emailService.hotelRoomBooking(reqBody)
  }
  @MessagePattern({ cmd: 'paymentCancelMail' })
  async paymentCancelMail(reqBody: MailReq) {

    return await this.emailService.paymentCancelMail(reqBody)
  }
  @MessagePattern({ cmd: 'printTicket' })
  async printTicket(reqBody: MailReq) {

    return await this.emailService.printTicket(reqBody)
  }
  @MessagePattern({ cmd: 'ticketingSystem' })
  async ticketingSystem(reqBody: MailReq) {

    return await this.emailService.ticketingSystem(reqBody)
  }
  @MessagePattern({ cmd: 'userActivation' })
  async userActivation(reqBody: MailReq) {

    return await this.emailService.userActivation(reqBody)
  }
  @MessagePattern({ cmd: 'ResheduleRequest' })
  async ResheduleRequest(reqBody: MailReq) {

    return await this.emailService.ResheduleRequest(reqBody)
  }
  @MessagePattern({ cmd: 'contactUs' })
  async contactUs(reqBody: MailReq) {

    return await this.emailService.contactUs(reqBody)
  }
  @MessagePattern({ cmd: 'flightEnquiry' })
  async flightEnquiry(reqBody: MailReq) {

    return await this.emailService.flightEnquiry(reqBody)
  }
}

