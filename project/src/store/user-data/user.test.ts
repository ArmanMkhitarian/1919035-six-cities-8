import {AuthorizationStatus} from '../../const';
import {getCurrentLogin, requireAuthorization, requireLogout} from '../action';
import {userReducer} from './user-reducer';

const mockAuthorizationAuth = AuthorizationStatus.Auth;
const mockCurrentLogin = 'LoginName';

describe('Reducer: user-reducer', () => {
  it('should set user authorizationStatus/currentLogin', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      currentLogin: '',
    };

    expect(userReducer(state,requireAuthorization(mockAuthorizationAuth)))
      .toEqual({authorizationStatus: mockAuthorizationAuth, currentLogin: ''});

    expect(userReducer(state,requireLogout()))
      .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, currentLogin: ''});

    expect(userReducer(state,getCurrentLogin(mockCurrentLogin)))
      .toEqual({authorizationStatus: AuthorizationStatus.Unknown, currentLogin: mockCurrentLogin});
  });
});
