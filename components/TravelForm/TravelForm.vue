<template>
  <div class="mb-6 p-6 bg-white shadow rounded-lg">
    <h2 class="text-xl mb-4 font-semibold">
      {{ isEditing ? "Edit Travel" : "Add Travel" }}
    </h2>
    <form class="space-y-4" @submit.prevent="saveTravel">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Travel Name</label
        >
        <input
          id="name"
          v-model="localTravel.name"
          type="text"
          placeholder="Travel Name"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label for="departure" class="block text-sm font-medium text-gray-700"
            >Departure Date</label
          >
          <input
            id="departure"
            v-model="localTravel.departure"
            type="date"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label for="return" class="block text-sm font-medium text-gray-700"
            >Return Date</label
          >
          <input
            id="return"
            v-model="localTravel.return"
            type="date"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label for="price" class="block text-sm font-medium text-gray-700"
            >Price</label
          >
          <input
            id="price"
            v-model="localTravel.price"
            type="number"
            placeholder="Price"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label for="rating" class="block text-sm font-medium text-gray-700"
            >Rating (from 0 to 5)</label
          >
          <input
            id="rating"
            v-model="localTravel.rating"
            type="number"
            step="0.1"
            max="5"
            placeholder="Rating"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
      </div>
      <div>
        <label for="description" class="block text-sm font-medium text-gray-700"
          >Description</label
        >
        <textarea
          id="description"
          v-model="localTravel.description"
          placeholder="Description"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        ></textarea>
      </div>
      <div>
        <label for="picture" class="block text-sm font-medium text-gray-700"
          >Picture URL</label
        >
        <input
          id="picture"
          v-model="localTravel.picture"
          type="url"
          placeholder="Picture URL"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div class="flex justify-end">
        <button
          type="submit"
          class="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {{ isEditing ? "Update Travel" : "Save Travel" }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { useTravelStore } from "~/stores/travel";

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

const travelStore = useTravelStore();
const isEditing = ref(false);
const localTravel = ref<Travel>({
  id: 0,
  name: "",
  departure: "",
  return: "",
  price: 0,
  rating: 0,
  description: "",
  picture: "",
});

const resetForm = () => {
  localTravel.value = {
    id: 0,
    name: "",
    departure: "",
    return: "",
    price: 0,
    rating: 0,
    description: "",
    picture: "",
  };
  isEditing.value = false;
};

const saveTravel = () => {
  if (isEditing.value) {
    travelStore.updateTravel(localTravel.value);
  } else {
    travelStore.addTravel(localTravel.value);
  }
  resetForm();
};

const travelToEdit = computed(() =>
  travelStore.getTravelById(travelStore.editingTravelId),
);

watch(
  travelToEdit,
  (newValue) => {
    if (newValue) {
      localTravel.value = { ...newValue };
      isEditing.value = true;
    } else {
      resetForm();
    }
  },
  { immediate: true },
);
</script>
