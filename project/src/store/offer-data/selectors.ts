import {State} from '../../types/state';
import {NameSpace} from '../../const';
import {Offer, Offers, Reviews} from '../../types/Offers';

export const getCurrentOffer = (state: State): Offer => state[NameSpace.Offer].currentOffer;
export const getNearbyOffers = (state: State): Offers => state[NameSpace.Offer].nearbyOffers;
export const getReviews = (state: State): Reviews => state[NameSpace.Offer].reviews;
