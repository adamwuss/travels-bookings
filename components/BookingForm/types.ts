export interface Booking {
    id: number;
    travel: string;
    customer: string;
    email: string;
    phone: string;
    age: number;
    gender: string;
    payment: string;
    notes: string;
}

export interface Props {
    bookingToEdit: Booking | null;
}

export interface Emits {
    (e: 'save', booking: Booking): void;
}
