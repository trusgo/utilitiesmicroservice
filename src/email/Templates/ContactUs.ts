import { Injectable } from '@nestjs/common';
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class ContactUsTemplete {
  constructor( private header:header, private footer:footer){}
  Template =async (data) => {

    const { Category, MessageTopic ,Email, FirstName, LastName, Mobile,OrderNo,DepatureDate,Message} = data;
    return `
     ${this.header.Template()}
    <div>
    <b>Dear ${FirstName} ${LastName},</b>
    <br/><br/>Thank you for Contacting <b>i2Space</b>.<br/><br/> we have received your query on <b> ${Category}</b> for <b>${MessageTopic}</b> .<br/>We understand your requirements, therefore we will Get Back to you shortly with Updated<br/><br/>
    <b>FirstName :</b>  ${FirstName}<br/><b>LastName :</b>  ${LastName}<br/><b>Mobile :</b>  ${Mobile}<br/><b>Email :</b>  ${Email}<br/><b>Order Number:</b>  ${OrderNo}<br/><b>Depature Date:</b>  ${DepatureDate}<br/><b>Message:</b>  ${Message}
    </div>
    ${await this.footer.Template().then((res)=>{
      return res
    })}
    `;
  };
}
