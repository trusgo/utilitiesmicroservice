import { Module, HttpModule } from '@nestjs/common'
import { EmailController } from './email.controller'
import { EmailService } from './email.service'
import { AirTicket } from './Templates/AirTicket'


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
  providers: [ EmailService,AirTicket]
})
export class EmailModule { }

