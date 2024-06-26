import type { Booking } from "~/types";

export interface Props {
  bookings: Booking[];
}

export interface Emits {
  (e: "edit", booking: Booking): void;
  (e: "delete", id: number): void;
}
