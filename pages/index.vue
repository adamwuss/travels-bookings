<template>
  <div class="p-6 bg-white shadow rounded-lg">
    <h1 class="text-2xl font-bold mb-4">Manage Travels</h1>
    <TravelForm />
    <TravelTable />
  </div>
</template>

<script setup lang="ts">
import { TravelTable, TravelForm } from "~/components";
</script>
