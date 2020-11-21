import { Injectable, HttpStatus } from '@nestjs/common'
import  { AirTicket } from './Templates/AirTicket'

@Injectable()
export class EmailService {
  constructor(private readonly airTicket: AirTicket){}
  

  async flightTicket(keyword: string): Promise<any> {
  
      const result = this.airTicket.Template();
      return result
    
    }
  } 

 


