
import { Injectable } from '@nestjs/common'
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class ForgetPassword{
  constructor( private header:header, private footer:footer){}
 Template = async (data)=> {
  const { Email, FirstName, LastName,Mobile,loginurl,Password ,role} = data;
  return`<div>
  ${this.header.Template()}
    <b>Dear ${FirstName} ${LastName}(${role}),</b><br/><br/>Please find your forgot password information.<br/><br/>Login Url : <b>${loginurl}</b> <br/>Email Id: <b> ${Email}</b> <br/>Password: <b> ${Password}</b> 
    ${await this.footer.Template().then((res)=>{
     
      return res
    })}
    </div>
    ` ;
};
}
