import { Module, HttpModule } from '@nestjs/common'
import { EmailController } from './email.controller'
import { EmailService } from './email.service'
import { AirTicket } from './Templates/AirTicket'
import { BusTicket } from './Templates/BusTicket'
import { ForgetPassword } from './Templates/ForgotPassword'
import { HotelTicket } from './Templates/HotelTicket'
import { PaymentInvoice } from './Templates/Inovice'
import { RegisterTemplate } from './Templates/RegisterTemplate'


@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 50000,
        maxRedirects: 5
      })
    }),AirTicket
  ],
  controllers: [EmailController],
  providers: [ EmailService,AirTicket,HotelTicket,BusTicket,ForgetPassword,RegisterTemplate,PaymentInvoice]
})
export class EmailModule { }

