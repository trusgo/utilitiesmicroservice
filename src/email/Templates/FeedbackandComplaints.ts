import { Injectable } from "@nestjs/common";
import { footer } from "./Footer";
import { header } from "./Header";

@Injectable()
export class feedbackAndComplaintsTemplate {
    constructor( private header:header, private footer:footer){}
  Template =async (data) => {
    
    return `
    <div>
    ${this.header.Template()}
    <table width="100%" cellpadding=0 cellspacing=0 border=0>
    <tr>
        <td colspan=2>
            <div id="Wrapper" style="overflow: visible; text-align: left; font-variant: normal;
                    font-weight: normal; font-size: 14px; margin: 0; background-color: #fff; line-height: 20px;
                    font-family: Asap, sans-serif; color: #333; padding: 0; font-style: normal; width: 560px;">
                <div id="main" style="clear: both; margin: 0; width: 980px; padding: 0; overflow: visible;
                        height: 100%; ">
                </div>

                <div style="width: 100%;  margin: auto; padding: 0;">
                    <div style="height: 80px;  padding: 0 0 5px;width:100%;">
                        <div style="float:left;">
                            <div>  <img id="imgLogo" src="<logo />" style="width: 150px; height: 80px;"/></div>

                        </div>
                        <div style="padding: 0; text-align: right;float:right;width:50%;">

                            <p style="font-size: 25px; font-weight: bold; margin: 0; padding: 0; color: #000000;">
                                <clientname />

                            </p>

                            <p style="font-size: 12px;  margin: 0; padding: 0; color: #000000;">
                                <clientaddress />

                            </p>

                            <p style="font-size: 12px; margin: 0; padding: 0;">

                                Phone:  <clientmobileno />

                            </p>
                            <p style="font-size: 12px; margin: 0; padding: 0;">
                                Email-Id :  <clientemail />

                            </p>
                        </div>
                    </div>
                    <table width="100%" cellpadding=12 cellspacing=0 border=0>
                        <tr>
                            <td>
                                <div style="overflow: hidden;">
                                    <font size=-1>
                                        <p style="font-family:Arial,sans-serif;font-size:12px">
                                            Dear Customer,
                                            <br>
                                            Thank you for Enquiry. Our Customer Care Executive will get back to you soon on your request..
                                            <br>
                                            Request Type:&nbsp;<strong><feedback /></strong>.
                                            <br>
                                            Below are your Enquiry  details.
                                            <br><br>
                                        </p>
                                        <p style="font-family:Arial,sans-serif;font-size:12px">
                                            <table style="font-weight: bold; width: 100%; line-height: 27px; border: 1px solid #E0E0E0;" cellpadding="7" border="=1"
                                                   cellspacing="0">
                                                <!-- Start of Table Header -->
                                                <!--first row begins-->
                                                <tbody>
                                                    <tr style="margin: 0; padding: 0;">
                                                        <td style="width: 50%; margin: 0; padding: 0; border: 1px solid #E0E0E0;">
                                        <p style="margin: 0; padding: 0; margin-left: 5%;">Customer Name</p>
                            </td>
                            <td style="width: 45%; margin: 0; padding: 0; border: 1px solid #E0E0E0;">
                                <p style="margin: 0; padding: 0; margin-left: 5%;"><name /></p>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 50%; margin: 0; padding: 0; border: 1px solid #E0E0E0;">
                                <p style="margin: 0; padding: 0; margin-left: 5%;">Contact Mobile</p>
                            </td>
                            <td style="width: 45%; margin: 0; padding: 0; border: 1px solid #E0E0E0;">
                                <p style="margin: 0; padding: 0; margin-left: 5%;">
                                    <contactno />
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 50%; margin: 0; padding: 0; border: 1px solid #E0E0E0;">
                                <p style="margin: 0; padding: 0; margin-left: 5%;">Mail Id</p>
                            </td>
                            <td style="width: 45%; margin: 0; padding: 0; border: 1px solid #E0E0E0;">
                                <p style="margin: 0; padding: 0; margin-left: 5%;">
                                    <mailid />
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td style="width:45%;   margin: 0;padding: 0 ;border: 1px solid #E0E0E0;">
                                <p style="margin: 0; padding: 0;margin-left:5%;">Description </p>
                            </td>
                            <td style="width: 45%; margin: 0; padding: 0; border: 1px solid #E0E0E0;">
                                <p style="margin: 0; padding: 0; margin-left: 5%;">   <description /></p>
                            </td>
                        </tr>
                        <!-- End of Table Header -->
                        </tbody>
                    </table>
                    </font>
                </div>
</table>
</table>
${await this.footer.Template().then((res)=>{
    
    return res
  })}
</div>
` ;
  };
}
