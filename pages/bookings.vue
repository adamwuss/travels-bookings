<template>
  <div class="p-6 bg-white shadow rounded-lg">
    <h1 class="text-2xl font-bold mb-4">Manage Bookings</h1>
    <BookingForm @save="fetchBookings" />
    <BookingTable :bookings="bookings" @update="fetchBookings" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
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

const bookings = ref<Booking[]>([]);

const fetchBookings = async () => {
  bookings.value = [
    { id: 1, travel: 'Trip to Paris', customer: 'John Doe', email: 'john@example.com', phone: '123-456-7890', age: 30, gender: 'male', payment: 'Credit transfer', notes: '' },
    // Add more bookings
  ];
};

onMounted(fetchBookings);
</script>
