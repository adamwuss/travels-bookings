// test utils
import { mount } from "@vue/test-utils";
// vitest
import { describe, it, expect } from "vitest";
// component
import BookingForm from "./BookingForm.vue";

describe("BookingForm", () => {
  it("renders step 1 correctly", () => {
    const wrapper = mount(BookingForm);
    expect(wrapper.find("h2").text()).toBe("Add Booking");
    expect(wrapper.find("select#travel").exists()).toBe(true);
    expect(wrapper.find("button").text()).toBe("Next");
  });

  it("moves to step 2 when next button is clicked on step 1", async () => {
    const wrapper = mount(BookingForm);
    await wrapper.find("button").trigger("click");
    expect(wrapper.find("input#customer").exists()).toBe(true);
  });

  it("moves to step 3 when next button is clicked on step 2", async () => {
    const wrapper = mount(BookingForm);
    await wrapper.find("button").trigger("click");
    await wrapper.find("button").trigger("click");
    expect(wrapper.find("select#payment").exists()).toBe(true);
  });

  it("initializes with bookingToEdit correctly", async () => {
    const bookingToEdit = {
      id: 1,
      travel: "Trip to Paris",
      customer: "Jane Doe",
      email: "jane@example.com",
      phone: "987654321",
      age: 25,
      gender: "female",
      payment: "Credit transfer",
      notes: "Some notes",
    };
    const wrapper = mount(BookingForm, {
      props: { bookingToEdit },
    });

    // @ts-ignore
    expect(wrapper.vm.localBooking).toEqual(bookingToEdit);
  });
});
