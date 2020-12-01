
import { Injectable } from '@nestjs/common'
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class ForgetPassword{
  constructor( private header:header, private footer:footer){}
 Template (data) {
  const { Email, FirstName, LastName,Moile,Password ,role} = data;
  return`<div>
  ${this.header.Template()}
    <b>Dear ${FirstName} ${LastName}(${role}),</b><br/><br/>Please find your forgot password information.<br/><br/>Login Url : <b><loginurl></b> <br/>Email Id: <b> ${Email}</b> <br/>Password: <b> ${Password}</b> 
      ${this.footer.Template()}
    </div>
    ` ;
};
}
