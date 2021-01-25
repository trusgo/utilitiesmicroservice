import { Injectable } from '@nestjs/common';
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class BusTicket {

  Template = (data) => {
    const policyStringArray = data.split(";");
    
    return ` <!DOCTYPE html>
    <html>
    <head>
    <title>Page Title</title>
    </head>
    <body>
    
     <div style=" text-align:center">
        <p className="policytitle">Cancellation Policy</p>
        <ul>
          <li style="display:flex; align-items: center; justify-content: space-between;">
            <p style = "text-align:left;">
              <b> Cancellation time </b>
            </p>
            <p>
              <b>Cancellation charges</b>
            </p>
          </li>
          ${policyStringArray.map((data, index) => {
            let val = data.split(":");
            if (index === 0) {
              return `
                <li style= "display:flex; align-items: center; justify-content: space-between;">
                  <p style = "text-align:left;">With in ${val[1]} Hrs</p>
                  <p>${val[2]}%</p>
                </li>
              `
            } else if (index === policyStringArray.length - 1) {
              return `
                <li style="display:flex; align-items: center; justify-content: space-between;">
                  <p style = "text-align:left;">Above ${val[0]} Hrs</p>
                  <p>${val[2]}%</p>
                </li>
              `
            } else {
              return `
                <li style="display:flex; align-items: center; justify-content: space-between;">
                  <p style = "text-align:left;">Between ${val[0]} to ${val[1]} Hrs </p>
                  <p>${val[2]}%</p>
                </li>
              `
            }
          })}
        </ul>
      </div>
    </body>
    </html>
    
     `
          
  };
}
