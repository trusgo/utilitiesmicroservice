
import { Injectable } from '@nestjs/common'
import { footer } from './Footer'
import { header } from './Header'

@Injectable()
export class PaymentInvoice{
    constructor( private header:header, private footer:footer){}
 Template (data) {
  return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title></title>
    </head>
    <body>
    <div>
    ${this.header.Template()}
        <table align="center" style="border-collapse:collapse;border:1px solid #d7dadb;width:100%">
            <tr>
                <td>
                    <table style="width:100%;border-collapse:collapse;border:0;border-bottom:1px solid #D7DADB;" border="1">
                        <tr>
                            <td style="text-align:left;border:0;padding: 10px">
                                <b>
                                    Invoice No:
                                </b>
                            </td>
                            <td style="text-align:left;border:0;">
                                <invoicenumber />
                            </td>
                            <td style="text-align:left;border:0;">
                                <b>
                                    Invoice Date:
    
                                </b>
                            </td>
                            <td style="text-align:left;border:0;">
                                <userinvoicedate />
                            </td>
                            <td style="text-align:left;border:0;">
                                <b>
                                    PNR:
                                </b>
                            </td>
                            <td style="text-align:left;border:0;">
                                <pnr /> 
                               
                                    <b><bookingStatus /></b>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr style="padding:0px;margin:0px">
                <td style="padding:10px;margin:0px">
                    <table style="width:100%;margin:0;padding:0;">
                        <tr>
                            <td style="padding: 0;margin: 0;float: left; text-align: left;">
                                <p style="font-weight: bold;line-height: 24px;padding: 0;margin: 0;">
                                    <parentname /> <br />
                                    <parentaddress /><br />
                                    Mobile:<parentISD />  <parentmobile /><br />
                                    Email: <parentemail /><br />
                                </p>
                                
                                <p style="font-weight: bold;line-height: 24px;padding: 0;margin: 0;">
                                    <gstshow /><parentgstnumber />
                                </p>
                            </td>
                            <td align="right">
                                <p style="font-weight: bold;line-height: 24px;padding: 0;margin: 0;">
                                    <psaname /><br />
                                    <address /><br />
                                    Mobile:<psaISD />  <mobile /><br />
                                    Email: <email /><br />
                                </p>
                                
                                <p style="font-weight: bold;line-height: 24px;padding: 0;margin: 0;">
                                    <gstshow /> <parentgstnumber />
                                </p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr style="padding:0px;margin:0px">
                <td style="padding:10px;margin:0px">
                    <table align="center" cellspacing="1" style="width:100%;border:1px solid #D7DADB;border-collapse:collapse" border="1">
                        <tr bgcolor="#c6e9fd">
                            <th bgcolor="#cce6ff" style="border:1px solid #D7DADB;font-size:14px;font-family:Corbel;">E-Ticket No</th>
                            <th bgcolor="#cce6ff" style="border:1px solid #D7DADB;font-size:14px;font-family:Corbel;">Sectors</th>
                            <th bgcolor="#cce6ff" style="border:1px solid #D7DADB;font-size:14px;font-family:Corbel;">Flight</th>
                            <th bgcolor="#cce6ff" style="border:1px solid #D7DADB;font-size:14px;font-family:Corbel;">Pax Name</th>
                            <th bgcolor="#cce6ff" style="border:1px solid #D7DADB;font-size:14px;font-family:Corbel;">Type</th>
                            <th bgcolor="#cce6ff" style="border:1px solid #D7DADB;font-size:14px;font-family:Corbel;">Base Fare</th>
                            <th bgcolor="#cce6ff" style="border:1px solid #D7DADB;font-size:14px;font-family:Corbel;">OT Tax</th>
                            <th bgcolor="#cce6ff" style="border:1px solid #D7DADB;font-size:14px;font-family:Corbel;">Bag.Ch</th>
                            <th bgcolor="#cce6ff" style="border:1px solid #D7DADB;font-size:14px;font-family:Corbel;">Meal.Ch</th>
                            <th bgcolor="#cce6ff" style="border:1px solid #D7DADB;font-size:14px;font-family:Corbel;">Seat.Ch</th>
                            <th bgcolor="#cce6ff" style="border:1px solid #D7DADB;font-size:14px;font-family:Corbel;">Conv Fee</th>
                            <th bgcolor="#cce6ff" style="border:1px solid #D7DADB;font-size:14px;font-family:Corbel">Service.Ch</th>
                        </tr>
                        <tr>
                            <td style="border:1px solid #D7DADB" align="center">
                                <eTicketOne />
                            </td>
                            <td style="border:1px solid #D7DADB" align="center">
                                <sources />
                                -
                                <destination />
                            </td>
                            <td style="border:1px solid #D7DADB" align="center">
                                <opname />
                            </td>
                            <td style="border:1px solid #D7DADB" align="center">
                                <paxname />
                            </td>
                            <td style="border:1px solid #D7DADB" align="center">
                                <flighttype />
                            </td>
                            <td style="border:1px solid #D7DADB" align="center">
                                <actualfare />
                            </td>
                            <td style="border:1px solid #D7DADB" align="center">
                                <tax />
                            </td>
                            <td style="border:1px solid #D7DADB" align="center">
                                0
                            </td>
                            <td style="border:1px solid #D7DADB" align="center">
                                0
                            </td>
                            <td style="border:1px solid #D7DADB" align="center">
                                0
                            </td>
                            <td style="border:1px solid #D7DADB" align="center">
                                0
                            </td>
                            <td style="border:1px solid #D7DADB" align="center">
                                <servicetax />
                            </td>
    
                        </tr>
                        
                        <tr bgcolor="#c6e9fd">
                            <returnTable />
                        </tr>
                        <tr>
                            <returnTableData />     
                        </tr>
                    </table>
                </td>
            </tr>
            <tr style="padding:0px;margin:0px">
                <td style="padding:10px;margin:0px">
                    <table align="center" cellspacing="1" style="width:100%">
                        <tr>
                            <td width="55%" align="left" style="padding-top:0px">
                                <b style="font-family:Corbel;font-size:13px">
    
                                    Note:  * Voidation and refund as per fare rules
                                </b>
                            </td>
                            <td width="35%" align="right">
                                <table style="background-color:#cce6ff; width:100%">
                                    <tr>
                                        <td width="30%"></td>
                                        <td width="30%" align="left">
                                            <b style="font-family:Corbel;font-size:13px">
                                                Gross:
                                            </b>
                                        </td>
                                        <td width="30%" align="right">
                                            <netfare />
                                        </td>
                                    </tr>
                                </table>
                                <table style="background-color:#cce6ff; width:100%">
                                    <tr>
                                        <td width="30%"></td>
                                        <td width="30%" align="left">
                                            <b style="font-family:Corbel;font-size:13px">
                                                <agentBreakUp />                                        </b>
                                        </td>
                                        
                                    </tr>
                                    
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr style="padding:0px;margin:0px">
                <td style="padding:10px;margin:0px">
                    <table align="center" cellspacing="1" style="width:100%;">
                        <gstLabel />
                        <!--<tr>
            <td>
                <h4 style="font-family:Corbel;font-size:15px">
                    GST Details:
                </h4>
            </td>
    
        </tr>-->
                    </table>
        <table align="center" cellspacing="1" style="width:100%;border:1px solid #D7DADB;border-collapse:collapse" border="1">
            <gstBreakup />
            <!--<tr>
                            <th bgcolor="#cce6ff" style="border:1px solid #D7DADB;font-size:14px;font-family:Corbel;">
                                Service Description
                            </th>
                            <th bgcolor="#cce6ff" style="border:1px solid #D7DADB;font-size:14px;font-family:Corbel;">
                                SAC
                            </th>
                            <th bgcolor="#cce6ff" style="border:1px solid #D7DADB;font-size:14px;font-family:Corbel;">
                                Taxable Value
                            </th>
                            <th bgcolor="#cce6ff" style="border:1px solid #D7DADB;font-size:14px;font-family:Corbel;">
                                CGST@
                            </th>
                            <th bgcolor="#cce6ff" style="border:1px solid #D7DADB;font-size:14px;font-family:Corbel;">
                                SGST@
                            </th>
                            <th bgcolor="#cce6ff" style="border:1px solid #D7DADB;font-size:14px;font-family:Corbel;">
                                IGST@
                            </th>
                            <th bgcolor="#cce6ff" style="border:1px solid #D7DADB;font-size:14px;font-family:Corbel;">
                                Total
                            </th>
                        </tr>
                        <tr>
                            <td style="border:1px solid #D7DADB" align="center">
                                Transaction Fees
                            </td>
                            <td style="border:1px solid #D7DADB" align="center">
                                0
                            </td>
                            <td style="border:1px solid #D7DADB" align="center">
                                0
                            </td>
                            <td style="border:1px solid #D7DADB" align="center">
                                0
                            </td>
                            <td style="border:1px solid #D7DADB" align="center">
                                0
                            </td>
                            <td style="border:1px solid #D7DADB" align="center">
                                0
                            </td>
                            <td style="border:1px solid #D7DADB" align="center">
                                0
                            </td>
                        </tr>-->
    
                    </table>
    
    
                </td>
            </tr>
            <tr style="padding:0px;margin:0px">
                <td style="padding:10px;margin:0px">
                    <table style="width: 100%;float: left;text-align: left;padding:0px;margin:0px;">
                        <tr>
                            <td colspan="2">
                                <h4 style="color:Red;font-family:Corbel;padding:0px;margin:0px;">
                                    Terms and Conditions:
                                </h4>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b style="font-family:Corbel;font-size:13px;padding:0px;margin:0px;">
                                    *IMP:
                                </b>
                            </td>
                            <td>
                                <i style="font-family:Corbel;font-size:13px;padding:0px;margin:0px;">
                                    All Cases & Disputes are subject to <siteCountry /> Jurisdiction.
                                </i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b style="font-family:Corbel;font-size:13px;padding:0px;margin:0px;">
                                    *IMP:
                                </b>
                            </td>
                            <td>
                                <i style="font-family:Corbel;font-size:13px;padding:0px;margin:0px;">
                                    Refunds & Cancellations are subject to Airlines approval.
                                </i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b style="font-family:Corbel;font-size:13px;padding:0px;margin:0px;">
                                    *IMP:
                                </b>
                            </td>
                            <td>
                                <i style="font-family:Corbel;font-size:13px;padding:0px;margin:0px;">
                                    Service charges as included above are to be collected from the customers on our behalf.
                                </i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b style="font-family:Corbel;font-size:13px;padding:0px;margin:0px;">
                                    CHEQUE:
                                </b>
                            </td>
                            <td>
                                <i style="font-family:Corbel;font-size:13px;padding:0px;margin:0px;">
                                    Must be drawn in favour of '<siteAdmin />'.
                                </i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b style="font-family:Corbel;font-size:13px;padding:0px;margin:0px;">
                                    LATE PAYMENT:
                                </b>
                            </td>
                            <td>
                                <i style="font-family:Corbel;font-size:13px;padding:0px;margin:0px;">
                                    Interest @ 24% per annum will be charged on all outstanding bills after due date.
                                </i>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b style="font-family:Corbel;font-size:13px;padding:0px;margin:0px;">
                                    VERY IMP:
                                </b>
                            </td>
                            <td>
                                <i style="font-family:Corbel;font-size:13px;padding:0px;margin:0px;">
                                    Kindly check all details carefully to avoid unnecessary complications.
                                </i>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        ${this.footer.Template()}
        </div>
    </body>
    </html>
    ` 
};
}
