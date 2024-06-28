// pinia
import { defineStore } from "pinia";
// types
import type { Booking } from "~/types";

export const useBookingStore = defineStore("booking", {
  state: () => ({
    bookings: [] as Booking[],
    editingBookingId: 0,
  }),
  getters: {
    getAllBookings: (state) => state.bookings,
    getBookingById: (state) => (id: number) =>
      state.bookings.find((booking) => booking.id === id),
  },
  actions: {
    addBooking(booking: Booking) {
      booking.id = Date.now();
      this.bookings.push(booking);
    },
    updateBooking(updatedBooking: Booking) {
      const index = this.bookings.findIndex(
        (booking) => booking.id === updatedBooking.id,
      );
      if (index !== -1) {
        this.bookings[index] = updatedBooking;
      }
    },
    deleteBooking(id: number) {
      this.bookings = this.bookings.filter((booking) => booking.id !== id);
    },
    setEditingBooking(id: number) {
      this.editingBookingId = id;
    },
  },
});
