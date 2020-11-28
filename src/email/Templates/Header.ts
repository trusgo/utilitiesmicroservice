import { Injectable } from '@nestjs/common';

@Injectable()
export class header{
 public Template = () => {
  
    return `
    <img style="width:60px; height: 60px; position: absolute" alt="qtrip logo" src="https://lh3.googleusercontent.com/gctSEqudBf9HVKxAdmmS3Dtacy8H5QG-m80szVfvdeDaYE8Y0X3H4jyWLF8eq0E5xZV5=s128"/><br/>
    `;
  };
}