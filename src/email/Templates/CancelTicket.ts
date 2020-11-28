import { Injectable } from "@nestjs/common";


@Injectable()
export class cancelTicketTemplate {
  Template = (data) => {
    
    return `
    <html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <title>:: <domain /> ::</title>
        
        
    </head>
    <body>
    <div>
      <img style="width:80px; height: 80px position: absolute" alt="qtrip logo" src="https://lh3.googleusercontent.com/gctSEqudBf9HVKxAdmmS3Dtacy8H5QG-m80szVfvdeDaYE8Y0X3H4jyWLF8eq0E5xZV5=s128"/><br/>
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
                                                        <td class="ft9" width="25%"><b>Cancellation ID :</b>&nbsp;<canid /> </td>
                                                        <td class="ft9" width="35%"><b>Cancellation Status :</b>&nbsp;<canstatus /> </td>
                                                        <td class="ft9" width="35%"><b>Refund Status :&nbsp;</b><refundstatus /> </td>
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
                                                                        <td class="ft9" width="40%"><b>Passenger Name </b></td>
                                                                        <td class="ft9" width="30%"><b> <service /></b></td>
                                                                        <td class="ft9" width="30%"><b> Ticket No</b></td>
                                                                    </tr>
                                                                    <cancelledpax />
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%" class="ft9_small">Cancel Status : <canstatus /> </td>
                                                        <td width="50%" class="ft9_small">Cancel Request DateTime : <canrequesteddate /> </td>
                                                    </tr>
                                                    <tr><td height="3"></td></tr>
                                                    <tr><td width="50%" class="ft9_small">Cancellation Amount :<currencysymbol /> <cancharges /> </td><td width="50%" class="ft9_small">Canceled DateTime : <cancelleddate /> </td></tr>
                                                    <tr><td width="50%" class="ft9_small">Processed Remarks : <canremarks /> </td><td width="50%" class="ft9_small"></td></tr>
                                                    <tr><td height="3"></td></tr>
                                                    <tr>
                                                        <td width="50%" class="ft9_small">Refund Status : <refundstatus /> </td>
                                                        <td width="50%" class="ft9_small">Refund DateTime : <refunddate /> </td>
                                                    </tr>
                                                    <tr>
                                                        <td width="50%" class="ft9_small">Refund Amount :<currencysymbol /> <refundamount /> </td>
                                                    </tr>
    
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr><td height="15"></td></tr>
    
                </tbody>
            </table>
            <br/><br/>If you have any query, please reach out to us at <b><supportmailid></b> with feedback and suggestions to improve our service.<br/><br/><b>Warm Regards,</b><br/><b><domain> Team.</b><br/>
            Address: Foo Villa, Bar City, Fizz,<br/>Contact Number: 1234567890,<br/>Email id: test@test.t<br/><br/>
            This is a system generated email. Please do not reply to this email. 
        </form>
        </div>
    </body>
    </html>
` ;
  };
}
