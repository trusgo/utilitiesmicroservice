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
        host: 'smtp.gmail.com',
        port: 465,
        ignoreTLS: true,
        secure: true,
        auth: {
          user: 'trickytop945@gmail.com',
          pass: 'TOP@asdfghzxcvbn',
        },
      },
      defaults: {
        from: '"No Reply" <no-reply@localhost>',
      },
      preview: true,
    }),
  ],
  controllers: [EmailController],
  providers: [ EmailService,AirTicket,HotelTicket,BusTicket,ForgetPassword,RegisterTemplate,PaymentInvoice,sendMailService]
})
export class EmailModule { }

