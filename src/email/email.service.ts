import { Injectable, HttpStatus } from '@nestjs/common'
import  { AirTicket } from './Templates/AirTicket'
import { BusTicket } from './Templates/BusTicket';
import { ForgetPassword } from './Templates/ForgotPassword';
import  { HotelTicket } from './Templates/HotelTicket'
import { PaymentInvoice } from './Templates/Inovice';
import { RegisterTemplate } from './Templates/RegisterTemplate';

@Injectable()
export class EmailService {
  constructor(private readonly airTicket: AirTicket ,
              private readonly hotelTickets: HotelTicket,
              private readonly busTickets: BusTicket,
              private readonly forgetPasswordTem: ForgetPassword,
              private readonly registerTem: RegisterTemplate,
              private readonly paymentInvoiceTem: PaymentInvoice){}
  

  async flightTicket(keyword: string): Promise<any> { 
      const result = this.airTicket.Template();
      return result
    }

    async hotelTicket(keyword: string): Promise<any> {
      const result = this.hotelTickets.Template();
      return result
    }
    async busTicket(keyword: string): Promise<any> {
      const result = this.busTickets.Template();
      return result
    }
    async forgetPassword(keyword: string): Promise<any> {
      const result = this.forgetPasswordTem.Template();
      return result
    }
    async registration(keyword: string): Promise<any> {
      const result = this.registerTem.Template();
      return result
    }
    async paymentInvoice(keyword: string): Promise<any> {
      const result = this.paymentInvoiceTem.Template();
      return result
    }
  } 

 


