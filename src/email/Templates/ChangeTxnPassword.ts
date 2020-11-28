import { Injectable } from "@nestjs/common";
import { footer } from "./Footer";
import { header } from "./Header";

@Injectable()
export class changeTxnPasswordTemplate {
  constructor( private header:header, private footer:footer){}
  Template = (data) => {
    const { FirstName, LastName,Email,Mobile,password } = data;
    return `
    <div>
    ${this.header.Template()}
    <b>Dear  ${FirstName} ${LastName}(<role>)</b>,<br/><br/>Your Transaction password has been successfully changed.<br/>URL: <b><loginurl></b>/b><br/>Email id: <b> ${Email}</b><br/>Password: <b>  ${password}</b>
      ${this.footer.Template()}</div>
` ;
  };
}
