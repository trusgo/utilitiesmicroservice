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
  ) {}

  async flightTicket(reqBody: MailReq) {
    const result = this.airTicket.Template();
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
    );
  }

  async hotelTicket(reqBody: MailReq) {
    const result = this.hotelTickets.Template();
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
    );
  }
  async busTicket(reqBody: MailReq) {
    const result = this.busTickets.Template();
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
    );
  }
  async forgetPassword(reqBody: MailReq) {
    const result = this.forgetPasswordTem.Template();
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
    );
  }
  async registration(reqBody: MailReq) {
    const result = this.registerTem.Template(reqBody.data);
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
    );
    console.log('reqBody', reqBody);
  }
  async paymentInvoice(reqBody: MailReq) {
    const result = this.paymentInvoiceTem.Template();
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      result,
    );
  }
}
