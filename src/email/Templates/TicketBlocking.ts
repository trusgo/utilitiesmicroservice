import { Injectable } from '@nestjs/common';
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class ticketBlockingTemplate {
  constructor(private header: header, private footer: footer) {}
  Template = (businessData, data) => {
    const {
      Email,
      Mobile,
      FirstName,
      LastName,
      bookingDate,
      flightDetails,
    } = data;
    let rows = '';
    flightDetails.forEach((flight) => {
      rows += `
                <tr>
                  <td style="padding: 10px">${flight.flightNo}</td>
                  <td>${flight.origin}</td>
                  <td>${flight.destination}</td>
                  <td>${flight.date}</td>
                </tr>
                 `;
    });
    return `
 ${this.header.Template(businessData)}
 <div>
      <div>
        <b>Dear ${FirstName} ${LastName},</b>
        <br /><br />Your Ticket For Following Flight Details has Been Blocked<br />
        We will Update you with Further Notice on the Ticket Updates <br />
        <b>Booking Date : </b> ${bookingDate}<br />
        <b>Mobile :  </b> ${Mobile}<br />
        <br />
      </div>
  
      <table style="text-align: center; width: 100%">
        <thead>
          <tr style="color: #fff; background-color: #1890ff; font-size: 14px">
            <th style="padding: 15px 10px">Flight No</th>
            <th >Origin</th>
            <th >Destination</th>
            <th >Date</th>
          </tr>
        </thead>
        <tbody>
        ${rows}
         </tbody>
      </table>
    </div> 
    ${this.footer.Template(businessData)}
    `;
  };
}
