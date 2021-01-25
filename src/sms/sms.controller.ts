import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { smsDto } from "./dto/sms.dto";
import { SMSService } from "./sms.service";

@Controller()
export class SMSController{
  constructor(private readonly smsservice:SMSService){}

   @MessagePattern({cmd:'flightDetailsSMS'})
   async flightDetails(reqBody:smsDto){
         return await this.smsservice.flightDetails(reqBody)
   }
   @MessagePattern({cmd:'flightBookingSMS'})
   async flightBooking(reqBody:smsDto){
         return await this.smsservice.flightBooking(reqBody)
   }
   @MessagePattern({cmd:'busBookingSMS'})
   async busBookingDetails(reqBody:smsDto){
         return await this.smsservice.busBookingDetails(reqBody)
   }
   @MessagePattern({cmd:'busCancelSMS'})
   async busCancel(reqBody:smsDto){
         return await this.smsservice.busCancel(reqBody)
   }
   @MessagePattern({cmd:'LoginSMS'})
   async LoginSMS(reqBody:smsDto){
         return await this.smsservice.LoginSMS(reqBody)
   }

   @MessagePattern({cmd:'AirTicket'})
   async AirTicketSMS(reqBody:smsDto){
         if(reqBody.data.tripType=="TwoWay"){
            return await this.smsservice.RoundTripAirTicket(reqBody)
         }else{
            return await this.smsservice.AirTicket(reqBody)
         }
   
   }
   @MessagePattern({cmd:'busTicket'})
   async busTicket(reqBody:smsDto){
    return await this.smsservice.BsTicket(reqBody)
   }
}