import { HttpService, Injectable } from "@nestjs/common";

@Injectable()
export class sendSMSServic{
    constructor(private readonly http:HttpService){}
 async sendSMS(reqBody:any){

     const smsOtp = await this.http.post(process.env.SMS_GATEWAY_URL,reqBody).toPromise()
     if(smsOtp.status==200){
         return {
             status:200,
             message:"Success"
         }
     }
 }
}