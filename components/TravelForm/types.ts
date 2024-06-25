export interface Travel {
    id: number;
    name: string;
    departure: string;
    return: string;
    price: number;
    rating: number;
    description: string;
    picture: string;
}

export interface Props {
    travelToEdit: Travel | null;
}

export interface Emits {
    (e: 'save', travel: Travel): void;
}
