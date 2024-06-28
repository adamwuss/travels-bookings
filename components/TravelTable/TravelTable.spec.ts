// vitest
import { describe, it, expect, beforeEach } from "vitest";
// test utils
import { mount } from "@vue/test-utils";
// pinia
import { createPinia, setActivePinia } from "pinia";
// component
import TravelTable from "./TravelTable.vue";

describe("TravelTable.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders correctly", () => {
    const wrapper = mount(TravelTable);
    expect(wrapper.exists()).toBe(true);
  });

  it("displays no travels message when there are no travels", () => {
    const wrapper = mount(TravelTable);
    expect(wrapper.text()).toContain("No travels available.");
  });

  it("displays travels correctly", () => {
    const travelStore = useTravelStore();
    travelStore.addTravel({
      id: 1,
      name: "Trip to Paris",
      departure: "2024-07-01",
      return: "2024-07-10",
      price: 1200,
      rating: 4.5,
      description: "A wonderful trip to Paris",
      picture: "https://example.com/paris.jpg",
    });

    const wrapper = mount(TravelTable);

    const rows = wrapper.findAll("tbody tr");
    expect(rows).toHaveLength(1);
    expect(rows[0].text()).toContain("Trip to Paris");
  });
});
