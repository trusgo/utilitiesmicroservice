export class BusBookingDetailsSMSTemplate{
    Template = (data)=>{
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
        return `TKT NO: 100171008067(00118992), from ${sourceName} to ${destinationName}. SRVC NO: ${busTypeName}
        Seat: ${Seat}, FARE: ${collectedFare}, Date: ${JourneyDate}, ${departureTime} has booked successfully.`
    }
}