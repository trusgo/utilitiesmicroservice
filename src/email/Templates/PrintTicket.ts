import { Injectable } from '@nestjs/common';
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class printTicketTemplate {
  constructor(private header: header, private footer: footer) {}
  Template = (businessData, data) => {
    const { FirstName, LastName, address, Email, Mobile, password } = data;
    return `
    <div>
    ${this.header.Template(businessData)}
    <table>
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
                                <tr><td><p style="font-size:16px;margin:0;padding:0;text-align:right;"><img src="<icoh1 />" style="height:18px;padding-right:5px;vertical-align:middle;"><span style="font-size:12px;margin:0;padding:0;color:red;font-weight:bold;font-size:15px;"><clientmobileno /></span></p></td></tr>
                                <tr><td><p style="font-size:12px;margin:0;padding:0;text-align:right;"><img src="<icoh2 />" style="height:18px;padding-right:5px;vertical-align:middle;"><span style="font-size:12px;margin:0;padding:0;color:#3489C9;text-decoration:underline;"><clientemail /></span></p></td></tr>
                            </table>
                        </td>
                    </tr>
                </table><br />
                <table style="font-weight: bold; width: 100%;border:2px solid #E0E0E0;border-collapse:collapse; line-height:25px;font-size:14px;" border="1" cellspacing="0">
                    <tbody>
                        <tr><td colspan="2" style="background-color:#666;"><p style="margin:0;padding:0;text-align:left;line-height:25px;color:#fff;font-size:16px;font-weight:bold;"><img src="<ico1 />" style="width:20px;vertical-align:sub;"> Details</p></td></tr>
                        <tr style="margin:0;padding:0;">
                            <td class="tabalign" style="margin:0;padding:0;width:20%;border:1px solid #E0E0E0;color:#000;">
                                <p style="margin:0;padding:0;padding-left:25px;font-weight:600;font-size:14px;">Booked on:</p>
                            </td>
                            <td class="tabalign2" style="margin:0;padding:0;width:78%;border:1px solid #E0E0E0;color:#000;">
                                <p style="margin:0;padding:0;padding-left:25px;font-weight:600;font-size:14px;"><bookingdate /></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="tabalign" style="margin:0;padding:0;width:20%;border:1px solid #E0E0E0;color:#000;">
                                <p style="margin:0;padding:0;padding-left:25px;font-weight:600;font-size:14px;">Contact Mobile:</p>
                            </td>
                            <td class="tabalign2" style="margin:0;padding:0;width:78%;border:1px solid #E0E0E0;color:#000;">
                                <p style="margin:0;padding:0;padding-left:25px;font-weight:600;font-size:14px;"><passangercontactno /></p>                                                                    
                            </td>
                        </tr>
                        <tr>
                            <td class="tabalign" style="margin:0;padding:0;width:20%;border:1px solid #E0E0E0;color:#000;">
                                <p style="margin:0;padding:0;padding-left:25px;font-weight:600;font-size:14px;">Mail Id:</p>
                            </td>
                            <td class="tabalign2" style="margin:0;padding:0;width:78%;border:1px solid #E0E0E0;color:#000;">
                                <p style="margin:0;padding:0;padding-left:25px;font-weight:600;font-size:14px;"><passangermailid /></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="tabalign" style="margin:0;padding:0;width:20%;border:1px solid #E0E0E0;color:#000;">
                                <p style="margin:0;padding:0;padding-left:25px;font-weight:600;font-size:14px;"> Reference number:</p>
                            </td>
                            <td class="tabalign2" style="margin:0;padding:0;width:78%;border:1px solid #E0E0E0;color:#000;">
                                <p style="margin:0;padding:0;padding-left:25px;font-weight:600;font-size:14px;"><refno /></p>

                            </td>
                        </tr>
                        <tr>
                            <td class="tabalign" style="margin:0;padding:0;width:20%;border:1px solid #E0E0E0;color:#000;">
                                <p style="margin:0;padding:0;padding-left:25px;font-weight:600;font-size:14px;">PNR number:</p>
                            </td>
                            <td class="tabalign2" style="margin:0;padding:0;width:78%;border:1px solid #E0E0E0;color:#000;">
                                <p style="margin:0;padding:0;padding-left:25px;font-weight:600;font-size:14px;"> <b style="color:red"><pnrno /></b></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="tabalign" style="margin:0;padding: 0; width: 20%; border: 1px solid #E0E0E0; color: #000;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;">Ticket Number:</p>
                            </td>
                            <td class="tabalign2" style="margin: 0; padding: 0; width: 78%; border: 1px solid #E0E0E0; color: #000;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;"><ticketno /></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="tabalign" style="margin: 0; padding: 0; width: 20%; border: 1px solid #E0E0E0; color: #000;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;">Boarding Details:</p>
                            </td>
                            <td class="tabalign2" style="margin: 0; padding: 0; width: 78%; border: 1px solid #E0E0E0; color: #000;">

                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;"><bplocation /></p>
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;"><bplandmark /></p>
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;"><boardingaddress /></p>
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;"><bpcontactnos /></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="tabalign" style="margin: 0; padding: 0; width: 20%; border: 1px solid #E0E0E0; color: #000;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;">Dropping Details:</p>
                            </td>
                            <td class="tabalign2" style="margin:0; padding:0; width:78%; border:1px solid #E0E0E0; color:#000;">

                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;"><dplocation /></p>
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;"><dplandmark /></p>
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;"><droppingaddress /></p>
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;"><dpcontactnos /></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="tabalign" style="margin: 0; padding: 0; width: 20%; border: 1px solid #E0E0E0; color: #000;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;">Date of Journey:</p>
                            </td>
                            <td class="tabalign2" style="margin: 0; padding: 0; width: 78%; border: 1px solid #E0E0E0; color: #000;">
                                <p style="margin: 0;padding: 0;padding-left: 25px;font-weight: 600;font-size: 14px;"><journeydate /></p>
                            </td>
                        </tr>
                    </tbody>
                </table><br />
                <table style="width: 100%; border: 2px double #E0E0E0; border-collapse: collapse; line-height: 25px; font-size: 14px;" border="1" cellspacing="0">
                    <tbody>
                        <tr><td colspan="4" style="background-color:red; "><p style="margin: 0; padding: 0; text-align: left; line-height: 25px; color: #fff; font-size: 16px;font-weight:bold"><img src="<ico2 />" style="width: 20px; vertical-align: sub;"> Bus Details</p></td></tr>
                        <tr>
                            <td style="padding-left: 6px; color: black; font-weight: 700; color: #000; border-color: #E0E0E0"><b>From/To</b></td>
                            <td style="padding-left: 6px; color: black; font-weight: 700; color: #000; border-color: #E0E0E0"><b>Bus</b></td>
                            <td style="padding-left: 6px; color: black; font-weight: 700; color: #000; border-color: #E0E0E0"><b>Date</b></td>
                            <td style="padding-left: 6px; color: black; font-weight: 700; color: #000; border-color: #E0E0E0"><b>Dep.</b></td>
                        </tr>
                        <tr>
                            <td style="padding-left: 6px; color: red; font-weight: 700; color: red; border-color: #E0E0E0"><sourcename /> <br />  <destinationname /></td>
                            <td style="padding-left: 6px; color: red; font-weight: 700; color: red; border-color: #E0E0E0"><travelname /> <bustype /> <travelnamecoach /> </td>
                            <td style="padding-left: 6px; color: red; font-weight: 700; color: red; border-color: #E0E0E0"> <journeydate /></td>
                            <td style="padding-left: 6px; color: red; font-weight: 700; color: red; border-color: #E0E0E0"><deptime /></td>
                        </tr>
                    </tbody>
                </table><br />
                <passengerdetails /><br />
                <paymentdetails />
                <p style="text-align: left; color: red; padding: 0; margin: 0; font-weight: bold;"><cancellation /></p>
                <div style="clear:both"></div>
                <div style="margin:0;padding:0;">
                    <table style="width:100%;border:2px double lightgrey;border-collapse:collapse;" border="1" cellspacing="0">
                        <tbody>
                            <tr>
                                <td colspan="2" style="background-color:#666;line-height:25px;font-weight:bold;" align="center"><p style="color:#fff;font-size:16px;text-align:center;line-height:25px;margin:0;">Terms and Conditions</p></td>
                            </tr>
                            <tr>
                                <td style="width: 49%; border: 0;padding:0 1%;font-size:12px;line-height:15px;" valign="top" align="justify">
                                    <p style="margin: 0;  color: black;">
                                        1. <clientname />
                                        * is ONLY a bus ticket agent. It does not operate bus services of its own. In order
                                        to provide a comprehensive choice of bus operators, departure times and prices to
                                        customers, it has tied up with many bus operators.
                                        <clientname />
                                        advice to customers is to choose bus operators they are aware of and whose service
                                        they are comfortable with
                                    </p>
                                    <p style="margin: 0; padding: 0; padding-left: 20px; color: black;">
                                        <b><clientname /> responsibilities include: </b> <br />
                                        (1) Issuing a valid ticket (a ticket that will be accepted by the bus operator) for its network of bus operators <br />
                                        (2) Providing refund and support in the event of cancellation <br />
                                        (3) Providing customer support and information in case of any delays / inconvenience <br />
                                    </p>
                                    <p style="margin: 0; padding: 0; padding-left: 20px; color: black;">
                                        <b><clientname />responsibilities do NOT include:</b><br />
                                        (1) The bus operator's bus not departing / reaching on time.<br />
                                        (2) The bus operator's employees being rude.<br />
                                        (3) The bus operator's bus seats etc not being up to the customer's expectation.<br />
                                        (4) The bus operator canceling the trip due to unavoidable reasons.<br />
                                        (5) The baggage of the customer getting lost / stolen / damaged.<br />

                                    </p>
                                    <p style="margin: 0; padding-left: 10px; color: black;">
                                        2. The departure time mentioned on the ticket are only tentative timings. However the bus will not leave the source before the time that is mentioned on the ticket.
                                    </p>
                                </td>
                                <td style="width: 49%; border: 0; padding: 0 1%; font-size: 12px; border: 0; margin-left: 1%; line-height: 15px;" valign="top" align="justify">
                                    <p style="margin: 0; color: black;">
                                        3. Passengers are required to furnish the following at the time of boarding the bus:
                                    </p>
                                    <p style="margin: 0; padding: 0; padding-left: 20px; color: black;">
                                        Passengers are required to furnish the following at the time of boarding the bus:<br />
                                        (1) A copy of the ticket (A print out of the ticket or the print out of the ticket
                                        e-mail).
                                        <br />
                                        (2) A valid identity proof
                                        <br />
                                        Failing to do so, they may not be allowed to board the bus.
                                    </p>
                                    <p style="margin: 0;color: black;">
                                        4. In case one needs the refund to be credited back to his/her bank account, please write your cash coupon details to <supportemail /> * The discount
                                    </p>
                                    <p style="margin: 0;color: black;">
                                        5. Delivery charges (if any), will not be refunded in the event of ticket cancellation.
                                    </p>
                                    <p style="margin: 0;color: black;">
                                        6. In case a booking confirmation e-mail and sms gets delayed or fails because of technical reasons or as a result of incorrect e-mail ID / phone number provided by the user etc, a ticket will be considered 'booked' as long as the ticket shows up on the confirmation page of <domain />
                                    </p>
                                    <p style="margin: 0;color: black;">
                                        7. Grievances and claims related to the bus journey should be reported to <domain /> support team within 2 days of your travel date.<br />
                                    </p>
                                    <p style="margin: 0;color: black;">
                                        8.<cancellationpolicy />
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </td>
    </tr>
</table>
${this.footer.Template(businessData)}
</div>
`;
  };
}
