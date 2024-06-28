<template>
  <div class="overflow-x-auto">
    <table class="table-auto w-full bg-white shadow rounded-lg">
      <thead class="bg-gray-100">
        <tr>
          <th class="px-4 py-2 text-left">Travel</th>
          <th class="px-4 py-2 text-left">Customer</th>
          <th class="px-4 py-2 text-left">Payment</th>
          <th class="px-4 py-2 text-left">Notes</th>
          <th class="px-4 py-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="booking in bookings" :key="booking.id" class="border-t">
          <td class="px-4 py-2">{{ booking.travel }}</td>
          <td class="px-4 py-2">{{ booking.customer }}</td>
          <td class="px-4 py-2">{{ booking.payment }}</td>
          <td class="px-4 py-2">{{ booking.notes }}</td>
          <td class="px-4 py-2">
            <button
              class="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              @click="editBooking(booking)"
            >
              Edit
            </button>
            <button
              class="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              @click="deleteBooking(booking.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
// vue
import { computed } from "vue";
// stores
import { useBookingStore } from "~/stores/booking";
// types
import type { Booking } from "~/types";

const bookingStore = useBookingStore();
const bookings = computed(() => bookingStore.getAllBookings);

const editBooking = (booking: Booking) => {
  bookingStore.updateBooking(booking);
};

const deleteBooking = (id: number) => {
  bookingStore.deleteBooking(id);
};
</script>
