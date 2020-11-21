import { Module, HttpModule } from '@nestjs/common'
import { EmailController } from './email.controller'
import { EmailService } from './email.service'


@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 50000,
        maxRedirects: 5
      })
    }),
  ],
  controllers: [EmailController],
  providers: [ EmailService]
})
export class EmailModule { }

