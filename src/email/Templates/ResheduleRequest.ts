import { Injectable } from '@nestjs/common';
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class ResheduleRequestTemplete {
  constructor( private header:header, private footer:footer){}
  Template = async (data) => {
    
    const { Email, FirstName, LastName, Mobile,Date,Time,Flight } = data;
   
    return `
    <div>
     ${this.header.Template()}
        <b>Dear ${FirstName} ${LastName}</b>
       <br/><br/>We have Received Your ResheduleRequest for the Fligt no: <b>${Flight}</b>.<br/>Please Find out Your Reshedule Date and Time below<br/><br> <b>Date :</b>  ${Date}<br/><b>Time :</b>  ${Time}
       ${await this.footer.Template().then((res)=>{
      
        return res
      })}
  </div>
    `;
  };
}
