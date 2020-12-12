import { Injectable } from '@nestjs/common';
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class flightItineraryTemplate {
  constructor(private header: header, private footer: footer) {}
  Template = (businessData, data) => {
    const { fareFamilies, flightSegments } = data;
    let flight = [
      {
        origin: 'HYD',
        destination: 'DEL',
        segment: [
          {
            flightName: 'vistra',
            DepatureTime: '2;34pm',
            ArrivalTime: '4:23',
            SourceId: 'HYD',
            DestionId: 'DEL',
            Totalduration: '5hr',
          },
          {
            flightName: 'vistra',
            DepatureTime: '2;34pm',
            ArrivalTime: '4:23',
            SourceId: 'HYD',
            DestionId: 'DEL',
            Totalduration: '5hr',
          },
        ],
      },
      {
        origin: 'BLR',
        destination: 'DEL',
        segment: [
          {
            flightName: 'AirIndo',
            DepatureTime: '2;34pm',
            ArrivalTime: '4:23',
            SourceId: 'HYD',
            DestionId: 'DEL',
            Totalduration: '5hr',
          },
        ],
      },
    ];

    return `
    ${this.header.Template(businessData)}
    <div>
      <center>
          <table  cellpadding="0" cellspacing="0" style="max-width:550px; color: #343434; font-family: 'NotoSans', sans-serif; font-size: 12px; width: 80%; background-color: #ffffff; border: 1px solid #e9ebf4; border-radius: 6px; padding: 24px 0px 16px; ">
          <tbody>
          ${flight.map((fli) => {
            const { origin, destination, segment } = fli;
            // {origin,fareFamilies,flightSegments,destination,airLineLogo}= flight
            // {totalFare}=fareFamilies
            return `                        
             <tr>
             <tr>
              <td colspan="3" style="
                               border-bottom: 1px solid #e9ebf4;
                               padding-bottom: 14px;
                               padding-left: 16px;
                               padding-right: 16px;
                             ">
                             <table cellpadding="0" cellspacing="0" style="
                                 color: #343434;
                                 font-family: 'NotoSans', sans-serif;
                                 font-size: 12px;
                                 width: 100%;
                               ">
                               <tbody>
                                 <tr>
                                   <td style="
                                       color: #1c2b39;
                                       font-size: 16px;
                                       margin: 0;
                                       padding: 0;
                                     ">
                                    ${origin} - ${destination}
                                   </td>
                                   <td rowspan="2" style="
                                       color: #1c2b39;
                                       font-size: 24px;
                                       font-weight: bold;
                                       text-align: right;
                                     ">
                                     €115
                                   </td>
                                 </tr>
                                 <tr>
                                   <td style="
                                       color: #1c2b39;
                                       font-size: 12px;
                                       margin: 0;
                                       padding: 0;
                                     ">
                                     12 Dec (Sat)
                                   </td>
                                 </tr>
                               </tbody>
                             </table>
                           </td>
                         </tr>
                         ${segment.map((seg) => {
                           const {
                             flightName,
                             DepatureTime,
                             ArrivalTime,
                             SourceId,
                             DestionId,
                             Totalduration,
                           } = seg;
                           //  const {origin, destination,departureDateTime,arrivalDateTime,journeyDuration,flightNumber,airLineName,airLineLogo} = seg
                           return `
                                 <tr>
                                 <td style="
                                     padding-left: 16px;
                                     padding-right: 16px;
                                     padding-bottom: 8px;
                                     padding-top: 8px;
                                   ">
                                   <img src="https://ci4.googleusercontent.com/proxy/hQd4N0AxwHFvazEZTKckb5HKrSmWA-YoHpj9IcQFlnpM9EkdiSXJjwduSlDTwWX_C_VI-YDaUGISOD6Q03xYcycYYnSf4RqntL2eVLA=s0-d-e1-ft#https://img.esky.com/_fe/img/al_logo_signet_UK.png?s=32x32" alt="" style="
                                       border: none;
                                       height: 24px;
                                       margin-right: 8px;
                                       vertical-align: middle;
                                       width: 24px;
                                     " class="CToWUd"><span style="
                                       font-size: 12px;
                                       font-weight: bold;
                                       vertical-align: middle;
                                     ">${flightName}</span>
                                 </td>
                               </tr>
                               <tr>
                                 <td class="m_-5192777040961214706leg-wrapper" style="
                                     padding-left: 16px;
                                     padding-right: 8px;
                                     padding-bottom: 8px;
                                   ">
                                   <table cellpadding="0" cellspacing="0" style="
                                       color: #343434;
                                       font-family: 'NotoSans', sans-serif;
                                       font-size: 12px;
                                       width: 100%;
                                       border-bottom: 1px solid #e9ebf4;
							           padding-bottom: 20px;
                                     ">
                                     <tbody>
                                       <tr>
                                         <td>
                                           <b>${DepatureTime}</b>
                                           ${SourceId}&nbsp;&nbsp;<span>→</span>&nbsp;&nbsp;<b>${ArrivalTime}</b>
                                          ${DestionId}
                                         </td>
                                         <td class="m_-5192777040961214706flight-time" style="color: #969dac; width: 65px">
                                          ${Totalduration}
                                         </td>
                                         <td class="m_-5192777040961214706flight-changes" style="
                                             color: #969dac;
                                             text-align: right;
                                             width: 90px;
                                           ">
                                           Direct
                                         </td>
                                       </tr>
                                     </tbody>
                                   </table>
                                 </td>
                               </tr>
                              
                                 `;
                         })}
                         </tr>
      
                         `;
          })}
                 
                         <tr>
                           <td style="
                               border-top: 1px solid #e9ebf4;
                               color: #182b3b;
                               font-size: 12px;
                               padding: 18px 0 20px;
                               text-align: center;
                               padding-left: 16px;
                               padding-right: 16px;
                             ">
                             Price may go up! - <b>Don't risk it, book now.</b>
                           </td>
                         </tr>
                         <tr>
                           <td style="padding-left: 16px; padding-right: 16px">
                             <a href="https://eskycom.emaillabs.info.pl/click/?lt=aHR0cHM6Ly93d3cuZXNreS5ldS9mbGlnaHRzL3NlbGVjdC9vbmV3YXkvYXAvaHlkL2FwL2Jscj9kZXBhcnR1cmVEYXRlPTIwMjAtMTItMTImYW1wO3BhPTEmYW1wO3B5PTAmYW1wO3BjPTAmYW1wO3BpPTAmYW1wO3NjPWVjb25vbXkmYW1wO3NlbGVjdGVkPWM0MGZiNjE2YzdmMTBhOTE2NjRjYmU2YWM4ODVmMTAyLEhZRC5CTFIlN0MxMTUsRVVSfE1EWXlSVVJFUlRRdE9USkRPUzFCUmpsQ0xUZEJOall0UmtFMFJVSTBSa05HUmtFMVFHVjBNaTVsYzJ0NWMyVnlkbWxqWlhNdWNHeDhWR2gxTENBd015QkVaV01nTWpBeU1DQXhNam94TURveU1pQXJNREV3TUh4dVlYSnZkSEpoTURVdU9UWkFaMjFoYVd3dVkyOXRmREV1WlhOcmVXTnZiUzV6YlhSd2ZISmxaR2R5YVdRME5Id3dmREV1TmpZellqUXlObVkzWWpBeE9ESXdOR1l3TkRJeU56SmtPVE14TjJKbFlUaz0%3D" style="
                                 color: #ffffff;
                                 text-decoration: none;
                                 background-color: #e2076a;
                                 display: block;
                                 font-family: 'Ubuntu', 'Arial', 'Helvetica',
                                   'sans-serif';
                                 font-size: 16px;
                                 font-weight: bold;
                                 padding: 18px 0;
                                 text-align: center;
                               " target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://eskycom.emaillabs.info.pl/click/?lt%3DaHR0cHM6Ly93d3cuZXNreS5ldS9mbGlnaHRzL3NlbGVjdC9vbmV3YXkvYXAvaHlkL2FwL2Jscj9kZXBhcnR1cmVEYXRlPTIwMjAtMTItMTImYW1wO3BhPTEmYW1wO3B5PTAmYW1wO3BjPTAmYW1wO3BpPTAmYW1wO3NjPWVjb25vbXkmYW1wO3NlbGVjdGVkPWM0MGZiNjE2YzdmMTBhOTE2NjRjYmU2YWM4ODVmMTAyLEhZRC5CTFIlN0MxMTUsRVVSfE1EWXlSVVJFUlRRdE9USkRPUzFCUmpsQ0xUZEJOall0UmtFMFJVSTBSa05HUmtFMVFHVjBNaTVsYzJ0NWMyVnlkbWxqWlhNdWNHeDhWR2gxTENBd015QkVaV01nTWpBeU1DQXhNam94TURveU1pQXJNREV3TUh4dVlYSnZkSEpoTURVdU9UWkFaMjFoYVd3dVkyOXRmREV1WlhOcmVXTnZiUzV6YlhSd2ZISmxaR2R5YVdRME5Id3dmREV1TmpZellqUXlObVkzWWpBeE9ESXdOR1l3TkRJeU56SmtPVE14TjJKbFlUaz0%253D&amp;source=gmail&amp;ust=1607080227233000&amp;usg=AFQjCNHdHXPpMekupOrzi0b2tCsO627Rpg">See the offer</a>
                           </td>
                         </tr>
                       </tbody>
                     </table>
                     </center>
         </div>
    ${this.footer.Template(businessData)}
   
    `;
  };
}
