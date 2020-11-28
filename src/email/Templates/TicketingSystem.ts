import { Injectable } from "@nestjs/common";

@Injectable()
export class ticketingSystemtemplate {
  Template = (data) => {
    const { FirstName, LastName, address,Email,Mobile,password } = data;
    return `
    <div>
    <img style="width:80px; height: 80px position: absolute" alt="qtrip logo" src="https://lh3.googleusercontent.com/gctSEqudBf9HVKxAdmmS3Dtacy8H5QG-m80szVfvdeDaYE8Y0X3H4jyWLF8eq0E5xZV5=s128"/><br/>
    <b>Dear  <uname></b>,<br /><br />This is to inform you that, The Ticket has been <b><status></b>,<br /><br />Please include your Ticket RefNo - #<b><id></b> in the subject line of all future correspondence regarding this issue.<br /><br /> Issue Details: <br /> Service Type: <b><service></b> <br />  Api Provider: <b><apiprovider></b>  <br /> Issue Type: <b><issuetype></b> <br /> Issue Location: <b><issuelocname></b><br /> Priority: <b><ispriority></b> <br /><br /> Remarks: <b><issuedeatils></b> <br /> Issue Status: <b><status></b> <br /> Please revert if you have any queries.  <br /><br /><b>Sincerely,</b><br /> <b>Support Team. </b> 
    <br/><br/><b>Warm Regards,</b><br/><b><domain> Team.</b><br/>
  Address: Foo Villa, Bar City, Fizz,<br/>Contact Number: 1234567890,<br/>Email id: test@test.t<br/><br/>
  This is a system generated email. Please do not reply to this email. 
  </div>
` ;
  };
}
