import {Actions, ActionType} from './action';
import {State} from '../types/state';
import {offers} from '../mocks/offers';
import {SortType} from '../const';

const initialState = {
  currentCity: 'Paris',
  offers: offers,
  currentSortType: SortType.Popular,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SwitchCity:
      return {...state, currentCity: action.payload};
    case ActionType.SwitchSort:
      return {...state, currentSortType: action.payload};
    default:
      return state;
  }
};

export {reducer};
