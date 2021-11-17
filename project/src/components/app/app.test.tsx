import {configureMockStore} from '@jedmao/redux-mock-store';
import {getOfferMock} from '../../services/mocks';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import App from './app';
import {AppRoute, AuthorizationStatus, SortType} from '../../const';
import {render, screen} from '@testing-library/react';

const mockStore = configureMockStore();
const store = mockStore({
  user: {currentLogin: 'asd@mail.ru', authorizationStatus: AuthorizationStatus.Auth},
  offers: {currentCity: 'Paris', offers: [], currentSortType: SortType.Popular, isDataLoaded: true, favoritesOffer: []},
  offer: {currentOffer: getOfferMock(), nearbyOffers: [], reviews: []},
});

const history = createMemoryHistory();
const fakeApp = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);


describe('Application Routing', () => {
  it('should render "FavoritesEmpty" when user navigate to "/favorites-empty"', () => {
    history.push(AppRoute.FavoritesEmpty);
    render(fakeApp);

    expect(screen.getByText(/Nothing yet saved./i)).toBeInTheDocument();
  });

  it('should render "Main" when user navigate to "/"', () => {
    history.push(AppRoute.Main);
    render(fakeApp);
    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
  });

  it('should render "Login" when user navigate to "/login"', () => {
    history.push(AppRoute.Login);
    render(fakeApp);
    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
  });

  it('should render "404 not found" when user navigate to "/notfound"', () => {
    history.push('/somethingRoute');
    render(fakeApp);
    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
  });
});
