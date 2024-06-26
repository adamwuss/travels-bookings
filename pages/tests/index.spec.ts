// test utils
import { mount } from "@vue/test-utils";
// vitest
import { describe, it, expect } from "vitest";
// components
import { TravelForm, TravelTable } from "~/components";
// pages
import ManageTravels from "~/pages/index.vue";

describe("ManageTravels", () => {
  it("renders TravelForm and TravelTable components", () => {
    const wrapper = mount(ManageTravels);
    expect(wrapper.findComponent(TravelForm).exists()).toBe(true);
    expect(wrapper.findComponent(TravelTable).exists()).toBe(true);
  });

  it("passes travels to TravelTable", () => {
    const wrapper = mount(ManageTravels);
    const travelTable = wrapper.findComponent(TravelTable);
    expect(travelTable.props("travels")).toEqual([
      {
        id: 1,
        name: "Trip to Paris",
        departure: "2024-07-01",
        return: "2024-07-10",
        price: 1200,
        rating: 4.5,
        description: "A wonderful trip to Paris",
        picture:
          "https://sa.visamiddleeast.com/dam/VCOM/regional/cemea/generic-cemea/travel-with-visa/destinations/paris/marquee-travel-paris-800x450.jpg",
      },
    ]);
  });

  it("handles save travel correctly when adding a new travel", async () => {
    const wrapper = mount(ManageTravels);
    const newTravel = {
      id: Date.now(),
      name: "Trip to New York",
      departure: "2024-08-01",
      return: "2024-08-10",
      price: 1500,
      rating: 5,
      description: "A fun trip to New York",
      picture: "https://example.com/ny.jpg",
    };

    wrapper.findComponent(TravelForm).vm.$emit("save", newTravel);
    // @ts-ignore
    expect(wrapper.vm.travels).toHaveLength(2);
    // @ts-ignore
    expect(wrapper.vm.travels[1]).toEqual(newTravel);
  });

  it("handles save travel correctly when editing an existing travel", async () => {
    const wrapper = mount(ManageTravels);
    const editedTravel = {
      id: 1,
      name: "Trip to London",
      departure: "2024-09-01",
      return: "2024-09-10",
      price: 1300,
      rating: 4,
      description: "A nice trip to London",
      picture: "https://example.com/london.jpg",
    };

    // @ts-ignore
    wrapper.vm.travelToEdit = editedTravel;
    wrapper.findComponent(TravelForm).vm.$emit("save", editedTravel);
    // @ts-ignore
    expect(wrapper.vm.travels).toHaveLength(1);
    // @ts-ignore
    expect(wrapper.vm.travels[0]).toEqual(editedTravel);
  });

  it("handles edit travel correctly", async () => {
    const wrapper = mount(ManageTravels);
    const travel = {
      id: 1,
      name: "Trip to Paris",
      departure: "2024-07-01",
      return: "2024-07-10",
      price: 1200,
      rating: 4.5,
      description: "A wonderful trip to Paris",
      picture:
        "https://sa.visamiddleeast.com/dam/VCOM/regional/cemea/generic-cemea/travel-with-visa/destinations/paris/marquee-travel-paris-800x450.jpg",
    };

    wrapper.findComponent(TravelTable).vm.$emit("edit", travel);
    // @ts-ignore
    expect(wrapper.vm.travelToEdit).toEqual(travel);
  });

  it("handles delete travel correctly", async () => {
    const wrapper = mount(ManageTravels);

    wrapper.findComponent(TravelTable).vm.$emit("delete", 1);
    // @ts-ignore
    expect(wrapper.vm.travels).toHaveLength(0);
  });
});
