
import { Injectable } from '@nestjs/common'

@Injectable()
export class BusTicket{
 Template = () => {
  return `
     <div
           style="
             border: 1px solid #d9d9d9;
             padding: 10px;
             max-width: 800;
             margin: 0 auto;
           "
         >
           <!-- start -->
           <div>
             <p><b>Passenger Contact: </b><span>9492542988</span></p>
             <p><b>Passenger Email: </b><span>mc@gmail.com</span></p>
           </div>
     
           <table
             style="
               width: 100%;
               border: 1px solid black;
               border-collapse: collapse;
               margin-bottom: 15px;
             "
           >
             <tr style="border-bottom: 1px solid black">
               <td style="padding: 10px">
                 <b>Ref number:</b> <span>TSG-B70106580</span>
               </td>
               <td></td>
               <td style="text-align: right; padding: 10px">
                 <b>Booking Date:</b><span>date here</span>
               </td>
             </tr>
             <tr style="border-bottom: 1px solid black">
               <td style="padding: 10px">
                 <b>GDS/Airline PNR:</b>
               </td>
               <td style="text-align: center; padding: 10px">
                 <b>Status:</b><span style="color: #15b615">BOOKED</span>
               </td>
               <td style="text-align: right; padding: 10px">
                 <b>Fare Type:</b>
               </td>
             </tr>
             <tr>
               <td style="padding: 10px">
                 <b>Trip Type:</b>
               </td>
               <td style="text-align: center; padding: 10px">
                 <b> Trip Name:</b>
               </td>
               <td style="text-align: right; padding: 10px">
                 <b>Travel Date:</b>
               </td>
             </tr>
           </table>
     
           <div style="border: 1px solid black; margin-bottom: 15px">
             <h4 style="text-align: center; margin-bottom: 0">Bus Details</h4>
             <table style="width: 100%">
               <tr>
                 <td style="padding: 10px; width: 30%">
                   <b>Operator: </b>Orange Travels
                 </td>
     
                 <td style="padding: 10px; width: 70%">
                   <b>Bus Type: </b> Sleeper NonAC Mercedes Benz King Size A/C Family
                   Sleeper (2+2)
                 </td>
               </tr>
             </table>
             <table style="width: 100%; text-align: center">
               <tr style="color: #fff; background-color: #1890ff; font-size: 14px">
                 <th style="width: 18%; padding: 15px 10px">Departure Time</th>
                 <th width="18%">Arrival Time</th>
                 <th width="20%">Source</th>
                 <th width="20%">Destination</th>
                 <th width="24%">Baggage</th>
               </tr>
     
               <tr style="font-size: 15px">
                 <td>08:00 PM</td>
                 <td>09:48 AM</td>
                 <td>Tolichowki</td>
                 <td>Yelahanka Upanagar BMTC Bus Stand</td>
     
                 <td>
                   <p>Checkin: 15KG</p>
     
                   <p>Hand baggage:7KG</p>
                 </td>
               </tr>
             </table>
           </div>
     
           <div style="border: 1px solid black; margin-bottom: 15px">
             <h4 style="text-align: center">Travel Details</h4>
     
             <table style="text-align: center; width: 100%">
               <thead>
                 <tr style="color: #fff; background-color: #1890ff; font-size: 14px">
                   <th style="width: 40%; padding: 15px 10px">Passenger Name</th>
                   <th width="13.33%">Age</th>
                   <th width="20%">Eticket No.</th>
                   <th width="13.33%">Gender</th>
                   <th width="13.33%">Seat No.</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td style="padding: 10px">Mr Mahesh kumar</td>
                   <td>26</td>
                   <td>TSG-B70106580</td>
                   <td>M</td>
                   <td>34</td>
                 </tr>
               </tbody>
             </table>
           </div>
           <table
             style="
               width: 100%;
               border: 1px solid black;
               border-collapse: collapse;
               margin-bottom: 15px;
             "
           >
             <tr style="border-bottom: 1px solid black">
               <td style="padding: 10px">Fare Details:</td>
               <td style="text-align: right; padding: 10px">INR</td>
             </tr>
             <tr style="border-bottom: 1px solid black">
               <td style="padding: 10px">Base Fare :</td>
               <td style="text-align: right; padding: 10px">N/A</td>
             </tr>
             <tr style="border-bottom: 1px solid black">
               <td style="padding: 10px">Surge and Taxes: YQ:</td>
               <td style="text-align: right; padding: 10px">N/A</td>
             </tr>
             <tr style="border-bottom: 1px solid black">
               <td style="padding: 10px">conveneience Fee :</td>
               <td style="text-align: right; padding: 10px">N/A</td>
             </tr>
             <tr style="border-bottom: 1px solid black">
               <td style="padding: 10px">Net Total:</td>
               <td style="text-align: right; padding: 10px">N/A</td>
             </tr>
             <tr style="border-bottom: 1px solid black">
               <td style="padding: 10px">Grand Total:</td>
               <td style="text-align: right; padding: 10px">N/A</td>
             </tr>
           </table>
         </div> `;
};
}
