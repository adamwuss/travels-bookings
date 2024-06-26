// test utils
import { mount } from "@vue/test-utils";
// vitest
import { describe, it, expect } from "vitest";
// components
import { BookingTable, BookingForm } from "~/components";
// pages
import ManageBookings from "~/pages/bookings.vue";

describe("ManageBookings", () => {
  it("renders BookingForm and BookingTable components", () => {
    const wrapper = mount(ManageBookings);
    expect(wrapper.findComponent(BookingForm).exists()).toBe(true);
    expect(wrapper.findComponent(BookingTable).exists()).toBe(true);
  });

  it("passes bookings to BookingTable", () => {
    const wrapper = mount(ManageBookings);
    const bookingTable = wrapper.findComponent(BookingTable);
    expect(bookingTable.props("bookings")).toEqual([
      {
        id: 1,
        travel: "Trip to Paris",
        customer: "John Doe",
        email: "john@example.com",
        phone: "123-456-7890",
        age: 30,
        gender: "male",
        payment: "Credit transfer",
        notes: "",
      },
    ]);
  });

  it("handles save booking correctly when adding a new booking", async () => {
    const wrapper = mount(ManageBookings);
    const newBooking = {
      id: Date.now(),
      travel: "Trip to New York",
      customer: "Jane Doe",
      email: "jane@example.com",
      phone: "987-654-3210",
      age: 28,
      gender: "female",
      payment: "Paypal",
      notes: "No notes",
    };

    wrapper.findComponent(BookingForm).vm.$emit("save", newBooking);
    // @ts-ignore
    expect(wrapper.vm.bookings).toHaveLength(2);
    // @ts-ignore
    expect(wrapper.vm.bookings[1]).toEqual(newBooking);
  });

  it("handles save booking correctly when editing an existing booking", async () => {
    const wrapper = mount(ManageBookings);
    const editedBooking = {
      id: 1,
      travel: "Trip to London",
      customer: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      age: 30,
      gender: "male",
      payment: "Credit transfer",
      notes: "Updated notes",
    };

    // @ts-ignore
    wrapper.vm.bookingToEdit = editedBooking;
    wrapper.findComponent(BookingForm).vm.$emit("save", editedBooking);
    // @ts-ignore
    expect(wrapper.vm.bookings).toHaveLength(1);
    // @ts-ignore
    expect(wrapper.vm.bookings[0]).toEqual(editedBooking);
  });

  it("handles edit booking correctly", async () => {
    const wrapper = mount(ManageBookings);
    const booking = {
      id: 1,
      travel: "Trip to Paris",
      customer: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      age: 30,
      gender: "male",
      payment: "Credit transfer",
      notes: "",
    };

    wrapper.findComponent(BookingTable).vm.$emit("edit", booking);
    // @ts-ignore
    expect(wrapper.vm.bookingToEdit).toEqual(booking);
  });

  it("handles delete booking correctly", async () => {
    const wrapper = mount(ManageBookings);

    wrapper.findComponent(BookingTable).vm.$emit("delete", 1);
    // @ts-ignore
    expect(wrapper.vm.bookings).toHaveLength(0);
  });
});
