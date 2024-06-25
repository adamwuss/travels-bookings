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

export interface Emits {
    (e: 'edit', booking: Booking): void;
    (e: 'delete', id: number): void;
}
