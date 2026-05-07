export interface Notices {
  _id: string;
  price?: string;
  species: Species;
  category: Categories;
  title: string;
  name: string;
  birthday: string;
  comment: string;
  sex: Sex;
  location: string;
  imgURL: string;
  createdAt: string;
  user: string;
  popularity: number;
  updatedAt: string;
}

export type Categories = "found" | "free" | "lost" | "sell";
export type Sex = "female" | "male" | "multiple" | "unknown";
export type Species =
  | "dog"
  | "cat"
  | "monkey"
  | "bird"
  | "snake"
  | "turtle"
  | "lizard"
  | "frog"
  | "fish"
  | "ants"
  | "bees"
  | "butterfly"
  | "spider"
  | "scorpion";

export interface NoticesQueryParams {
  keyword?: string;
  category?: Categories;
  species?: Species;
  page?: number;
  sex?: Sex;
}
