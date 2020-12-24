export class BusCancelSMSTemplate{
     Template =(data)=>{
        const {  bookingRefNo,
            bookingStatus,
            noOfSeats,
            operator,
            busTypeName,
            departureTime,
            cancellationPolicy,
            sourceName,
            destinationName,
            JourneyDate,
            mobileNo,
            emailId,
            collectedFare,
            passengerInfo
        }= data
        let Seat = passengerInfo.map((seat)=>{
            return seat.seatNos
        })
         return `Ticket has been cancelled sucessfully for TKT NO: 100171008067(00118992),  ${sourceName} to ${destinationName}. SRVC NO: ${busTypeName}
         Seat: ${Seat},(M) FARE: ${collectedFare}, Date:${JourneyDate}, ${departureTime}.`
     }
}