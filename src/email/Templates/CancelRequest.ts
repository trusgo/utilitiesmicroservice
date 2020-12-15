import { Injectable } from '@nestjs/common';
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class CancelRequest {
  constructor(private header: header, private footer: footer) {}
  Template = (businessData, data) => {
    const { referenceNo, FirstName, LastName } = data;
    return `
    <div>
    ${this.header.Template(businessData)}
    <b>Dear ${FirstName}${LastName},</b><br/><br/>Please cancel the ticket for Reference Number: <b>${referenceNo}</b>.
    ${this.footer.Template(businessData)})}
`;
  };
}
