
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

export interface MainState {
  randomIdItemsArr: number[];
  idxSlide: number;
  categoryListIndex: number;
};

export type ListSortArr = number[][];
export type ListPageArr = number[][];

export interface ReviewObj {
  id: number;
  login: string;
  review: string;
  date: Date;
  rating: number | null;
};

export interface ReviewsState {
  reviews: ReviewObj[];
};

export interface User {
  password: string;
  favorites: number[];
  basket: number[];
};
export type UsersMap = Map<string, User>;

export interface UsersState {
  users: UsersMap;
};

export interface AuthState {
  loginAuth: string;
  isAuth: boolean;
  loginMenu?: boolean;
};

export interface SearchState {
  openedFiltered: boolean;
  filteredArr: Items[];
};

export interface RatingState {
  averageRating: [
    {
      id: number;
      rating: number;
    }
  ];
};

export interface RatingObj {
  id: number;
  rating: number;
};