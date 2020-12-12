import { Injectable } from '@nestjs/common';
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class cancelTicketTemplate {
  constructor(private header: header, private footer: footer) {}
  Template = (businessData, data) => {
    const {
      FirstName,
      LastName,
      Email,
      CancellationID,
      CancellationStatus,
      RefundStatus,
      CancellationAmount,
      CancelRequestDateTime,
      CanceledDateTime,
      RefundDateTime,
      RefundAmount,
      TicketNumber,
      processedRemark,
    } = data;
    return `
    <div>
    ${this.header.Template(businessData)}
    <p><b>Dear ${FirstName} ${LastName}</b> ,</p>
     We have received your Ticket Cancellation Request .
    <P>Your request is under Process and we  will inform you with Updated Status </p>
    <table>
    <tr >
        <td class="ft9" width="25%"><b>Cancellation ID :</b> ${CancellationID} </td>
        <td class="ft9" width="35%"><b>Cancellation Status :</b> ${CancellationStatus}</td>
        <td class="ft9" width="35%"><b>Refund Status </b> : ${RefundStatus} </td>
    </tr>

    </table>

    <table style="border-spacing: 8px;margin-top:8px">
    <tr>                                                      
        <td width="50%" ><b>Cancel Request DateTime : </b>${CancelRequestDateTime} </td>
        <td width="50%" ><b>Refund DateTime :</b> ${RefundDateTime} </td>
    </tr>
    <tr>
    <td width="50%" ><b>Cancellation Amount :</b> ${CancellationAmount} </td>
        <td width="50%" ><b>Refund Amount : </b>${RefundAmount} </td>
    </tr>
    <tr>
        <td width="50%" ><b>Canceled DateTime :</b> ${CanceledDateTime} </td>
        <td width="50%" ><b>Processed Remarks :</b> ${processedRemark} </td>
    </tr>
   
    </table>

    </div>
        ${this.footer.Template(businessData)}
`;
  };
}
