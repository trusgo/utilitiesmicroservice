import { Injectable } from '@nestjs/common';

@Injectable()
export class ResheduleRequestTemplete {
  Template = (data) => {
    
    const { Email, FirstName, LastName, Mobile } = data;
   
    return `
    <div>
    <img style="width:80px; height: 80px position: absolute" alt="qtrip logo" src="https://lh3.googleusercontent.com/gctSEqudBf9HVKxAdmmS3Dtacy8H5QG-m80szVfvdeDaYE8Y0X3H4jyWLF8eq0E5xZV5=s128"/><br/>
        <h1>Dear ${FirstName} ${LastName}</h1>
       <br/><br/>We have Received Your ResheduleRequest for the Fligt no:<xyz>.<br/>Please Find out Your Reshedule Date and Time below<br/><br> <b>Date:11-11-2020</b><br/><b>Time:7:23pm</b><br/><br/>If you have any query, please reach out to us at <b><supportmailid></b> with feedback and suggestions to improve our service.<br/><br/><b>Warm Regards,</b><br/><b><domain> Team.</b><br/><br/><b>Warm Regards,</b><br/><b><domain> Team.</b><br/>
  Address: Foo Villa, Bar City, Fizz,<br/>Contact Number: 1234567890,<br/>Email id: test@test.t<br/><br/>
  This is a system generated email. Please do not reply to this email. 
  </div>
    `;
  };
}
