import { render, screen } from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {getOffersDataMock} from '../../services/mocks';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Sort from './sort';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({
  offers: getOffersDataMock,
});

describe('Sort', () => {
  it('should render Sort', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Sort/>
        </Router>
      </Provider>);
    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
  });
});
