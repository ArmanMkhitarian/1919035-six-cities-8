import {Offer} from '../types/Offers';

export const offers: Offer[] = [
  {
    id: '1',
    imageMain: 'img/apartment-01.jpg',
    image: ['img/room.jpg','img/apartment-01.jpg','img/apartment-02.jpg','img/apartment-03.jpg','img/studio-01.jpg','img/apartment-01.jpg'],
    price: 120,
    rating: 85,
    bedrooms: 3,
    maxAdults: 5,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
    },
    name: 'Beautiful luxurious studio at great location',
    cardType: 'Apartment',
    inside: ['Wi-Fi','Washing machine','Towels', 'Heating', 'Coffee machine','Baby seat','Kitchen','Dishwasher','Cabel TV','Fridge'],
    hostName: 'Angelina',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    reviews: [
      { name: 'Max',
        avatar: 'img/avatar-max.jpg',
        reviewText: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.The building is green and from 18th century.',
        rating: 80,
        date:'2019-04-24'}],
  },
  {
    id: '2',
    imageMain: 'img/room.jpg',
    image: ['img/room.jpg','img/apartment-01.jpg','img/apartment-02.jpg','img/apartment-03.jpg','img/studio-01.jpg','img/apartment-01.jpg'],
    price: 100,
    rating: 85,
    bedrooms: 1,
    maxAdults: 2,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
    },
    name: 'Wood and stone place',
    cardType: 'private room',
    inside: ['Wi-Fi','Washing machine','Towels', 'Heating', 'Coffee machine','Baby seat','Kitchen','Dishwasher','Cabel TV','Fridge'],
    hostName: 'Angelina',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    reviews: [
      { name: 'Max',
        avatar: 'img/avatar-max.jpg',
        reviewText: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.The building is green and from 18th century.',
        rating: 80,
        date:'2019-04-24'}],
  },
  {
    id: '3',
    imageMain: 'img/apartment-02.jpg',
    image: ['img/room.jpg','img/apartment-01.jpg','img/apartment-02.jpg','img/apartment-03.jpg','img/studio-01.jpg','img/apartment-01.jpg'],
    price: 150,
    rating: 85,
    bedrooms: 2,
    maxAdults: 4,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
    },
    name: 'Canal View Prinsengracht',
    cardType: 'private room',
    inside: ['Wi-Fi','Washing machine','Towels', 'Heating', 'Coffee machine','Baby seat','Kitchen','Dishwasher','Cabel TV','Fridge'],
    hostName: 'Angelina',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    reviews: [
      { name: 'Max',
        avatar: 'img/avatar-max.jpg',
        reviewText: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.The building is green and from 18th century.',
        rating: 80,
        date:'2019-04-24'}],
  },
  {
    id: '4',
    imageMain: 'img/apartment-03.jpg',
    image: ['img/room.jpg','img/apartment-01.jpg','img/apartment-02.jpg','img/apartment-03.jpg','img/studio-01.jpg','img/apartment-01.jpg'],
    price: 160,
    rating: 85,
    bedrooms: 4,
    maxAdults: 6,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
    },
    name: 'Nice, cozy, warm big bed apartment',
    cardType: 'private room',
    inside: ['Wi-Fi','Washing machine','Towels', 'Heating', 'Coffee machine','Baby seat','Kitchen','Dishwasher','Cabel TV','Fridge'],
    hostName: 'Angelina',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    reviews: [
      { name: 'Max',
        avatar: 'img/avatar-max.jpg',
        reviewText: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.The building is green and from 18th century.',
        rating: 80,
        date:'2019-04-24'}],
  },
];