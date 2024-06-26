// test utils
import { mount } from '@vue/test-utils';
// vitest
import { describe, it, expect } from 'vitest';
// component
import TravelForm from "./TravelForm.vue"

describe('TravelForm', () => {
    it('renders the form correctly', () => {
        const wrapper = mount(TravelForm);
        expect(wrapper.find('h2').text()).toBe('Add/Edit Travel');
        expect(wrapper.find('input#name').exists()).toBe(true);
        expect(wrapper.find('input#departure').exists()).toBe(true);
        expect(wrapper.find('input#return').exists()).toBe(true);
        expect(wrapper.find('input#price').exists()).toBe(true);
        expect(wrapper.find('input#rating').exists()).toBe(true);
        expect(wrapper.find('textarea#description').exists()).toBe(true);
        expect(wrapper.find('input#picture').exists()).toBe(true);
    });

    it('emits save event with correct data when form is submitted', async () => {
        const wrapper = mount(TravelForm);

        await wrapper.find('input#name').setValue('Trip to Paris');
        await wrapper.find('input#departure').setValue('2023-07-01');
        await wrapper.find('input#return').setValue('2023-07-10');
        await wrapper.find('input#price').setValue(1200);
        await wrapper.find('input#rating').setValue(5);
        await wrapper.find('textarea#description').setValue('A wonderful trip to Paris.');
        await wrapper.find('input#picture').setValue('https://example.com/picture.jpg');

        await wrapper.find('form').trigger('submit.prevent');

        expect(wrapper.emitted().save).toBeTruthy();
        // @ts-ignore
        expect(wrapper.emitted().save[0][0]).toEqual({
            id: 0,
            name: 'Trip to Paris',
            departure: '2023-07-01',
            return: '2023-07-10',
            price: 1200,
            rating: 5,
            description: 'A wonderful trip to Paris.',
            picture: 'https://example.com/picture.jpg'
        });
    });

    it('resets form after save', async () => {
        const wrapper = mount(TravelForm);

        await wrapper.find('input#name').setValue('Trip to Paris');
        await wrapper.find('input#departure').setValue('2023-07-01');
        await wrapper.find('input#return').setValue('2023-07-10');
        await wrapper.find('input#price').setValue(1200);
        await wrapper.find('input#rating').setValue(5);
        await wrapper.find('textarea#description').setValue('A wonderful trip to Paris.');
        await wrapper.find('input#picture').setValue('https://example.com/picture.jpg');

        await wrapper.find('form').trigger('submit.prevent');

        // @ts-ignore
        expect(wrapper.vm.localTravel).toEqual({
            id: 0,
            name: '',
            departure: '',
            return: '',
            price: 0,
            rating: 0,
            description: '',
            picture: ''
        });
    });

    it('initializes with travelToEdit correctly', async () => {
        const travelToEdit = {
            id: 1,
            name: 'Trip to New York',
            departure: '2023-08-01',
            return: '2023-08-10',
            price: 1500,
            rating: 4,
            description: 'A fun trip to New York.',
            picture: 'https://example.com/ny.jpg'
        };
        const wrapper = mount(TravelForm, {
            props: { travelToEdit }
        });

        // @ts-ignore
        expect(wrapper.vm.localTravel).toEqual(travelToEdit);
    });
});
