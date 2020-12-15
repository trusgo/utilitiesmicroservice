import { Injectable } from '@nestjs/common';
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class changePasswordTemplate {
  constructor(private header: header, private footer: footer) {}
  Template = (businessData, data) => {
    const { FirstName, LastName, Email, loginurl, Password } = data;
    return `
    <div>
    ${this.header.Template(businessData)}
    <b>Dear ${FirstName}${LastName} ,</b><br/><br/>Your password has been successfully changed.<br/><br/>Kindly note your new login details.<br/><br/>URL: <b>${
      businessData.baseUrl
    }</b><br/>Email id: <b> ${Email}</b><br/>Password: <b>  ${Password}</b>
    ${this.footer.Template(businessData)}
     </div>
`;
  };
}
