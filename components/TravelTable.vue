<template>
  <table class="table-auto w-full bg-white shadow rounded-lg">
    <thead class="bg-gray-100">
    <tr>
      <th class="px-4 py-2 text-left">Name</th>
      <th class="px-4 py-2 text-left">Departure</th>
      <th class="px-4 py-2 text-left">Return</th>
      <th class="px-4 py-2 text-left">Price</th>
      <th class="px-4 py-2 text-left">Rating</th>
      <th class="px-4 py-2 text-left">Description</th>
      <th class="px-4 py-2 text-left">Picture</th>
      <th class="px-4 py-2 text-left">Actions</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="travel in travels" :key="travel.id" class="border-t">
      <td class="px-4 py-2">{{ travel.name }}</td>
      <td class="px-4 py-2">{{ travel.departure }}</td>
      <td class="px-4 py-2">{{ travel.return }}</td>
      <td class="px-4 py-2">{{ travel.price }}</td>
      <td class="px-4 py-2">{{ travel.rating }}</td>
      <td class="px-4 py-2">{{ travel.description }}</td>
      <td class="px-4 py-2">
        <img :src="travel.picture" alt="Travel Picture" class="w-16 h-16 object-cover" />
      </td>
      <td class="px-4 py-2">
        <button @click="editTravel(travel)" class="btn btn-secondary btn-sm mr-2">Edit</button>
        <button @click="deleteTravel(travel.id)" class="btn btn-danger btn-sm">Delete</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
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
  travels: Travel[];
}>();

const emit = defineEmits(['update']);

const editTravel = (travel: Travel) => {
  // Implement edit functionality
};

const deleteTravel = (id: number) => {
  // Delete travel from your API or data source
  emit('update');
};
</script>
