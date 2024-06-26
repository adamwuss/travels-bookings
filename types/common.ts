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
