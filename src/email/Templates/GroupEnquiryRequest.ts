import { Injectable } from "@nestjs/common";
import { footer } from "./Footer";
import { header } from "./Header";

@Injectable()
export class groupEnquiryRequestTemplate {
  constructor( private header:header, private footer:footer){}
  Template =async (data) => {
    const { FirstName, LastName, passengerscount,Email,Mobile,password,returndate,destination,source,service,triptype,departdate } = data;
    return `
    <div>
    ${this.header.Template()}
    <b>Dear ${FirstName}${LastName},</b><br/><br/>Thank you for successful submitting of group enquiry.<br/><br/> <b><domain></b> welcomes you to a world of customized travel booking services.<br/><br/>We understand your requirements, therefore we offer you a host of exclusive products and services to make your product simpler and convenient.<br/>Now enjoy the <services> services & excellent features online.<br/><br/>Your Group Enquiry Information. Please find your details below.<br/>Email: <b> ${Email}</b><br/>Contact Number: <b>${Mobile}</b><br/>Number Of Passengers: <b>${passengerscount}</b><br/>Source: <b>${source}</b><br/>Destination: <b>${destination}</b><br/>Departure Date: <b>${departdate}</b><br/>Return Date: <b>${returndate}</b><br/>Trip Type: <b>${triptype}</b><br/>Service: <b>${service}</b><br/><br/> We want to make your service experience better.
    ${await this.footer.Template().then((res)=>{
     
      return res
    })}
    </div>
` ;
  };
}
