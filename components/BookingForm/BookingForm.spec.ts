// vitest
import { describe, it, expect, beforeEach } from "vitest";
// test utils
import { mount } from "@vue/test-utils";
// pinia
import { createPinia, setActivePinia } from "pinia";
// component
import BookingForm from "./BookingForm.vue";

describe("BookingForm.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("renders correctly", () => {
    const wrapper = mount(BookingForm);
    expect(wrapper.exists()).toBe(true);
  });
});
