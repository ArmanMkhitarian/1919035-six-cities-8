import {City} from './types';

export type Offer = {
  id: string
  city: City
  previewImage: string
  images: string[]
  price: number
  rating: number
  bedrooms: number
  maxAdults: number
  location: {
    latitude: number
    longitude: number
    zoom: number
  }
  title: string
  isFavorite: boolean,
  isPremium: boolean,
  cardType: string
  goods: string[],
  host: Host,
  description: string,
};

export type Review = {
  id: string,
  name: string,
  avatar: string,
  reviewText: string,
  rating: number,
  date: string
};

export type Host = {
  id: string,
  avatarUrl: string,
  name: string,
  isPro: boolean
};

export const adaptToClient = (data: any): Offer => ({
  city: {
    name: data['city']['name'],
    location: {
      latitude: data['city']['location']['latitude'],
      longitude: data['city']['location']['longitude'],
      zoom: data['city']['location']['zoom'],
    },
  },
  previewImage: data['preview_image'],
  images: data['images'],
  title: data['title'],
  isFavorite: data['is_favorite'],
  isPremium: data['is_premium'],
  rating: data['rating'],
  cardType: data['room'],
  bedrooms: data['bedrooms'],
  maxAdults: data['max_adults'],
  price: data['price'],
  goods: data['goods'],
  host: {
    id: data['host']['id'],
    name: data['host']['name'],
    isPro: data['host']['is_pro'],
    avatarUrl: data['host']['avatar_url'],
  },
  description: data['description'],
  location: {
    latitude: data['location']['latitude'],
    longitude: data['location']['longitude'],
    zoom: data['location']['zoom'],
  },
  id: data['id'],
});

export type Reviews = Review[];
export type Offers = Offer[];
