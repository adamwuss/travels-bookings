<template>
  <div class="mb-6">
    <h2 class="text-xl mb-4">Add/Edit Travel</h2>
    <form @submit.prevent="saveTravel" class="space-y-4">
      <input v-model="localTravel.name" type="text" placeholder="Travel Name" class="input input-bordered w-full" required />
      <div class="flex space-x-4">
        <input v-model="localTravel.departure" type="date" class="input input-bordered w-full" required />
        <input v-model="localTravel.return" type="date" class="input input-bordered w-full" required />
      </div>
      <input v-model="localTravel.price" type="number" placeholder="Price" class="input input-bordered w-full" required />
      <input v-model="localTravel.rating" type="number" step="0.1" max="5" placeholder="Rating" class="input input-bordered w-full" required />
      <textarea v-model="localTravel.description" placeholder="Description" class="textarea textarea-bordered w-full" required></textarea>
      <input v-model="localTravel.picture" type="url" placeholder="Picture URL" class="input input-bordered w-full" required />
      <button type="submit" class="btn btn-primary w-full">Save Travel</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue';

interface Travel {
  id: number;
  name: string;
  departure: string;
  return: string;
  price: number;
  rating: number;
  description: string;
  picture: string;
}

const props = defineProps<{
  travelToEdit: Travel | null;
}>();

const localTravel = ref<Travel>({
  id: 0,
  name: '',
  departure: '',
  return: '',
  price: 0,
  rating: 0,
  description: '',
  picture: ''
});

const emit = defineEmits(['save']);

const resetForm = () => {
  localTravel.value = {
    id: 0,
    name: '',
    departure: '',
    return: '',
    price: 0,
    rating: 0,
    description: '',
    picture: ''
  };
};

const saveTravel = () => {
  emit('save', localTravel.value);
  resetForm();
};

watch(
    () => props.travelToEdit,
    (newValue) => {
      if (newValue) {
        localTravel.value = { ...newValue };
      } else {
        resetForm();
      }
    },
    { immediate: true }
);
</script>
