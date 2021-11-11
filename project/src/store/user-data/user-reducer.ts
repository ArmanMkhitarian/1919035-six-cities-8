import {userData} from '../../types/state';
import {AuthorizationStatus} from '../../const';
import {Actions, ActionType} from '../action';

const initialState: userData = {
  authorizationStatus: AuthorizationStatus.Unknown,
  currentLogin: '',
};

const userReducer = (state = initialState, action: Actions): userData => {
  switch (action.type) {
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    case ActionType.GetCurrentLogin:
      return {...state, currentLogin: action.payload};
    default:
      return state;
  }
};

export {userReducer};
