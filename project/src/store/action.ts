import {SortType} from '../const';

enum ActionType {
  SwitchCity = 'offers/switchCity',
  SwitchSort = 'sort/switchSort'
}

type SwitchCityAction = {
  type: ActionType.SwitchCity;
  payload: string;
};

type SwitchSortAction = {
  type: ActionType.SwitchSort;
  payload: SortType;
};

export const changeCity = (city: string) => ({
  type: ActionType.SwitchCity,
  payload: city,
});

export const changeSort = (sort: SortType) => ({
  type: ActionType.SwitchSort,
  payload: sort,
});


type Actions = SwitchCityAction | SwitchSortAction;

export {ActionType};

export type {SwitchCityAction, Actions, SwitchSortAction};
