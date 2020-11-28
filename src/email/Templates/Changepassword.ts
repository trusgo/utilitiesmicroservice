import { Injectable } from "@nestjs/common";

@Injectable()
export class changePasswordTemplate {
  Template = (data) => {
    const { FirstName, LastName, address,Email,Mobile,password } = data;
    return `
    <div>
    <img style="width:80px; height: 80px position: absolute" alt="qtrip logo" src="https://lh3.googleusercontent.com/gctSEqudBf9HVKxAdmmS3Dtacy8H5QG-m80szVfvdeDaYE8Y0X3H4jyWLF8eq0E5xZV5=s128"/><br/>
    <b>Dear <name> (<role>),</b><br/><br/>Your password has been successfully changed.<br/><br/>Kindly note your new login details.<br/><br/>URL: <b><loginurl></b><br/>Email id: <b><email></b><br/>Password: <b><password></b> <br/><br/>If you have any queries, please reach out to us at <b><supportmailid></b><br/><br/><b>With Regards,</b><br/><b><domain> Team.</b><br/>
    Address: <address>,<br/>Contact Number: <contactnumber>,<br/>Email id: <emailid><br/><br/>
    This is a system generated email. Please do not reply to this email. </div>
` ;
  };
}
