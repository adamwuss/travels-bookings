<template>
  <div class="p-6 bg-white shadow rounded-lg">
    <h1 class="text-2xl font-bold mb-4">Manage Bookings</h1>
    <BookingForm @save="handleSaveBooking" :bookingToEdit="bookingToEdit" />
    <BookingTable :bookings="bookings" @edit="handleEditBooking" @delete="handleDeleteBooking" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BookingForm from '~/components/BookingForm.vue';
import BookingTable from '~/components/BookingTable.vue';

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

const bookings = ref<Booking[]>([
  { id: 1, travel: 'Trip to Paris', customer: 'John Doe', email: 'john@example.com', phone: '123-456-7890', age: 30, gender: 'male', payment: 'Credit transfer', notes: '' }
]);

const bookingToEdit = ref<Booking | null>(null);

const handleSaveBooking = (booking: Booking) => {
  if (bookingToEdit.value) {
    const index = bookings.value.findIndex(b => b.id === bookingToEdit.value?.id);
    if (index !== -1) {
      bookings.value[index] = booking;
    }
    bookingToEdit.value = null;
  } else {
    booking.id = Date.now();
    bookings.value.push(booking);
  }
};

const handleEditBooking = (booking: Booking) => {
  bookingToEdit.value = booking;
};

const handleDeleteBooking = (id: number) => {
  bookings.value = bookings.value.filter(booking => booking.id !== id);
};
</script>
