// test utils
import { mount } from "@vue/test-utils";
// vitest
import { describe, it, expect, beforeEach } from "vitest";
// pages
import ManageBookings from "~/pages/bookings.vue";
// pinia
import { createPinia, setActivePinia } from 'pinia';

describe('BookingsPage.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('renders correctly', () => {
    const wrapper = mount(ManageBookings);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays booking items correctly', () => {
    const bookingStore = useBookingStore();
    const travelStore = useTravelStore();
    travelStore.addTravel({
      id: 1,
      name: 'Trip to Paris',
      departure: '2024-07-01',
      return: '2024-07-10',
      price: 1200,
      rating: 4.5,
      description: 'A wonderful trip to Paris',
      picture: 'https://example.com/paris.jpg',
    });
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

    const wrapper = mount(ManageBookings);
    const rows = wrapper.findAll('tbody tr');
    expect(rows).toHaveLength(1);
    expect(rows[0].text()).toContain('John Doe');
  });
});
