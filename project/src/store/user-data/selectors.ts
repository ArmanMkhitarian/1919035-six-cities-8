import {State} from '../../types/state';
import {AuthorizationStatus, NameSpace} from '../../const';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getCurrentLogin= (state: State): string | null => state[NameSpace.User].currentLogin;
export const getAvatarURL = (state: State): string => state[NameSpace.User].avatarURL;
