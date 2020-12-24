import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { AirTicket } from './email/Templates/AirTicket';
import { SmsModule } from './sms/sms.module';

@Module({
  imports: [EmailModule, SmsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
