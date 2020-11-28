import { footer } from './Footer';
import { header } from './Header';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AirTicket {
  constructor( private header:header, private footer:footer){}
  Template = (data) => {
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
    ${this.header.Template()}
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
      <h4 style="text-align: center; margin-bottom: 5px">Flight Details</h4>

      <table style="width: 100%; text-align: center">
        <tr style="color: #fff; background-color: #1890ff; font-size: 14px">
          <th style="width: 15%; padding: 15px 10px">Airline</th>
          <th width="15%">Flight No.</th>
          <th width="15%">From/Terminal</th>
          <th width="15%">To/Terminal</th>
          <th width="13.33%">Dep. Time</th>
          <th width="13.33%">Arr. Time</th>

          <th width="13.33%">Fare Class Type</th>
        </tr>

        <tr style="font-size: 15px">
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

    <div style="border: 1px solid black; margin-bottom: 15px">
      <h4 style="text-align: center">Passenger Details</h4>

      <table style="text-align: center; width: 100%">
        <thead>
          <tr style="color: #fff; background-color: #1890ff; font-size: 14px">
            <th width="10%">Sr. No.</th>
            <th style="width: 30%; padding: 15px 10px">Passenger Name</th>
            <th width="13.33%">Age</th>
            <th width="20%">Eticket No.</th>
            <th width="13.33%">Gender</th>
            <th width="13.33%">Seat No.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td style="padding: 10px">Mr Mahesh kumar</td>
            <td>26</td>
            <td>TSG-B70106580</td>
            <td>M</td>
            <td>34</td>
          </tr>
        </tbody>
      </table>
    </div>
    <table style="text-align: center; width: 100%">
      <tr style="border-bottom: 1px solid black">
        <td style="padding: 10px; width: 33.33%"></td>
        <td width="33.33%"></td>
        <td style="text-align: right; padding: 10px; width: 33.33%">
          <b>Total:</b> <b>7844</b>
        </td>
      </tr>
      <tr>
        <td width="33.33%"></td>
        <td width="33.33%">
          <a href="" target="_blank">
            <button
              style="
                padding: 10px 15px;
                color: #fff;
                background-color: #1890ff;
                width: 100%;
                outline: 0;
                border: 0;
                cursor: pointer;
                font-weight: 600;
              "
            >
              View Ticket
            </button>
          </a>
        </td>
        <td style="padding: 10px" width="33.33%"></td>
      </tr>
    </table>
    ${this.footer.Template()}
  </div> `;
  };
}
