<template>
  <div class="p-6 bg-white shadow rounded-lg">
    <h1 class="text-2xl font-bold mb-4">Manage Travels</h1>
    <TravelForm @save="handleSaveTravel" :travelToEdit="travelToEdit" />
    <TravelTable :travels="travels" @edit="handleEditTravel" @delete="handleDeleteTravel" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
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

const travels = ref<Travel[]>([
  { id: 1, name: 'Trip to Paris', departure: '2024-07-01', return: '2024-07-10', price: 1200, rating: 4.5, description: 'A wonderful trip to Paris', picture: 'https://sa.visamiddleeast.com/dam/VCOM/regional/cemea/generic-cemea/travel-with-visa/destinations/paris/marquee-travel-paris-800x450.jpg' }
]);

const travelToEdit = ref<Travel | null>(null);

const handleSaveTravel = (travel: Travel) => {
  if (travelToEdit.value) {
    const index = travels.value.findIndex(t => t.id === travelToEdit.value?.id);
    if (index !== -1) {
      travels.value[index] = travel;
    }
    travelToEdit.value = null;
  } else {
    travel.id = Date.now();
    travels.value.push(travel);
  }
};

const handleEditTravel = (travel: Travel) => {
  travelToEdit.value = travel;
};

const handleDeleteTravel = (id: number) => {
  travels.value = travels.value.filter(travel => travel.id !== id);
};
</script>
