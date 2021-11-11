import {State} from '../../types/state';
import {AuthorizationStatus, NameSpace} from '../../const';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.user].authorizationStatus;
export const getCurrentLogin= (state: State): string | null => state[NameSpace.user].currentLogin;
