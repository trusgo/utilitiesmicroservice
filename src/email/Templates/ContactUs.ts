import { Injectable } from '@nestjs/common';
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class ContactUsTemplete {
  constructor( private header:header, private footer:footer){}
  Template = (data) => {

    const { Category, MessageTopic ,Email, FirstName, LastName, Mobile,OrderNo,DepatureDate,Message} = data;
    return `
     ${this.header.Template()}
    <div>
    <h1>Dear ${FirstName} ${LastName}</h1>
    <br/>Thank you for Contacting  us.<br/><br/> <b>i2Space</b>  we have received your query on <b> ${Category}</b> for <b>${MessageTopic}</b> .<br/>We understand your requirements, therefore we will Get Back to you shortly with Updated<br/><br/>
    <b>FirstName :</b>  ${FirstName}<br/><b>LastName :</b>  ${LastName}<br/><b>Mobile :</b>  ${Mobile}<br/><b>Email :</b>  ${Email}<br/><b>Order Number:</b>  ${OrderNo}<br/><b>Depature Date:</b>  ${DepatureDate}<br/><b>Message:</b>  ${Message}
    </div>
    ${this.footer.Template()}
    `;
  };
}
