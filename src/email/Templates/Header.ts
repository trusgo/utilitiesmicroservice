import { Injectable } from '@nestjs/common';

@Injectable()
export class header{
 public Template = () => {
  
    return `
    <img style="width:60px; height: 60px; position: absolute; background-color:#0080ff" alt="qtrip logo" src="http://qktrip.i2space.in/static/media/qktrip_logo_2.f3499cdd.png"/><br/><br/>
    `;
  };
}