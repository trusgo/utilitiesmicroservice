import { Injectable } from '@nestjs/common';
import 'dotenv/config'
@Injectable()
export class header{
 public Template = () => {
  
    return `
    <img style="width:60px; height: 60px; position: absolute" alt="qtrip logo" src=${process.env.QKTRIP_FAVICON}/><br/><br/>
    `;
  };
}