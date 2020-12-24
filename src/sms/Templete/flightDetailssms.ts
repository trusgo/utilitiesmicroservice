import { Injectable } from "@nestjs/common";

@Injectable()
export class flightDetailsSMSTemplete{
    Template =(data)=>{
        const { Email,
            FirstName,
            LastName,
            Mobile,
            origin,
            destination,
            DOJ,
            amount,
            Class,
            flightId}= data
           return ` Dear ${FirstName}${LastName} <br/> FlightDetails: <b>${origin}</b> - <b>${destination}</b> <b>${DOJ}</b> <b>FlightId:${flightId}</b> Amount:${amount}`
    }
}