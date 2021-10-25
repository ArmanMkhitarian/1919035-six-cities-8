enum ActionType {
  SwitchCity = 'offers/switchCity',
}

type SwitchCityAction = {
  type: ActionType.SwitchCity;
  payload: string;
};


export const changeCity = (city: string) => ({
  type: ActionType.SwitchCity,
  payload: city,
});

type Actions = SwitchCityAction;

export {ActionType};

export type {SwitchCityAction, Actions};
