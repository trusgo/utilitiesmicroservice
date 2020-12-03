import { Injectable } from '@nestjs/common';
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class ticketRefundTemplate {
  constructor( private header:header, private footer:footer){}
  Template = async (data) => {
    
    const { Email, FirstName, LastName, TripType,Source,Destination,Class,DepatureDate, FlightNo,role} = data;
   let tripType = (TripType == 1)? "One Way": "Return"
    return `
    ${this.header.Template()}
    <div>
    <b>Dear ${FirstName} ${LastName}(${role}),</b>
    <br/><br/>we have received the ticketRefund request from you for the Flight Number : <b>${FlightNo}</b> .Therefore we undrsatnd your cause , hence we will refund the Amount after checking our Policy.
    </div>
    ${await this.footer.Template().then((res)=>{
      
      return res
    })}
    `;
  };
}
