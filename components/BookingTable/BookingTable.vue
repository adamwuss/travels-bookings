<template>
  <div v-if="bookings.length" class="overflow-x-auto">
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
            <div
              class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
            >
              <button
                class="px-2 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                @click="editBooking(booking.id)"
              >
                Edit
              </button>
              <button
                class="px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                @click="deleteBooking(booking.id)"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <p v-else class="text-center text-gray-500">No bookings available.</p>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useBookingStore } from "~/stores/booking";

const bookingStore = useBookingStore();
const bookings = computed(() => bookingStore.getAllBookings);

const editBooking = (id) => {
  bookingStore.setEditingBooking(id);
};

const deleteBooking = (id) => {
  bookingStore.deleteBooking(id);
};
</script>
