import {Actions, ActionType} from './action';
import {State} from '../types/state';
import {AuthorizationStatus, SortType} from '../const';
import {Offer} from '../types/Offers';

const initialState = {
  currentCity: 'Paris',
  offers: [],
  currentSortType: SortType.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  currentLogin: '',
  currentOffer: {} as Offer,
  nearbyOffers: [],
  reviews: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SwitchCity:
      return {...state, currentCity: action.payload};
    case ActionType.SwitchSort:
      return {...state, currentSortType: action.payload};
    case ActionType.RequireAuthorization:
      return  {...state, authorizationStatus: action.payload};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    case ActionType.OffersLoad:
      return {...state, offers: action.payload, isDataLoaded: true};
    case ActionType.GetCurrentLogin:
      return {...state, currentLogin: action.payload};
    case ActionType.GetCurrentOffer:
      return { ...state, currentOffer: action.payload };
    case ActionType.GetNearbyOffers:
      return {...state, nearbyOffers: action.payload};
    case ActionType.GetReviews:
      return {...state, reviews: action.payload};
    default:
      return state;
  }
};

export {reducer};
