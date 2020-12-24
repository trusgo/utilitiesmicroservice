import { HttpModule, Module } from '@nestjs/common';
import { SMSController } from './sms.controller';
import { SMSService } from './sms.service';
import {BusBookingDetailsSMSTemplate} from './Templete/busbookingdetailssms'
import {BusCancelSMSTemplate} from './Templete/buscancelsms'
import {FlightBookingSMSTemplate} from './Templete/flightBookingsms'
import {flightDetailsSMSTemplete} from './Templete/flightDetailssms'
import {sendSMSServic} from './sendSMS/sendSMS.service'
@Module({
    imports:[ HttpModule.registerAsync({
        useFactory: () => ({
          timeout: 50000,
          maxRedirects: 5
        })
      }),],
    providers:[sendSMSServic,SMSService,BusBookingDetailsSMSTemplate,BusCancelSMSTemplate,flightDetailsSMSTemplete,FlightBookingSMSTemplate],
    controllers:[SMSController]
})
export class SmsModule {}
