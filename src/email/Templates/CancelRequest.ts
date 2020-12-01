import { Injectable } from "@nestjs/common";
import { footer } from "./Footer";
import { header } from "./Header";


@Injectable()
export class CancelRequest {
  constructor( private header:header, private footer:footer){}
  Template = (data) => {
    const { referenceNo, FirstName, LastName} = data;
    return `
    <div>
    ${this.header.Template()}
    <b>Dear ${FirstName}${LastName},</b><br/><br/>Please cancel the ticket for Reference Number: <b>${referenceNo}</b>.
    ${this.footer.Template()}
` ;
  };
}
