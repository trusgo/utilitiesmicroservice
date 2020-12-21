import { Injectable } from '@nestjs/common';
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class TicketBookingTemplete {
  constructor(private header: header, private footer: footer) {}
  Template = (businessData, data) => {
    const {
      Email,
      Mobile,
      FirstName,
      LastName,
      bookingDate,
      RefNo,
      Status,
      Pnr
    } = data;

    return `
 ${this.header.Template(businessData)}
 <div>
      <p> Dear <b>${FirstName} ${LastName}<b>,</p>
      <p>Your Ticket For Following Flight Details has Been Booked Successfully</p>
        <div
        style="
          min-width: 200px;
          max-width: 500px;
          box-sizing: border-box;
          border: black solid 1px;
          padding: 16px;
        "
        >
        <div
          style="
            width: 100%;
            box-sizing: border-box;
            border-radius: 5px;
            padding: 16px 8px;
            border: black solid 1px;
          "
        >
          <h2 style="padding: 0px; margin: 0px; margin-bottom: 8px">
            Contact Information
          </h2>
          <b>${FirstName} ${LastName} </b><br />
          <b>Email : </b> ${Email}<br />
          <b>Mobile : </b> ${Mobile}<br />
        </div>
        <div
          style="
            width: 100%;
            box-sizing: border-box;
            border-radius: 5px;
            padding: 16px;
            margin-top: 8px;
            border: black solid 1px;
          "
        >
          <b>Booking Ref No : </b> ${RefNo}<br />
          <b>Booking PNR No : </b> ${Pnr}<br />
          <b>Booked On : </b> ${bookingDate}<br />
          <b>Status: </b> ${Status}<br />
          <a
            target="_blank"
            href="${businessData.baseUrl}/flight_ticket?ref=${RefNo}"
            style="
              display: block;
              margin-top: 16px;
              padding: 4px 8px;
              width: max-content;
              text-decoration: none;
              background-color: black;
              color: white;
              border-radius: 4px;
            "
            >Edit / View Booking Details</a
          >
        </div>
        </div>
    </div> 
    ${this.footer.Template(businessData)}
    `;
  };
}
