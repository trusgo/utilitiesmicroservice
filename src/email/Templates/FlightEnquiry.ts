import { Injectable } from '@nestjs/common';

@Injectable()
export class flightEnquiryTemplate {
  Template = (data) => {
    
    const { Email, FirstName, LastName, Mobile } = data;
   
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
    <img style="width:80px; height: 80px position: absolute" alt="qtrip logo" src="https://lh3.googleusercontent.com/gctSEqudBf9HVKxAdmmS3Dtacy8H5QG-m80szVfvdeDaYE8Y0X3H4jyWLF8eq0E5xZV5=s128"/><br/>
    <div>
      <p><b>Passenger Contact: </b><span>9492542988</span></p>
      <p><b>Passenger Email: </b><span>mc@gmail.com</span></p>
    </div>

    <div style="border: 1px solid black; margin-bottom: 15px">
      <h4 style="text-align: center; margin-bottom: 5px">Flight Details</h4>

      <table style="width: 100%; text-align: center">
        <tr style="color: #fff; background-color: #1890ff; font-size: 14px">
        <th style="width: 15%; padding: 15px 10px">TripType</th>
          <th style="width: 15%; padding: 15px 10px">Airline</th>
          <th width="15%">Flight No.</th>
          <th width="15%">Source</th>
          <th width="15%">Destination</th>
          <th width="13.33%">Dep. Time</th>
          <th width="13.33%">Arr. Time</th>
          <th width="13.33%">preferred Class</th>
        </tr>

        <tr style="font-size: 15px">
         <td>one waay<td>
          <td>Spice</td>
          <td>7897</td>
          <td>Tolichowki/T1</td>
          <td>Yelahanka/T2</td>
          <td>08:00 PM</td>
          <td>09:48 AM</td>

          <td>A</td>
        </tr>
      </table>
    </div>

    <br/><br/>If you have any query, please reach out to us at <b><supportmailid></b> with feedback and suggestions to improve our service.<br/><br/><b>Warm Regards,</b><br/><b><domain> Team.</b><br/>
  Address: Foo Villa, Bar City, Fizz,<br/>Contact Number: 1234567890,<br/>Email id: test@test.t<br/><br/>
  This is a system generated email. Please do not reply to this email. 
  </div> 
    `;
  };
}
