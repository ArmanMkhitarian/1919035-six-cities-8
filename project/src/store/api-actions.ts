import {
  OffersLoad,
  offersLoad,
  RequireAuthorization,
  requireAuthorization, RequireLogout,
  requireLogout,
  ThunkActionResult
} from './action';

import {APIRoute, AuthorizationStatus} from '../const';
import {adaptToClient, Offer} from '../types/Offers';
import {dropToken, saveToken, Token} from '../services/token';
import {AuthData} from '../types/auth-data';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(offersLoad(data.map((item: unknown) => adaptToClient(item))) as OffersLoad);
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth) as RequireAuthorization);
      });
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth) as RequireAuthorization);
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout() as RequireLogout);
  };

