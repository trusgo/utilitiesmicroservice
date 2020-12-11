import { Injectable } from '@nestjs/common';
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class ForgetPassword {
  constructor(private header: header, private footer: footer) {}
  Template = (businessData, reqData) => {
    const { FirstName, LastName, loginurl } = reqData;
    return `<div>
  ${this.header.Template(businessData)}
    <b>Dear ${FirstName} ${LastName},</b><br/><br/>We have found  forgot password Request for your accoount on Our  system if this was not you please change your Password .<br/><br/>Login Url : <b> <a href='${
      businessData.baseUrl
    }'>Click here</a></b> <br/>Dated: <b> ${new Date()}</b> <br/>
    ${this.footer.Template(businessData)}
    </div>
    `;
  };
}
