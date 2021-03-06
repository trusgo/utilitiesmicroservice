import { Injectable } from "@nestjs/common";
import { BusBookingDetailsSMSTemplate } from './Templete/busbookingdetailssms'
import { BusCancelSMSTemplate } from './Templete/buscancelsms'
import { FlightBookingSMSTemplate } from './Templete/flightBookingsms'
import { flightDetailsSMSTemplete } from './Templete/flightDetailssms'
import { sendSMSServic } from './sendSMS/sendSMS.service'
@Injectable()
export class SMSService {
    constructor(private sendsmsservice: sendSMSServic, private BusBookingDetailsSMSTemp: BusBookingDetailsSMSTemplate,
        private BusCancelSMSTemp: BusCancelSMSTemplate,
        private FlightBookingSMSTemp: FlightBookingSMSTemplate,
        private flightDetailsSMSTemp: flightDetailsSMSTemplete) { }

    async flightDetails(reqBody: any) {
        // const htmlData = await this.flightDetailsSMSTemp.Template(reqBody.data)
        const send = {
            From: process.env.SENDER_ID,
            To: reqBody.mobile,
            TemplateName: process.env.FLIGHTDETAILS_SMS_TEMP,
            VAR1: reqBody.data.FirstName + reqBody.data.LastName,
            VAR2: reqBody.data.origin,
            VAR3: reqBody.data.destination,
            VAR4: reqBody.data.DOJ,
            VAR5: reqBody.data.flightId,
            VAR6: reqBody.data.amount
        }
        return this.sendsmsservice.sendSMS(send)
    }

    async flightBooking(reqBody: any) {
        //const htmlData = this.FlightBookingSMSTemp.Template(reqBody.data)
        const send = {
            From: process.env.SENDER_ID,
            To: reqBody.mobile,
            TemplateName: process.env.AIRBOOK_SMS_TEMP,
            VAR1: `${reqBody.data.FirstName}  ${reqBody.data.LastName}`,
            VAR2: reqBody.data.RefNo,
            VAR3: reqBody.data.Status,
            VAR4: reqBody.data.pnr,
            VAR5: reqBody.data.JourneyDate,
            VAR6: reqBody.data.Amount
        }

        return this.sendsmsservice.sendSMS(send)
    }
    async CpmbinedflightBooking(reqBody: any) {
        //const htmlData = this.FlightBookingSMSTemp.Template(reqBody.data)
        const send = {
            From: process.env.SENDER_ID,
            To: reqBody.mobile,
            TemplateName: process.env.COMBINEDAIRBOOK_SMS_TEMP,
            VAR1: `${reqBody.data.FirstName}  ${reqBody.data.LastName}`,
            VAR2: reqBody.data.RefNo,
            VAR3: reqBody.data.Status,
            VAR4: reqBody.data.pnr,
            VAR5: reqBody.data.returnPnr,
            VAR6: reqBody.data.JourneyDate,
            VAR7: reqBody.data.ReturnDate,
            VAR8: reqBody.data.CombinedAmount
        }

        return this.sendsmsservice.sendSMS(send)
    }
    async busBookingDetails(reqBody) {
        //const htmlData= await this.BusBookingDetailsSMSTemp.Template(reqBody.data)
        let Seat = `${reqBody.data.SeatNos.split('~').join(',')}`
        const Date = reqBody.data.JourneyDate + reqBody.data.DepartureTime
        const send = {
            From: process.env.SENDER_ID,
            To: reqBody.mobile,
            TemplateName: process.env.BUSBOOK_SMS_TEMP,
            VAR1: reqBody.data.busPnr,
            VAR2: reqBody.data.GuestName.split('~').join(','),
            VAR3: reqBody.data.SourceName,
            VAR4: reqBody.data.DestinationName,
            VAR5: reqBody.data.Operator,
            VAR6: reqBody.data.BusTypeName,
            VAR7: Seat, VAR8: reqBody.data.GrandTotal,
            VAR9: Date
        }
        return this.sendsmsservice.sendSMS(send)
    }
    async busCancel(reqBody) {
        // const htmlData = this.BusCancelSMSTemp.Template(reqBody.data)
        let Seat = `${reqBody.data.SeatNos.split("~").join(',')}`
        const Date = reqBody.data.JourneyDate + reqBody.data.DepartureTime
        const send = {
            From: process.env.SENDER_ID,
            To: reqBody.mobile,
            TemplateName: process.env.BUSCANCEL_SMS,
            VAR1: reqBody.data.pnr,
            VAR2: reqBody.data.GuestName,
            VAR3: reqBody.data.SourceName,
            VAR4: reqBody.data.DestinationName,
            VAR5: reqBody.data.BusTypeName,
            VAR6: Seat, VAR7: reqBody.data.collectedFare,
            VAR8: Date
        }
        return this.sendsmsservice.sendSMS(send)
    }
    async LoginSMS(reqBody) {
        const send = {
            From: process.env.SENDER_ID,
            To: reqBody.mobile,
            TemplateName: process.env.LOGIN_SMS_TEMP,
            VAR1: reqBody.data.mobile
        }
        return this.sendsmsservice.sendSMS(send)
    }

    async AirTicket(reqBody) {
        const date = reqBody.data.bookingDate
        const segment = reqBody.data.oneWaySegment.map(x => {
            return ` ${x.origin} - ${x.destination}`
        }).join(',')

        const send = {
            From: process.env.SENDER_ID,
            To: reqBody.mobile,
            TemplateName: process.env.AIRTICKET_SMS_TEMP,
            VAR1: reqBody.data.guestName,
            VAR2: reqBody.data.id,
            VAR3: segment,
            VAR4: reqBody.data.oneWaySegment[0].departureDateTime,
            VAR5: reqBody.data.id,
            VAR6: reqBody.data.pnr,
            VAR7: reqBody.data.tripType,
            VAR8: reqBody.data.pax.adults,
            VAR9: reqBody.data.pax.childCount,
            VAR10: reqBody.data.pax.infantCount
        }
        return this.sendsmsservice.sendSMS(send)
    }
    async RoundTripAirTicket(reqBody) {
        const date = reqBody.data.bookingDate
        const onewaysegment = reqBody.data.oneWaySegment.map(x => {
            return ` ${x.origin} - ${x.destination}`
        }).join(',')
        const Twowaysegment = reqBody.data.returnSegment.map(x => {
            return ` ${x.origin} - ${x.destination}`
        }).join(',')

        const send = {
            From: process.env.SENDER_ID,
            To: reqBody.mobile,
            TemplateName: process.env.ROUNDTRIPAIR_SMS_TEMP,
            VAR1: reqBody.data.guestName,
            VAR2: reqBody.data.id,
            VAR3: onewaysegment,
            VAR4: reqBody.data.oneWaySegment[0].departureDateTime.split('T')[0],
            VAR5: Twowaysegment,
            VAR6: reqBody.data.returnSegment[0].departureDateTime.split('T')[0],
            VAR7: reqBody.data.pnr,
            VAR8: reqBody.data.tripType,
            VAR9: reqBody.data.pax.adults,
            VAR10: reqBody.data.pax.childCount,
            VAR11: reqBody.data.pax.infantCount
        }
        return this.sendsmsservice.sendSMS(send)
    }
    async BsTicket(reqBody) {

        var name = reqBody.data.passengerInfo.map(x => {
            return ` ${x.titles} ${x.names}`
        }).join(',')
        var seat = reqBody.data.passengerInfo.map(x => {
            return ` ${x.seatNos}(${x.genders})`
        }).join(',')
        var fares = reqBody.data.passengerInfo.map(x => {
            return (parseFloat(x.fares) + parseFloat(x.serviceTax) + parseFloat(x.serviceCharge))
        })

        let ConvenienceFee = reqBody.data.convienenceData
        let discount = reqBody.data.promoData
        let Discount = discount.Discount ?? 0
        //   var Grandtotal = [...Fare, ...ServiceCharge, ...ServiceTax]
        var Sum = fares.reduce((a, b) => {
            return (parseFloat(a) + parseFloat(b))
        }, 0)
        let convenienceFee = ConvenienceFee != '{}' ? (ConvenienceFee.type == 0 ? ((parseFloat(ConvenienceFee.amount) / 100) * (Sum)) : parseFloat(ConvenienceFee.amount)) : 0
        Sum = ((Sum + convenienceFee) - Discount).toFixed(2)

        const send = {
            From: process.env.SENDER_ID,
            To: reqBody.mobile,
            TemplateName: process.env.BUSBOOK_SMS_TEMP,
            VAR1: reqBody.data.pnr,
            VAR2: name,
            VAR3: reqBody.data.sourceName,
            VAR4: reqBody.data.destinationName,
            VAR5: reqBody.data.operator,
            VAR6: reqBody.data.busTypeName,
            VAR7: seat, VAR8: Sum,
            VAR9: reqBody.data.JourneyDate
        }
        return this.sendsmsservice.sendSMS(send)
    }
}