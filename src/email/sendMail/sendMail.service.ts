import { Injectable,HttpService } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { header } from '../Templates/Header';
// import {MailService} from '@sendgrid/mail'
@Injectable()
export class sendMailService {
  constructor(private readonly mailerService: MailerService, private readonly httpservice:HttpService) {}

  async sendEmail(
    to: string,
    subject: string,
    html: any,
    cc?: string,
    bcc?: string,
    attach: any = false,
  ) {
    console.log('sending Email', { to });
    let attachedFile = {
      filename: 'attachement.png',
      path: attach,
    };

    try {
      const respone = await this.mailerService.sendMail({
        to: to, // list of receivers
        // to: 'trickytop945@gmail.com', // sender address
        from: process.env.MAIL_USER,
        cc: process.env.MAIL_CC,
        bcc: process.env.MAIL_BCC,
        // from:'contact@trusgo.com',
        subject: subject, // Subject line
        text: '', // plaintext body
        html: html, // HTML body content
        attachments: attach ? [attachedFile] : [],
      });
      return { ...respone, status: 200 };
    } catch (e) {
      console.log('sendMail error', e);
      return {
        status: 202,
        erro: e,
        message: 'Error Sending Email',
      };
    }
  }
  async sendGridEMail(to:string,TempID:string,ReqBody:any){
    const req ={
      from:{
          email:process.env.MAIL_USER
      },
      personalizations:[{
           to:[
               {
                 email:to
              }
          ],
           dynamic_template_data:ReqBody
      }   
      ],
      template_id:TempID
  }
  const postheader = {
    'Content-Type':'application/json',
    'Accept':'application/json',
    'Authorization':`Bearer ${process.env.SENDGRID_TOKEN}`
  }

    try{
       const respone = await this.httpservice.post(process.env.SENDGRID_EMAIL_URL,req,{headers:postheader}).toPromise()
       return { ...respone, status: 200 };
    }
    catch(error){
      return {
        status: 202,
        erro: error,
        message: 'Error Sending Email',
      };
    }
  }
}
