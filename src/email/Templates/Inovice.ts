
import { Injectable } from '@nestjs/common'
import { footer } from './Footer'
import { header } from './Header'

@Injectable()
export class PaymentInvoice{
    constructor( private header:header, private footer:footer){}
 Template = async (data)=> {
     const{FirstName,LastName,Email,InvoiceNumber,Date,Amount}=data;
  return `
  ${this.header.Template()}
  <div>
  <b>Dear ${FirstName} ${LastName},</b>
  <br/><br/>Thank you for using <b>i2Space</b> service. Please see attached invoice number <b>${InvoiceNumber}</b> for the service you have used <br/><br/>
  <b>Invoice Overview :</b> <br/><b>Invoice Number :</b>  ${InvoiceNumber} <br/><b>Date :</b>  ${Date} <br/> <b>Amount :</b>  ${Amount}
  </div>
  ${await this.footer.Template().then((res)=>{
  
    return res
  })}
    ` 
};
}
