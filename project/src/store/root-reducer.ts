import {combineReducers} from 'redux';
import {offersReducer} from './offers-data/offers-reducer';
import {offerReducer} from './offer-data/offer-reducer';
import {userReducer} from './user-data/user-reducer';
import {NameSpace} from '../const';

export const rootReducer = combineReducers({
  [NameSpace.offers]: offersReducer,
  [NameSpace.offer]: offerReducer,
  [NameSpace.user]: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
