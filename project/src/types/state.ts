import {Offers} from './Offers';
import {SortType} from '../const';

type State = {
  currentCity: string;
  offers: Offers;
  currentSortType: SortType;
};

export type {State};
