// test utils
import { mount } from "@vue/test-utils";
// vitest
import { describe, it, expect } from "vitest";
// component
import TravelTable from "./TravelTable.vue";

describe("TravelTable", () => {
  const travels = [
    {
      id: 1,
      name: "Trip to Paris",
      departure: "2023-07-01",
      return: "2023-07-10",
      price: 1200,
      rating: 5,
      description: "A wonderful trip to Paris.",
      picture: "https://example.com/paris.jpg",
    },
    {
      id: 2,
      name: "Trip to New York",
      departure: "2023-08-01",
      return: "2023-08-10",
      price: 1500,
      rating: 4,
      description: "A fun trip to New York.",
      picture: "https://example.com/ny.jpg",
    },
  ];

  it("renders the table with travel data", () => {
    const wrapper = mount(TravelTable, {
      props: { travels },
    });

    const rows = wrapper.findAll("tbody tr");
    expect(rows.length).toBe(travels.length);

    travels.forEach((travel, index) => {
      const columns = rows[index].findAll("td");
      expect(columns[0].text()).toBe(travel.name);
      expect(columns[1].text()).toBe(travel.departure);
      expect(columns[2].text()).toBe(travel.return);
      expect(columns[3].text()).toBe(`${travel.price} $`);
      expect(columns[4].text()).toBe(`${travel.rating}`);
      expect(columns[5].text()).toBe(travel.description);
      expect(columns[6].find("img").attributes("src")).toBe(travel.picture);
    });
  });

  it("emits edit event with correct travel data when edit button is clicked", async () => {
    const wrapper = mount(TravelTable, {
      props: { travels },
    });

    const editButton = wrapper.findAll("button")[0]; // First edit button
    await editButton.trigger("click");

    expect(wrapper.emitted().edit).toBeTruthy();
    // @ts-ignore
    expect(wrapper.emitted().edit[0][0]).toEqual(travels[0]);
  });

  it("emits delete event with correct travel id when delete button is clicked", async () => {
    const wrapper = mount(TravelTable, {
      props: { travels },
    });

    const deleteButton = wrapper.findAll("button")[1]; // First delete button
    await deleteButton.trigger("click");

    expect(wrapper.emitted().delete).toBeTruthy();
    // @ts-ignore
    expect(wrapper.emitted().delete[0][0]).toBe(travels[0].id);
  });
});
