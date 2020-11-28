
import { Injectable } from '@nestjs/common'

@Injectable()
export class ForgetPassword{
 Template (data) {
  const { Email, FirstName, LastName, Mobile } = data;
  return`<div>
  <img style="width:80px; height: 80px position: absolute" alt="qtrip logo" src="https://lh3.googleusercontent.com/gctSEqudBf9HVKxAdmmS3Dtacy8H5QG-m80szVfvdeDaYE8Y0X3H4jyWLF8eq0E5xZV5=s128"/><br/>
    <b>Dear ${FirstName} ${LastName}(<role>),</b><br/><br/>Please find your forgot password information.<br/><br/>Login Url : <b><loginurl></b> <br/>Email Id: <b><emailid></b> <br/>Password: <b><password></b> <br/><br/>If you have any queries, about <account> account, please email us at <b><supportmailid></b>.<br/><br/>It is recommended that you print, then destroy this email afterwards for added security.<br/><br/><b>With Regards,</b><br/><b><domain> Team</b>.<br/>
    Address: Foo Villa, Bar City, Fizz,,<br/>>Contact Number: 1234567890,<br/>Email id: <email><br/><br/>
    This is a system generated email. Please do not reply to this email.
    </div>
    ` ;
};
}
