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
    <html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <title>:: <domain /> ::</title>
        
        
    </head>
    <body>
    <div>
    ${this.header.Template(businessData)}
    <b>Dear ${FirstName} ${LastName},</b><br/><br/> We have received your Cancellation Reuest . We have listed  Details below for the cancellation according our policy.
    <form id="PrintTicket">
    <style>
        .firstrow {
            BORDER-RIGHT: #0066CC 1px solid;
            BORDER-TOP: #0066CC 1px solid;
            BORDER-LEFT: #0066CC 1px solid;
            BORDER-BOTTOM: #0066CC 1px solid;
        }

        .ft9 {
            font-family: verdana;
            font-size: 11px;
            color: #0060C5;
            text-decoration: none;
            text-align: left;
        }

        .ft9_small {
            font-family: verdana;
            font-size: 9px;
            color: #0060C5;
            text-decoration: none;
            padding:4px;
        }
    </style>
    <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
        <tbody>
            <tr>
                <td>
                    <br />
                    <table class="firstrow" align="center" bgcolor="#ffffff" border="0" cellpadding="1" width="100%">
                        <tbody>
                            <tr>
                                <td colspan="5" class="ft9" bgcolor="#f5f5f5">
                                    <b>Cancel Request Details </b>
                                </td>
                            </tr>
                            <tr><td height="5"></td></tr>
                            <tr>
                                <td>
                                    <table width="100%">

                                        <tbody>
                                            <tr bgcolor="#dbdbdb">
                                                <td class="ft9" width="25%"><b>Cancellation ID : ${CancellationID}</b>&nbsp;<canid /> </td>
                                                <td class="ft9" width="35%"><b>Cancellation Status : ${CancellationStatus}</b>&nbsp;<canstatus /> </td>
                                                <td class="ft9" width="35%"><b>Refund Status : ${RefundStatus}&nbsp;</b><refundstatus /> </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table width="100%">
                                        <tbody>
                                            <tr>
                                                <td colspan="2">
                                                    <table width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td class="ft9" width="40%"><b>Passenger Name: ${FirstName} ${LastName}</b></td>
                                                                <td class="ft9" width="30%"><b> <service /></b></td>
                                                                <td class="ft9" width="30%"><b> Ticket No: ${TicketNumber}</b></td>
                                                            </tr>
                                                            
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>                                                      
                                             <td width="50%" class="ft9_small">Cancel Request DateTime : ${CancelRequestDateTime} </td>
                                             <td width="50%" class="ft9_small">Refund DateTime : ${RefundDateTime} </td>
                                            </tr>
                                            <tr>
                                            <td width="50%" class="ft9_small">Cancellation Amount : ${CancellationAmount} </td>
                                             <td width="50%" class="ft9_small">Refund Amount : ${RefundAmount} </td>
                                            </tr>
                                            <tr>
                                            <td width="50%" class="ft9_small">Canceled DateTime : ${CanceledDateTime} </td>
                                            <td width="50%" class="ft9_small">Processed Remarks : ${processedRemark} </td></tr>
                                             

                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
          
        </tbody>
    </table>
    
</form>
        ${this.footer.Template(businessData)}
        </div>
    </body>
    </html>
`;
  };
}
