import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class sendMailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail(to: string, subject: string, html: any, attach: any = false) {
    let attachedFile = {
      filename: 'attachement.png',
      path: attach,
    };

    try {
      const respone = await this.mailerService.sendMail({
        to: to, // list of receivers
        from: 'trickytop945@gmail.com', // sender address
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
}
