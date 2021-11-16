import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import FavoritesEmpty from './favorites-empty';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {getUserData} from '../../services/mocks';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({
  user: getUserData,
});

describe('Favorites-empty', () => {
  it('should render "Favorites-empty"', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesEmpty />
        </Router>,
      </Provider>);
    expect(screen.getByText(/Nothing yet saved/i)).toBeInTheDocument();
  });
});
