<template>
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
</template>

<script setup lang="ts">
interface Booking {
  id: number;
  travel: string;
  customer: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  payment: string;
  notes: string;
}

const props = defineProps<{
  bookings: Booking[];
}>();

const emit = defineEmits(['update']);

const editBooking = (booking: Booking) => {
  // Implement edit functionality
};

const deleteBooking = (id: number) => {
  // Delete booking from your API or data source
  emit('update');
};
</script>
