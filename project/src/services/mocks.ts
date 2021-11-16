import {Offer, Offers, Review} from '../types/Offers';
import {AuthorizationStatus, SortType} from '../const';


export const getReviewsMock = (): Review[] => [
  {
    id: 1,
    comment: 'comment 1',
    rating: 4,
    date: '01.01.2021',
    user: {id: '10', name: 'user 1', avatarUrl: 'avatar', isPro: false},
  },
  {
    id: 2,
    comment: 'comment 2',
    rating: 5,
    date: '02.02.2021',
    user: {id: '11', name: 'user 2',  avatarUrl: 'avatar2', isPro: true},
  },
];

export const getReviewMock = (): Review => (
  {
    id: 1,
    comment: 'comment 1',
    rating: 4,
    date: '01.01.2021',
    user: {id: '10', name: 'user 1', avatarUrl: 'avatar', isPro: false},
  }
);

export const getOfferMock = (): Offer => (
  {
    id: '1',
    title: 'hotel 1',
    cardType: 'apart',
    description: 'description',
    bedrooms: 3,
    previewImage: 'img',
    isFavorite: false,
    isPremium: true,
    maxAdults: 5,
    price: 1500,
    rating: 4,
    images: ['image1', 'image2', 'image3'],
    goods: ['goods1', 'goods2'],
    location: {latitude: 45, longitude: 48, zoom: 10},
    city: {location: {latitude: 1.2, longitude: 2.2, zoom: 2}, name: 'Amsterdam'},
    host: {id: '10', name: 'host 1', avatarUrl: 'avatar', isPro: false},
  }
);

export const getOffersMock = (): Offers => [
  {
    id: '1',
    title: 'hotel 1',
    cardType: 'apart',
    description: 'description',
    bedrooms: 3,
    previewImage: 'img',
    isFavorite: false,
    isPremium: true,
    maxAdults: 5,
    price: 1500,
    rating: 4,
    images: ['image1', 'image2', 'image3'],
    goods: ['goods1', 'goods2'],
    location: {latitude: 45, longitude: 48, zoom: 10},
    city: {location: {latitude: 1.2, longitude: 2.2, zoom: 2}, name: 'Amsterdam'},
    host: {id: '10', name: 'host 1', avatarUrl: 'avatar', isPro: false},
  },
  {
    id: '1',
    title: 'hotel 1',
    cardType: 'apart',
    description: 'description',
    bedrooms: 3,
    previewImage: 'img',
    isFavorite: false,
    isPremium: true,
    maxAdults: 5,
    price: 1500,
    rating: 4,
    images: ['image1', 'image2', 'image3'],
    goods: ['goods1', 'goods2'],
    location: {latitude: 45, longitude: 48, zoom: 10},
    city: {location: {latitude: 1.2, longitude: 2.2, zoom: 2}, name: 'Amsterdam'},
    host: {id: '10', name: 'host 1', avatarUrl: 'avatar', isPro: false},
  },
];

export const userCommentPost: {comment: string, rating: number} = {
  'comment': 'A',
  'rating': 4,
};

export const getSort = (sort: SortType): SortType => (
  sort
);

export const getOffersDataMock = {
  currentCity: 'Paris',
  offers: getOffersMock(),
  currentSortType: SortType.Popular,
  isDataLoaded: false,
  favoritesOffer: getOffersMock(),
};

export const getUserData = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  currentLogin: '',
};
