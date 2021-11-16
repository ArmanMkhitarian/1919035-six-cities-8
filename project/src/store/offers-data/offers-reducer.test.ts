import {getOffersMock, getSort} from '../../services/mocks';
import {changeCity, changeSort, offersLoad, setFavoritesOffers} from '../action';
import {SortType} from '../../const';
import {offersReducer} from './offers-reducer';

const mockCurrentCity = 'Hamburg';
const mockOffers = getOffersMock();
const mockSort = getSort(SortType.TopRatedFirst);

describe('Reducer: offers-reducer', () => {
  it('should set offers currentCity/offers/currentSortType/isDataLoaded/favoritesOffer', () => {
    const state = {
      currentCity: 'Paris',
      offers: [],
      currentSortType: SortType.Popular,
      isDataLoaded: false,
      favoritesOffer: [],
    };

    expect(offersReducer(state,offersLoad(mockOffers)))
      .toEqual({currentCity: 'Paris', offers: mockOffers, currentSortType: SortType.Popular, isDataLoaded: true, favoritesOffer: []});

    expect(offersReducer(state,changeCity(mockCurrentCity)))
      .toEqual({currentCity: mockCurrentCity, offers: [], currentSortType: SortType.Popular, isDataLoaded: false, favoritesOffer: []});

    expect(offersReducer(state,changeSort(mockSort)))
      .toEqual({currentCity: 'Paris', offers: [], currentSortType: mockSort, isDataLoaded: false, favoritesOffer: []});

    expect(offersReducer(state,setFavoritesOffers(mockOffers)))
      .toEqual({currentCity: 'Paris', offers: [], currentSortType: SortType.Popular, isDataLoaded: false, favoritesOffer: mockOffers});
  });
});
