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
    travels: Travel[];
}


export interface Emits {
    (e: 'edit', travel: Travel): void;
    (e: 'delete', id: number): void;
}
