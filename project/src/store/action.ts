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
  OffersLoad = 'data/offersLoad'
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

export const changeCity = (city: string) => ({
  type: ActionType.SwitchCity,
  payload: city,
});

export const changeSort = (sort: SortType) => ({
  type: ActionType.SwitchSort,
  payload: sort,
});

export const offersLoad = (offers: Offers) => ({
  type: ActionType.OffersLoad,
  payload: offers,
});

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
});

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
});


type Actions = SwitchCityAction | SwitchSortAction | RequireAuthorization | RequireLogout | OffersLoad;

export {ActionType};

export type {SwitchCityAction, Actions, SwitchSortAction, RequireAuthorization, RequireLogout, OffersLoad};

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
