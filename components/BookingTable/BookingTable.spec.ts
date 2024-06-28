// vitest
import { describe, it, expect, beforeEach } from "vitest";
// test utils
import { mount } from "@vue/test-utils";
// pinia
import { createPinia, setActivePinia } from 'pinia';
// component
import BookingTable from "./BookingTable.vue";

describe('BookingTable.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('renders correctly', () => {
    const wrapper = mount(BookingTable);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays bookings correctly', () => {
    const bookingStore = useBookingStore();
    bookingStore.addBooking({
      id: 1,
      travel: 'Trip to Paris',
      customer: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      age: 30,
      gender: 'male',
      payment: 'Credit transfer',
      notes: '',
    });

    const wrapper = mount(BookingTable);

    const rows = wrapper.findAll('tbody tr');
    expect(rows).toHaveLength(1);
    expect(rows[0].text()).toContain('John Doe');
  });
});
