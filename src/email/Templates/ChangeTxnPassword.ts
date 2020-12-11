import { Injectable } from '@nestjs/common';
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class changeTxnPasswordTemplate {
  constructor(private header: header, private footer: footer) {}
  Template = (businessData, data) => {
    const {
      FirstName,
      LastName,
      Email,
      Mobile,
      loginurl,
      password,
      role,
    } = data;
    return `
    <div>
    ${this.header.Template(businessData)}
    <b>Dear  ${FirstName} ${LastName}(${role}),</b><br/><br/>Your Transaction password has been successfully changed.<br/>URL: <b>${loginurl}</b>/b><br/>Email id: <b> ${Email}</b><br/>Password: <b>  ${password}</b>
    ${this.footer.Template(businessData)}
    </div>
`;
  };
}
