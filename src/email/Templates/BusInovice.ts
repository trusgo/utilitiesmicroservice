import { Injectable } from "@nestjs/common";

@Injectable()
export class busInoviceTemplate {
  Template = (data) => {
    const { inoviceNumber, inoviceDate, bookingStatus,pnr,parentName,parentAddress,parentIsd,
        parentMobile,parentEmail,address, isd,mobile,email,ticketNumber,sources,destination,
    opName,paxName,actualFare,tax,inovicetaxes,netfare,agentBreakUp} = data;
    return `
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title></title>
    </head>
    <body>
    <div>
    <img style="width:80px; height: 80px position: absolute" alt="qtrip logo" src="https://lh3.googleusercontent.com/gctSEqudBf9HVKxAdmmS3Dtacy8H5QG-m80szVfvdeDaYE8Y0X3H4jyWLF8eq0E5xZV5=s128"/><br/>
        <table align="center" style="border-collapse:collapse;border:1px solid #d7dadb;width:90%">
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
                            ${inoviceNumber}
                            </td>
                            <td style="text-align:left;border:0;">
                                <b>
                                    Invoice Date:
    
                                </b>
                            </td>
                            <td style="text-align:left;border:0;">
                            ${inoviceDate}
                            </td>
                            <td style="text-align:left;border:0;">
                                <b>
                                    PNR:
                                </b>
                            </td>
                            <td style="text-align:left;border:0;">
                            ${pnr}                                
                                <b>${bookingStatus}</b>
                                
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
                                ${parentName} <br />
                                ${parentAddress}<br />
                                    Mobile:${parentIsd} ${parentMobile}<br />
                                    Email: ${parentEmail}<br />
                                </p>
    
                            </td>
                            <td align="right">
                                <p style="font-weight: bold;line-height: 24px;padding: 0;margin: 0;">
                                ${name}<br />
                                ${address}<br />
                                    Mobile: ${isd} ${mobile}<br />
                                    Email: ${email}<br />
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
                            <th bgcolor="#cce6ff" style="border:1px solid #D7DADB;font-size:14px;font-family:Corbel;">Ticket No</th>
                            <th bgcolor="#cce6ff" style="border:1px solid #D7DADB;font-size:14px;font-family:Corbel;">Sectors</th>
                            <th bgcolor="#cce6ff" style="border:1px solid #D7DADB;font-size:14px;font-family:Corbel;">Bus</th>
                            <th bgcolor="#cce6ff" style="border:1px solid #D7DADB;font-size:14px;font-family:Corbel;">Pax Name</th>
                            <th bgcolor="#cce6ff" style="border:1px solid #D7DADB;font-size:14px;font-family:Corbel;">Fare</th>
                            <th bgcolor="#cce6ff" style="border:1px solid #D7DADB;font-size:14px;font-family:Corbel;">Tax</th>
                            <th bgcolor="#cce6ff" style="border:1px solid #D7DADB;font-size:14px;font-family:Corbel">Service.Ch</th>
                        </tr>
                        <tr>
                            <td style="border:1px solid #D7DADB" align="center">
                            ${ticketNumber}
                            </td>
                            <td style="border:1px solid #D7DADB" align="center">
                                <sources />${sources}
                                -
                                <destination />${destination}
                            </td>
                            <td style="border:1px solid #D7DADB" align="center">
                                <opname />${opName}
                            </td>
                            <td style="border:1px solid #D7DADB" align="center">
                                <paxname />${paxName}
                            </td>
                            <td style="border:1px solid #D7DADB" align="center">
                                <actualfare />${actualFare}
                            </td>
                            <td style="border:1px solid #D7DADB" align="center">
                                <tax />${tax}
                            </td>
                            <td style="border:1px solid #D7DADB" align="center">
                                <invoicetaxes />${inovicetaxes}
                            </td>
                            
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
                                            <netfare />${netfare}
                                        </td>
                                    </tr>
                                </table>
                                <table style="background-color:#cce6ff; width:100%">
                                    <agentBreakUp />${agentBreakUp}
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr style="padding:0px;margin:0px">
                <td style="padding:10px;margin:0px">
                    <table align="center" cellspacing="1" style="width:100%;">
    
                        <tr>
                            <td>
                                <h4 style="font-family:Corbel;font-size:15px">
                                    GST Details:
                                </h4>
                            </td>
    
                        </tr>
                    </table>
                    <table align="center" cellspacing="1" style="width:100%;border:1px solid #D7DADB;border-collapse:collapse" border="1">
                        <tr>
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
                        </tr>
    
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
                                    All Cases & Disputes are subject to India Jurisdiction.
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
                                    Refunds & Cancellations are subject to Bus provider approval.
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
        <br/><br/>If you have any query, please reach out to us at <b><supportmailid></b> with feedback and suggestions to improve our service.<br/><br/><b>Warm Regards,</b><br/><b><domain> Team.</b><br/>
     Address: Foo Villa, Bar City, Fizz,<br/>Contact Number: 1234567890,<br/>Email id: test@test.t<br/><br/>
     This is a system generated email. Please do not reply to this email. 
    </div>
    </body>
    </html>
` ;
  };
}
