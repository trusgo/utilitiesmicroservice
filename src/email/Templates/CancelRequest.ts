import { Injectable } from "@nestjs/common";


@Injectable()
export class CancelRequest {
  Template = (data) => {
    const { refno, FirstName, LastName, address,Email,Mobile } = data;
    return `
    <div>
    <img style="width:80px; height: 80px position: absolute" alt="qtrip logo" src="https://lh3.googleusercontent.com/gctSEqudBf9HVKxAdmmS3Dtacy8H5QG-m80szVfvdeDaYE8Y0X3H4jyWLF8eq0E5xZV5=s128"/><br/>
    <b>Dear ${FirstName}${LastName},</b><br/><br/>Please cancel the ticket for Reference Number: <b>${refno}</b>.<br/><br/>If you have any queries, please reach out to us at <b><supportmailid></b><br/><br/>It is recommended that you print, then destroy this email afterwards for added security. <br/><br/><b>With Regards,</b> <br/><b><domain> Team.</b><br/>
    Address:Foo Villa, Bar City, Fizz,<br/>Contact Number: 1234567890,<br/>Email id: test@test.t<br/><br/>
    This is a system generated email. Please do not reply to this email. </div>
` ;
  };
}
