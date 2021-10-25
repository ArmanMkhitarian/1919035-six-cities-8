import {City} from './types';

export type Offer = {
  id: string
  city: City
  imageMain: string
  image: string[]
  price: number
  rating: number
  bedrooms: number
  maxAdults: number
  location: {
    latitude: number
    longitude: number
  }
  name: string
  isFavorite: boolean,
  isPremium: boolean,
  cardType: string
  inside: string[],
  hostName: string,
  description: string,
  reviews: Review[]
};

export type Review = {
  id: string,
  name: string,
  avatar: string,
  reviewText: string,
  rating: number,
  date: string
};

export type Reviews = Review[];
export type Offers = Offer[];
