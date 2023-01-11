
export interface Items {
  id: number;
  images: string[];
  name: string;
  text: string[];
  rating: number;
  genre: string[];
  date: Date;
  price: number,
};

export type IdItems = number[];

export type IdxSlide = number;

export type ListSortArr = number[][];
export type PageCount = number;
export type ListPageArr = number[][];

export type IsAuth = boolean;
export type Login = string;
export type Password = string;

export type BasketArr = number[];

export interface ReviewObj {
  id: number;
  login: string;
  review: string;
  date: Date;
}