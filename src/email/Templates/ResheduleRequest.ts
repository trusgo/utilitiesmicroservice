import { Injectable } from '@nestjs/common';
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class ResheduleRequestTemplete {
  constructor(private header: header, private footer: footer) {}
  Template = (businessData, data) => {
    const {
      FirstName,
      LastName,
      ReferenceNumber,
      RescheduleRemarks,
      RescheduleAirlineCharges,
      RescheduleServiceCharge,
      RescheduleRefundAmount,
      RefundStatus,
      RescheduleCharges,
      RescheduleAdminRemarks,
      RescheduleDepartureTime,
    } = data;

    return `
    <div>
     ${this.header.Template(businessData)}
      <p> <b>Dear ${FirstName} ${LastName}</b>,</p>
      <p>  We have Received Your request for Ticket Reshedule for   Ticket Refference No: <b>${ReferenceNumber}</b></P>
      <p> Ypur Request is Under process and We Will Inform you with all updates </p>
      <h3>Reshedule Details</h3>
      <p> <b>Reshedule Date  : </b>${RescheduleDepartureTime} </p>
      <p> <b>Airline Charges : </b>${RescheduleAirlineCharges} </p>
      <p> <b>Service Charges : </b>${RescheduleServiceCharge} </p>
      <p> <b>Refund Status : </b>${RefundStatus} </p>
      <p> <b>Refund Amount : </b>${RescheduleRefundAmount} </p>
      <p> <b>Reshedule Charges : </b>${RescheduleCharges} </p>
     ${this.footer.Template(businessData)}
  </div>
    `;
  };
}
