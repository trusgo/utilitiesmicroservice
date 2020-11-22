
import { Injectable } from '@nestjs/common'

@Injectable()
export class ForgetPassword{
 Template (data) {
  return`<div>
    <b>Dear <name>(<role>),</b><br/><br/>Please find your forgot password information.<br/><br/>Login Url : <b><loginurl></b> <br/>Email Id: <b><emailid></b> <br/>Password: <b><password></b> <br/><br/>If you have any queries, about <account> account, please email us at <b><supportmailid></b>.<br/><br/>It is recommended that you print, then destroy this email afterwards for added security.<br/><br/><b>With Regards,</b><br/><b><domain> Team</b>.<br/>
    Address: <address>,<br/>Contact Number: <contactnumber>,<br/>Email id: <email><br/><br/>
    This is a system generated email. Please do not reply to this email.
    </div>
    ` ;
};
}
