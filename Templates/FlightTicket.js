const { footer } = require("./Footer");
const { header } = require("./Header");

const flightTicketTemplate = () => {
  let flightTicket =
    header() +
    `<table>
    <tr>
        <td style="padding-top: 0px" align="center" valign="top">
            <div style="margin: 0; padding: 0; max-width: 87%; min-width: 966px;">
                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;"><error /></p>
                <table style="width:100%">
                    <tr>
                        <td align="left" style="height: 70px;"><logo /></td>
                        <td align="right">
                            <table>
                                <tr><td><p style="font-size:18px;font-weight:bold;margin:0;padding:0;color:red;text-align:right;"><clientname /></p></td></tr>
                                <tr><td><p style="font-size:12px;margin:0;padding:0;color:#000000;text-align:right;"><clientaddress /></p></td></tr>
                                <tr><td><p style="font-size: 16px;margin: 0;padding: 0;text-align:right;"><img src="<icoh1 />" style="height: 18px; padding-right: 5px; vertical-align: middle;"> <span style="font-size:12px;margin:0; padding:0; color:red; font-weight:bold; font-size:15px;"> <clientmobileno /></span></p></td></tr>
                                <tr><td><p style="font-size: 12px;margin: 0;padding: 0;text-align:right;"><img src="<icoh2 />" style="height: 18px; padding-right: 5px; vertical-align: middle;"> <span style="font-size: 12px; margin: 0; padding: 0; color: #3489C9; text-decoration: underline;"> <clientemail /></span></p></td></tr>
                            </table>
                        </td>
                    </tr>
                </table><br />
                <table style="font-weight: bold; width: 100%;border:1px solid #E0E0E0;line-height:25px;font-size:14px;" border="1" cellspacing="0">
                    <!-- Start of Table Header -->
                    <!--first row begins-->
                    <tbody>
                        <tr><td colspan="2" style="background-color:#666; "><p style="margin: 0; padding: 0; text-align: left; line-height: 25px; color: #fff; font-size: 16px;font-weight:bold;"><img src="<ico1 />" style="width: 20px; vertical-align: sub;"> Details</p></td></tr>

                        <tr style="margin: 0; padding: 0;">
                            <td class="tabalign" style="margin: 0;padding: 0;width: 20%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0; padding: 0; padding-left: 25px; font-weight: 600; font-size: 14px; color: #000;">Booked on:</p>
                            </td>
                            <td class="tabalign2" style="margin: 0;padding: 0;width: 78%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0; padding: 0; padding-left: 25px; font-weight: 600; font-size: 14px; color: #000;"><bookingdate /></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="tabalign" style="margin: 0;padding: 0;width: 20%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0; padding: 0; padding-left: 25px; font-weight: 600; font-size: 14px; color: #000;">Contact Mobile:</p>
                            </td>
                            <td class="tabalign2" style="margin: 0;padding: 0;width: 78%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0; padding: 0; padding-left: 25px; font-weight: 600; font-size: 14px; color: #000;"><pcontact /></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="tabalign" style="margin: 0;padding: 0;width: 20%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0; padding: 0; padding-left: 25px; font-weight: 600; font-size: 14px; color: #000;">Mail Id:</p>
                            </td>
                            <td class="tabalign2" style="margin: 0;padding: 0;width: 78%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0; padding: 0; padding-left: 25px; font-weight: 600; font-size: 14px; color: #000;"> <pmailid /></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="tabalign" style="margin: 0;padding: 0;width: 20%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0; padding: 0; padding-left: 25px; font-weight: 600; font-size: 14px; color: #000;"> Airline PNR number:</p>
                            </td>
                            <td class="tabalign2" style="margin: 0;padding: 0;width: 78%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0; padding: 0; padding-left: 25px; font-weight: 600; font-size: 14px; color: #000;"><b style="color:red;">  <pnrno /></b> </p>

                            </td>
                        </tr>
                        <tr>
                            <td class="tabalign" style="margin: 0;padding: 0;width: 20%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0; padding: 0; padding-left: 25px; font-weight: 600; font-size: 14px; color: #000;">Reference number:</p>
                            </td>
                            <td class="tabalign2" style="margin: 0;padding: 0;width: 78%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0; padding: 0; padding-left: 25px; font-weight: 600; font-size: 14px; color: #000;">  <refno /> </p>
                            </td>
                        </tr>
                        <tr>
                            <td class="tabalign" style="margin: 0;padding: 0;width: 20%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0; padding: 0; padding-left: 25px; font-weight: 600; font-size: 14px; color: #000;">Source Name</p>
                            </td>
                            <td class="tabalign2" style="margin: 0;padding: 0;width: 78%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0; padding: 0; padding-left: 25px; font-weight: 600; font-size: 14px; color: #000;"> <source /></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="tabalign" style="margin: 0;padding: 0;width: 20%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0; padding: 0; padding-left: 25px; font-weight: 600; font-size: 14px; color: #000;">Destination Name</p>
                            </td>
                            <td class="tabalign2" style="margin: 0;padding: 0;width: 78%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0; padding: 0; padding-left: 25px; font-weight: 600; font-size: 14px; color: #000;"> <destination /></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="tabalign" style="margin: 0;padding: 0;width: 20%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0; padding: 0; padding-left: 25px; font-weight: 600; font-size: 14px; color: #000;">Date of Journey:</p>
                            </td>
                            <td class="tabalign2" style="margin: 0;padding: 0;width: 78%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0; padding: 0; padding-left: 25px; font-weight: 600; font-size: 14px; color: #000;"><jdatetime /></p>
                            </td>
                        </tr>
                        <!-- End of Table Header -->
                    </tbody>
                </table><br />
                <table style="width: 100%; border: 2px double lightgrey; border-collapse: collapse; line-height: 25px; color: red; font-size: 14px;" border="1" cellspacing="0">
                    <tbody>
                        <tr><td colspan="5" style="background-color:red; "><p style="margin: 0; padding: 0; text-align: left; line-height: 25px; color: #fff; font-size: 16px;font-weight:bold"><img src="<ico2 />" style="width: 20px; vertical-align: sub;"> Flight Details</p></td></tr>
                        <tr>
                            <td style="padding-left: 6px;color: black;font-weight: 700;"><b>From/To</b></td>
                            <td style="padding-left: 6px;color: black;font-weight: 700;"><b>Airline</b></td>
                            <td style="padding-left: 6px;color: black;font-weight: 700;"><b>Departure Date & Time</b></td>
                            <td style="padding-left: 6px;color: black;font-weight: 700;"><b>Arrival Date & Time</b></td>
                            <td style="padding-left: 6px;color: black;font-weight: 700;"><b>Baggage</b></td>
                        </tr>
                        <flightinfo />
                    </tbody>
                </table><br />
                <ecommercetable />
                <div>
                    <passengerdetails />
                </div>
                <table style="width: 100%; border: 2px double lightgrey; border-collapse: collapse; line-height: 25px; font-size: 14px;" border="1" cellspacing="0">
                    <tbody>
                        <tr><td colspan="<colspan />" style="background-color:#666; "><p style="margin: 0; padding: 0; text-align: left; line-height: 25px; color: #fff; font-size: 16px;font-weight:bold"><img src="<ico3 />" style="width: 20px; vertical-align: sub;"> Passenger(s) Details</p></td></tr>
                        <tr style="text-align:center;border:0.5px solid #ccc">
                            <td style="border: 0.5px solid #ccc;color:#000;"><b>Passenger Name(s).</b></td>
                            <PaxAge />
                            <EticketsHead />
                            <chargedescriptionhead />
                            <amounthead />
                        </tr>
                        <tr class="txtalgnlft" style="vertical-align:top">
                            <td style="vertical-align: top; padding: 0; border: 0; color: #000;"><passangerdetails /></td>
                            <passangerage />
                            <PsgrEtickets />
                            <passangerchargedetails />
                            <passangeramountdetails />
                        </tr>
                    </tbody>
                </table><br />
                <div style="clear:both"></div>
                <PassportDetails />
                <div style="clear:both"></div>
                <p style="text-align: left; color: red;line-height:25px; padding: 0; margin: 0; font-weight: bold;"><Coupanfare /></p>
                <div style="float:left;width:100%;box-sizing:border-box;text-align:left;line-height:25px;">
                    <offerinformation />
                </div>
                <div style="margin:0;padding:0;">
                    <table style="width:100%;border:2px double lightgrey;border-collapse:collapse;vertical-align:top" border="1" cellspacing="0">
                        <tbody>
                            <tr>
                                <td style="background-color:#666;line-height:25px;font-weight:bold;vertical-align:top" align="center"><p style="color:#fff;font-size:16px;text-align:center;line-height:25px;margin:0;">Terms and Conditions</p></td>
                            </tr>
                        </tbody>
                    </table>
                    <div style="margin: 0;width:100%; padding: 0;box-sizing:border-box; border: 2px double lightgrey;border-top:0;float:left;text-align:justify;font-size:13px;line-height:20px;padding: 0 1%;">
                        <div style="margin: 0;color: black;float:left;width:100%;line-height:25px;"><termsandconditions /></div>
                        <div style="margin: 0;color: black;float:left;width:100%;line-height:25px;">
                            <b>Cancel Policy :</b>
                            <br>
                            <cancelpolicy /> <cancelpolicy1 />
                        </div>
                    </div>
                </div>

            </div>
        </td>
    </tr>
</table>

    ` +
    footer();
  return flightTicket;
};
module.exports = { flightTicketTemplate };
