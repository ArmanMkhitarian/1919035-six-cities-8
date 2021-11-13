import {State} from '../../types/state';
import {NameSpace, SortType} from '../../const';
import {Offers} from '../../types/Offers';

export const getCurrentCity = (state: State): string => state[NameSpace.offers].currentCity;
export const getOffers = (state: State): Offers => state[NameSpace.offers].offers;
export const getCurrentSortType = (state: State): SortType => state[NameSpace.offers].currentSortType;
export const getDataLoaded = (state: State): boolean => state[NameSpace.offers].isDataLoaded;
export const getFavorites = (state: State): Offers => state[NameSpace.offers].favoritesOffer;
