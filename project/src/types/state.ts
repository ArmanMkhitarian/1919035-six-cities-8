import {CommentPost, Offer, Offers, Reviews} from './Offers';
import {AuthorizationStatus, DataStatus, SortType} from '../const';
import {RootState} from '../store/root-reducer';

export type State = RootState;

export type userData = {
  authorizationStatus: AuthorizationStatus,
  currentLogin: string | null,
};

export type offerData = {
  currentOffer: Offer,
  nearbyOffers: Offers,
  reviews: Reviews
};

export type offersData = {
  currentCity: string;
  offers: Offers;
  currentSortType: SortType;
  isDataLoaded: boolean,
  favoritesOffer: Offers,
  postReview: CommentPost,
  postDataStatus: DataStatus,
};
