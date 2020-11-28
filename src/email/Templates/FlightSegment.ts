import { Injectable } from "@nestjs/common";

@Injectable()
export class flightSegmentTemplate {
  Template = (data) => {
  
    return `
    <div>
    <img style="width:80px; height: 80px position: absolute" alt="qtrip logo" src="https://lh3.googleusercontent.com/gctSEqudBf9HVKxAdmmS3Dtacy8H5QG-m80szVfvdeDaYE8Y0X3H4jyWLF8eq0E5xZV5=s128"/><br/>
    <table width="87%" align="center">
    <tr>
        <td colspan="2" style="padding-top: 0" align="center">
            <div id="Wrapper" style="overflow: visible; text-align: left; font-variant: normal;
                                    font-weight: normal; font-size: 14px; margin: 0; background-color: #fff; line-height: 20px;
                                    font-family: Asap, sans-serif; color: #333; padding: 0; font-style: normal; width: 100%;">

                <!-- start of the header -->
                 
                <div style="margin: 0; padding: 0;">
                    <div style="overflow: hidden; margin-bottom: 5px; padding: 0 0 5px;">
                        <div style="font-size: 22px; float: left;">
                            <div style="font-weight: bold; margin-right: 20px; padding: 0; float: left;">
                                <img id="imgLogo" src="<logo />" style="width: 150px;  height: 80px;" />
                                <br />
                                <div style="float: left; margin-bottom: 5px;">

                                </div>
                            </div>
                            <div style="float: left;"> 
                            </div>
                      
                        </div>
                  
                    </div>

                </div>
                <!-- end of the header-->
                <table width="100%" cellpadding=0 cellspacing=0 border=0>
                    <tr>
                        <td colspan=2>
                            <table width="100%" cellpadding=12 cellspacing=0 border=0>
                                <tr>
                                    <td>
                                        <div style="overflow: hidden;">
                                            <font size=-1>
                                                <p style="font-family:Arial,sans-serif;font-size:12px"><b>Dear Customer</b>,<br><br>Thanks for choosing <clientdomain />.Please find your travel itinerary details below.</p>
                                                <p style="font-family:Arial,sans-serif;font-size:12px">
                                                    <table width="100%" align="center" cellpadding="0" cellspacing="0" >
                                                        <tr>
                                                            <td colspan="2" style="padding-bottom:10px">
                                                                <flightsitinerary />
                                                            </td>
                                                        </tr>
                                                    </table>
                                            </font>
                                        </div>
                            </table>
                </table>

            </div>

        </td>
    </tr>
</table>
<br/><br/>If you have any query, please reach out to us at <b><supportmailid></b> with feedback and suggestions to improve our service.<br/><br/><b>Warm Regards,</b><br/><b><domain> Team.</b><br/>
Address: Foo Villa, Bar City, Fizz,<br/>Contact Number: 1234567890,<br/>Email id: test@test.t<br/><br/>
This is a system generated email. Please do not reply to this email. 
</div>
` ;
  };
}
