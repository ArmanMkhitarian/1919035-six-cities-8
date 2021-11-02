import {
  getCurrentLogin,
  offersLoad,
  requireAuthorization,
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

