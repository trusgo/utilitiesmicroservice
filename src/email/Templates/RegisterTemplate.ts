import { Injectable } from '@nestjs/common';
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class RegisterTemplate {
  constructor( private header:header, private footer:footer){}
  Template = (data) => {
    
    const { Email, FirstName, LastName, Mobile } = data;
   
    return `
   <div>
   ${this.header.Template()}
        <h1>Dear ${FirstName} ${LastName}</h1>
       <br/>Thank you for successfully registering with us.<br/><br/> <b>i2Space</b>  welcomes you to a world of customized travel booking services.<br/><br/>We understand your requirements, therefore we offer you a host of exclusive products and services to make your product simpler and convenient.Now enjoy the <b><services></b> services & excellent features online.<br/><br/>Your New Account login Information.Please find your details below:<br/><br/>Login url: <a href="http://travel2.i2space.in/" target="_blank"><b>http://travel2.i2space.in/</b></a><br/>Email: <b>${Email}</b><br/>Mobile: <b>${Mobile}</b>
         ${this.footer.Template()}
         </div>
    `;
  };
}
