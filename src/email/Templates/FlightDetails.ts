import { Injectable } from '@nestjs/common';
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class FlightDetailsTemplete {
  constructor( private header:header, private footer:footer){}
  Template = async (data) => {

    const { Email, FirstName, LastName, Mobile,flightDetails} = data;

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
     <b>Dear ${FirstName} ${LastName},</b>
      <br/><br/>Thank you for Contacting  <b>i2Space</b> <br/> We have List Out the Flight Details below that match to your journey
     </div>
     <br/>
     <div style="border: 0px solid black; margin-bottom: 10px">
       <h4 style="text-align: center; margin-bottom: 5px">Flight Details</h4>
 
       <table style="width: 90%; text-align: center ; padding-left: 3%">
         <tr style="color: #fff; background-color: #1890ff; font-size: 12px">
           <th style="width: 22%; padding: 3px 2px">Origin</th>
           <th style="width: 22%; padding: 3px 2px">Destination</th>
           <th style="width: 14%; padding: 3px 2px">Date</th>
           <th style="width: 13%; padding: 3px 2px">Duration</th>
           <th style="width: 13%; padding: 3px 2px">Price</th>
           <th style="width: 15%; padding: 3px 2px">preferred Class</th>
         </tr>
         ${
            flightDetails.map((flight)=>{
              
                const{origin,destination,duration,date,amount,Class}=flight
                return(`
                <tr style="font-size: 11px">
                <td style="width:15%; padding: 4px">${origin}</td>
                <td style="width:15%; padding: 4px">${destination}</td>
                <td style="width:14%; padding: 4px">${date}</td>
                <td style="width:13%; padding: 4px">${duration}</td>
                <td style="width:13%; padding: 4px">${amount}</td>
                <td style="width:15%; padding: 4px">${Class}</td>
                </tr>
                `
                )
            })
         }
        
       </table>
      </div>
      ${await this.footer.Template().then((res)=>{
        
        return res
      })}
   </div> 
  
    `;
  };
}
