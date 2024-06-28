// pinia
import { defineStore } from "pinia";
// types
import type { Travel } from "~/types";

export const useTravelStore = defineStore("travel", {
  state: () => ({
    travels: [] as Travel[],
    editingTravelId: 0,
  }),
  getters: {
    getAllTravels: (state) => state.travels,
    getTravelById: (state) => (id: number) =>
      state.travels.find((travel) => travel.id === id),
  },
  actions: {
    addTravel(travel: Travel) {
      travel.id = Date.now();
      this.travels.push(travel);
    },
    updateTravel(updatedTravel: Travel) {
      const index = this.travels.findIndex(
        (travel) => travel.id === updatedTravel.id,
      );
      if (index !== -1) {
        this.travels[index] = updatedTravel;
      }
    },
    deleteTravel(id: number) {
      this.travels = this.travels.filter((travel) => travel.id !== id);
    },
    setEditingTravel(id: number) {
      this.editingTravelId = id;
    },
  },
});
