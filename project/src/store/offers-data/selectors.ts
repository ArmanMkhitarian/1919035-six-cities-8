import {State} from '../../types/state';
import {DataStatus, NameSpace, SortType} from '../../const';
import {CommentPost, Offers} from '../../types/Offers';
import {createSelector} from 'reselect';
import {ReselectType} from '../../types/types';

export const getCurrentCity = (state: State): string => state[NameSpace.Offers].currentCity;
export const getOffers = (state: State): Offers => state[NameSpace.Offers].offers;
export const getCurrentSortType = (state: State): SortType => state[NameSpace.Offers].currentSortType;
export const getDataLoaded = (state: State): boolean => state[NameSpace.Offers].isDataLoaded;
export const getFavorites = (state: State): Offers => state[NameSpace.Offers].favoritesOffer;
export const postReview = (state: State): CommentPost => state[NameSpace.Offers].postReview;
export const postDataStatus = (state: State): DataStatus => state[NameSpace.Offers].postDataStatus;
export const getOffersInSelectedCity = (selectedCity: string): ReselectType<Offers> => createSelector(getOffers, (offers) => (offers.filter((offer) =>  offer.city.name === selectedCity)));

