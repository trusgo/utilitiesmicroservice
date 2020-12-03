import { Injectable } from "@nestjs/common";
import { footer } from "./Footer";
import { header } from "./Header";

@Injectable()
export class changeTxnPasswordTemplate {
  constructor( private header:header, private footer:footer){}
  Template = async (data) => {
    const { FirstName, LastName,Email,Mobile,loginurl,password ,role} = data;
    return `
    <div>
    ${this.header.Template()}
    <b>Dear  ${FirstName} ${LastName}(${role}),</b><br/><br/>Your Transaction password has been successfully changed.<br/>URL: <b>${loginurl}</b>/b><br/>Email id: <b> ${Email}</b><br/>Password: <b>  ${password}</b>
    ${await this.footer.Template().then((res)=>{
     
      return res
    })}
    </div>
` ;
  };
}
