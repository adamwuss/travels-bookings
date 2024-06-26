<template>
  <div class="overflow-x-auto">
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
          <td class="px-4 py-2">
            {{ travel.name }}
          </td>
          <td class="px-4 py-2">
            {{ travel.departure }}
          </td>
          <td class="px-4 py-2">
            {{ travel.return }}
          </td>
          <td class="px-4 py-2">{{ travel.price }} $</td>
          <td class="px-4 py-2">
            {{ travel.rating }}
          </td>
          <td class="px-4 py-2">
            {{ travel.description }}
          </td>
          <td class="px-4 py-2">
            <img
              :src="travel.picture"
              alt="Travel Picture"
              class="w-16 h-16 object-cover"
            />
          </td>
          <td class="px-4 py-2">
            <button
              class="btn btn-secondary btn-sm mr-2"
              @click="editTravel(travel)"
            >
              Edit
            </button>
            <button
              class="btn btn-danger btn-sm"
              @click="deleteTravel(travel.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
// types
import type { Travel } from "~/types";
import type { Emits, Props } from "./types";

defineProps<Props>();

const emit = defineEmits<Emits>();

const editTravel = (travel: Travel) => {
  emit("edit", travel);
};

const deleteTravel = (id: number) => {
  emit("delete", id);
};
</script>
