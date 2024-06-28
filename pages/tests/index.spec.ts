// test utils
import { mount } from "@vue/test-utils";
// vitest
import { describe, it, expect, beforeEach } from "vitest";
// pages
import ManageTravels from "~/pages/index.vue";
// pinia
import { createPinia, setActivePinia } from "pinia";

describe("ManageTravels", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders correctly", () => {
    const wrapper = mount(ManageTravels);
    expect(wrapper.exists()).toBe(true);
  });

  it("displays travel items correctly", () => {
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

    const wrapper = mount(ManageTravels);
    const rows = wrapper.findAll("tbody tr");
    expect(rows).toHaveLength(1);
    expect(rows[0].text()).toContain("Trip to Paris");
  });
});
