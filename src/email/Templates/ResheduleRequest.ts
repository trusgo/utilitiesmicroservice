import { Injectable } from '@nestjs/common';
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class ResheduleRequestTemplete {
  constructor( private header:header, private footer:footer){}
  Template = (data) => {
    
    const { Email, FirstName, LastName, Mobile,Date,Time,Flight } = data;
   
    return `
    <div>
     ${this.header.Template()}
        <h1>Dear ${FirstName} ${LastName}</h1>
       <br/>We have Received Your ResheduleRequest for the Fligt no: <b>${Flight}</b>.<br/>Please Find out Your Reshedule Date and Time below<br/><br> <b>Date :</b>  ${Date}<br/><b>Time :</b>  ${Time}
        ${this.footer.Template()} 
  </div>
    `;
  };
}
