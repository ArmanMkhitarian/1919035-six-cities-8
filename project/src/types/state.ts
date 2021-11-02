import {Offers} from './Offers';
import {AuthorizationStatus, SortType} from '../const';

type State = {
  currentCity: string;
  offers: Offers;
  currentSortType: SortType;
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  currentLogin: string | null,
};

export type {State};
