import { Injectable } from '@nestjs/common';
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class flightEnquiryTemplate {
  constructor(private header: header, private footer: footer) {}
  Template = (businessData, data) => {
    const {
      Email,
      FirstName,
      LastName,
      Mobile,
      TripType,
      Source,
      Destination,
      Class,
      DepatureDate,
      DepatureTime,
      FlightNo,
      Airline,
      NumberOfPassanger,
      Remark,
    } = data;
    let tripType = TripType == 1 ? 'One Way' : 'Return';
    return `
    ${this.header.Template(businessData)}
    <div>
    <b>Dear ${FirstName} ${LastName},</b>
    <br/><br/>Thank you for Contacting <b>i2Space</b>.<br/><br/> we have received your Flightquery for <b>${tripType}</b> Trip from <b>${Source}</b> to <b>${Destination}</b> on Date: <b>${DepatureDate}</b>.<br/>We understand your requirements, therefore we will Get Back to you shortly with Flight related details <br/><br/>
    <b>Email :</b>  ${Email}<br/><b>Mobile :</b>  ${Mobile}<br/><b>Class :</b>  ${Class}<br/><b>Flight Number :</b>  ${FlightNo}<br/><b>Depature Time:</b>  ${DepatureTime}<br/><b>Airline :</b>  ${Airline}<br/><b>Number Of Passanger :</b>  ${NumberOfPassanger}<br/><b>Remark :</b>  ${Remark}
    </div>
    ${this.footer.Template(businessData)}
    `;
  };
}
