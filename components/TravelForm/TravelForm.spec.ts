// vitest
import { describe, it, expect, beforeEach } from "vitest";
// test utils
import { mount } from "@vue/test-utils";
// pinia
import { createPinia, setActivePinia } from 'pinia';
// component
import TravelForm from "./TravelForm.vue";

describe('TravelForm.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('renders correctly', () => {
    const wrapper = mount(TravelForm);
    expect(wrapper.exists()).toBe(true);
  });

  it('adds a travel correctly', async () => {
    const travelStore = useTravelStore();
    const wrapper = mount(TravelForm);

    await wrapper.find('#name').setValue('Trip to Berlin');
    await wrapper.find('#departure').setValue('2024-08-01');
    await wrapper.find('#return').setValue('2024-08-10');
    await wrapper.find('#price').setValue(1000);
    await wrapper.find('#rating').setValue(4.7);
    await wrapper.find('#description').setValue('A wonderful trip to Berlin');
    await wrapper.find('#picture').setValue('https://example.com/berlin.jpg');
    await wrapper.find('form').trigger('submit.prevent');

    expect(travelStore.travels).toHaveLength(1);
    expect(travelStore.travels[0].name).toBe('Trip to Berlin');
  });
});
