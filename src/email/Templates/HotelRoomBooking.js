const { footer } = require("./Footer");
const { header } = require("./Header");

const hotelRoomBookingTemplate = () => {
  let hotelRoomBooking =
    header() +
    `<table>
    <tr>
        <td style="padding-top: 0px" align="center" valign="top">
            <div style="margin: 0; padding: 0; max-width: 87%; min-width: 966px;">
                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;"><error /></p>
                <table style="width:100%">
                    <tr>
                        <td align="left"><img src="<logo />" id="imgLogo" style="width: 150px;float:left;" /></td>
                        <td align="right">
                            <table>
                                <tr><td><p style="font-size:18px;font-weight:bold;margin:0;padding:0;color:red;text-align:right;"><clientname /></p></td></tr>
                                <tr><td><p style="font-size:12px;margin:0;padding:0;color:#000000;text-align:right;"><clientaddress /></p></td></tr>
                                <tr><td><p style="font-size: 16px;margin: 0;padding: 0;text-align:right;"><img src="<icoh1 />" style="height: 18px; padding-right:5px;vertical-align:middle;"> <span style="font-size:12px;margin:0; padding:0; color:red; font-weight:bold; font-size:15px;"> <clientmobileno /></span></p></td></tr>
                                <tr><td><p style="font-size: 12px;margin: 0;padding: 0;text-align:right;"><img src="<icoh2 />" style="height: 18px;padding-right:5px;vertical-align:middle;"> <span style="font-size: 12px; margin: 0; padding: 0; color: #3489C9; text-decoration: underline;"><clientemail /> </span></p></td></tr>
                            </table>
                        </td>
                    </tr>
                </table><br />
                <table style="font-weight: bold; width: 100%;border:1px solid #E0E0E0;line-height:25px;color:#000;" border="1" cellspacing="0">
                    <!-- Start of Table Header -->
                    <!--first row begins-->
                    <tbody>
                        <tr><td colspan="2" style="background-color:#666; "><p style="margin: 0; padding: 0; text-align: left; line-height: 25px; color: #fff; font-size: 16px;font-weight:bold;"><img src="<ico1 />" style="width: 20px;vertical-align:sub;"> Details</p></td></tr>
                        <tr style="margin: 0; padding: 0;">
                            <td class="tabalign" style="margin: 0;padding: 0;width: 20%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;">Status:</p>
                            </td>
                            <td class="tabalign2" style="margin: 0;padding: 0;width: 78%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;"><b style="color:red;"><status /></b></p>
                            </td>
                        </tr>
                        <tr style="margin: 0; padding: 0;">
                            <td class="tabalign" style="margin: 0;padding: 0;width: 20%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;">Confirmation Number:</p>
                            </td>
                            <td class="tabalign2" style="margin: 0;padding: 0;width: 78%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;"><b style="color:red;"><confirmationno /></b></p>
                            </td>
                        </tr>
                        <tr style="margin: 0; padding: 0;">
                            <td class="tabalign" style="margin: 0;padding: 0;width: 20%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;">Reference Number:</p>
                            </td>
                            <td class="tabalign2" style="margin: 0;padding: 0;width: 78%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;"><refno /></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="tabalign" style="margin: 0;padding: 0;width: 20%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;">PNR Number:</p>
                            </td>
                            <td class="tabalign2" style="margin: 0;padding: 0;width: 78%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;"><b style="color:red;">  <pnrno /></b></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="tabalign" style="margin: 0;padding: 0;width: 20%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;">Contact Number:
                            </td>
                            <td class="tabalign2" style="margin: 0;padding: 0;width: 78%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;"><paxmobile /></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="tabalign" style="margin: 0;padding: 0;width: 20%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;"> Email-Id:</p>
                            </td>
                            <td class="tabalign2" style="margin: 0;padding: 0;width: 78%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;"> <paxemail /></p>

                            </td>
                        </tr>
                        <tr>
                            <td class="tabalign" style="margin: 0;padding: 0;width: 20%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;">Hotel Name:</p>
                            </td>
                            <td class="tabalign2" style="margin: 0;padding: 0;width: 78%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;">  <hotelname /></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="tabalign" style="margin: 0;padding: 0;width: 20%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;">Area of Hotel:</p>
                            </td>
                            <td class="tabalign2" style="margin: 0;padding: 0;width: 78%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;">  <hotelcity /></p>
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;"><hoteladdress /> </p>
                            </td>
                        </tr>
                        <tr>
                            <td class="tabalign" style="margin: 0;padding: 0;width: 20%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;">Room Type:</p>
                            </td>
                            <td class="tabalign2" style="margin: 0;padding: 0;width: 78%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;">  <roomtype /></p>
                            </td>
                        </tr>

                        <tr>
                            <td class="tabalign" style="margin: 0;padding: 0;width: 20%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;">Star Rating:</p>
                            </td>
                            <td class="tabalign2" style="margin: 0;padding: 0;width: 78%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;"><starrating /></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="tabalign" style="margin: 0;padding: 0;width: 20%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;">No Of Rooms:</p>
                            </td>
                            <td class="tabalign2" style="margin: 0;padding: 0;width: 78%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;"><noofrooms /></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="tabalign" style="margin: 0;padding: 0;width: 20%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;">No Of Nights:</p>
                            </td>
                            <td class="tabalign2" style="margin: 0;padding: 0;width: 78%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;"><noofnights /></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="tabalign" style="margin: 0;padding: 0;width: 20%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;">No Of Passengers:</p>
                            </td>
                            <td class="tabalign2" style="margin: 0;padding: 0;width: 78%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;"><paxcount /></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="tabalign" style="margin: 0;padding: 0;width: 20%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;">Check-in</p>
                            </td>
                            <td class="tabalign2" style="margin: 0;padding: 0;width: 78%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;"><checkindate /></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="tabalign" style="margin: 0;padding: 0;width: 20%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;">Check-out</p>
                            </td>
                            <td class="tabalign2" style="margin: 0;padding: 0;width: 78%;border: 1px solid #E0E0E0;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;"><checkoutdate /></p>
                            </td>
                        </tr>
                        <!-- End of Table Header -->
                    </tbody>
                </table><br />
                <table style="width:100%;border:1px solid lightgrey; border-collapse: collapse;line-height:25px;" border="1" cellspacing="0">
                    <tbody>
                        <tr><td style="background-color:#666; "><p style="margin: 0; padding: 0; text-align: left; line-height: 25px; color: #fff; font-size: 16px;font-weight:bold"><img src="<ico2 />" style="width: 20px;vertical-align:sub;">Guest Details</p></td></tr>
                        <tr style="text-align:center;">
                            <td style="margin:0;padding:0;"><paxtable /></td>
                        </tr>
                    </tbody>
                </table><br />
                <div style="clear:both"></div>
                <table style="width:100%;border:2px double lightgrey;border-collapse:collapse;font-size:12px;" border="1" cellspacing="0">
                    <tbody>
                        <tr>
                            <td style="background-color:#666;line-height:25px;font-weight:bold;" align="center"><p style="color:#fff;font-size:16px;text-align:center;line-height:25px;margin:0;">Terms and Conditions</p></td>
                        </tr>
                        <tr>
                            <td style="width: 100%; border: 0;padding-right:1%;font-size:12px;line-height:15px;" valign="top" align="justify">
                                <p style="margin: 0; padding-left: 10px; color: black;">
                                    <b>Inclusions :</b><br /><inclusions />
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 100%; border: 0;padding-right:1%;font-size:12px;line-height:15px;" valign="top" align="justify">
                                <p style="margin: 0; padding-left: 10px; color: black;">
                                    <b>Cancellation Policy :</b><br /><cancellationpolicy />
                                </p>

                            </td>
                        </tr>
                        <tr>
                            <td style="width: 100%; border: 0;padding-right:1%;font-size:12px;line-height:15px;" valign="top" align="justify">
                                <p style="margin: 0; padding-left: 10px; color: black;">
                                    <b>Note :</b><br />
                                    <terms />
                                </p>

                            </td>
                        </tr>
                        <tr>
                            <td style="width: 100%; border: 0;padding-right:1%;font-size:12px;line-height:15px;" valign="top" align="justify">
                                <p style="margin: 0; padding-left: 10px; color: black;">
                                    * Early check in and late check out is subject to availability.
                                </p>
                                <p style="margin: 0; padding-left: 10px; color: black;">
                                   * The passenger has to furnish a photo identity and address proof at the time of verification failing to which all passenger on that voucher shall not be entertained with any refunds or restitution
                                </p>
                                <p style="margin: 0; padding-left: 10px; color: black;">
                                    * Standard Check in time is 1400 hrs / check out time 1200 hrs unless specified.
                                </p>
                                <p style="margin: 0; padding-left: 10px; color: black;">
                                    * The refund for early check out or unutilized night or service is subject to discretion of the hotel & the supplier, we strongly recommend to get a letter from the hotel favoring no charges for early check out.
                                </p>
                                <p style="margin: 0; padding-left: 10px; color: black;">
                                    * All additional charges other than the room charges and inclusions as mentioned in the booking voucher are to be borne and paid separately during check-out. Please make sure that you are aware of all such charges that may comes as extras. Some of them can be WiFi costs, Mini Bar, Laundry Expenses, Telephone calls, Room Service, Snacks etc.
                                </p>
                                <p style="margin: 0; padding-left: 10px; color: black;">
                                    * Voucher covers only those taxes which are included in the booking price (if included), all various other applicable taxes needs to be settled directly by guest
                                </p>
                                <p style="margin: 0; padding-left: 10px; color: black;">
                                    * We are not liable for any loss or damage caused during your stay in the hotel or while availing any service.
                                </p>
                                <p style="margin: 0; padding-left: 10px; color: black;">
                                    * We have no relevance with the room service or food menu or any other service as these are all as per the hotel standards.
                                </p>
                                <p style="margin: 0; padding-left: 10px; color: black;">
                                    * The hotel reserves the right of admission. Accommodation can be denied to guests
                                    posing as a 'couple' if suitable proof of identification is not presented at the
                                    time of check in. we will not be responsible for any check in denied by the hotel
                                    due to aforesaid reason.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </td>
    </tr>
</table>
    ` +
    footer();
  return hotelRoomBooking;
};
module.exports = { hotelRoomBookingTemplate };
