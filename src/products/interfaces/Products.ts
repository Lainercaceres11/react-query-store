// Generated by https://quicktype.io

export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: Rating;
}

export interface ProductLike {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface Rating {
  rate: number;
  count: number;
}