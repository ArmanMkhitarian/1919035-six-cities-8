import {
  getCurrentLogin, getCurrentOffer, getNearbyOffers, getReviews,
  offersLoad, postReviewAction, redirectToRouter,
  requireAuthorization,
  requireLogout, setFavoritesOffers,
  ThunkActionResult
} from './action';

import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {adaptToClient, adaptToReview, CommentPost, Offer, Reviews} from '../types/Offers';
import {dropToken, saveToken, Token} from '../services/token';
import {AuthData} from '../types/auth-data';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(offersLoad(data.map((item: unknown) => adaptToClient(item))));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then((response) => {
        if(response.data){
          dispatch(requireAuthorization(AuthorizationStatus.Auth));
          dispatch(getCurrentLogin(response.data.email));
        } else {
          dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
        }
      });
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(getCurrentLogin(email));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
    dispatch(getCurrentLogin(''));
  };

export const fetchOfferAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(APIRoute.Offer + id)
      .then((response) => {
        dispatch(getCurrentOffer(adaptToClient(response.data)));
      })
      .catch((error) => {
        dispatch(redirectToRouter(AppRoute.NotFound));
      });
  };

export const fetchNearByOffersAction = (id:string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
    dispatch(getNearbyOffers(data.map((item: unknown) => adaptToClient(item))));
  };

export const fetchCommentsAction = (id:string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Reviews>(`${APIRoute.Comments}/${id}`);
    dispatch(getReviews(data.map((item: unknown) => adaptToReview(item))));
  };

export const postCommentAction = ({offerId, comment, rating}:CommentPost): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.post<Reviews>(`${APIRoute.Comments}/${offerId}`, { comment, rating });
    dispatch(postReviewAction({ offerId, comment, rating }));
    dispatch(getReviews(data.map((item: unknown) => adaptToReview(item))));
  };


export const sendFavoriteOffer = (id: string, isFavorite: boolean): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const status = isFavorite ? 0 : 1;
    await api.post(`${APIRoute.Favorite}/${id}/${status}`);
    dispatch(fetchOffersAction());
    dispatch(getFavoriteOffers());
  };

export const getFavoriteOffers = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const { data } = await api.get(APIRoute.Favorite);
    //eslint-disable-next-line
    console.log('гетфаворите',data);
    dispatch(setFavoritesOffers(data.map((item: unknown) => adaptToClient(item))));
  };

