import { Injectable } from "@nestjs/common";
import { footer } from "./Footer";
import { header } from "./Header";

@Injectable()
export class paymentCancelMailTemplate {
    constructor( private header:header, private footer:footer){}
  Template = (data) => {
    const { FirstName, LastName, address,Email,Mobile,password } = data;
    return `
    <div>
    ${this.header.Template()}
    <table style="max-width:600px;margin:auto;border-spacing:0;padding:4px;border-radius:16px;overflow:hidden" align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
    <tbody>
        <tr>
            <td style="border-collapse:collapse">
                <table style="margin:auto;border-spacing:0;background:white;border-radius:12px;overflow:hidden" align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                        <tr>
                            <td style="border-collapse:collapse">


                                <table style="border-spacing:0;border-collapse:collapse" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%">

                                    <tbody>
                                        <tr>
                                            <td style="border-collapse:collapse;padding:16px 32px" align="left" valign="middle">

                                                <table style="border-spacing:0;border-collapse:collapse" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%">
                                                    <tbody>
                                                        <tr>

                                                            <td style="padding:0;text-align:left;border-collapse:collapse" align="left" valign="middle">
                                                                <a href="#" style="text-decoration:none;color:#ffffff;outline:0;outline:none;border:0;border:none" target="_blank">
                                                                    <img src="<logo />" title="<compnayname />" alt="Logo" style="margin:auto;text-align:center;border:0;outline:none;text-decoration:none;width: 40%;" align="middle" border="0" width="40" class="CToWUd">
                                                                </a>
                                                            </td>

                                                            <companyaddress />
                                                            <td width="16" align="left" valign="middle" style="border-collapse:collapse">&nbsp;</td>


                                                            <td align="right" valign="middle">
                                                                CurrentDate: <curreentdate />
                                                                <br />
                                                                Transaction Id:<transactionid />
                                                            </td>

                                                        </tr>
                                                    </tbody>
                                                </table>

                                            </td>
                                        </tr>

                                    </tbody>
                                </table>


                            </td>
                        </tr>
                        <tr>
                            <td style="border-collapse:collapse;background:#ffffff;font-family:'roboto',Arial,Helvetica,sans-serif">
                                <p style="padding:32px;margin:0">
                                    <b>Hi <username />,</b>
                                    <br><br>
                                    Welcome to <compnayname />- India's <span class="il">Travel</span> website!
                                </p>

                                <p style="padding-left:32px;margin:0">
                                    All your bank account transactions happen over secure banking network
                                </p>
                                <p style="padding:32px;margin:0">
                                    You Transaction  amount of  <b><amount /> /-</b> is Cancelled .
                                    <br><br>

                                    <br><br>
                                    Cheers!<br>Team <compnayname />
                                </p>



                            </td>
                        </tr>
                    </tbody>
                </table>


            </td>
        </tr>
    </tbody>
</table>
${this.footer.Template()}
</div>
` ;
  };
}
