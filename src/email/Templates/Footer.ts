import { Injectable } from '@nestjs/common';

@Injectable()
export class footer{
  Template = () => {
  
    return `
     this is footer
    `;
  };
}