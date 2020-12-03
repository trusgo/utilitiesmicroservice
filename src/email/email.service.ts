import { Injectable, HttpStatus } from '@nestjs/common';
import { AirTicket } from './Templates/AirTicket';
import { BusTicket } from './Templates/BusTicket';
import { ForgetPassword } from './Templates/ForgotPassword';
import { HotelTicket } from './Templates/HotelTicket';
import { PaymentInvoice } from './Templates/Inovice';
import { RegisterTemplate } from './Templates/RegisterTemplate';
import { MailerService } from '@nestjs-modules/mailer';
import { MailReq } from './dto/mailreq.dto';
import { sendMailService } from './sendMail/sendMail.service';
import{CancelRequest} from './Templates/CancelRequest';
import {cancelRequestrefNoTemplate} from './Templates/CancelRequestRefNo';
import {cancelTicketTemplate} from './Templates/CancelTicket';
import {changePasswordTemplate} from './Templates/Changepassword';
import {changeTxnPasswordTemplate} from './Templates/ChangeTxnPassword';
import {busInoviceTemplate} from './Templates/BusInovice';
import {feedbackAndComplaintsTemplate} from './Templates/FeedbackandComplaints';
import {flightSegmentTemplate} from './Templates/FlightSegment';
import {groupEnquiryRequestTemplate} from './Templates/GroupEnquiryRequest';
import {hotelInoviceTemplate} from './Templates/HotelInovice';
import {hotelRoomBookingTemplate} from './Templates/HotelRoomBooking';
import {paymentCancelMailTemplate} from './Templates/PaymentCancelMail';
import {printTicketTemplate} from './Templates/PrintTicket';
import {ticketingSystemtemplate} from './Templates/TicketingSystem';
import {userActivationTemplate} from './Templates/UserActivation';
import {ResheduleRequestTemplete} from './Templates/ResheduleRequest';
import {ContactUsTemplete} from './Templates/ContactUs';
import {flightEnquiryTemplate} from './Templates/FlightEnquiry';
import {FlightDetailsTemplete} from './Templates/FlightDetails';
import {ticketBlockingTemplate} from './Templates/TicketBlocking'
import { from } from 'rxjs';

@Injectable()
export class EmailService {
  constructor(
    private readonly airTicket: AirTicket,
    private readonly hotelTickets: HotelTicket,
    private readonly busTickets: BusTicket,
    private readonly forgetPasswordTem: ForgetPassword,
    private readonly registerTem: RegisterTemplate,
    private readonly paymentInvoiceTem: PaymentInvoice,
    private readonly mailerService: sendMailService,
    private readonly cancelRequestTem:CancelRequest,
    private readonly cancelRequestRefNoTem:cancelRequestrefNoTemplate,
    private readonly cancelTicketTemplate:cancelTicketTemplate,
    private readonly changePasswordTemp:changePasswordTemplate,
    private readonly changeTxnPasswordTemp:changeTxnPasswordTemplate,
    private readonly busInvoiceTemp:busInoviceTemplate,
    private readonly feedbackandCompliantsTemp:feedbackAndComplaintsTemplate,
    private readonly flightSegmentTemp: flightSegmentTemplate,
    private readonly groupEnquiryRequestTemp:groupEnquiryRequestTemplate,
    private readonly hotelInoviceTemp:hotelInoviceTemplate,
    private readonly hotelRoomBookingTemp:hotelRoomBookingTemplate,
    private readonly paymentCancelMailTemp:paymentCancelMailTemplate,
    private readonly printTicketTemp:printTicketTemplate,
    private readonly ticketingSystemtemp:ticketingSystemtemplate,
    private readonly userActivationTemp:userActivationTemplate,
    private readonly ResheduleRequestTemp:ResheduleRequestTemplete,
    private readonly ContactUsTemp:ContactUsTemplete,
    private readonly flightEnquiryTemp:flightEnquiryTemplate,
    private readonly FlightDetailsTemp:FlightDetailsTemplete,
    private readonly ticketBlockingTemp:ticketBlockingTemplate
  ) {}

  async flightTicket(reqBody: MailReq) {
    const result = await this.airTicket.Template(reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
      reqBody.cc,reqBody.bcc,
      reqBody.data.attachment,
    );
    return mail;
  }

  async hotelTicket(reqBody: MailReq) {
    const result = await this.hotelTickets.Template(reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
      reqBody.cc,reqBody.bcc,
      reqBody.data.attachment,
    );
    return mail;
  }
  async busTicket(reqBody: MailReq) {
    const result = await this.busTickets.Template(reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
      reqBody.cc,reqBody.bcc,
      reqBody.data.attachment,
    );
    return mail;
  }
  async forgetPassword(reqBody: MailReq) {
    const result = await this.forgetPasswordTem.Template(reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
      reqBody.cc,reqBody.bcc
    );
    return mail;
  }
  async registration(reqBody: MailReq) {
    const result = await this.registerTem.Template(reqBody.data);

    return this.mailerService.sendEmail(reqBody.to, reqBody.subject, result,reqBody.cc,reqBody.bcc);
  }
  async paymentInvoice(reqBody: MailReq) {
    const result = await this.paymentInvoiceTem.Template(reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
      reqBody.cc,reqBody.bcc
    );
    return mail;
  }
  async cancelRequest(reqBody: MailReq) {
    const result = await this.cancelRequestRefNoTem.Template(reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
      reqBody.cc,reqBody.bcc
    );
    return mail;
  }
  async cancelRequestrefNo(reqBody: MailReq) {
    const result = await this.cancelRequestTem.Template(reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
      reqBody.cc,reqBody.bcc
    );
    return mail;
  }
  async cancelTicket(reqBody: MailReq) {
    const result = await this.cancelTicketTemplate.Template(reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
      reqBody.cc,reqBody.bcc
    );
    return mail;
  }
  async changePassword(reqBody: MailReq) {
    const result = await this.changePasswordTemp.Template(reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
      reqBody.cc,reqBody.bcc
    );
    return mail;
  }
  async changeTxnPassword(reqBody: MailReq) {
    const result = await this.changeTxnPasswordTemp.Template(reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
      reqBody.cc,reqBody.bcc
    );
    return mail;
  }
  async busInvoice(reqBody: MailReq) {
    const result = await this.busInvoiceTemp.Template(reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
      reqBody.cc,reqBody.bcc
    );
    return mail;
  }
  async feedbackAndComplaints(reqBody: MailReq) {
    const result = await this.feedbackandCompliantsTemp.Template(reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
      reqBody.cc,reqBody.bcc
    );
    return mail;
  }
  async flightSegment(reqBody: MailReq) {
    const result = await this.flightSegmentTemp.Template(reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
      reqBody.cc,reqBody.bcc
    );
    return mail;
  }
  async groupEnquiryRequest(reqBody: MailReq) {
    const result = await this.groupEnquiryRequestTemp.Template(reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
      reqBody.cc,reqBody.bcc
    );
    return mail;
  }
  async hotelInovice(reqBody: MailReq) {
    const result =await this.hotelInoviceTemp.Template(reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
      reqBody.cc,reqBody.bcc
    );
    return mail;
  }
  async hotelRoomBooking(reqBody: MailReq) {
    const result =await this.hotelRoomBookingTemp.Template(reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
      reqBody.cc,reqBody.bcc
    );
    return mail;
  }
  async paymentCancelMail(reqBody: MailReq) {
    const result = await this.paymentCancelMailTemp.Template(reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
      reqBody.cc,reqBody.bcc
    );
    return mail;
  }
  async printTicket(reqBody: MailReq) {
    const result = await this.printTicketTemp.Template(reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
      reqBody.cc,reqBody.bcc
    );
    return mail;
  }
  async ticketingSystem(reqBody: MailReq) {
    const result = await this.ticketingSystemtemp.Template(reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
      reqBody.cc,reqBody.bcc
    );
    return mail;
  }
  async userActivation(reqBody: MailReq) {
    const result = await this.userActivationTemp.Template(reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
      reqBody.cc,reqBody.bcc
    );
    return mail;
  }
  async ResheduleRequest(reqBody: MailReq) {
    const result = await this.ResheduleRequestTemp.Template(reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
      reqBody.cc,reqBody.bcc
    );
    return mail;
  }
  async contactUs(reqBody: MailReq) {
    const result =  await this.ContactUsTemp.Template(reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
      reqBody.cc,reqBody.bcc
    );
    return mail;
  }

  async flightEnquiry(reqBody: MailReq) {
    const result = await this.flightEnquiryTemp.Template(reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
      reqBody.cc,reqBody.bcc
    );
    return mail;
  }
  async flightDetails(reqBody: MailReq) {
    const result = await this.FlightDetailsTemp.Template(reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
      reqBody.cc,reqBody.bcc
    );
    return mail;
  }
  async ticketBlocking(reqBody: MailReq) {
    const result = await this.ticketBlockingTemp.Template(reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
      reqBody.cc,reqBody.bcc
    );
    return mail;
  }
}
