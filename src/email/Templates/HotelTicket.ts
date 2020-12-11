//const { footer } = require("./Footer");
//const { header } = require("./Header");
import { Injectable } from '@nestjs/common';
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class HotelTicket {
  constructor(private header: header, private footer: footer) {}
  Template = (businessData, data) => {
    const { edit_url, HotelBookingDetails, HotelDetails, Guest } = data;
    console.log(Guest);
    const {
      Email,
      Mobile,
      FirstName,
      LastName,
      Status,
      BookingRefNo,
      BookedDate,
      BookedTime,
    } = HotelBookingDetails;
    const { Hotel, FareType, CheckInDate, CheckOutDate } = HotelDetails;
    return `
     <div
           style="
             border: 1px solid #d9d9d9;
             padding: 10px;
             max-width: 800;
             margin: 0 auto;
           "
         >
         ${this.header.Template(businessData)}
         <div>
         <b>Dear ${FirstName} ${LastName},</b>
         <br/><br/>Thank you for Booking Hotel through <b>i2Space</b> <br/> We have sended you the HotelTicket which you have Booked for <b>${Hotel}</b>
         </div>
         <br/>
         <table width="600" style="width:600px" cellpadding="0" cellspacing="0" border="0" align="center">
         <tbody>
         <tr>
         <td valign="top" align="center" style="border:1px solid #484848">
         <center>
         <table align="center" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;margin:0;padding:0">
         <tbody>
         <tr>
         <td align="center" style="width:600px">
         <table valign="top" align="center" style="width:568px" cellpadding="0" cellspacing="0">
         <tbody>
         <tr>
         <td valign="middle" align="left" style="width:284px;margin:0;border:0;padding:0;line-height:100%;vertical-align:middle">
         <img src="https://lh3.googleusercontent.com/gctSEqudBf9HVKxAdmmS3Dtacy8H5QG-m80szVfvdeDaYE8Y0X3H4jyWLF8eq0E5xZV5=s128" style="margin:0;border:0;padding:0;display:block;width:85px;height:43px" align="left" width="95" height="43" class="CToWUd">
         </td>
         <td valign="middle" align="right" style="width:300px;margin:0;border:0;padding:0;line-height:100%;vertical-align:middle"></td>
         </tr>
         <tr>
         <td colspan="2" height="10" style="line-height:1px;font-size:1px;height:10px">&nbsp;</td>
         </tr>
         <tr>
         <td valign="top" align="left" style="width:284px;margin:0;border:0;padding:0">
         <table valign="top" align="left" style="width:280px;background-color:#00bfff;border-radius:8px;border-collapse:separate" cellpadding="0" cellspacing="0">
         <tbody>
         <tr>
         <td colspan="2" height="10" style="line-height:1px;font-size:1px;height:11px">&nbsp;</td>
         </tr>
         <tr>
         <td valign="top" style="width:15px">&nbsp;</td>
         <td valign="top" align="left" style="text-transform:uppercase;width:265px;margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;color:#ffffff;font-weight:bold;line-height:100%;text-align:left;font-size:12px;letter-spacing:0;background-color:#00bfff">mr. ${FirstName}&nbsp;  ${LastName}</td>
         </tr>
         <tr>
         <td colspan="2" height="1" style="line-height:1px;font-size:1px;height:1px">&nbsp;</td>
         </tr>
         <tr>
         <td valign="top" style="width:15px">&nbsp;</td>
         <td valign="top" align="left" style="width:265px;margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;color:#ffffff;font-weight:normal;line-height:100%;text-align:left;font-size:10px;letter-spacing:0;background-color:#00bfff">  Mob: ${Mobile}</td>
         </tr>
         <tr>
         <td colspan="2" height="1" style="line-height:1px;font-size:1px;height:1px">&nbsp;</td>
         </tr>
         <tr>
         <td valign="top" style="width:15px">&nbsp;</td>
         <td valign="top" align="left" style="width:265px;margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;color:#ffffff;font-weight:normal;line-height:100%;text-align:left;font-size:10px;letter-spacing:0;background-color:#00bfff">  Email: <a href="#m_-5146331894663962629_" style="color:#ffffff;text-decoration:none;background-color:#00bfff">${Email}</a></td>
         </tr>
         
         <tr>
         <td colspan="2" height="1" style="line-height:1px;font-size:1px;height:3px">&nbsp;</td>
         </tr>
         <tr>
         <td valign="top" style="width:15px;height:46px">&nbsp;</td>
         <td valign="top" align="left" style="width:265px;margin:0;padding:0"><table border="0" align="left" cellpadding="0" cellspacing="0" width="105" style="width:105px">
         <tbody>
         <tr>
         <td align="center" style="width:105px;vertical-align:middle;padding-top:8px;padding-bottom:8px;border-radius:4px;color:#ec1c24" valign="middle"></td>
         </tr>
         </tbody>
         </table>
         </td>
         </tr>
         <tr>
         <td colspan="2" height="10" style="line-height:1px;font-size:1px;height:11px">&nbsp;</td>
         </tr>
         </tbody>
         </table>
         </td>
         <td valign="top" align="right" style="width:284px;margin:0;border:0;padding:0">
         <table valign="top" align="right" style="width:280px;background-color:#00bfff;border-radius:8px;border-collapse:separate" cellpadding="0" cellspacing="0">
         <tbody>
         <tr>
         <td colspan="2" height="10" style="line-height:1px;font-size:1px;height:11px">&nbsp;</td>
         </tr>
         <tr>
         <td colspan="2" height="1" style="line-height:1px;font-size:1px;height:1px">&nbsp;</td>
         </tr>
         <tr>
         <td valign="top" style="width:15px">&nbsp;</td>
         <td valign="top" align="left" style="width:265px;margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;color:#ffffff;font-weight:normal;line-height:100%;text-align:left;font-size:10px;letter-spacing:1;background-color:#00bfff">  Booking Ref. No: ${BookingRefNo}</td>
         </tr>
         <tr>
         <td colspan="2" height="1" style="line-height:1px;font-size:1px;height:1px">&nbsp;</td>
         </tr>
         <tr>
         <td valign="top" style="width:15px">&nbsp;</td>
         <td valign="top" align="left" style="width:265px;margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;color:#ffffff;font-weight:normal;line-height:100%;text-align:left;font-size:10px;letter-spacing:1;background-color:#00bfff">  Booked on:  ${BookedDate}, &nbsp;${BookedTime}
         </td>
         </tr>
         <tr>
         <td colspan="2" height="1" style="line-height:1px;font-size:1px;height:1px">&nbsp;</td>
         </tr>
         <tr>
         <td valign="top" style="width:15px">&nbsp;</td>
         <td valign="top" align="left" style="width:265px;margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;color:#ffffff;font-weight:normal;line-height:100%;text-align:left;font-size:10px;letter-spacing:1;background-color:#00bfff">  Status:   ${Status}</td>
         </tr>
         <tr>
         <td colspan="2" height="1" style="line-height:1px;font-size:1px;height:3px">&nbsp;</td>
         </tr>
         <tr>
         <td valign="top" style="width:14px;height:46px">&nbsp;</td>
         <td valign="top" align="left" style="width:265px;margin:0;padding:0">
         <table border="0" align="left" cellpadding="0" cellspacing="0" width="100" style="width:100px">
         <tbody>
         <tr>
         <td align="center" style="background-color:#ffffff;width:100px;vertical-align:middle;padding-top:8px;padding-bottom:8px;border-radius:4px;color:#ec1c24" valign="middle"><a href= ${edit_url} style="color:#ec1c24;display:block;font-size:11px;font-weight:bold;text-align:center;text-decoration:none;font-family:Arial,Helvetica,sans-serif;line-height:99%" target="_blank">Edit Booking</a>
         </td>
         </tr>
         </tbody>
         </table>
         </td>
         </tr>
         <tr>
         <td colspan="2" height="10" style="line-height:1px;font-size:1px;height:11px">&nbsp;</td>
         </tr>
         </tbody>
         </table>
         </td>
         </tr>
         <tr>
         <td colspan="2" height="10" style="line-height:1px;font-size:1px;height:10px">&nbsp;</td>
         </tr>
         </tbody>
         </table>
         </td>
         </tr>
         <tr>
    <td align="center" style="width:600px">
    <table valign="top" align="center" style="width:568px" cellpadding="0" cellspacing="0">
    <tbody>
    <tr>
    <td valign="middle" align="center" style="width:216px;margin:0;border:0;padding:0">
    <table valign="middle" align="center" style="width:216px" cellpadding="0" cellspacing="0">
    <tbody>
    <tr>
    <td valign="top" align="left" style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;color:#000000;font-weight:bold;line-height:100%;text-align:left;font-size:11px;letter-spacing:0">Check_In</td>
    <td valign="top" style="width:15px">&nbsp;</td>
    </tr>
    <tr>
    <td colspan="2" height="1" style="line-height:1px;font-size:1px;height:1px">&nbsp;</td>
    </tr>
    <tr>
    <td valign="top" align="left" style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;color:#000000;font-weight:normal;line-height:100%;text-align:left;font-size:11px;letter-spacing:0">${CheckInDate} </td>
    <td valign="top" style="width:15px">&nbsp;</td>
    </tr>
    </tbody>
    </table>
    </td>
    <td valign="middle" align="center" style="width:136px;margin:0;border:0;padding:0">
    <table valign="middle" align="center" style="width:136px" cellpadding="0" cellspacing="0"><tbody><tr><td valign="top" align="center" style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;color:#000000;font-weight:bold;line-height:100%;text-align:center;font-size:11px;letter-spacing:0">${Hotel}</td>
    </tr>
    <tr>
    <td valign="top" align="center" style="margin:0;border:0;padding:0;line-height:100%;vertical-align:top"><img src="https://ci3.googleusercontent.com/proxy/2fNu97aSB7v-i8k3GvSgkO7se-awWLx0w9d1OLR1GC_iXschwVz3LDzcsJO76VTRV3P_O6fRwwsTyChsCzWk2PTvBoY6MY3IlN5A_60PEQ=s0-d-e1-ft#http://book.spicejet.com/Images/SpiceJet/itinerary/it_10.png" style="margin:0;border:0;padding:0;display:block;width:135px;height:9px" align="center" width="135" height="9" class="CToWUd"></td>
    </tr>
    </tbody>
    </table>
    </td>
    <td valign="top" align="center" style="width:216px;margin:0;border:0;padding:0">
    <table valign="middle" align="center" style="width:216px" cellpadding="0" cellspacing="0">
    <tbody>
    <tr>
    <td valign="top" align="right" style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;color:#000000;font-weight:bold;line-height:100%;text-align:right;font-size:11px;letter-spacing:0">Check_Out </td>
    <td valign="top" style="width:15px">&nbsp;</td>
    </tr>
    <tr>
    <td colspan="2" height="1" style="line-height:1px;font-size:1px;height:1px">&nbsp;</td>
    </tr>
    <tr>
    <td valign="top" align="right" style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;color:#000000;font-weight:normal;line-height:100%;text-align:right;font-size:11px;letter-spacing:0">${CheckOutDate}&nbsp;</td>
    <td valign="top" style="width:15px">&nbsp;</td>
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
         <td align="center" style="width:600px">
         <table valign="top" align="center" style="width:568px;border-radius:10px;border-collapse:separate" cellpadding="0" cellspacing="0">
         <tbody>
         <tr>
         <td style="font-family:Arial,Helvetica,sans-serif;color:#ffffff;font-weight:bold;line-height:100%;text-align:left;font-size:11px;letter-spacing:0px;background-color:#333333;padding-left:10px;padding-top:8px;padding-bottom:8px;border-right:1px solid #cccbcb;border-top:1px solid #333333;border-left:1px solid #333333;border-top-left-radius:10px;padding-right:5px;width:100px">Guest Name</td>
         <td style="font-family:Arial,Helvetica,sans-serif;color:#ffffff;font-weight:bold;line-height:100%;text-align:center;font-size:11px;letter-spacing:0px;background-color:#333333;padding-top:8px;padding-bottom:8px;border-right:1px solid #cccbcb;border-top:1px solid #333333;border-left:1px solid #cccbcb;width:85px">Age</td>
         <td style="font-family:Arial,Helvetica,sans-serif;color:#ffffff;font-weight:bold;line-height:100%;text-align:center;font-size:11px;letter-spacing:0px;background-color:#333333;padding-top:8px;padding-bottom:8px;border-right:1px solid #cccbcb;border-top:1px solid #333333;border-left:1px solid #cccbcb;border-right:1px solid #333333;border-top-right-radius:10px;width:282px">Add-on Services</td>
         </tr>
         ${Guest.map((guest, index) => {
           const { FirstName, LastName, Age, AddOnServices } = guest;
           return `
               <tr>
               <td valign="top" style="color:#000000;font-weight:normal;line-height:100%;letter-spacing:0px;padding-left:10px;padding-top:8px;padding-bottom:8px;font-weight:normal;text-align:center;font-size:10px;padding-left:10px;border:1px solid #cccbcb;padding-right:5px;width:106px">
               <span style="text-transform:uppercase;line-height:1.6">${FirstName} ${LastName}</span></td>
               <td style="font-family:'Arial,Helvetica,sans-serif';color:#000000;font-weight:normal;line-height:100%;text-align:left;font-size:10px;letter-spacing:0px;padding-left:10px;padding-top:8px;padding-bottom:8px;border:1px solid #cccbcb;padding-right:5px;width:79px">${Age} </td>
               <td style="font-family:'Arial,Helvetica,sans-serif';color:#000000;font-weight:normal;line-height:100%;text-align:left;font-size:10px;letter-spacing:0px;padding-left:10px;padding-top:8px;padding-bottom:8px;border:1px solid #cccbcb;padding-right:5px;width:45%;width:287px"> ${AddOnServices} </td>
               </tr>
               `;
         })}
           </tbody>
           </table>
           </td>
           </tr>
         </tbody>
         </table>
         </center>
           </td>
           </tr>
           </tbody>
           </table>
           ${this.footer.Template(businessData)}
         </div>
         </div> `;
  };
}
