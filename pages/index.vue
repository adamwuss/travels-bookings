<template>
  <div class="p-6 bg-white shadow rounded-lg">
    <h1 class="text-2xl font-bold mb-4">Manage Travels</h1>
    <TravelForm @save="fetchTravels" />
    <TravelTable :travels="travels" @update="fetchTravels" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TravelForm from '~/components/TravelForm.vue';
import TravelTable from '~/components/TravelTable.vue';

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

const travels = ref<Travel[]>([]);

const fetchTravels = async () => {
  travels.value = [
    { id: 1, name: 'Trip to Paris', departure: '2024-07-01', return: '2024-07-10', price: 1200, rating: 4.5, description: 'A wonderful trip to Paris', picture: 'https://example.com/paris.jpg' },
    // Add more travels
  ];
};

onMounted(fetchTravels);
</script>
