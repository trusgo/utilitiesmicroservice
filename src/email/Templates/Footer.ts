import { Injectable } from '@nestjs/common';

@Injectable()
export class footer{
  Template = () => {
  
    return `
    <br/>If you have any query, please reach out to us at <b><supportmailid></b> with feedback and suggestions to improve our service.<br/><br/><b>Warm Regards,</b><br/><b><domain> Team i2Space.</b><br/>
    Address: Foo Villa, Bar City, Fizz,<br/>Contact Number: 1234567890,<br/>Email id: test@test.t<br/><br/>
    This is a system generated email. Please do not reply to this email. 
    `;
  };
}