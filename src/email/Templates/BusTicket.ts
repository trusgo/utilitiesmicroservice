import { Injectable } from '@nestjs/common';
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class BusTicket {

  Template = (data) => {
    const policyStringArray = data.split(";");
    
    return ` (
      <div style=" text-align:center">
        <p className="policytitle">Cancellation Policy</p>
        <ul>
          <li>
            <p>
              <b> Cancellation time </b>
            </p>
            <p>
              <b>Cancellation charges</b>
            </p>
          </li>
          ${policyStringArray.map((data, index) => {
            let val = data.split(":");
            if (index === 0) {
              return `(
                <li>
                  <p>With in ${val[1]} Hrs</p>
                  <p>${val[2]}%</p>
                </li>
              )`;
            } else if (index === policyStringArray.length - 1) {
              return `(
                <li>
                  <p>Above ${val[0]} Hrs</p>
                  <p>${val[2]}%</p>
                </li>
              )`;
            } else {
              return `(
                <li>
                  <p>Between ${val[0]} to ${val[1]} Hrs </p>
                  <p>${val[2]}%</p>
                </li>
              )`;
            }
          })}
        </ul>
      </div>
    );`
          
  };
}
