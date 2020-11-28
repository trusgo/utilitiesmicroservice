import { Module, HttpModule } from '@nestjs/common'
import { EmailController } from './email.controller'
import { EmailService } from './email.service'
import { AirTicket } from './Templates/AirTicket'
import { BusTicket } from './Templates/BusTicket'
import { ForgetPassword } from './Templates/ForgotPassword'
import { HotelTicket } from './Templates/HotelTicket'
import { PaymentInvoice } from './Templates/Inovice'
import { RegisterTemplate } from './Templates/RegisterTemplate'
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Transport } from '@nestjs/microservices'
import { sendMailService } from './sendMail/sendMail.service'
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
import { header } from './Templates/Header'
import { footer } from './Templates/Footer'
@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 50000,
        maxRedirects: 5
      })
    }),AirTicket,
    MailerModule.forRoot({
      transport: {
        // host: 'smtp.gmail.com',
        host:'smtp.zoho.com',
        // host:'smtp.sendgrid.net',
        // port: 465,
        port:465,
        ignoreTLS: true,
        secure: true,
        // auth: {
        //   user: 'trickytop945@gmail.com',
        //   pass: 'TOP@asdfghzxcvbn',
        // },
         auth: {
          user: 'care@qktrip.com',
          pass: 'warrior.009',
        }
        // auth:{
        //   user:'apikey',
        //   pass:'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'
        // }
      },
      defaults: {
        from: '"No Reply" <no-reply@localhost>',
      },
      preview: true,
    }),
  ],
  controllers: [EmailController],
  providers: [ EmailService,AirTicket,HotelTicket,BusTicket,ForgetPassword,RegisterTemplate,PaymentInvoice,CancelRequest,
    cancelRequestrefNoTemplate,cancelTicketTemplate,changePasswordTemplate,changeTxnPasswordTemplate,
    busInoviceTemplate,feedbackAndComplaintsTemplate,flightSegmentTemplate,groupEnquiryRequestTemplate,hotelInoviceTemplate,
    hotelRoomBookingTemplate,paymentCancelMailTemplate,printTicketTemplate,ticketingSystemtemplate,userActivationTemplate,ResheduleRequestTemplete,
    ContactUsTemplete,flightEnquiryTemplate,sendMailService,header,footer]
})
export class EmailModule { }

