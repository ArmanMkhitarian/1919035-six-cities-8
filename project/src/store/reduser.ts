import {Actions, ActionType} from './action';
import {State} from '../types/state';
import {AuthorizationStatus, SortType} from '../const';

const initialState = {
  currentCity: 'Paris',
  offers: [],
  currentSortType: SortType.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
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
    default:
      return state;
  }
};

export {reducer};
