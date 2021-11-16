import {getOfferMock, getOffersMock, getReviewsMock} from '../../services/mocks';
import {offerReducer} from './offer-reducer';
import {Offer} from '../../types/Offers';
import {getCurrentOffer, getNearbyOffers, getReviews} from '../action';

const mockReviews = getReviewsMock();
const mockOffer = getOfferMock();
const mockNearbyOffers = getOffersMock();

describe('Reducer: offer-reducer', () => {
  it('should set offer reviews/currentOffer/nearbyOffers', () => {
    const state = {
      currentOffer: {} as Offer,
      nearbyOffers: [],
      reviews: [],
    };

    expect(offerReducer(state,getCurrentOffer(mockOffer)))
      .toEqual({currentOffer: mockOffer, nearbyOffers: [], reviews: [] });

    expect(offerReducer(state, getNearbyOffers(mockNearbyOffers)))
      .toEqual({currentOffer: {} as Offer,  nearbyOffers: mockNearbyOffers, reviews: [] });

    expect(offerReducer(state, getReviews(mockReviews)))
      .toEqual({currentOffer: {} as Offer,  nearbyOffers: [], reviews: mockReviews });
  });
});
