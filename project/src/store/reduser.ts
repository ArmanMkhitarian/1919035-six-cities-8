import {Actions, ActionType} from './action';
import {State} from '../types/state';
import {offers} from '../mocks/offers';

const initialState = {
  currentCity: 'Paris',
  offers: offers,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SwitchCity:
      return {...state, currentCity: action.payload};
    default:
      return state;
  }
};

export {reducer};
