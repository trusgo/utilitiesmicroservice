import { Injectable, HttpService, Logger, HttpStatus } from '@nestjs/common';

//import { methodsEnum, LogDto } from '../dto/apiLog.dto';
//import { HotelSearch } from '../dto/HotelSearch.dto';
//import { ConfirmBookingRQ } from '../dto/booking.dto';

const logger = new Logger('API Service');

const headers = {
  'Content-Type': 'application/json',
  'Accept-Encoding': 'gzip',
  'Authorization': process.env.Authorization
};

@Injectable()
export class ApiService {
  constructor(private readonly http: HttpService) { }

  //#region // Get Cities
  async sendMail(keyword: string): Promise<any> {
    try {
      const URL = process.env.GET_CITY_DUMP + keyword
      const response = await this.http.get(URL, { headers: headers }).toPromise()
      return response.data
    } catch (error) {
      return error.response.data
    }
  }
}