<template>
  <div class="mb-6 p-6 bg-white shadow rounded-lg">
    <h2 class="text-xl mb-4 font-semibold">Add Booking</h2>
    <form class="space-y-4" @submit.prevent="saveBooking">
      <div v-if="step === 1" class="space-y-4">
        <label for="travel" class="block text-sm font-medium text-gray-700"
          >Select Travel</label
        >
        <select
          id="travel"
          v-model="localBooking.travel"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        >
          <option
            v-for="travel in travels"
            :key="travel.id"
            :value="travel.name"
          >
            {{ travel.name }}
          </option>
        </select>
        <div class="flex justify-end">
          <button
            type="button"
            class="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="nextStep"
          >
            Next
          </button>
        </div>
      </div>
      <div v-if="step === 2" class="space-y-4">
        <div>
          <label for="customer" class="block text-sm font-medium text-gray-700"
            >Customer Name</label
          >
          <input
            id="customer"
            v-model="localBooking.customer"
            type="text"
            placeholder="Customer Name"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Customer Email</label
          >
          <input
            id="email"
            v-model="localBooking.email"
            type="email"
            placeholder="Customer Email"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700"
            >Customer Phone</label
          >
          <input
            id="phone"
            v-model="localBooking.phone"
            type="tel"
            placeholder="Customer Phone"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label for="age" class="block text-sm font-medium text-gray-700"
            >Customer Age</label
          >
          <input
            id="age"
            v-model="localBooking.age"
            type="number"
            placeholder="Customer Age"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label for="gender" class="block text-sm font-medium text-gray-700"
            >Gender</label
          >
          <select
            id="gender"
            v-model="localBooking.gender"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="flex justify-end">
          <button
            type="button"
            class="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="nextStep"
          >
            Next
          </button>
        </div>
      </div>
      <div v-if="step === 3" class="space-y-4">
        <div>
          <label for="payment" class="block text-sm font-medium text-gray-700"
            >Payment Method</label
          >
          <select
            id="payment"
            v-model="localBooking.payment"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="Credit transfer">Credit transfer</option>
            <option value="Paypal">Paypal</option>
            <option value="Revolut">Revolut</option>
          </select>
        </div>
        <div>
          <label for="notes" class="block text-sm font-medium text-gray-700"
            >Notes</label
          >
          <textarea
            id="notes"
            v-model="localBooking.notes"
            placeholder="Notes"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <div class="flex justify-end">
          <button
            type="submit"
            class="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Booking
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
// vue
import { ref, computed } from "vue";
// stores
import { useBookingStore } from "~/stores/booking";
import { useTravelStore } from "~/stores/travel";
// types
import type { Booking } from "~/types";

const bookingStore = useBookingStore();
const travelStore = useTravelStore();
const travels = computed(() => travelStore.getAllTravels);
const localBooking = ref<Booking>({
  id: 0,
  travel: "",
  customer: "",
  email: "",
  phone: "",
  age: 0,
  gender: "",
  payment: "",
  notes: "",
});

const step = ref(1);

const resetForm = () => {
  localBooking.value = {
    id: 0,
    travel: "",
    customer: "",
    email: "",
    phone: "",
    age: 0,
    gender: "",
    payment: "",
    notes: "",
  };
  step.value = 1;
};

const saveBooking = () => {
  if (localBooking.value.id) {
    bookingStore.updateBooking(localBooking.value);
  } else {
    bookingStore.addBooking(localBooking.value);
  }
  resetForm();
};

const nextStep = () => {
  if (step.value < 3) step.value++;
};
</script>
