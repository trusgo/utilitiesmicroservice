import { Injectable } from "@nestjs/common";
import { footer } from "./Footer";
import { header } from "./Header";

@Injectable()
export class flightSegmentTemplate {
    constructor( private header:header, private footer:footer){}
  Template = async (data) => {
    const { Email, FirstName, LastName, Mobile,flightDetails} = data;
    return `
    <div>
    ${this.header.Template()}
    <b>Dear ${FirstName} ${LastName},</b> Thank you for connecting  <b>i2Space</b> <br/>
${await this.footer.Template().then((res)=>{
    return res
  })}
</div>
` ;
  };
}
