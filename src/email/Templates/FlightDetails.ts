import { Injectable } from '@nestjs/common';
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class FlightDetailsTemplete {
  constructor( private header:header, private footer:footer){}
  Template = (data) => {

    const { Email, FirstName, LastName, Mobile,flights} = data;

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
     <h2>Dear ${FirstName} ${LastName}</h2>
      <br/>Thank you for Contacting  <b>i2Space</b> <br/> We have List Out the Flight Details below that match to your journey
     </div>
 
     <div style="border: 1px solid black; margin-bottom: 15px">
       <h4 style="text-align: center; margin-bottom: 5px">Flight Details</h4>
 
       <table style="width: 90%; text-align: center ; padding-left: 3%">
         <tr style="color: #fff; background-color: #1890ff; font-size: 12px">
           <th style="width: 15%; padding: 12px 12px">Origin</th>
           <th style="width: 15%; padding: 12px 12px">Destination</th>
           <th style="width: 14%; padding: 12px 12px">Date</th>
           <th style="width: 13%; padding: 12px 12px">Duration</th>
           <th style="width: 13%; padding: 12px 12px">Price</th>
           <th style="width: 15%; padding: 12px 12px">preferred Class</th>
         </tr>
         ${
            flights.map((flight,t)=>{
                const{origin,destination,duration,date,amount,Class}=flight
                return(`
                <tr style="font-size: 11px">
                <td style="width:15%; padding: 8px">${origin}</td>
                <td style="width:15%; padding: 8px">${destination}</td>
                <td style="width:14%; padding: 8px">${date}</td>
                <td style="width:13%; padding: 8px">${duration}</td>
                <td style="width:13%; padding: 8px">${amount}</td>
                <td style="width:15%; padding: 8px">${Class}</td>
                </tr>
                `
                   
                )
            })
         }
        
       </table>
      </div>
     ${this.footer.Template()}
   </div> 
  
    `;
  };
}
