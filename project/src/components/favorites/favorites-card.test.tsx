import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {getOfferMock, getUserData} from '../../services/mocks';
import FavoritesCard from './favorites-card';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({
  user: getUserData,
});

describe('Favorites-card', () => {
  it('should render "Favorites-card"', () => {
    const offer = getOfferMock();
    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesCard offer={offer} />
        </Router>,
      </Provider>);
    expect(screen.getByText(offer.title)).toBeInTheDocument();
    expect(screen.getByText(offer.cardType)).toBeInTheDocument();
  });
});
