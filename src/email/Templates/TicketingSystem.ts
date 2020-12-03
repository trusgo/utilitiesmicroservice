import { Injectable } from "@nestjs/common";
import { footer } from "./Footer";
import { header } from "./Header";

@Injectable()
export class ticketingSystemtemplate {
  constructor( private header:header, private footer:footer){}
  Template = async (data) => {
    const { FirstName, LastName, address,Email,Mobile,password,status,service,issuelocname,ispriority,issuedeatils } = data;
    return `
    <div>
    ${this.header.Template()}
    <b>Dear  ${FirstName} ${LastName}</b>,<br/><br />This is to inform you that, The Ticket has been <b>${status}</b>,<br /><br />Please include your Ticket RefNo - #<b><id></b> in the subject line of all future correspondence regarding this issue.<br /><br /> Issue Details: <br /> Service Type: <b>${service}</b> <br />  Api Provider: <b><apiprovider></b>  <br /> Issue Type: <b><issuetype></b> <br /> Issue Location: <b>${issuelocname}</b><br /> Priority: <b>${ispriority}</b> <br /><br /> Remarks: <b>${issuedeatils}</b> <br /> Issue Status: <b>${status}</b>
    ${await this.footer.Template().then((res)=>{
      
      return res
    })}
  </div>
` ;
  };
}
