import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import Login from './login';
import {getUserData} from '../../services/mocks';

const mockStore = configureMockStore();

describe('Component: Login', () => {
  it('should render "Login"', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      user: getUserData,
    });

    history.push('/login');

    render(
      <Provider store={store}>
        <Router history={history}>
          <Login />
        </Router>
      </Provider>,
    );

    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Sign in/i)[0]).toBeInTheDocument();
  });
});
