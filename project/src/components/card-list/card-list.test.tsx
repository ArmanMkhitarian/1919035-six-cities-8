import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import CardList from './card-list';
import {getOffersMock, getUserData} from '../../services/mocks';


const mockStore = configureMockStore();

describe('Component: CardList', () => {
  it('should render as many CardList components as offers', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      user: getUserData,
    });
    const offers = getOffersMock();

    const {queryAllByAltText} = render(
      <Provider store={store}>
        <Router history={history}>
          <CardList offers={offers} onListItemHover={() => null}/>
        </Router>
      </Provider>,
    );

    expect(queryAllByAltText(/Place image/i).length).toBe(2);
  });
});
