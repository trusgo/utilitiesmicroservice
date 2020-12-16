import { Injectable } from '@nestjs/common';
import 'dotenv/config';
@Injectable()
export class header {
  public Template = ({ logoUrl }) => {
    return `
    <img style="width:60px; height: 60px; position: absolute" alt="Logo" src="${logoUrl}"/><br/><br/>
    `;
  };
}
