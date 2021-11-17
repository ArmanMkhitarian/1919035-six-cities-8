import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import {getOfferMock, getUserData} from '../../services/mocks';
import Card from './card';

const mockStore = configureMockStore();

describe('Component: Card', () => {
  const store = mockStore({
    user: getUserData,
  });

  it('should render correctly', () => {
    const history = createMemoryHistory();
    const offer = getOfferMock();

    const {getByAltText, getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <Card offer={offer} onActive={() => null}/>
        </Router>
      </Provider>,
    );

    expect(getByAltText(/Place image/i)).toBeInTheDocument();
    expect(getByText(new RegExp(String(offer.price), 'i'))).toBeInTheDocument();
    expect(getByText(new RegExp(offer.title, 'i'))).toBeInTheDocument();
  });
});
