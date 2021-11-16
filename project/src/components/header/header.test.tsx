import { render, screen } from '@testing-library/react';
import Header from './header';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {getUserData} from '../../services/mocks';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({
  user: getUserData,
});

describe('Header page', () => {
  it('should render Header', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Header/>
        </Router>
      </Provider>);
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
