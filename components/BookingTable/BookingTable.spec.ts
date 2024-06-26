// test utils
import { mount } from '@vue/test-utils';
// vitest
import { describe, it, expect } from 'vitest';
// component
import BookingTable from './BookingTable.vue';

describe('BookingTable', () => {
    const bookings = [
        {
            id: 1,
            travel: 'Trip to Paris',
            customer: 'John Doe',
            payment: 'Paypal',
            notes: 'Some notes',
            email: "",
            phone: "",
            age: 0,
            gender: "",
        },
        {
            id: 2,
            travel: 'Trip to New York',
            customer: 'Jane Smith',
            payment: 'Credit transfer',
            notes: 'Other notes',
            email: "",
            phone: "",
            age: 0,
            gender: "",
        }
    ];

    it('renders the table with booking data', () => {
        const wrapper = mount(BookingTable, {
            props: { bookings }
        });

        const rows = wrapper.findAll('tbody tr');
        expect(rows.length).toBe(bookings.length);

        bookings.forEach((booking, index) => {
            const columns = rows[index].findAll('td');
            expect(columns[0].text()).toBe(booking.travel);
            expect(columns[1].text()).toBe(booking.customer);
            expect(columns[2].text()).toBe(booking.payment);
            expect(columns[3].text()).toBe(booking.notes);
        });
    });

    it('emits edit event with correct booking data when edit button is clicked', async () => {
        const wrapper = mount(BookingTable, {
            props: { bookings }
        });

        const editButton = wrapper.findAll('button')[0]; // First edit button
        await editButton.trigger('click');

        expect(wrapper.emitted().edit).toBeTruthy();
        // @ts-ignore
        expect(wrapper.emitted().edit[0][0]).toEqual(bookings[0]);
    });

    it('emits delete event with correct booking id when delete button is clicked', async () => {
        const wrapper = mount(BookingTable, {
            props: { bookings }
        });

        const deleteButton = wrapper.findAll('button')[1]; // First delete button
        await deleteButton.trigger('click');

        expect(wrapper.emitted().delete).toBeTruthy();
        // @ts-ignore
        expect(wrapper.emitted().delete[0][0]).toBe(bookings[0].id);
    });
});
