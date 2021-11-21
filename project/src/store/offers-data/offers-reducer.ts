import {offersData} from '../../types/state';
import {Actions, ActionType} from '../action';
import {DataStatus, SortType} from '../../const';
import {Offer} from '../../types/Offers';

const initialState: offersData = {
  currentCity: 'Paris',
  offers: [],
  currentSortType: SortType.Popular,
  isDataLoaded: false,
  favoritesOffer: [],
  postReview: {offerId: '', comment: '', rating: 0},
  postDataStatus: DataStatus.Default,
  updateOffer: {} as Offer,
};

const offersReducer = (state = initialState, action: Actions): offersData => {
  switch (action.type) {
    case ActionType.SwitchCity:
      return {...state, currentCity: action.payload};
    case ActionType.SwitchSort:
      return {...state, currentSortType: action.payload};
    case ActionType.OffersLoad:
      return {...state, offers: action.payload, isDataLoaded: true};
    case ActionType.SetFavoriteOffer:
      return {...state, favoritesOffer: action.payload};
    case ActionType.PostReview:
      return {...state, postReview: action.payload};
    case ActionType.PostDataStatus:
      return {...state, postDataStatus: action.payload};
    case ActionType.UpdateOffer:
      return {
        ...state,
        offers: state.offers.map((offer) => offer.id === action.payload.id ? action.payload : offer),
        favoritesOffer: state.favoritesOffer.filter((offer) => offer.id !== action.payload.id)};
    default:
      return state;
  }
};

export {offersReducer};
