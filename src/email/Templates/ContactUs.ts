import { Injectable } from '@nestjs/common';
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class ContactUsTemplete {
  constructor( private header:header, private footer:footer){}
  Template = (data) => {

    const { Email, FirstName, LastName, Mobile,Category, MessageTopic } = data;
    return `
     ${this.header.Template()}
    <div>
    <img style="width:80px; height: 80px position: absolute" alt="qtrip logo" src="https://lh3.googleusercontent.com/gctSEqudBf9HVKxAdmmS3Dtacy8H5QG-m80szVfvdeDaYE8Y0X3H4jyWLF8eq0E5xZV5=s128"/><br/>
    <h1>Dear ${FirstName} ${LastName}</h1>
    <br/><br/>Thank you for Contacting  us.<br/><br/> <b>i2Space</b>  we have received your query on ${Category} for ${MessageTopic} .<br/><br/>We understand your requirements, therefore we will Get Back to you shortly with Updated
    <br/><br/>If you have any query, please reach out to us at <b><supportmailid></b> with feedback and suggestions to improve our service.<br/><br/><b>Warm Regards,</b><br/><b><domain> Team.</b><br/>
    Address: Foo Villa, Bar City, Fizz,<br/>Contact Number: 1234567890,<br/>Email id: test@test.t<br/><br/>
    This is a system generated email. Please do not reply to this email. </div>
    ${this.footer.Template()}
    `;
  };
}
