import {configureMockStore} from '@jedmao/redux-mock-store';
import {AnyAction} from 'redux';
import {redirect} from './redirect';
import {AppRoute} from '../../const';
import {State} from '../../types/state';
import {redirectToRouter} from '../action';

const fakeHistory = {
  location: {pathname: ''},
  push(path: string) {
    this.location.pathname = path;
  },
};

jest.mock('../../browser-history', () => fakeHistory);

const middlewares = [redirect];
const mockStore = configureMockStore<State, AnyAction>(middlewares);
const store = mockStore();

describe('Middleware: redirect', () => {
  beforeEach(() => {
    fakeHistory.push('');
  });

  it('should be redirect to /NotFound', () => {
    store.dispatch(redirectToRouter(AppRoute.NotFound));
    expect(fakeHistory.location.pathname).toBe(AppRoute.NotFound);
    expect(store.getActions()).toEqual([
      redirectToRouter(AppRoute.NotFound),
    ]);
  });
});
