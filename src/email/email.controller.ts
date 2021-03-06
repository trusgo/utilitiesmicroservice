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
  @MessagePattern({ cmd: 'busBookingTicket' })
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
       console.log("i m in utility")
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
  @MessagePattern({ cmd: 'FlightTicket' })
  async AirTicket(reqBody: MailReq) {
    return await this.emailService.AirTicket(reqBody)
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
  @MessagePattern({ cmd: 'flightDetails' })
  async flightDetails(reqBody: MailReq) {

    return await this.emailService.flightDetails(reqBody)
  }
  @MessagePattern({ cmd: 'ticketBlocking' })
  async ticketBlocking(reqBody: MailReq) {

    return await this.emailService.ticketBlocking(reqBody)
  }
  @MessagePattern({ cmd: 'ticketRefund' })
  async ticketRefund(reqBody: MailReq) {

    return await this.emailService.ticketRefund(reqBody)
  }
  @MessagePattern({ cmd: 'flightItinerary' })
  async flightItinerary(reqBody: MailReq) {

    return await this.emailService.flightItinerary(reqBody)
  }
  @MessagePattern({ cmd: 'ticketBooking' })
  async ticketBooking(reqBody: MailReq) {

    return await this.emailService.ticketBooking(reqBody)
  }
  @MessagePattern({ cmd: 'CombinedticketBooking' })
  async CombinedticketBooking(reqBody: MailReq) {

    return await this.emailService.CombinedticketBooking(reqBody)
  }
  @MessagePattern({ cmd: 'busBooking' })
  async busBooking(reqBody: MailReq) {

    return await this.emailService.busBooking(reqBody)
  }
  @MessagePattern({ cmd: 'busBookingFailed' })
  async busBookingFailed(reqBody: MailReq) {

    return await this.emailService.busBookingFailed(reqBody)
  }
  @MessagePattern({ cmd: 'airBookingFailed' })
  async AirBookingFailed(reqBody: MailReq) {

    return await this.emailService.AirBookingFailed(reqBody)
  }
  @MessagePattern({ cmd: 'subscribe' })
  async subscribe(reqBody: MailReq) {
     
    return await this.emailService.subscribe(reqBody)
  }

  @MessagePattern({ cmd: 'AirCanCelRequest' })
  async AirCanCelRequest(reqBody: MailReq) {
     
    return await this.emailService.AirCanCelRequest(reqBody)
  }
  @MessagePattern({ cmd: 'AirRefundCancellation' })
  async AirRefundCancellation(reqBody: MailReq) {
     
    return await this.emailService.AirRefundCancellation(reqBody)
  }
  @MessagePattern({ cmd: 'AirRefundedTicket' })
  async AirRefundedTicket(reqBody: MailReq) {
     
    return await this.emailService.AirRefundedTicket(reqBody)
  }
}

