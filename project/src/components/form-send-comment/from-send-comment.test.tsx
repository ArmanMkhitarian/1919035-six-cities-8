import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import FormSendComment from './form-send-comment';
import {getOfferDataMock, getOffersDataMock} from '../../services/mocks';

const mockStore = configureMockStore();
const store = mockStore({
  offer: getOfferDataMock,
  offers: getOffersDataMock,
});

describe('Component: FormSendComment', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <Router history={history}>
          <FormSendComment />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Your review/i)).toBeInTheDocument();
  });
});
