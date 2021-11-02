import {AuthorizationStatus, SortType} from '../const';
import {ThunkAction, ThunkDispatch} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {State} from '../types/state';
import {Offers} from '../types/Offers';

enum ActionType {
  SwitchCity = 'offers/switchCity',
  SwitchSort = 'sort/switchSort',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  OffersLoad = 'data/offersLoad',
  GetCurrentLogin = 'user/getCurrentLogin'
}

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

type Actions = SwitchCityAction | SwitchSortAction | RequireAuthorization | RequireLogout | OffersLoad | GetCurrentLogin;

export {ActionType};

export type {SwitchCityAction, Actions, SwitchSortAction, RequireAuthorization, RequireLogout, OffersLoad, GetCurrentLogin};

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
