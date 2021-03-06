import { Injectable, HttpStatus, HttpService } from '@nestjs/common';
import { AirTicket } from './Templates/AirTicket';
import { BusTicket } from './Templates/BusTicket';
import { ForgetPassword } from './Templates/ForgotPassword';
import { HotelTicket } from './Templates/HotelTicket';
import { PaymentInvoice } from './Templates/Inovice';
import { RegisterTemplate } from './Templates/RegisterTemplate';
import { MailReq } from './dto/mailreq.dto';
import { sendMailService } from './sendMail/sendMail.service';
import { CancelRequest } from './Templates/CancelRequest';
import { cancelRequestrefNoTemplate } from './Templates/CancelRequestRefNo';
import { cancelTicketTemplate } from './Templates/CancelTicket';
import { changePasswordTemplate } from './Templates/Changepassword';
import { changeTxnPasswordTemplate } from './Templates/ChangeTxnPassword';
import { busInoviceTemplate } from './Templates/BusInovice';
import { feedbackAndComplaintsTemplate } from './Templates/FeedbackandComplaints';
import { flightSegmentTemplate } from './Templates/FlightSegment';
import { groupEnquiryRequestTemplate } from './Templates/GroupEnquiryRequest';
import { hotelInoviceTemplate } from './Templates/HotelInovice';
import { hotelRoomBookingTemplate } from './Templates/HotelRoomBooking';
import { paymentCancelMailTemplate } from './Templates/PaymentCancelMail';
import { printTicketTemplate } from './Templates/PrintTicket';
import { ticketingSystemtemplate } from './Templates/TicketingSystem';
import { userActivationTemplate } from './Templates/UserActivation';
import { ResheduleRequestTemplete } from './Templates/ResheduleRequest';
import { ContactUsTemplete } from './Templates/ContactUs';
import { flightEnquiryTemplate } from './Templates/FlightEnquiry';
import { FlightDetailsTemplete } from './Templates/FlightDetails';
import { ticketBlockingTemplate } from './Templates/TicketBlocking';
import { ticketRefundTemplate } from './Templates/TicketRefund';
import { flightItineraryTemplate } from './Templates/flightItinerary';
import {TicketBookingTemplete} from './Templates/TicketBooking'
import { from } from 'rxjs';

@Injectable()
export class EmailService {
  constructor(
    private readonly airTicket: AirTicket,
    private readonly hotelTickets: HotelTicket,
    private readonly busTickets: BusTicket,
    private readonly forgetPasswordTem: ForgetPassword,
    private readonly registerTem: RegisterTemplate,
    private readonly paymentInvoiceTem: PaymentInvoice,
    private readonly mailerService: sendMailService,
    private readonly cancelRequestTem: CancelRequest,
    private readonly cancelRequestRefNoTem: cancelRequestrefNoTemplate,
    private readonly cancelTicketTemplate: cancelTicketTemplate,
    private readonly changePasswordTemp: changePasswordTemplate,
    private readonly changeTxnPasswordTemp: changeTxnPasswordTemplate,
    private readonly busInvoiceTemp: busInoviceTemplate,
    private readonly feedbackandCompliantsTemp: feedbackAndComplaintsTemplate,
    private readonly flightSegmentTemp: flightSegmentTemplate,
    private readonly groupEnquiryRequestTemp: groupEnquiryRequestTemplate,
    private readonly hotelInoviceTemp: hotelInoviceTemplate,
    private readonly hotelRoomBookingTemp: hotelRoomBookingTemplate,
    private readonly paymentCancelMailTemp: paymentCancelMailTemplate,
    private readonly printTicketTemp: printTicketTemplate,
    private readonly ticketingSystemtemp: ticketingSystemtemplate,
    private readonly userActivationTemp: userActivationTemplate,
    private readonly ResheduleRequestTemp: ResheduleRequestTemplete,
    private readonly ContactUsTemp: ContactUsTemplete,
    private readonly flightEnquiryTemp: flightEnquiryTemplate,
    private readonly FlightDetailsTemp: FlightDetailsTemplete,
    private readonly ticketBlockingTemp: ticketBlockingTemplate,
    private readonly ticketRefundTemp: ticketRefundTemplate,
    private readonly flightItineraryTemp: flightItineraryTemplate,
    private readonly TicketBookingTemp:TicketBookingTemplete,
    private httpService: HttpService
  ) {}

 
  async getAllBusinessData() {
    const data= await this.httpService.get('http://156.238.16.26/api/v1/admin/settings/1')
    .toPromise()
    .then((res)=>{
     return res.data
    }).then((r)=>{
      return r.data.settings
    })
    .catch((err)=>{return err} );
    const BusinessAddress = data.BusinessAddress[0]
    let Address =''
    if(BusinessAddress!=undefined){
      Address=data.BusinessAddress[0].Address
    }
    // const {Address='',PostalCode,CityID,CountryID}=BusinessAddress
    const {CompanyName='',Email='',MobileNumber='',CountryCode=''} = data.userBusinessDetails
    return {
      logoUrl: process.env.LOGO_URL,
      baseUrl: process.env.BASE_URL,
      domainurl:process.env.DOMAIN_URL,
      supportEmail: Email,
      address: Address,
      mobile: `+${CountryCode}- ${MobileNumber}`,
      contactEmail: Email,
      companyName: CompanyName,
    };
  }

  // async getAllBusinessData() {
  //   return {
  //     logoUrl: 'http://trusgo.i2space.in/favicon.png',
  //     baseUrl: 'http://trsugo.i2space.in',
  //     supportEmail: 'info@trsusgo.com',
  //     address: '16-A Mohali phase 8-B',
  //     mobile: '+91- 8886216947',
  //     contactEmail: 'help@trusgo.com',
  //     companyName: 'Trusgo',
  //   };
  // }

  async flightTicket(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();

    // const htmlData = this.airTicket.Template(businessData, reqBody.data);
    // const mail = this.mailerService.sendEmail(
    //   reqBody.to,
    //   'Flight Ticket Recived',
    //   htmlData,
    //   reqBody.data.attachment,
    // );
    // return mail;
   
    const TempID=process.env.AIRTICKET_TEMP_ID
    const reqObj={
         header:{
          logoUrl:process.env.LOGO_URL
         },
         businessdetails:businessData,
         reqBody: reqBody.data
    }
    const mail = await this.mailerService.sendGridEMail(reqBody.to,TempID,reqObj)
    return {
      status:200,
      message:"success"
    };
  }

  async hotelTicket(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();

    const htmlData = await this.hotelTickets.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
      reqBody.data.attachment,
    );
    return mail;
  }
  async busTicket(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    
    const htmlData = await this.busTickets.Template(reqBody.data.cancellationPolicy);
   
    var Busfares= 0
    var BusserviceTax =0
    var BusserviceCharge =0
    var discount =reqBody.data.promoData.Discount
    const pass= reqBody.data.passengerInfo.map((passinfo)=>{
      Busfares+= parseFloat(passinfo.fares)
        BusserviceTax+=parseFloat(passinfo.serviceTax)
        BusserviceCharge+=parseFloat(passinfo.serviceCharge)

    })
    const conviencefee=reqBody.data.convienenceData.type==0?((parseFloat(reqBody.data.convienenceData.amount)/100)*(Busfares)):parseFloat(reqBody.data.convienenceData.amount)
    var GrandTotal = conviencefee+Busfares+BusserviceCharge+discount +BusserviceTax
    const TempID=process.env.BUSTICKET_TEMP_ID
    const reqObj={
         header:{
          logoUrl:process.env.LOGO_URL
         },
         businessdetails:businessData,
         reqBody: {...reqBody.data,fares:Busfares,serviceTax:BusserviceTax,serviceCharge:BusserviceCharge,cancellationpolicy:htmlData,Total:GrandTotal,ConvenienceFee:conviencefee,Discount:discount }
    }
   
    const mail = await this.mailerService.sendGridEMail(reqBody.to,TempID,reqObj)
    return {
      status:200,
      message:"success"
    };
  }
  async forgetPassword(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = this.forgetPasswordTem.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      `New Forget PassWord Request for  ${businessData.companyName} Account`,
      htmlData,
    );
    return mail;
  }
  async registration(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
        // const data = await this.mailerService.sendGridEMail();
       
    const htmlData = await this.registerTem.Template(
      businessData,
      reqBody.data,
    );

    return this.mailerService.sendEmail(
      reqBody.to,
      `SuccessFull Registration  for  ${businessData.companyName} Account`,
      htmlData,
    );
  }
  async paymentInvoice(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();

    const htmlData = await this.paymentInvoiceTem.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      `Payment Invoice ${businessData.companyName}`,
      htmlData,
    );
    return mail;
  }
  async cancelRequest(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();

    const htmlData = await this.cancelRequestRefNoTem.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async cancelRequestrefNo(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();

    const htmlData = await this.cancelRequestTem.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async cancelTicket(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();

    const htmlData = await this.cancelTicketTemplate.Template(
      businessData,
      reqBody.data,
    );
    // const mail = this.mailerService.sendEmail(
    //   reqBody.to,
    //   'Ticket Cancellation Request Recived',
    //   htmlData,
    // );
    // return mail;
    const TempID=process.env.CANCELTICKET_TEMP_ID
    const reqObj={
         header:{
          logoUrl:process.env.LOGO_URL
         },
         businessdetails:businessData,
         reqBody: reqBody.data
    }
    const mail = await this.mailerService.sendGridEMail(reqBody.to,TempID,reqObj)
    return {
      status:200,
      message:"success"
    };
  }
  async changePassword(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.changePasswordTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      `Password changed for ${businessData.companyName} Account`,
      htmlData,
    );
    return mail;
  }
  async changeTxnPassword(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.changeTxnPasswordTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async busInvoice(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.busInvoiceTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async feedbackAndComplaints(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.feedbackandCompliantsTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async flightSegment(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    // const htmlData = await this.ContactUsTemp.Template(
    //   businessData,
    //   reqBody.data,
    // );
   
    reqBody.data.originName = reqBody.data.originName.split(' ')[0]
    reqBody.data.destiantionName = reqBody.data.destiantionName.split(' ')[0]
   reqBody.data.flightSegments.forEach(flight =>{
     flight.departureDateTime = flight.departureDateTime.split('T')[1]
     flight.arrivalDateTime = flight.arrivalDateTime.split('T')[1]
   })
   console.log( reqBody.data)

    const TempID=process.env.FLIGHTSEGMENT_TEMP_ID
    const reqObj={
         header:{
          logoUrl:process.env.LOGO_URL
         },
         businessdetails:businessData,
         reqBody: reqBody.data
    }
  
    const mail = await this.mailerService.sendGridEMail(reqBody.to,TempID,reqObj)
    return {
      status:200,
      message:"success"
    };
  }
  async groupEnquiryRequest(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.groupEnquiryRequestTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async hotelInovice(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.hotelInoviceTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async hotelRoomBooking(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.hotelRoomBookingTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async paymentCancelMail(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.paymentCancelMailTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async AirTicket(reqBody: MailReq) {
    let bookingDate = reqBody.data.bookingDate
   
    const oneWayflightFare= reqBody.data.oneWayflightFare
    const returnflightFare=(reqBody.data.returnflightFare != undefined)?reqBody.data.returnflightFare:{ baseFare:0,tax:0,
      otherCharges: 0,
      totalFare: 0}
      const conviencefee=reqBody.data.convienenceData.type==0?((parseFloat(reqBody.data.convienenceData.amount)/100)*(oneWayflightFare.baseFare + returnflightFare.baseFare)):parseFloat(reqBody.data.convienenceData.amount)
    const Fare={
      baseFare:oneWayflightFare.baseFare + (returnflightFare.baseFare),
      tax: oneWayflightFare.tax + (returnflightFare.tax),
      otherCharges: oneWayflightFare.otherCharges + (returnflightFare.otherCharges),
      Discount:reqBody.data.promoData.Discount,
      ConveneienceFee: conviencefee.toFixed(2),
      totalFare: oneWayflightFare.totalFare + (returnflightFare.totalFare)+conviencefee,
    }
    // console.log(reqBody)
    const airticket = {
      id:reqBody.data.id,
      type:reqBody.data.type,
      bookingDate:reqBody.data.bookingDate,
      provider:reqBody.data.provider,
      tripType:reqBody.data.tripType,
      fareType:reqBody.data.fareType,
      pnr:reqBody.data.pnr,
     BookingStatus:reqBody.data.BookingStatus,
     pax:reqBody.data.pax,
     promoData:reqBody.data.promoData,
     convienenceData: reqBody.data.convienenceData,
     operatorName: reqBody.data.operatorName,
     description: reqBody.data.description,
     pickUpLocation: reqBody.data.pickUpLocation,
     dropLocation: reqBody.data.dropLocation,
     guestName: reqBody.data.guestName,
     guestemaiid: reqBody.data.guestemaiid,
     guestmobileno: reqBody.data.guestmobileno,
     promoid: reqBody.data.promoid,
     passengers: reqBody.data.passengers,
     Segment:[...reqBody.data.oneWaySegment,...reqBody.data.returnSegment],
     FlightFare:Fare
    }
    // console.log(airticket)
    const businessData = await this.getAllBusinessData();
    const TempID=process.env.AIRTICKET_TEMP_ID
    const reqObj={
         header:{
          logoUrl:process.env.LOGO_URL
         },
         businessdetails:businessData,
         reqBody: airticket
    }
  
    const mail = await this.mailerService.sendGridEMail(reqBody.to,TempID,reqObj)
    return {
      status:200,
      message:"success"
    };
  }
  async ticketingSystem(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.ticketingSystemtemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async userActivation(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.userActivationTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async ResheduleRequest(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.ResheduleRequestTemp.Template(
      businessData,
      reqBody.data,
    );
    // const mail = this.mailerService.sendEmail(
    //   reqBody.to,
    //   'Flight Ticket Reshedule Request ',
    //   htmlData,
    // );
    // return mail;
    const TempID=process.env.RESHEDULE_TEMP_ID
    const reqObj={
         header:{
          logoUrl:process.env.LOGO_URL
         },
         businessdetails:businessData,
         reqBody: reqBody.data
    }
    const mail = await this.mailerService.sendGridEMail(reqBody.to,TempID,reqObj)
    return {
      status:200,
      message:"success"
    };
  }
  async contactUs(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.ContactUsTemp.Template(
      businessData,
      reqBody.data,
    );
    // const mail = this.mailerService.sendEmail(
    //   reqBody.to,
    //   'Customer Enquiry Details',
    //   htmlData,
    // );
    const TempID=process.env.CONTACTUS_TEMP_ID
    const reqObj={
         header:{
          logoUrl:process.env.LOGO_URL
         },
         businessdetails:businessData,
         reqBody: reqBody.data
    }
    const mail = await this.mailerService.sendGridEMail(reqBody.to,TempID,reqObj)
    return {
      status:200,
      message:"success"
    };
  }

  async flightEnquiry(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.flightEnquiryTemp.Template(
      businessData,
      reqBody.data,
    );
    // const mail = this.mailerService.sendEmail(
    //   reqBody.to,
    //   `New Flight Enquiry on ${businessData.companyName}`,
    //   htmlData,
    // );
    // return mail;
    let TempID=""
    let Trip= reqBody.data.TripType == "false" ? 'One Way' : 'Return';
    if(Trip =="One Way"){
   
      TempID=process.env.FLIGHTENQUIRY_TEMP_ID
    }
   else{
      TempID=process.env.RETURNFLIGHTENQUIRY_TEMP_ID
     }
    const reqObj={
         header:{
          logoUrl:process.env.LOGO_URL
         },
         businessdetails:businessData,
         reqBody: {...reqBody.data,TripTypeName:Trip}
    }
    const mail = await this.mailerService.sendGridEMail(reqBody.to,TempID,reqObj)
    return {
      status:200,
      message:"success"
    };
  }
  async flightDetails(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.FlightDetailsTemp.Template(
      businessData,
      reqBody.data,
    );
    // const mail = this.mailerService.sendEmail(
    //   reqBody.to,
    //   reqBody.subject,
    //   htmlData,
    //   reqBody.cc,
    //   reqBody.bcc,
    // );
    // return mail;
    const TempID=process.env.FLIGHTDETAILS_TEMP_ID
    const reqObj={
         header:{
          logoUrl:process.env.LOGO_URL
         },
         businessdetails:businessData,
         reqBody: reqBody.data
    }
    const mail = await this.mailerService.sendGridEMail(reqBody.to,TempID,reqObj)
    return {
      status:200,
      message:"success"
    };
  }
  async ticketBlocking(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.ticketBlockingTemp.Template(
      businessData,
      reqBody.data,
    );
    // const mail = this.mailerService.sendEmail(
    //   reqBody.to,
    //   'Your Ticket is Blocked , Pending For Confirmation',
    //   htmlData,
    // );
    // return mail;
    const TempID=process.env.BLOCKING_TEMP_ID
    const adminEmail= process.env.ADMIN_EMAIL
    const reqObj={
         header:{
          logoUrl:process.env.LOGO_URL
         },
         businessdetails:businessData,
         reqBody: reqBody.data
    }
    const mail = await this.mailerService.sendGridEMail(adminEmail,TempID,reqObj)
    return {
      status:200,
      message:"success"
    };
  }
  async ticketRefund(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.ticketRefundTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      reqBody.subject,
      htmlData,
      reqBody.cc,
      reqBody.bcc,
    );
    return mail;
  }
  async flightItinerary(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.flightItineraryTemp.Template(
      businessData,
      reqBody.data,
    );
    const mail = this.mailerService.sendEmail(
      reqBody.to,
      'Recived a Flight Ticket Details',
      htmlData,
    );
    return mail;
  }
  async ticketBooking(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.TicketBookingTemp.Template(
      businessData,
      reqBody.data,
    );
    // const mail = this.mailerService.sendEmail(
    //   reqBody.to,
    //   'Your Ticket is Booked Successfully',
    //   htmlData,
    // );
    // return mail;
    const TempID=process.env.BOOKING_TEMP_ID
    const reqObj={
         header:{
          logoUrl:process.env.LOGO_URL
         },
         businessdetails:businessData,
         reqBody: reqBody.data
    }
    const mail = await this.mailerService.sendGridEMail(reqBody.to,TempID,reqObj)
    return {
      status:200,
      message:"success"
    };
  }

  async CombinedticketBooking(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const htmlData = await this.TicketBookingTemp.Template(
      businessData,
      reqBody.data,
    );
    // const mail = this.mailerService.sendEmail(
    //   reqBody.to,
    //   'Your Ticket is Booked Successfully',
    //   htmlData,
    // );
    // return mail;
    const TempID=process.env.COMBINEDBOOKING_TEMP_ID
    const reqObj={
         header:{
          logoUrl:process.env.LOGO_URL
         },
         businessdetails:businessData,
         reqBody: reqBody.data
    }
    const mail = await this.mailerService.sendGridEMail(reqBody.to,TempID,reqObj)
    return {
      status:200,
      message:"success"
    };
  }
  async busBooking(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    // const htmlData = await this.ContactUsTemp.Template(
    //   businessData,
    //   reqBody.data,
    // );
        
    const TempID=process.env.BUSBOOKING_TEMP_ID
    const reqObj={
         header:{
          logoUrl:process.env.LOGO_URL
         },
         businessdetails:businessData,
         reqBody: reqBody.data
    }
    const mail = await this.mailerService.sendGridEMail(reqBody.to,TempID,reqObj)
    return {
      status:200,
      message:"success"
    };
  }
  async busBookingFailed(reqBody: MailReq){
    const businessData = await this.getAllBusinessData();
   
    const TempID=process.env.BUSBOOKING_TEMP_ID
    const reqObj={
         header:{
          logoUrl:process.env.LOGO_URL
         },
         businessdetails:businessData,
         reqBody: reqBody.data
    }
    const mail = await this.mailerService.sendGridEMail(reqBody.to,TempID,reqObj)
    return {
      status:200,
      message:"success"
    };
  }
  async AirBookingFailed(reqBody: MailReq){
    const businessData = await this.getAllBusinessData();
   
    const TempID=process.env.BUSBOOKING_TEMP_ID
    const reqObj={
         header:{
          logoUrl:process.env.LOGO_URL
         },
         businessdetails:businessData,
         reqBody: reqBody.data
    }
    const mail = await this.mailerService.sendGridEMail(reqBody.to,TempID,reqObj)
    return {
      status:200,
      message:"success"
    };
  }
  async subscribe(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const TempID=process.env.SUBSCRIBE_TEMP_ID
    const reqObj={
         header:{
          logoUrl:process.env.LOGO_URL
         },
         businessdetails:businessData,
         reqBody: reqBody.data
    }
    const mail = await this.mailerService.sendGridEMail(reqBody.data.Email,TempID,reqObj)
    return {
      status:200,
      message:"success"
    };
  }

  async AirCanCelRequest(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const TempID=process.env.AIRCANCELREQUEST_TEMP_ID
    const reqObj={
         header:{
          logoUrl:process.env.LOGO_URL
         },
         businessdetails:businessData,
         reqBody: reqBody.data
    }
    const mail = await this.mailerService.sendGridEMail(reqBody.data.Email,TempID,reqObj)
    return {
      status:200,
      message:"success"
    };
  }

  async AirRefundCancellation(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const TempID=process.env.AIRREFUNDCANCELLATION_TEMP_ID
    const reqObj={
         header:{
          logoUrl:process.env.LOGO_URL
         },
         businessdetails:businessData,
         reqBody: reqBody.data
    }
    const mail = await this.mailerService.sendGridEMail(reqBody.data.Email,TempID,reqObj)
    return {
      status:200,
      message:"success"
    };
  }

  async AirRefundedTicket(reqBody: MailReq) {
    const businessData = await this.getAllBusinessData();
    const TempID=process.env.AIRREFUNDEDTICKET_TEMP_ID
    const reqObj={
         header:{
          logoUrl:process.env.LOGO_URL
         },
         businessdetails:businessData,
         reqBody: reqBody.data
    }
    const mail = await this.mailerService.sendGridEMail(reqBody.data.Email,TempID,reqObj)
    return {
      status:200,
      message:"success"
    };
  }
}
