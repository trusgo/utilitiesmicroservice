import { Injectable } from '@nestjs/common';

@Injectable()
export class header{
 public Template = () => {
  
    return `
     this is aheader
    `;
  };
}