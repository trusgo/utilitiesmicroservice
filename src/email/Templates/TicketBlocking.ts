import { Injectable } from '@nestjs/common';
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class ticketBlockingTemplate {
  constructor(private header: header, private footer: footer) {}
  Template = (businessData, data) => {
    const {
      Email,
      FirstName,
      LastName,
      TripType,
      Source,
      Destination,
      Class,
      DepatureDate,
      FlightNo,
      role,
    } = data;
    let tripType = TripType == 1 ? 'One Way' : 'Return';
    return `
    ${this.header.Template(businessData)}
    <div>
    <b>Dear ${FirstName} ${LastName}(${role}),</b>
    <br/><br/>the ${Class} ticket have been blocked  for <b>${tripType}</b> Trip for the Flight Number : <b>${FlightNo}</b> onbording from <b>${Source}</b> to <b>${Destination}</b> on Date: <b>${DepatureDate}</b>.
    </div>
    ${this.footer.Template(businessData)}
    `;
  };
}
