export type Offer = {
  id: string
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
  cardType: string
  inside: string[],
  hostName: string,
  description: string,
  reviews: Review[]
};

export type Review = {
  name: string,
  avatar: string,
  reviewText: string,
  rating: number,
  date: string
};

export type Offers = Offer[];
