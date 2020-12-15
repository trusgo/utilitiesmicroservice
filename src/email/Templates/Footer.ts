import { Injectable } from '@nestjs/common';

@Injectable()
export class footer {
  Template = (businessData) => {
    return `
    <br/>If you have any query, please reach out to us at <b>${businessData.supportEmail}</b> with feedback and suggestions to improve our service.<br/><br/><b>Warm Regards,</b><br/><b><domain> Team ${businessData.companyName}.</b><br/>
    Address: ${businessData.address},<br/>Contact Number: ${businessData.mobile} ,<br/>Email id: ${businessData.contactEmail}<br/><br/>
    This is a system generated email. Please do not reply to this email. 
    `;
  };
}
