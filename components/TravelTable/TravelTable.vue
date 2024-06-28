<template>
  <div v-if="travels.length" class="overflow-x-auto">
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
            <img
              :src="travel.picture"
              alt="Travel Picture"
              class="w-16 h-16 object-cover"
            />
          </td>
          <td class="px-4 py-2">
            <div
              class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
            >
              <button
                class="px-2 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                @click="editTravel(travel.id)"
              >
                Edit
              </button>
              <button
                class="px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                @click="deleteTravel(travel.id)"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <p v-else class="text-center text-gray-500">No travels available.</p>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useTravelStore } from "~/stores/travel";

const travelStore = useTravelStore();
const travels = computed(() => travelStore.getAllTravels);

const editTravel = (id) => {
  travelStore.setEditingTravel(id);
};

const deleteTravel = (id) => {
  travelStore.deleteTravel(id);
};
</script>
