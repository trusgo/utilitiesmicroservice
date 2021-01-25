import { Injectable } from "@nestjs/common";
import {BusBookingDetailsSMSTemplate} from './Templete/busbookingdetailssms'
import {BusCancelSMSTemplate} from './Templete/buscancelsms'
import {FlightBookingSMSTemplate} from './Templete/flightBookingsms'
import {flightDetailsSMSTemplete} from './Templete/flightDetailssms'
import {sendSMSServic} from './sendSMS/sendSMS.service'
@Injectable()
export class SMSService{
    constructor(private sendsmsservice:sendSMSServic, private BusBookingDetailsSMSTemp:BusBookingDetailsSMSTemplate ,
        private BusCancelSMSTemp:BusCancelSMSTemplate,
        private FlightBookingSMSTemp:FlightBookingSMSTemplate,
        private flightDetailsSMSTemp:flightDetailsSMSTemplete){}

    async flightDetails(reqBody:any){
      // const htmlData = await this.flightDetailsSMSTemp.Template(reqBody.data)
      const send= {
        From:process.env.SENDER_ID,
        To:reqBody.mobile,
        TemplateName:process.env.FLIGHTDETAILS_SMS_TEMP,
        VAR1:reqBody.data.FirstName + reqBody.data.LastName,
        VAR2:reqBody.data.origin,
        VAR3:reqBody.data.destination,
        VAR4:reqBody.data.DOJ,
        VAR5:reqBody.data.flightId,
        VAR6:reqBody.data.amount
    }
       return this.sendsmsservice.sendSMS(send)
    }

    async flightBooking(reqBody:any){
        //const htmlData = this.FlightBookingSMSTemp.Template(reqBody.data)
          const send= {
            From:process.env.SENDER_ID,
            To:reqBody.mobile,
            TemplateName:process.env.AIRBOOK_SMS_TEMP,
            VAR1:"",
            VAR2:reqBody.data.pnr,
            VAR3:reqBody.data.flightSegments[0].depatureDateTime,
            VAR4:reqBody.data.flightSegments[0].origin,
            VAR5:reqBody.data.flightSegments[0].destination,
            VAR6:reqBody.data.adult,VAR7:reqBody.data.child,
            VAR8:reqBody.data.infant
        }
    
        return this.sendsmsservice.sendSMS(send)
    }

    async busBookingDetails(reqBody){
        //const htmlData= await this.BusBookingDetailsSMSTemp.Template(reqBody.data)
        let Seat=`${reqBody.data.SeatNos.split(",")}`
        const Date= reqBody.data.JourneyDate + reqBody.data.DepartureTime
        const send= {
            From:process.env.SENDER_ID,
            To:reqBody.mobile,
            TemplateName:process.env.BUSBOOK_SMS_TEMP,
            VAR1:reqBody.data.ProviderBookingId,
            VAR2:reqBody.data.GuestName,
            VAR3:reqBody.data.SourceName,
            VAR4:reqBody.data.DestinationName,
            VAR5:reqBody.data.Operator,
            VAR6:reqBody.data.BusTypeName,
            VAR7:Seat,VAR:reqBody.data.Fares,
            VAR9:Date
        }
        return this.sendsmsservice.sendSMS(send)
    }
    async busCancel(reqBody){
       // const htmlData = this.BusCancelSMSTemp.Template(reqBody.data)
       let Seat=`${reqBody.data.SeatNos.split(",")}`
       const Date= reqBody.data.JourneyDate + reqBody.data.DepartureTime
       const send= {
           From:process.env.SENDER_ID,
           To:reqBody.mobile,
           TemplateName:process.env.BUSCANCEL_SMS,
           VAR1:reqBody.data.pnr,
           VAR2:reqBody.data.GuestName,
           VAR3:reqBody.data.SourceName,
           VAR4:reqBody.data.DestinationName,
           VAR5:reqBody.data.BusTypeName,
           VAR6:Seat,VAR7:reqBody.data.collectedFare,
           VAR8:Date
       }
       return this.sendsmsservice.sendSMS(send)
    }
    async LoginSMS(reqBody){
        const send= {
            From:process.env.SENDER_ID,
            To:reqBody.mobile,
            TemplateName:process.env.LOGIN_SMS_TEMP,
            VAR1:reqBody.data.mobile
        }
        return this.sendsmsservice.sendSMS(send)
     }

     async AirTicket(reqBody){
         const date = reqBody.data.bookingDate
         const segment = reqBody.data.oneWaySegment.map(x=>{
             return ` ${x.origin} - ${x.destination}`
         }).join(',')
        
         const send= {
            From:process.env.SENDER_ID,
            To:reqBody.mobile,
            TemplateName:process.env.AIRTICKET_SMS_TEMP,
            VAR1:reqBody.data.guestName,
            VAR2:reqBody.data.id,
            VAR3:segment,
            VAR4:reqBody.data.oneWaySegment[0].departureDateTime,
            VAR5:reqBody.data.id,
            VAR6:reqBody.data.pnr,
            VAR7:reqBody.data.tripType,
            VAR8:reqBody.data.pax.adults,
            VAR9:reqBody.data.pax.childCount,
            VAR10:reqBody.data.pax.infantCount
         }
         return this.sendsmsservice.sendSMS(send)
     }
     async RoundTripAirTicket(reqBody){
        const date = reqBody.data.bookingDate
        const onewaysegment = reqBody.data.oneWaySegment.map(x=>{
            return ` ${x.origin} - ${x.destination}`
        }).join(',')
        const Twowaysegment = reqBody.data.returnSegment.map(x=>{
            return ` ${x.origin} - ${x.destination}`
        }).join(',')
       
        const send= {
           From:process.env.SENDER_ID,
           To:reqBody.mobile,
           TemplateName:process.env.ROUNDTRIPAIR_SMS_TEMP,
           VAR1:reqBody.data.guestName,
           VAR2:reqBody.data.id,
           VAR3:onewaysegment,
           VAR4:reqBody.data.oneWaySegment[0].departureDateTime,
           VAR5:Twowaysegment,
           VAR6:reqBody.data.returnSegment[0].departureDateTime,
           VAR7:reqBody.data.pnr,
           VAR8:reqBody.data.tripType,
           VAR9:reqBody.data.pax.adults,
           VAR10:reqBody.data.pax.childCount,
           VAR11:reqBody.data.pax.infantCount
        }
        return this.sendsmsservice.sendSMS(send)
    }
     async BsTicket(reqBody){
         
          var name = reqBody.data.passengerInfo.map(x=>{
              return ` ${x.titles} ${x.names}`
          }).join(',')
          var seat = reqBody.data.passengerInfo.map(x=>{
              return ` ${x.seatNos}(${x.genders})`
          }).join(',')
         var fares = reqBody.data.passengerInfo.map(x=>{
             return ` ${parseFloat(x.fares) + parseFloat(x.serviceTax)+  parseFloat(x.serviceCharge)}`
         }).join(',')
              const send={
                From:process.env.SENDER_ID,
                To:reqBody.mobile,
                TemplateName:process.env.BUSBOOK_SMS_TEMP,
                VAR1:reqBody.data.pnr,
                VAR2:name,
                VAR3:reqBody.data.sourcename,
                VAR4:reqBody.data.destinationname, 
                VAR5:reqBody.data.operator,
                VAR6:reqBody.data.busTypeName,
                VAR7:seat,VAR8:fares,
                VAR9:reqBody.data.journeydate
              }
              return this.sendsmsservice.sendSMS(send)
     }
}