<template>
  <div class="mb-6 p-6 bg-white shadow rounded-lg">
    <h2 class="text-xl mb-4">Add Booking</h2>
    <form @submit.prevent="saveBooking" class="space-y-4">
      <div v-if="step === 1" class="space-y-4">
        <select v-model="booking.travel" class="input input-bordered w-full" required>
          <!-- Add options dynamically -->
          <option value="1">Trip to Paris</option>
          <option value="2">Trip to New York</option>
        </select>
        <button @click="nextStep" type="button" class="btn btn-primary w-full">Next</button>
      </div>
      <div v-if="step === 2" class="space-y-4">
        <input v-model="booking.customer" type="text" placeholder="Customer Name" class="input input-bordered w-full" required />
        <input v-model="booking.email" type="email" placeholder="Customer Email" class="input input-bordered w-full" required />
        <input v-model="booking.phone" type="tel" placeholder="Customer Phone" class="input input-bordered w-full" required />
        <input v-model="booking.age" type="number" placeholder="Customer Age" class="input input-bordered w-full" required />
        <select v-model="booking.gender" class="input input-bordered w-full" required>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button @click="nextStep" type="button" class="btn btn-primary w-full">Next</button>
      </div>
      <div v-if="step === 3" class="space-y-4">
        <select v-model="booking.payment" class="input input-bordered w-full" required>
          <option value="Credit transfer">Credit transfer</option>
          <option value="Paypal">Paypal</option>
          <option value="Revolut">Revolut</option>
        </select>
        <textarea v-model="booking.notes" placeholder="Notes" class="textarea textarea-bordered w-full"></textarea>
        <button type="submit" class="btn btn-primary w-full">Save Booking</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Booking {
  travel: string;
  customer: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  payment: string;
  notes: string;
}

const step = ref(1);
const booking = ref<Booking>({
  travel: '',
  customer: '',
  email: '',
  phone: '',
  age: 0,
  gender: '',
  payment: '',
  notes: ''
});

const emit = defineEmits(['save']);

const nextStep = () => {
  if (step.value < 3) step.value++;
};

const saveBooking = () => {
  // Save booking to your API or data source
  emit('save');
};
</script>
