import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import Main from './main';
import {getOfferDataMock, getOffersDataMock, getOffersMock, getUserData} from '../../services/mocks';
import {cities} from '../../const';

const mockStore = configureMockStore();

describe('Component: MainScreen', () => {
  it('should render correctly when there is offers', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      offers: getOffersDataMock,
      offer: getOfferDataMock,
      user: getUserData,
    });
    const {getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <Main currentCity='Paris' cities={cities} offers={getOffersMock()} />
        </Router>
      </Provider>,
    );

    expect(getByText(new RegExp('2 places to stay in Paris', 'i'))).toBeInTheDocument();
  });
});

