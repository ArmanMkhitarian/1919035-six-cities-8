import {offersData} from '../../types/state';
import {Actions, ActionType} from '../action';
import {SortType} from '../../const';

const initialState: offersData = {
  currentCity: 'Paris',
  offers: [],
  currentSortType: SortType.Popular,
  isDataLoaded: false,
  favoritesOffer: [],
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
    default:
      return state;
  }
};

export {offersReducer};
