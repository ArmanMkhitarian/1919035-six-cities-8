import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import CityList from './city-list';
import {cities} from '../../const';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {getOffersDataMock} from '../../services/mocks';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({
  offers: getOffersDataMock,
});

describe('City list', () => {
  it('should render "City-list"', () => {
    render (
      <Provider store={store}>
        <Router history={history}>
          <CityList cities={cities} />
        </Router>,
      </Provider>);
    expect(screen.getByText('Paris')).toBeInTheDocument();
    expect(screen.getByText('Cologne')).toBeInTheDocument();
    expect(screen.getByText('Brussels')).toBeInTheDocument();
    expect(screen.getByText('Amsterdam')).toBeInTheDocument();
    expect(screen.getByText('Hamburg')).toBeInTheDocument();
    expect(screen.getByText('Dusseldorf')).toBeInTheDocument();
  });
});
