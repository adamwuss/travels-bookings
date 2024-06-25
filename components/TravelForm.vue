<template>
  <div class="mb-6">
    <h2 class="text-xl mb-4">Add/Edit Travel</h2>
    <form @submit.prevent="saveTravel" class="space-y-4">
      <input v-model="travel.name" type="text" placeholder="Travel Name" class="input input-bordered w-full" required />
      <div class="flex space-x-4">
        <input v-model="travel.departure" type="date" class="input input-bordered w-full" required />
        <input v-model="travel.return" type="date" class="input input-bordered w-full" required />
      </div>
      <input v-model="travel.price" type="number" placeholder="Price" class="input input-bordered w-full" required />
      <input v-model="travel.rating" type="number" step="0.1" max="5" placeholder="Rating" class="input input-bordered w-full" required />
      <textarea v-model="travel.description" placeholder="Description" class="textarea textarea-bordered w-full" required></textarea>
      <input v-model="travel.picture" type="url" placeholder="Picture URL" class="input input-bordered w-full" required />
      <button type="submit" class="btn btn-primary w-full">Save Travel</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Travel {
  name: string;
  departure: string;
  return: string;
  price: number;
  rating: number;
  description: string;
  picture: string;
}

const travel = ref<Travel>({
  name: '',
  departure: '',
  return: '',
  price: 0,
  rating: 0,
  description: '',
  picture: ''
});

const emit = defineEmits(['save']);

const saveTravel = () => {
  // Save travel to your API or data source
  emit('save');
};
</script>
