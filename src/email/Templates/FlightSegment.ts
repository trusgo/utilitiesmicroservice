import { Injectable } from '@nestjs/common';
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class flightSegmentTemplate {
  constructor(private header: header, private footer: footer) {}
  Template = (businessData, data) => {
    const { Email, FirstName, LastName, Mobile, flightDetails } = data;
    return `
    <div>
    ${this.header.Template(businessData)}
    <b>Dear ${FirstName} ${LastName},</b> Thank you for connecting  <b>i2Space</b> <br/>
${this.footer.Template(businessData)}
</div>
`;
  };
}
