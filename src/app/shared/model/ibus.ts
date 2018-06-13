import { ISeat } from "./iseat";

export interface IBus {
    NoOfSeats: string
    From: string
    To: string
    TripStartDate: string
    Id: string
    SeatDetails: ISeat[]
}
