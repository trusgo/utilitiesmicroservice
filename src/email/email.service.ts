import { Injectable, HttpStatus } from '@nestjs/common'
import  { AirTicket } from './Templates/AirTicket'

@Injectable()
export class EmailService {
  constructor(private readonly airTicket: AirTicket){}
  

  async sendMail(keyword: string): Promise<any> {
    try {
      const result = this.airTicket.Template();
      return result
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
        data: []
      }
    }
  } 

 

}
