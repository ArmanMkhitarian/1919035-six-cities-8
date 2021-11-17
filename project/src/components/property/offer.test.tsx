import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {getOfferDataMock, getOffersDataMock, getOffersMock, getUserData} from '../../services/mocks';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Offer from './offer';
import {State} from '../../types/state';
import {Action, ThunkDispatch} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import thunk from 'redux-thunk';
import {createAPI} from '../../services/api';

const onFakeUnauthorized = jest.fn();
const api = createAPI(onFakeUnauthorized());
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  State,
  Action,
  ThunkDispatch<State, AxiosInstance, Action>
  >(middlewares);

const history = createMemoryHistory();
const store = mockStore({
  offer: getOfferDataMock,
  user: getUserData,
  offers: getOffersDataMock,
});

describe('Offer page', () => {
  it('should render Offer', () => {
    const offers = getOffersMock();
    render(
      <Provider store={store}>
        <Router history={history}>
          <Offer/>
        </Router>
      </Provider>);
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getAllByText(new RegExp(String(offers[0].price), 'i'))[0]).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });
});
