import {
  getCurrentLogin,
  getCurrentOffer,
  getNearbyOffers,
  getReviews,
  offersLoad,
  postDataStatusAction,
  postReviewAction,
  redirectToRouter,
  requireAuthorization,
  requireLogout,
  setFavoritesOffers,
  updateOffer,
  ThunkActionResult
} from './action';

import {APIRoute, AppRoute, AuthorizationStatus, DataStatus, ERROR_MESSAGE} from '../const';
import {adaptToClient, adaptToReview, CommentPost, Offer, Reviews} from '../types/Offers';
import {dropToken, saveToken, Token} from '../services/token';
import {AuthData} from '../types/auth-data';
import {toast} from 'react-toastify';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.get<Offer[]>(APIRoute.Offers)
      .then((response) => {
        dispatch(offersLoad(response.data.map((item: unknown) => adaptToClient(item))));
      })
      .catch(() => {
        toast.error(ERROR_MESSAGE);
      });
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
      })
      .catch(() => {
        toast.error(ERROR_MESSAGE);
      });
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.post<{token: Token}>(APIRoute.Login, {email, password})
      .then((response) => {
        saveToken(response.data.token);
        dispatch(getCurrentLogin(email));
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      })
      .catch(() => {
        toast.error(ERROR_MESSAGE);
      });
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireLogout());
      dispatch(getCurrentLogin(''));
    }
    catch {
      toast.error(ERROR_MESSAGE);
    }
  };

export const fetchOfferAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(APIRoute.Offer + id.replace(':', '').trim())
      .then((response) => {
        dispatch(getCurrentOffer(adaptToClient(response.data)));
      })
      .catch((error) => {
        dispatch(redirectToRouter(AppRoute.NotFound));
      });
  };

export const fetchNearByOffersAction = (id:string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.get<Offer[]>(`${APIRoute.Offers}/${id.replace(':', '').trim()}/nearby`)
      .then((response) => {
        dispatch(getNearbyOffers(response.data.map((item: unknown) => adaptToClient(item))));
      })
      .catch(() => {
        toast.error(ERROR_MESSAGE);
      });
  };

export const fetchCommentsAction = (id:string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.get<Reviews>(`${APIRoute.Comments}/${id.replace(':', '').trim()}`)
      .then((response) => {
        dispatch(getReviews(response.data.map((item: unknown) => adaptToReview(item))));
      })
      .catch(() => {
        toast.error(ERROR_MESSAGE);
      });
  };

export const postCommentAction = ({offerId, comment, rating}:CommentPost): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.post<Reviews>(`${APIRoute.Comments}/${offerId}`, { comment, rating })
      .then((response) => {
        dispatch(postReviewAction({ offerId, comment, rating }));
        dispatch(postDataStatusAction(DataStatus.IsSended));
        dispatch(getReviews(response.data.map((item: unknown) => adaptToReview(item))));
      })
      .catch(() => {
        toast.error(ERROR_MESSAGE);
        dispatch(postDataStatusAction(DataStatus.NotSended));
      });
  };


export const sendFavoriteOffer = (id: string, isFavorite: boolean): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const status = isFavorite ? 0 : 1;
    await api.post(`${APIRoute.Favorite}/${id}/${status}`)
      .then((response) => {
        dispatch(updateOffer(adaptToClient(response.data)));
      })
      .catch(() => {
        toast.error(ERROR_MESSAGE);
      });
  };

export const getFavoriteOffers = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Favorite)
      .then((response) => {
        dispatch(setFavoritesOffers(response.data.map((item: unknown) => adaptToClient(item))));
      })
      .catch(() => {
        toast.error(ERROR_MESSAGE);
      });
  };

