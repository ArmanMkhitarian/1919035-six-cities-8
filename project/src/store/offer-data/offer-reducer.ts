import {offerData} from '../../types/state';
import {Offer} from '../../types/Offers';
import {Actions, ActionType} from '../action';

const initialState: offerData = {
  currentOffer: {} as Offer,
  nearbyOffers: [],
  reviews: [],
};

const offerReducer = (state = initialState, action: Actions): offerData => {
  switch (action.type) {
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

export {offerReducer};
