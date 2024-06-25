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
          <button @click="editBooking(booking)" class="btn btn-secondary btn-sm mr-2">Edit</button>
          <button @click="deleteBooking(booking.id)" class="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
// types
import type { Booking, Emits } from "./types";

defineProps<{
  bookings: Booking[];
}>();

const emit = defineEmits<Emits>();

const editBooking = (booking: Booking) => {
  emit('edit', booking);
};

const deleteBooking = (id: number) => {
  emit('delete', id);
};
</script>
