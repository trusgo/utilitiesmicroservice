import { Injectable } from "@nestjs/common";
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class sendMailService {
    constructor(
            private readonly mailerService: MailerService){}
sendEmail(to: string, subject: string, data: any){
    try{ const mail = this
        .mailerService
        .sendMail({
          to: to, // list of receivers
          from: 'trickytop945@gmail.com', // sender address
          subject: subject, // Subject line
          text: '', // plaintext body
          html: data, // HTML body content
        })
      }
      catch(e){
        console.log(e);
        
      }
}
}