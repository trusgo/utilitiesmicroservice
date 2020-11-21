import { Injectable, HttpStatus } from '@nestjs/common'
import { ApiService } from 'src/_common/api.service'

@Injectable()
export class EmailService {
    private readonly apiService: ApiService
    ) { }
  

  async sendMail(keyword: string): Promise<any> {
    try {

      return 'Helo!'
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
        data: []
      }
    }
  } 

 

}
