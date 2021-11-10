import {Offer, Offers, Reviews} from './Offers';
import {AuthorizationStatus, SortType} from '../const';

type State = {
  currentCity: string;
  offers: Offers;
  currentSortType: SortType;
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  currentLogin: string | null,
  currentOffer: Offer,
  nearbyOffers: Offers,
  reviews: Reviews
};

export type {State};
