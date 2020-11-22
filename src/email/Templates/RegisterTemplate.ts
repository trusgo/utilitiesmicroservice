
import { Injectable } from '@nestjs/common'

@Injectable()
export class RegisterTemplate{
 Template (data) {
  return   `
        <h1>Dear User</h1>
       <br/><br/>Thank you for successfully registering with us.<br/><br/> <b> ${ data.domain }</b>  welcomes you to a world of customized travel booking services.<br/><br/>We understand your requirements, therefore we offer you a host of exclusive products and services to make your product simpler and convenient.Now enjoy the <b><services></b> services & excellent features online.<br/><br/>Your New Account login Information.Please find your details below:<br/><br/>Login url: <b>${data.loginUrl}</b><br/>Email: <b>${data.email}</b><br/>Password: <b>${data.password}</b><br/>Mobile: <b>${data.contactNumber}</b><br/><br/>If you have any query, please reach out to us at <b><supportmailid></b> with feedback and suggestions to improve our service.<br/><br/><b>Warm Regards,</b><br/><b><domain> Team.</b><br/>
  Address: Foo Villa, Bar City, Fizz,<br/>Contact Number: 1234567890,<br/>Email id: test@test.t<br/><br/>
  This is a system generated email. Please do not reply to this email. 
    `;
};
}
