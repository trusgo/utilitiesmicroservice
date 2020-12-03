import { HttpService, Injectable } from '@nestjs/common';
import {AxiosResponse} from 'axios'
import { response } from 'express';
import {Observable} from 'rxjs'
@Injectable()
export class footer{
  constructor(private httpService: HttpService) {}
  
  async findAll() {
    return await this.httpService.get('http://101.53.154.142/api/v1/admin/settings/1')
    .toPromise()
    .then((res)=>{
     return res.data
    }).then((r)=>{
      return r.data.settings
    })
    .catch(err=> console.log(err));
    
  }
  
  Template = async () => {

     const data = await this.findAll();
      const BusinessAddress = data.BusinessAddress[0]
     const {Address,PostalCode,CityID,CountryID}=BusinessAddress
     const {CompanyName,Email,MobileNumber,CountryCode} = data.userBusinessDetails
    
    return `
    <br/>If you have any query, please reach out to us at <b>${Email}</b> with feedback and suggestions to improve our service.<br/><br/><b>Warm Regards,</b><br/><b><domain> Team ${CompanyName}.</b><br/>
    Address: ${Address},<br/>Contact Number: +${CountryCode}- ${MobileNumber},<br/>Email id: ${Email}<br/><br/>
    This is a system generated email. Please do not reply to this email. 
    `;
  };
}