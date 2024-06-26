import type { Booking } from "~/types";

export interface Props {
  bookingToEdit: Booking | null;
}

export interface Emits {
  (e: "save", booking: Booking): void;
}
