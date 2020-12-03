import { Injectable } from "@nestjs/common";
import { footer } from "./Footer";
import { header } from "./Header";

@Injectable()
export class userActivationTemplate {
  constructor( private header:header, private footer:footer){}
  Template = async (data) => {
    const { FirstName, LastName,Email,Mobile} = data;
    return `
    <div>
    ${this.header.Template()}
    <b>Dear ${FirstName} ${LastName},</b><br/><br/><b><i2Space></b> welcomes you to a world of customized travel booking services.<br/><br/>We understand your requirements, therefore we offer you a host of exclusive products and services to make your product simpler and convenient.<br/>Now enjoy the <services> services & excellent features online.<br/><br/>Your Account Information. Please find your details below.<br/>Email: <b>${Email}</b><br/><br/> Activation url: <b><loginurl></b><br/><br/>We want to make your service experience better.  
    ${await this.footer.Template().then((res)=>{
     
      return res
    })}
    </div>
` ;
  };
}
