export class FlightBookingSMSTemplate{
    Template = (data)=>{
        const { pnr,
            adult,
            child,
            infant,
            flightSegments} = data
        return ` Dear name , your Booking (<b>refNo:<b>) is confirmed with <pnr> .Booking Details ${flightSegments[0].origin} to ${flightSegments[0].destination} ,refNo: PNR number:${pnr}, Trip Type: Adult:${adult} Child:${child} Infant:${infant}`
    }
}