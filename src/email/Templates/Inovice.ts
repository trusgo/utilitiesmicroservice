import { Injectable } from '@nestjs/common';
import { footer } from './Footer';
import { header } from './Header';

@Injectable()
export class PaymentInvoice {
  constructor(private header: header, private footer: footer) {}
  Template = (businessData, data) => {
    const { FirstName, LastName, Email, InvoiceNumber, Date, Amount } = data;
    return `
  ${this.header.Template(businessData)}
  <div>
  <p><b>Dear ${FirstName} ${LastName},</b>
  Thankyou for using <b>${businessData.companyName}</b> service.</p>
  <p>Your Payment is Successfull Please Find payment Details Below</p>
  <b>Invoice Number :</b>  ${InvoiceNumber} <br/>
  <b>Date :</b>  ${Date} <br/>
  <b>Amount :</b>  ${Amount}
  </div>
  ${this.footer.Template(businessData)}
    `;
  };
}
