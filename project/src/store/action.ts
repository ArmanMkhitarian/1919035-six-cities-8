import {AuthorizationStatus, DataStatus, SortType} from '../const';
import {ThunkAction, ThunkDispatch} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {State} from '../types/state';
import {Reviews, Offer, Offers, CommentPost} from '../types/Offers';


enum ActionType {
  SwitchCity = 'offers/switchCity',
  SwitchSort = 'sort/switchSort',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  OffersLoad = 'data/offersLoad',
  GetCurrentLogin = 'user/getCurrentLogin',
  GetCurrentOffer = 'data/getCurrentOffer',
  RedirectToRoute = 'user/redirectToRoute',
  GetNearbyOffers = 'data/getNearbyOffers',
  GetReviews = 'data/getReviews',
  PostReview = 'data/postReview',
  SetFavoriteOffer = 'data/setFavoriteOffer',
  PostDataStatus = 'data/dataStatus',
  UpdateOffer = 'data/updateOffer',
}

type UpdateOfferAction = {
  type: ActionType.UpdateOffer;
  payload: Offer;
};

type SwitchCityAction = {
  type: ActionType.SwitchCity;
  payload: string;
};

type SwitchSortAction = {
  type: ActionType.SwitchSort;
  payload: SortType;
};

type RequireAuthorization = {
  type: ActionType.RequireAuthorization;
  payload: AuthorizationStatus;
};

type RequireLogout = {
  type: ActionType.RequireLogout;
};

type OffersLoad = {
  type: ActionType.OffersLoad,
  payload: Offers,
}

type GetCurrentLogin = {
  type: ActionType.GetCurrentLogin,
  payload: string,
}

type GetCurrentOffer = {
  type: ActionType.GetCurrentOffer,
  payload: Offer
}

type RedirectToRoute = {
  type: ActionType.RedirectToRoute,
  payload: string,
}

type GetNearbyOffersAction = {
  type: ActionType.GetNearbyOffers;
  payload: Offers;
};

type GetReviewsAction = {
  type: ActionType.GetReviews;
  payload: Reviews
}

type PostReviewAction = {
  type: ActionType.PostReview,
  payload: CommentPost
}

type SetFavoriteOfferAction = {
  type: ActionType.SetFavoriteOffer,
  payload: Offers
}

type PostDataStatusAction = {
  type: ActionType.PostDataStatus,
  payload: DataStatus,
}

export const updateOffer = (offer: Offer) : UpdateOfferAction => ({
  type: ActionType.UpdateOffer,
  payload: offer,
});

export const changeCity = (city: string) : SwitchCityAction => ({
  type: ActionType.SwitchCity,
  payload: city,
});

export const changeSort = (sort: SortType) : SwitchSortAction => ({
  type: ActionType.SwitchSort,
  payload: sort,
});

export const offersLoad = (offers: Offers) : OffersLoad => ({
  type: ActionType.OffersLoad,
  payload: offers,
});

export const requireAuthorization = (authStatus: AuthorizationStatus) : RequireAuthorization => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
});

export const requireLogout = () : RequireLogout => ({
  type: ActionType.RequireLogout,
});

export const getCurrentLogin = (currentLogin: string) : GetCurrentLogin => ({
  type: ActionType.GetCurrentLogin,
  payload: currentLogin,
});

export const getCurrentOffer = (currentOffer: Offer) : GetCurrentOffer => ({
  type: ActionType.GetCurrentOffer,
  payload: currentOffer,
});

export const redirectToRouter = (url: string) : RedirectToRoute => ({
  type: ActionType.RedirectToRoute,
  payload: url,
});

export const getNearbyOffers = (offers: Offers) : GetNearbyOffersAction => ({
  type: ActionType.GetNearbyOffers,
  payload: offers,
});

export const getReviews= (reviews: Reviews) : GetReviewsAction => ({
  type: ActionType.GetReviews,
  payload: reviews,
});

export const postReviewAction = (comment: CommentPost) : PostReviewAction => ({
  type: ActionType.PostReview,
  payload: comment,
});

export const setFavoritesOffers = (offers: Offers) : SetFavoriteOfferAction => ({
  type: ActionType.SetFavoriteOffer,
  payload: offers,
});

export const postDataStatusAction = (dataStatus: DataStatus) : PostDataStatusAction => ({
  type: ActionType.PostDataStatus,
  payload: dataStatus,
});

type Actions = SwitchCityAction | SwitchSortAction | RequireAuthorization | RequireLogout | OffersLoad | GetCurrentLogin | GetCurrentOffer | RedirectToRoute | GetNearbyOffersAction | GetReviewsAction | PostReviewAction | SetFavoriteOfferAction | PostDataStatusAction | UpdateOfferAction;

export {ActionType};

export type {SwitchCityAction, Actions, SwitchSortAction, RequireAuthorization, RequireLogout, OffersLoad, GetCurrentLogin};

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
