import { Injectable, HttpStatus } from '@nestjs/common';
import { AirTicket } from './Templates/AirTicket';
import { BusTicket } from './Templates/BusTicket';
import { ForgetPassword } from './Templates/ForgotPassword';
import { HotelTicket } from './Templates/HotelTicket';
import { PaymentInvoice } from './Templates/Inovice';
import { RegisterTemplate } from './Templates/RegisterTemplate';
import { MailReq } from './dto/mailreq.dto';
import { sendMailService } from './sendMail/sendMail.service';
import { CancelRequest } from './Templates/CancelRequest';
import { cancelRequestrefNoTemplate } from './Templates/CancelRequestRefNo';
import { cancelTicketTemplate } from './Templates/CancelTicket';
import { changePasswordTemplate } from './Templates/Changepassword';
import { changeTxnPasswordTemplate } from './Templates/ChangeTxnPassword';
import { busInoviceTemplate } from './Templates/BusInovice';
import { feedbackAndComplaintsTemplate } from './Templates/FeedbackandComplaints';
import { flightSegmentTemplate } from './Templates/FlightSegment';
import { groupEnquiryRequestTemplate } from './Templates/GroupEnquiryRequest';
import { hotelInoviceTemplate } from './Templates/HotelInovice';
import { hotelRoomBookingTemplate } from './Templates/HotelRoomBooking';
import { paymentCancelMailTemplate } from './Templates/PaymentCancelMail';
import { printTicketTemplate } from './Templates/PrintTicket';
import { ticketingSystemtemplate } from './Templates/TicketingSystem';
import { userActivationTemplate } from './Templates/UserActivation';
import { ResheduleRequestTemplete } from './Templates/ResheduleRequest';
import { ContactUsTemplete } from './Templates/ContactUs';
import { flightEnquiryTemplate } from './Templates/FlightEnquiry';
import { FlightDetailsTemplete } from './Templates/FlightDetails';
import { ticketBlockingTemplate } from './Templates/TicketBlocking';
import { ticketRefundTemplate } from './Templates/TicketRefund';
import { flightItineraryTemplate } from './Templates/flightItinerary';
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
    private readonly cancelRequestTem: CancelRequest,
    private readonly cancelRequestRefNoTem: cancelRequestrefNoTemplate,
    private readonly cancelTicketTemplate: cancelTicketTemplate,
    private readonly changePasswordTemp: changePasswordTemplate,
    private readonly changeTxnPasswordTemp: changeTxnPasswordTemplate,
    private readonly busInvoiceTemp: busInoviceTemplate,
    private readonly feedbackandCompliantsTemp: feedbackAndComplaintsTemplate,
    private readonly flightSegmentTemp: flightSegmentTemplate,
    private readonly groupEnquiryRequestTemp: groupEnquiryRequestTemplate,
    private readonly hotelInoviceTemp: hotelInoviceTemplate,
    private readonly hotelRoomBookingTemp: hotelRoomBookingTemplate,
    private readonly paymentCancelMailTemp: paymentCancelMailTemplate,
    private readonly printTicketTemp: printTicketTemplate,
    private readonly ticketingSystemtemp: ticketingSystemtemplate,
    private readonly userActivationTemp: userActivationTemplate,
    private readonly ResheduleRequestTemp: ResheduleRequestTemplete,
    private readonly ContactUsTemp: ContactUsTemplete,
    private readonly flightEnquiryTemp: flightEnquiryTemplate,
    private readonly FlightDetailsTemp: FlightDetailsTemplete,
    private readonly ticketBlockingTemp: ticketBlockingTemplate,
    private readonly ticketRefundTemp: ticketRefundTemplate,
    private readonly flightItineraryTemp: flightItineraryTemplate,
  ) {}

  async getAllBusinessData() {
    return {
      logoUrl: 'http://qktrip.i2space.in/favicon.png',
      baseUrl: 'http://qktrip.i2space.in',
      supportEmail: 'info@qktrip.com',
      address: '16-A Mohali phase 8-B',
      mobile: '+91- 8886216947',
      contactEmail: 'contact@qktrip.com',
      companyName: 'Qk trip',
    };
  }

  async flightTicket(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();

    const htmlData = this.airTicket.Template(businessData, reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      'Flight Ticket Recived',
      htmlData,
      reqBody.data.attachment,
    );
    return mail;
  }

  async hotelTicket(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();

    const htmlData = await this.hotelTickets.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
      reqBody.data.attachment,
    );
    return mail;
  }
  async busTicket(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();

    const htmlData = await this.busTickets.Template(businessData, reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
      reqBody.data.attachment,
    );
    return mail;
  }
  async forgetPassword(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = this.forgetPasswordTem.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      `New Forget PassWord Request for  ${businessData.companyName} Account`,
      htmlData,
    );
    return mail;
  }
  async registration(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();

    const htmlData = await this.registerTem.Template(
      businessData,
      reqBody.data,
    );

    return this.mailerService.sendEmail(
      reqBody.to,
      `SuccessFull Registration  for  ${businessData.companyName} Account`,
      htmlData,
    );
  }
  async paymentInvoice(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();

    const htmlData = await this.paymentInvoiceTem.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      `Payment Invoice ${businessData.companyName}`,
      htmlData,
    );
    return mail;
  }
  async cancelRequest(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();

    const htmlData = await this.cancelRequestRefNoTem.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async cancelRequestrefNo(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();

    const htmlData = await this.cancelRequestTem.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async cancelTicket(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();

    const htmlData = await this.cancelTicketTemplate.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      'Ticket Cancellation Request Recived',
      htmlData,
    );
    return mail;
  }
  async changePassword(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.changePasswordTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      `Password changed for ${businessData.companyName} Account`,
      htmlData,
    );
    return mail;
  }
  async changeTxnPassword(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.changeTxnPasswordTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async busInvoice(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.busInvoiceTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async feedbackAndComplaints(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.feedbackandCompliantsTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async flightSegment(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.flightSegmentTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async groupEnquiryRequest(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.groupEnquiryRequestTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async hotelInovice(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.hotelInoviceTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async hotelRoomBooking(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.hotelRoomBookingTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async paymentCancelMail(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.paymentCancelMailTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async printTicket(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.printTicketTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async ticketingSystem(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.ticketingSystemtemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async userActivation(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.userActivationTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async ResheduleRequest(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.ResheduleRequestTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      'Flight Ticket Reshedule Request ',
      htmlData,
    );
    return mail;
  }
  async contactUs(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.ContactUsTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      'New Contact us Form Enquiry ',
      htmlData,
    );
    return mail;
  }

  async flightEnquiry(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.flightEnquiryTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      `New Flight Enquiry on ${businessData.companyName}`,
      htmlData,
    );
    return mail;
  }
  async flightDetails(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.FlightDetailsTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async ticketBlocking(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.ticketBlockingTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      'Your Ticket is Blocked , Pending For Confirmation',
      htmlData,
    );
    return mail;
  }
  async ticketRefund(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.ticketRefundTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async flightItinerary(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.flightItineraryTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      'Recived a Flight Ticket Details',
      htmlData,
    );
    return mail;
  }
}
